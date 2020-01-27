import React from 'react';
import AnswersListItem from './answers-list-item';

const AnswersList = ({answers}) => {

    const elements = answers.map((item) => {
        const {id, ...itemProps} = item;

        return <AnswersListItem key={`listItem-${id}`} {...itemProps}/>;
    });

    return (
        <div>
            {elements}
        </div>
    );
};

export default AnswersList;