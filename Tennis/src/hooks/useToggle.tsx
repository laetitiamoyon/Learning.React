import {useState} from 'react';
import React, {useState} from 'react';

const UseToggle = (initial= false) =>
{
    const [value, setValue] = useState(initial)
    const toggle = () => setValue(!value)

    return [value, toggle]
};

export default UseToggle;