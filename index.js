import axios from 'axios';

const getBalance = async (walletAddress) => {
  try {
    const response = await axios.post(
      "https://rpc-mainnet.solanatracker.io/?api_key=274c31f9-6bef-43a0-a9d6-929cd97bc26d",
      {
        jsonrpc: "2.0",
        id: 1,
        method: "getSignaturesForAddress",
        params: [walletAddress],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error fetching balance:", error.message);
  }
};

// Call function with a test wallet address
getBalance("82EJRQK4vvBjtpjNkfctFVaRR145L5t3b5VVRPogxzUx");
