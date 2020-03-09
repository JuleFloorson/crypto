import { createCoins } from '../components/coins';
//import { createElement, appendContent } from './dom';

function waitFor(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

export async function getData() {
  //await the response of the fetch call
  await waitFor(2000);
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/list?limit=5'
  );
  //proceed once the first promise is resolved.
  const data = await response.json();
  //proceed only when the second promise is resolved
  const results = createCoins(data);

  return results;
}

// getData().then(results => console.log(results));
