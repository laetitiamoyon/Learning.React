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

    const newText = removeHtmlTags(text).replaceAll(
        new RegExp(searchTerm, 'ig'),
        `<span style="color: ${color ?? 'red'}">${searchTerm}</span>`)
    
    return <span dangerouslySetInnerHTML={{__html: newText}}></span>
};