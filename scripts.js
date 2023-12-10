//Write a function to find the count of a letter in a string

function countString(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

console.log(countString("You're a software engineer", "e"))