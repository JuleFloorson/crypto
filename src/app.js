import { createElement, appendContent } from './lib/dom';
import './app.scss';
import companylogo from './picture/logo.png';
// import { createCoins } from './components/coins';
import { getData } from './lib/crypto';

export function app() {
  const header = createElement('header', { className: 'header' });
  const logoImage = createElement('img', {
    className: 'logoImage',
    src: companylogo
  });
  const main = createElement('main', { className: 'main' });

  const button = createElement('btn', { className: 'button' });
  const stripeOne = createElement('div', { className: 'stripeOne' });
  const stripeTwo = createElement('div', { className: 'stripeTwo' });
  const stripeThree = createElement('div', { className: 'stripeThree' });
  //   const allCoins = ['Bitcoin', 'Etherium', 'Litecoin', 'Dash'];

  //   const coins = createCoins(allCoins);
  async function outputCoin() {
    const loading = createElement('div', {
      innerText: 'Loading...',
      className: 'loading'
    });
    appendContent(main, loading);

    const coins = await getData();
    appendContent(main, coins);
    main.removeChild(loading);
  }

  outputCoin();

  appendContent(header, [logoImage, button]);
  appendContent(button, [stripeOne, stripeTwo, stripeThree]);

  return [header, main];
}
