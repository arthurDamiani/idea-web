export const load = (language: string) => {
  let locale = null;

  if (language === 'pt-BR') {
    locale = require('../locale/pt-BR.json');
  }

  //concat objects
  return locale;
};

export default load
