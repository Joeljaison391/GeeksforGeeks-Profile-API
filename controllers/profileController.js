const scraper = require('../utils/scraper');
const { createDSACard, createEmbeddableCardHTML } = require('../utils/dsaCardGenerator');
const { uploadImage } = require('../utils/cloudinary');

const getProfile = async (req, res) => {
  const { username } = req.params;
  try {
    const profile = await scraper.scrapeProfile(username);
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch profile data' });
  }
};

const getDSACard = async (req, res) => {
  const { username } = req.params;
  console.log('Generating DSA card for', username);
  const { format } = req.query; 
  try {
    const profile = await scraper.scrapeProfile(username);

    if (format === 'html') {
        console.log('Creating embeddable HTML');
      const embeddableHTML = createEmbeddableCardHTML(profile);
      res.send(embeddableHTML);
    } else {
        console.log('Creating image buffer');
      const cardImageBuffer = await createDSACard(profile);
      console.log('Uploading image to Cloudinary');
      const imageUrl = await uploadImage(cardImageBuffer);
      console.log('Image uploaded to Cloudinary:', imageUrl);
      res.json({ imageUrl });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate DSA card' });
  }
};

module.exports = { getProfile, getDSACard };
