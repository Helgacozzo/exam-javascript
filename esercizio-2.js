// const array = ['antonio', 'Armando', 'gianni', 'filippo', 'andrea'];

const concatenateStrings = (array) => {

    const startWithA = array.filter(str => str.startsWith('a') || str.startsWith('A'));

    let concatenatedString = '';
    startWithA.forEach(str => {
        concatenatedString += str;
    });

    if (concatenatedString.length > 10) {
        concatenatedString = concatenatedString.substring(0, 10);
    }

    return concatenatedString;
};

// const result = concatenateStrings(array);
// console.log(result);