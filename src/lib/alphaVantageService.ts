import ApiClient from './apiClient';

const alphaVantageClient = new ApiClient('https://www.alphavantage.co');

export const getStockData = async (symbol: string) => {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

  if (!apiKey) {
    throw new Error('API key for Alpha Vantage is not defined');
  }

  if (!symbol) {
    throw new Error('Symbol is not defined');
  }

  return alphaVantageClient.get('/query', {
    function: 'TIME_SERIES_DAILY',
    symbol,
    apikey: apiKey,
  });
};