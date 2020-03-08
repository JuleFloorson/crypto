import { createElement, appendContent } from './lib/dom';
import './app.scss';
import companylogo from './picture/logo.png';

export function app() {
  const header = createElement('header', { className: 'header' });
  const logoImage = createElement('img', {
    className: 'logoImage',
    src: companylogo
  });
  const main = createElement('main', { className: 'main' });

  const allCoins = ['Bitcoin', 'Etherium', 'Litecoin', 'Dash'];

  const button = createElement('btn', { className: 'button' });
  const stripeOne = createElement('div', { className: 'stripeOne' });
  const stripeTwo = createElement('div', { className: 'stripeTwo' });
  const stripeThree = createElement('div', { className: 'stripeThree' });

  allCoins.forEach(coin => {
    const output = createElement('div', {
      className: 'output',
      innerText: coin
    });
    appendContent(main, output);
  });

  appendContent(header, [logoImage, button]);
  appendContent(button, [stripeOne, stripeTwo, stripeThree]);

  return [header, main];
}
