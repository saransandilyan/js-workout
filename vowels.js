function checkVowelOrConsonant(character) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(character.toLowerCase())) {
        return "vowel";
    } else {
        return "consonant";
    }
}


var a = checkVowelOrConsonant("b")
console.log(a)