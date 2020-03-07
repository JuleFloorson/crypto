import { createElement, appendContent } from './lib/dom';
import './app.scss';
import companylogo from './picture/logo.png';

export function app() {
  const header = createElement('header', { className: 'header' });
  const logoImage = createElement('img', {
    className: 'logoimage',
    src: companylogo
  });
  const button = createElement('btn', { className: 'button' });
  const stripeOne = createElement('div', { className: 'stripeone' });
  const stripeTwo = createElement('div', { className: 'stripetwo' });
  const stripeThree = createElement('div', { className: 'stripethree' });
  appendContent(header, [logoImage, button]);
  appendContent(button, [stripeOne, stripeTwo, stripeThree]);
  return [header];
}
