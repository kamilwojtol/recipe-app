export interface Recipes {
    recipes: Array<Recipe>
}

export interface Recipe {
    vegetarian: boolean,
    vegan: boolean,
    glutenFree: boolean,
    dairyFree: boolean,
    veryHealthy: boolean,
    cheap: boolean,
    veryPopular: boolean,
    sustainable: boolean,
    weightWatcherSmartPoints: number,
    gaps: string,
    lowFodmap: boolean,
    aggregateLikes: number,
    spoonacularScore: number,
    healthScore: number,
    creditsText: string,
    license: string,
    sourceName: string,
    pricePerServing: number,
    extendedIngredients: Array<Ingredients>,
    id: number,
    title: string,
    readyInMinutes: number,
    servings: number,
    sourceUrl: string,
    image: string,
    imageType: string,
    summary: string,
    cuisines?: Array<string>,
    dishTypes?: Array<string>,
    diets?: Array<string>,
    occasions?: Array<string>,
    instructions?: string,
    analyzedInstructions: unknown,
    originalId?: number,
    spoonacularSourceUrl: string
}

export interface Ingredients {
    id: number,
    aisle: string,
    image: string,
    consistency: string,
    name: string,
    nameClean: string,
    original: string,
    originalName: string,
    amount: number,
    unit: string,
    meta?: Array<any>,
    measures: unknown
}