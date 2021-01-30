/*
 * I've been adding reversed descriptions to my spotify playlists for a while no for no reason but I think it's fun.
 * For longer descriptions this is nice to use.
 */

const str =
  'expand explode explain express exponential no expectations experience';

const strArray = str.split('');
const len = strArray.length;
for (let i = 0; i < Math.floor(len / 2); i++) {
  const temp = strArray[i];
  strArray[i] = strArray[len - 1 - i];
  strArray[len - 1 - i] = temp;
}

console.log(strArray.join(''));
