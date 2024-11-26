export const author = (str) => str.slice(2, str.length);

export const strToUpperCase = (str) => {
  const words = str.split(' ');
  const result = words.map(word => ` ${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`);
return result;
}
