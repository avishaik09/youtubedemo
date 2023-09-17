
const GOOGLE_API_KEY = "AIzaSyBy9WFrraEKGoYuYkVqRwy1s8QfG8-IPO0";


const YOUTUBE_API=" https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

 const VIDEO_API= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=`+GOOGLE_API_KEY; 
 const YOUTUBE_SEARCH_API =
 "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export {VIDEO_API,YOUTUBE_API,YOUTUBE_SEARCH_API }


