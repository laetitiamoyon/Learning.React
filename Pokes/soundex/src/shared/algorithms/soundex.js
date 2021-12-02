const soundex = text =>
{
    if ([undefined, ''].includes(text)) return ''

    //                ABCDEFGHIJKLMNOPQRSTUVWXYZ
    const mappings = "01230120022455012623010202" // lettre converti en chiffre compris entre 0 et 6
    let [result, indexResult] = [[text[0].toUpperCase()], 1] // variable qui regroupe le résultat qui est au départ un tableau
    // contenant le 1er caractère de la chaine d'entrée en majuscule et 1 correspond donc au 2ème caractère.

    for (let index = 1; index < text.length; index++) // On parcours le mot à partir de l'index, on dit qu'il commence
        // a 1 (2ème lettre), qu'il est plus petit que la longeur du mot, et qu'on l'incrémentera.
    {
        const characterAsDigit = (text[index].toUpperCase()).charCodeAt(0) - 65;
        // Constante qui va permettre de convertir chaque lettre en 1 chiffre

        if (characterAsDigit >= 0 && characterAsDigit <= 25 &&
            // on ignore si ce n'est pas un caractère
            indexResult < 4 && // Le résultat sera une chaine de 4 caractères
            mappings[characterAsDigit] != 0 && // ignore the 0 car les voyelles sont ignorées
            mappings[characterAsDigit] != result[indexResult - 1]) // ignore consecutive numbers with the same value
                result[indexResult++] = mappings[characterAsDigit]; // On incrémente le tableau de résultat par les lettre
        // convertis en chiffre
    }

    while (indexResult <= 3) result[indexResult++] = 0; // Tant que le résultat est plus petit ou égale à 3, on l'incrémente avec 0

    return result.join(''); // Converti le tableau en une chaine de caractère
}

export default soundex