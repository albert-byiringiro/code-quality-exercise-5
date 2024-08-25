const createPhoneNumber = (arr) => {
    if (!Array.isArray(arr) || arr.length > 10) throw new Error("Error: must be an array with 10 integers");

    let format = "(xxx) xxx-xxxx";
    for (let n of arr) {
        format = format.replace("x", n);
    }
    return format;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
