# GeeksforGeeks Profile API

This project provides an API to fetch profile details of users on GeeksforGeeks. It allows you to retrieve information such as name, username, profile picture, rank, scores, institution, and the number of problems solved. Additionally, you can generate and download a DSA card for a given user.

## Table of Contents
- [Overview](#overview)
- [API Documentation](#api-documentation)
- [Usage](#usage)
- [Rate Limits](#rate-limits)
- [Contact](#contact)

## Overview

The GeeksforGeeks Profile API allows you to fetch detailed profile information of users on GeeksforGeeks. You can retrieve data including the user's name, username, institution, coding scores, and more. The API also supports generating a visual DSA card that summarizes the user's profile details.

## API Documentation

### Endpoints

**Endpoint:** `https://gfg-api-5636a15dd742.herokuapp.com/api/profile/:username`  
**Method:** `GET`  
**Params:** `username` - The username of the GeeksforGeeks user whose profile you want to fetch.  
**Response:** JSON containing profile details.

#### Sample Response
```json
{
  "name": "joeljaison394",
  "username": "joeljaison394",
  "institution": "Sahrdaya College of Engineering and Technology (SCET) Thrissur",
  "languages": "Java, C++, Javascript",
  "rank": "3",
  "overallScore": "334",
  "solvedProblemsCount": "97",
  "longestStreak": "28/1028",
  "monthlyScore": "__",
  "totalSubmissions": 0,
  "solvedProblems": [
    {
      "question": "Occurence of an integer in a Linked List",
      "link": "https://www.geeksforgeeks.org/problems/occurence-of-an-integer-in-a-linked-list/0"
    },
    {
      "question": "Finding middle element in a linked list",
      "link": "https://www.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/0"
    }
  ]
}

```
### Usage

#### Get Profile

To fetch the profile details of a user, send a GET request to the `/api/profile/:username` endpoint with the desired username.

#### Generate DSA Card

You can generate a visual DSA card for a given user, which includes their profile picture, rank, institution, and other details.

#### Download DSA Card as Image

The DSA card can be downloaded as an image using the provided functionality on the web interface.

### Rate Limits

Currently, there are no rate limits imposed on the API. However, it is recommended to use the API responsibly and avoid making excessive requests in a short period.

### Contact

For any queries or support, please contact the project maintainer:

**Joel Jaison**

GitHub: [Joeljaison391](https://github.com/Joeljaison391)  
Made with ❤️ by Joel Jaison.

