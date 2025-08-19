// Practice-G2
function getFreqOfWords(sentence) {
    if (sentence === null || sentence === undefined) {
        return undefined
    }
    const word = sentence.toLowerCase().split(" ")

    const frequency = {};
    for ( i of word) {
        if( i in frequency) {
            frequency[i]++;
        }else{
            frequency[i] = 1 ;
        }
    }
    return frequency;
}
console.log(getFreqOfWords('Today is present and present is your gift'));
console.log(getFreqOfWords('Do you best just do it'));
console.log(getFreqOfWords(null));      
console.log(getFreqOfWords(undefined)); 









