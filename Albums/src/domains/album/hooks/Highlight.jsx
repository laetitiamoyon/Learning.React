export const Highlight = ({ text, searchTerm, color }) => 
{
    const removeHtmlTags = (text) => text.replace( /(<([^>]+)>)/ig, '')
    const newText = removeHtmlTags(text).replace(new RegExp(searchTerm, 'ig'), 
        oldText => `<span style="color :${color ?? 'red'}">${oldText}</span>`)

    return <div dangerouslySetInnerHTML={{__html: newText}}></div>

};