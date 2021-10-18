import { FC, ReactNode } from 'react';

interface Props
{
    text: string,
    searchTerm: string,
    color?: string,
}

export const Highlight : FC<Props> = ({ text, searchTerm, color }) => 
{
    const removeHtmlTags = (text : string) : string => text.replace( /(<([^>]+)>)/ig, '')
    const newText = removeHtmlTags(text).replaceAll(new RegExp(searchTerm, 'ig'), 
        oldText => `<span style="color :${color ?? 'red'}">${oldText}</span>`)

    return <div dangerouslySetInnerHTML={{__html: newText}}></div>

};

// interface Proops
// {
//     value : string
//     onChange : (value : string) => void
//     className? : string
//     placeholder?: string
//     rerender? : (value : string) => ReactNode
// }

// const MyInput : FC<Proops> = ({value, onChange, className, placeholder, rerender}) =>
// {
//     const firstRender : boolean

//     return <>
//         { rerender ? {rerender()} : 
//           { firstRender ? <div onChange=()>{placeholder}</div> : <div>{value}</div>}
//         }
//     </>
// }