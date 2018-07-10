import { JSDOM } from 'jsdom';
import { format } from 'date-fns';
import raf from 'raf';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = document.defaultView;

if (!window.requestAnimationFrame) window.requestAnimationFrame = raf;

Object.keys(window).forEach(key => {
  if (!(key in global)) global[key] = window[key];
});

console.log(`[${format(new Date(), 'HH:mm:ss')}]`);
