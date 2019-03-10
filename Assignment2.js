/*  Question :  We have an object storing salaries of our team. Write the code to sum all salaries and store it in a variable sum.
                should be 390 in the example above. If salaries is empty then the result is 0.    */

let salaries = {
    John: 100,
    Ann: 160,
    pete: 130
}
var sum = 0;
if (Object.keys(salaries).length == 0) {
    console.log(0);
} else {
    for (let i in salaries) {
        sum += parseInt(salaries[i]);
    }
    console.log(sum);
}