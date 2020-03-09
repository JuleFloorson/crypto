import './coins.scss';
import { createElement, appendContent } from '../lib/dom';

export function createCoins(allCoins) {
  const container = createElement('div', {
    className: 'coinsContainer'
  });

  allCoins.forEach(coin => {
    const output = createElement('div', {
      className: 'output',
      innerText: coin.name
    });
    appendContent(container, output);
  });
  return container;
}
