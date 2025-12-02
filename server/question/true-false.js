import {Question} from "./question";

/**
 * True False Class
 *
 * @class TrueFalse
 * @extends Question
 *
 */



export class TrueFalse extends Question {

    constructor(question, answer) {
        super();
        super.question = question;
        super.answer = answer;
    }

}