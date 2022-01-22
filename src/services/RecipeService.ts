import axios from 'axios';

async function RecipeService(): Promise<unknown> {
  const API_KEY = '2a554d8ba47b48efa3545bdc781c3e1f';
  const getRandomRecipe = 'https://api.spoonacular.com/recipes/random'; 

  const recipe = await axios.get(`${getRandomRecipe}?apiKey=${API_KEY}`);

  return recipe.data;
}

export default RecipeService;

