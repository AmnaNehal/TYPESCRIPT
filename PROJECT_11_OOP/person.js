"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
        this.personality = "Mystery";
    }
    Person.prototype.askQuestion = function (answer) {
        if (answer === 1) {
            this.personality = "Extrovert";
        }
        else if (answer === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still a mystery";
        }
    };
    Person.prototype.getPersonality = function () {
        return this.personality;
    };
    return Person;
}());
exports.Person = Person;
