export const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;

export const FIVE = 5;

export const SIX = 6;

export const TWELVE = 12;

export const URLS = {
  foods: {
    ingredient: (ingredient) => (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`),
    name: (nome) => (`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`),
    'first-letter': (firstLetter) => (`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`),
    default: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    category: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    categorySelected: (category) => (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`),
    randomRecipe: 'https://www.themealdb.com/api/json/v1/1/random.php',
  },
  drinks: {
    ingredient: (ingredient) => (`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`),
    name: (nome) => (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`),
    'first-letter': (firstLetter) => (`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`),
    default: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    category: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    categorySelected: (category) => (
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`),
    randomRecipe: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  },
};
