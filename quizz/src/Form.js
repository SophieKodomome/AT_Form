import React from 'react';
import Button from './Button';
import Questionnaire from './Questionnaire';

const listQuestionnaire = Questionnaire.getListQuestionnaire()
function QuizForm({ onSubmit }){
    return (
    <form className="space-y-2">
        <h2 className="text-xl font-bold mb-4">{listQuestionnaire[0].id} {listQuestionnaire[0].question}</h2>
      <div className="flex items-center">
        <input id="option1" type="radio" name="answer" value="child" className="form-radio text-blue-500" />
        <label htmlFor="option1" className="ml-2 text-blue-600 hover:text-blue-400"> {listQuestionnaire[0].child}</label>
      </div>
      <div className="flex items-center">
        <input id="option2" type="radio" name="answer" value="adult" className="form-radio text-blue-500" />
        <label htmlFor="option2" className="ml-2 text-blue-600 hover:text-blue-400"> {listQuestionnaire[0].adult}</label>
      </div>
      <div className="flex items-center">
        <input id="option3" type="radio" name="answer" value="parent" className="form-radio text-blue-500" />
        <label htmlFor="option3" className="ml-2 text-blue-600 hover:text-blue-400">{listQuestionnaire[0].parent}</label>
      </div>
      <div className="flex justify-end">
        <Button onClick={onSubmit}>Next</Button>
      </div>
    </form>

    );
};

export default QuizForm;
