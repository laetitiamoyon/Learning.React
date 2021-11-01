import { FC } from 'react';

interface Props
{
    text: string,
    searchTerm: string,
    color?: string,
}

export const Highlight : FC<Props> = ({ text, searchTerm, color }) => 
{
    const removeHtmlTags = (text : string) : string => text.replace( /(<([^>]+)>)/ig, '')
    const newText = removeHtmlTags(text).replace(new RegExp(searchTerm, 'ig'), 
        oldText => `<span style="color :${color ?? 'red'}">${oldText}</span>`)

    return <div dangerouslySetInnerHTML={{__html: newText}}></div>

};