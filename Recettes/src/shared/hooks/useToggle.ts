import {useState} from 'react'

const useToggle = (initialValue : boolean = true) =>
{
	const [value, setValue] = useState<boolean>(initialValue)
	const toggle = () : void => setValue(!value)
	
	return [value, toggle] as const
}

export default useToggle