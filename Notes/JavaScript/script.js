// let a = 10;
// function print(num){
//     console.log(num);
//     return num;
// }
// print(a);

const add = (a, b) => {
    return a + b;
};

function substract(num1, num2) {
    return num1 - num2;
}

function operation(cb) {
    const sub = cb(100, 10);
    console.log(sub);
}

operation(substract);
