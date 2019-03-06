const name = "ele",
    age = 28,
    gender = "male";


const sayHi = (name, age, gender?) => {
    //파라미터에 ? 물음표 표시를 붙이면, 선택적인거라서, 함수를 호출 할 때, 넣어도 되고 , 안넣어도 된다.
    console.log(`hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age);
export { };