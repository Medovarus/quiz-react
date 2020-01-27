import React from 'react';

const AnswersListItem = ({label, isCorrect}) => {
    const style = {
        display: 'inline-block',
        marginRight: '10px',
        color: isCorrect? 'green' : 'black',
        fontWeight: isCorrect? 'bold' : 'normal'
    };

    return (
        <span style={style}>{label}</span>
    );
};

export default AnswersListItem;