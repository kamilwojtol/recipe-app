import axios from 'axios';
import { Recipes } from '@/interfaces/RecipeInterfaces';

export class RecipeService {
  static async getRandomRecipe(): Promise<Recipes> {
    const API_KEY = '2a554d8ba47b48efa3545bdc781c3e1f';
    const GET_RANDOM_RECIPE = 'https://api.spoonacular.com/recipes/random'; 
  
    const recipe = await axios.get(`${GET_RANDOM_RECIPE}?apiKey=${API_KEY}`);
  
    return recipe.data;
  }
}