const soundex = text =>
{
    //                ABCDEFGHIJKLMNOPQRSTUVWXYZ
    const mappings = "01230120022455012623010202"
    let [result, indexResult] = [[text[0].toUpperCase()], 1]

    for (let index = 1; index < text.length; index++)
    {
        const characterAsDigit = (text[index].toUpperCase()).charCodeAt(0) - 65; // letter to digit

        if (characterAsDigit >= 0 && characterAsDigit <= 25 && // ignore if wa not a character
            indexResult < 4 && // our result string of 4 characters
            mappings[characterAsDigit] != 0 && // ignore the 0
            mappings[characterAsDigit] != result[indexResult - 1]) // ignore consecutive numbers with the same value
                result[indexResult++] = mappings[characterAsDigit];
    }

    while (indexResult <= 3) result[indexResult++] = 0;

    return result.join("");
}

export default soundex