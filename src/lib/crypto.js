import { createCoins } from './src/components/coins';

export async function getData() {
  //await the response of the fetch call
  const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
  //proceed once the first promise is resolved.
  const data = await response.json();
  //proceed only when the second promise is resolved
  const results = createCoins(data);

  return results;
}

// getData().then(results => console.log(results));
