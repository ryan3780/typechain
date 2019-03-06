"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "ele",
    gender: "male",
    age: 28
};
const sayHi = (person) => {
    //파라미터의 타입을 : 으로 지정이 가능하다. 또한 :string 으로 반환값의 타입을 정할 수 있다.
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map