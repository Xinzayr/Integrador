import ApiClient from './apiClient';

const twitterClient = new ApiClient('https://api.twitter.com/2');

export const getTweets = async () => {
  return twitterClient.get('/tweets');
};