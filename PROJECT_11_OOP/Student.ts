import { Person } from '/TYPESCRIPT/PROJECTS/OOP/OPP_10/person';

export class Student extends Person {
    private _name: string;

    constructor() {
        super();
        this._name = "";
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

// Example of usage:
//const student = new Student();
//student.name = "John Doe";
//console.log(student.name);
