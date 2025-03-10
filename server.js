import axios from 'axios';

const API_KEY = 'ca215def-b2d8-4f89-9333-71044e92e71e';
const WALLET_ADDRESS = 'BKGiGcJPFgPahLMTGM2o9pd4jQRHgSm7W8roSjqsAk3P';
const BASE_URL = 'https://data.solanatracker.io';

// Function to introduce a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Function to fetch PnL with a given period
async function fetchPnL(period) {
  try {
    const response = await axios.get(`${BASE_URL}/pnl/${WALLET_ADDRESS}`, {
      headers: {
        'x-api-key': API_KEY,
      },
      params: {
        showHistoricPnL: true, // Enables historical PnL data
        holdingCheck: true,    // Verifies current holdings
        hideDetails: false,    // Shows full details
        period: period         // Specifies the time period (e.g., "1d", "2d", "30d")
      },
    });
    // console.log(`PnL Data for ${period}:`, response.data);
    console.log(response.data);
  } catch (error) {
    console.error(`Error fetching PnL data for ${period}:`, error);
  }
}

// Function to fetch PnL for multiple periods with a delay
async function fetchPnLWithDelay(periods) {
  for (const period of periods) {
    await fetchPnL(period);
    console.log(`Waiting for 2 seconds before the next request...`);
    await delay(2000); // Wait 2 seconds before the next request
  }
}

// Define the periods you want to fetch
const periods = ['1d', '2d', '7d', '30d']; 

// Start fetching PnL for the specified periods
fetchPnLWithDelay(periods);
