// Write a JavaScript function to convert a number to its binary representation.

const convertNumberToBinary = (number) => {
    if (typeof number !== 'number') throw new Error("Expecting a number");
    return number.toString(2);
};