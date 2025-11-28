/**
 * Abstract Class Question
 *
 * @class Question
 *
 */
export class Question {
    id;
    question;
    answer;
    constructor() {
        if (this.constructor === Question) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }

    getQuestion() {
        return this.question;
    }

    getAnswer() {
        return this.answer;
    }

    run(){
        throw new Error("Method not implemented.");
    }

}