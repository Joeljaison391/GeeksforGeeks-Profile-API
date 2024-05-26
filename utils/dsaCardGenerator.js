const { createCanvas, loadImage } = require('canvas');

const createDSACard = async (profile) => {
    console.log('Creating DSA card for', profile.name);
    const width = 1000;
    const height = 400;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Create a blurred background layer with gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(1, '#e6e6e6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw the card border
    ctx.strokeStyle = '#cccccc';
    ctx.strokeRect(0, 0, width, height);

    let profilePic;
    if (profile.profilePicture) {
        profilePic = await loadImage(profile.profilePicture);
    } else {
        const firstLetter = profile.name.charAt(0).toUpperCase();
        ctx.fillStyle = '#cccccc';
        ctx.fillRect(50, 50, 100, 100);
        ctx.fillStyle = '#666666';
        ctx.font = 'bold 60px Arial';
        ctx.fillText(firstLetter, 70, 120);
    }

    if (profilePic) {
        ctx.drawImage(profilePic, 50, 50, 100, 100);
    }

    ctx.fillStyle = '#333333';
    ctx.font = 'bold 24px Arial';
    ctx.fillText(`Name: ${profile.name}`, 200, 100);
    ctx.fillText(`Rank: ${profile.rank}`, 200, 140);
    ctx.fillText(`College: ${profile.institution}`, 200, 180);
    ctx.fillText(`Coding Score: ${profile.overallScore}`, 200, 220);
    ctx.fillText(`Total Problems Solved: ${profile.solvedProblemsCount}`, 200, 260);

    const buffer = canvas.toBuffer('image/png');
    return buffer;
};

const createEmbeddableCardHTML = (profile) => {
    let profileImg;
    if (profile.profilePicture) {
        profileImg = profile.profilePicture;
    } else {
        const firstLetter = profile.name.charAt(0).toUpperCase();
        profileImg = `https://via.placeholder.com/100x100?text=${firstLetter}`;
    }

    return `
      <div style="border: 2px solid #cccccc; padding: 20px; width: 800px; font-family: Arial; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-bottom: 20px;">
        <img src="${profileImg}" alt="${profile.name}" style="float: left; width: 100px; height: 100px; margin-right: 20px; border-radius: 50%;">
        <div style="margin-top: 20px;">
          <h2 style="margin-bottom: 10px;">${profile.name}</h2>
          <p><strong>Rank:</strong> ${profile.rank}</p>
          <p><strong>College:</strong> ${profile.institution}</p>
          <p><strong>Coding Score:</strong> ${profile.overallScore}</p>
          <p><strong>Total Problems Solved:</strong> ${profile.solvedProblemsCount}</p>
        </div>
      </div>
    `;
};

module.exports = { createDSACard, createEmbeddableCardHTML };
