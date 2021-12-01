const soundex = text =>
{
    let result = [];
    let si = 1;
    let characterAsDigit;

    //              ABCDEFGHIJKLMNOPQRSTUVWXYZ
    let mappings = "01230120022455012623010202";

    result[0] = text[0].toUpperCase();

    for(let i = 1, l = text.length; i < l; i++)
    {
        characterAsDigit = (text[i].toUpperCase()).charCodeAt(0) - 65; // letter to digit

        if(characterAsDigit >= 0 && characterAsDigit <= 25 && mappings[characterAsDigit] != 0 && si < 4)
            if (mappings[characterAsDigit] != result[si-1]) result[si++] = mappings[characterAsDigit];
    }

    while(si <= 3)
        result[si++] = 0;

    return result.join("");
}

export default soundex