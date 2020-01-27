import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import QuestionNumber from "./components/question-number";
import QuestionText from "./components/question-text";
import AnswersList from "./components/answers-list";

const App = () => {
    const answersData = [
        {id: 1, label: 'foo', isCorrect: true},
        {id: 2, label: 'bar', isCorrect: false},
        {id: 3, label: 'baz', isCorrect: false},
        {id: 4, label: 'qux', isCorrect: false}
    ];

    return (
        <div>
            {/*<AppHeader/>*/}
            <QuestionNumber/>
            <QuestionText/>
            <AnswersList answers={answersData}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));