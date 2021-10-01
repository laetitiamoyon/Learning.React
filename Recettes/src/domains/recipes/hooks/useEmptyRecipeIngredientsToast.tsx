

import { RecipeContext } from '../recipes.context';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const useEmptyRecipeIngredientsToast = () =>
{
  const { recipesState : { infoMessage } } = useContext(RecipeContext)

  if (infoMessage !== null)
    toast(infoMessage)
}

export default useEmptyRecipeIngredientsToast;
