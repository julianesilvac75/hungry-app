export const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;

export const SIX = 6;

export const TWELVE = 12;

export const URLS = {
  foods: {
    ingredient: (ingredient) => (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`),
    name: (nome) => (`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`),
    'first-letter': (firstLetter) => (`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`),
    default: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  },
  drinks: {
    ingredient: (ingredient) => (`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`),
    name: (nome) => (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`),
    'first-letter': (firstLetter) => (`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`),
    default: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  },
};
