export class Person {
    private personality: string;

    constructor() {
        this.personality = "Mystery";
    }

    public askQuestion(answer: number): void {
        if (answer === 1) {
            this.personality = "Extrovert";
        } else if (answer === 2) {
            this.personality = "Introvert";
        } else {
            this.personality = "You are still a mystery";
        }
    }

    public getPersonality(): string {
        return this.personality;
    }
}



