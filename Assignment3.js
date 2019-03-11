/* Question : Create a function multiplyNumeric(obj) that multiplies 
              all numeric properties of obj by 2. Please note that multiplyNumeric does not need to return
              anything. It should modify the object in-place */

let menu = {
    width : 400,
    height: 600,
    title: "my menu"
};
multiplyNumeric(menu);
function multiplyNumeric(menu) {
    for (let i in menu) {
        if (typeof(menu[i]) == "number") {
            menu[i] = menu[i] * 2;
        }
    }
}