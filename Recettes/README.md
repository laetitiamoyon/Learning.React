App
- user (variable d'état) => besoin d'un état pour savoir si l'utilisateur est connecté

LoginForm
- < onConnect

Site
- page
- ingredients
- recipes
- curentRecipe

Recipes
- > recipes

RecipeDetail
- > id 
- > recipe

RecipeEditForm
- > recipe
- < onSubmit(recipe, newRecipe)
- > ingredients

Ingredients
- > ingredients
- < onUpdate(ingredient, newIngredient)
- < onDelete(ingredient)
- < onCreate(ingredient)

RecipeCreateForm
- < onSubmit(newRecipe)
- > ingredients



< = remonter de l'info
> = descendre de l'info
