const sayHi = (name: string, age: number, gender: string): string => {
    //파라미터의 타입을 : 으로 지정이 가능하다. 또한 :string 으로 반환값의 타입을 정할 수 있다.
    return `hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi("ele", 28, "male"));
export { };