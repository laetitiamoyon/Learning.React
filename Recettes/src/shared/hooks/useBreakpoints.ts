import {useScreenSize} from "./useScreenSize";

interface Breakpoints
{
  smOrBelow : boolean,
  
	sm : boolean,

	smOrAbove : boolean,
}

const smWidth = 600;

export const useBreakpoints = () : Breakpoints =>
{
	const { width : screenWidth } = useScreenSize()
	
  return {
		smOrBelow : screenWidth <= smWidth,
		
		sm : screenWidth <= smWidth,
		
		smOrAbove : screenWidth >= smWidth,

	} as const
}