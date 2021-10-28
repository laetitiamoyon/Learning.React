import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectInformationMessage } from '../recipes.selector';
import { toast } from 'react-toastify';

export const useInformationMessage = () =>
{
  const informationMessage = useSelector(selectInformationMessage)

  useEffect(() => 
  {
    if (informationMessage)
      toast.error(informationMessage);
  }, [informationMessage])
}