const origin = "https://deep-index.moralis.io";
const apiKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImRkYjRhOTI4LWI3ZTEtNDM5My04Yzc0LTk0ZjJjZDVjMmM5YyIsIm9yZ0lkIjoiMzcxODMyIiwidXNlcklkIjoiMzgyMTM1IiwidHlwZUlkIjoiZTg4NmRmMjItODQ1YS00MmU2LTgyZDItNGJmZDE1MWY3ZDEzIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDUwMTI3NDMsImV4cCI6NDg2MDc3Mjc0M30.7JRYEZNfb9GTE2ytybLZ86MHzNnlmKnD0CirhcNe_kc";

// tokenAddress should more accurately be seen as contractAddress
export const getContractNFTs = async (tokenAddress) => {
    const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
    url.searchParams.append("chain", "eth");
    url.searchParams.append("format", "decimal");
    url.searchParams.append("limit", "20");
  
  
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    return response.json();
  };
  
  
  export const getContractTrades = async (tokenAddress) => {
    const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
    url.searchParams.append("chain", "eth");
    url.searchParams.append("marketplace", "opensea");
    url.searchParams.append("limit", "20");
  
  
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    return response.json();
  };
  
  
  export const getNFTTransfers = async (tokenAddress, tokenId) => {
    const url = new URL(
      `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
    );
    url.searchParams.append("chain", "eth");
    url.searchParams.append("format", "decimal");
    url.searchParams.append("limit", "20");
  
  
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    return response.json();
  };
  