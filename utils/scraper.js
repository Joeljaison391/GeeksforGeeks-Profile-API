const axios = require('axios');
const cheerio = require('cheerio');

const scrapeProfile = async (username) => {
  const url = `https://www.geeksforgeeks.org/user/${username}/`;
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const name = $('.profilePicSection_head_userHandleAndFollowBtnContainer_userHandle__p7sDO').text().trim();
    const institution = $('.educationDetails_head_left--text__tgi9I').text().trim();
    const languages = $('.educationDetails_head_right--text__lLOHI').text().trim();
    const longestStreak = $('.circularProgressBar_head_mid_streakCnt__MFOF1').text().trim();
    const rank = $('.profilePicSection_head_userRankContainer_rank__abngM').text().trim();

    const scoreCards = $('.scoreCards_head__G_uNQ');

    const overallCodingScoreElement = scoreCards.find('.scoreCard_head_card_left--text__hs9G4:contains("Overall Coding Score")').next('.scoreCard_head_card_left--score__pC6ZA');
    const overallScore = overallCodingScoreElement.text().trim();

    const totalProblemsSolvedElement = scoreCards.find('.scoreCard_head_card_left--text__hs9G4:contains("Total Problem Solved")').next('.scoreCard_head_card_left--score__pC6ZA');
    const solvedProblemsCount = totalProblemsSolvedElement.text().trim();

    const monthlyCodingScoreElement = scoreCards.find('.scoreCard_head_card_left--text__hs9G4:contains("Monthly Coding Score")').next('.scoreCard_head_card_left--score__pC6ZA');
    const monthlyScore = monthlyCodingScoreElement.text().trim();

    const submissionsText = $('.heatMapHeader_head_left__URMdZ').text().trim();
    const totalSubmissions = parseInt(submissionsText.match(/\d+/)[0]);
    const imageUrlElement = $('.profilePicSection_head_img__1GLm0 img');
const profileImg = imageUrlElement.length > 0 ? imageUrlElement.attr('src') : 'No image available';


    const solvedProblems = [];

    $('.problemList_head_list_item__RlO_s').each((_, element) => {
      const question = $(element).find('.problemList_head_list_item_link__dhmtd').text().trim();
      const link = $(element).find('.problemList_head_list_item_link__dhmtd').attr('href');
      solvedProblems.push({ question, link });
    });

    return {
      name,
      username,
      institution,
      languages,
      rank,
      overallScore,
      solvedProblemsCount,
      longestStreak,
      monthlyScore,
      totalSubmissions,
      solvedProblems,
      profileImg
    };
  } catch (error) {
    console.error('Error scraping profile:', error);
    return null;
  }
};

module.exports = { scrapeProfile };
