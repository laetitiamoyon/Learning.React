const soundex = text =>
{
    let s = [];
    let si = 1;
    let c;

    //              ABCDEFGHIJKLMNOPQRSTUVWXYZ
    let mappings = "01230120022455012623010202";

    s[0] = text[0].toUpperCase();

    for(let i = 1, l = text.length; i < l; i++)
    {
        c = (text[i].toUpperCase()).charCodeAt(0) - 65; // letter to digit

        if(c >= 0 && c <= 25)
        {
            // @ts-ignore
            if(mappings[c] != 0)
            {
                if(mappings[c] != s[si-1])
                {
                    s[si] = mappings[c];
                    si++;
                }
                if(si > 3)
                {
                    break;
                }
            }
        }
    }
    while(si <= 3)
    {
        s[si] = 0;
        si++;
    }

    return s.join("");
}

export default soundex