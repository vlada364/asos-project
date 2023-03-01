let x: number = 10;
let hello: string = "hello world";
let isValid: boolean = true;

let lol: string = 'Hi!!'

let y: number = 20

function sum(a: number, b: number): number {
    return x + y
}

type Operation = (a: number, b: number) => number;

type InputValue = { value: string; label: string; name: string };

// <TextInput value={value} label={label} name={name} />

type InputsValues = InputValue[];

// inputs.map((input:InputValue)=><TextInput {...input} />) <=>
// inputs.map((input:InputValue)=><TextInput value={input.value} label={input.value} name={input.name} />)

// <InputGroup inputs={inputs} />

function mathOp(x: number, y: number, op: Operation): number {
    return op(x, y)
}

let sumTwo: Operation = function (x: number, y: number): number {
    return x + y
}
