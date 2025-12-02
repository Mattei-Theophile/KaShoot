/**
 * Abstract Class Question
 *
 * @class Question
 *
 */
export class Question {
    id;
    question;
    answers; // dictionnaire ou la clé est la question et la valeure si la répones et bonne ou fausse
    constructor() {
        if (this.constructor === Question) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }

    getQuestion() {
        return this.question;
    }

    getAnswersf() {
        return this.answers;
    }

    run(){
        throw new Error("Method not implemented.");
    }

    checkAnswerValidity(response){
        return answers[response];
    }

}