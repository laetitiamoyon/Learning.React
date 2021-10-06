

import { RecipeContext } from '../recipes.context';
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

const useEmptyRecipeIngredientsToast = () =>
{
  const { recipesState : { infoMessage } } = useContext(RecipeContext)

  useEffect(() => 
  {
    if (infoMessage !== null)
      toast.error(infoMessage);
  }, [infoMessage])
}

export default useEmptyRecipeIngredientsToast;
