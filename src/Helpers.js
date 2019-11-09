  export const CreatedDate = (str) => str.slice(0,10);

  export const Author = (str) => str.slice(2, str.length);

  export const StrToUpperCase = (str) => {
    const words = str.split(' ');
    const result = words.map(word => ` ${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`);
  return result;
  }
