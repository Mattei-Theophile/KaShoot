import {Question} from "./question";

/**
 * Quiz method
 *
 * @Class Quiz
 * @extends Question
 */



export class Quiz extends Question {

    constructor(question, answer) {
        super();
        super.question = question;
        super.answer = answer;

    }



}