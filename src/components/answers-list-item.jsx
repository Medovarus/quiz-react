import React from 'react';

const AnswersListItem = ({label, isCorrect}) => {
    const style = {
        display: 'inline-block',
        marginRight: '10px',
        color: isCorrect ? 'green' : 'black',
        fontWeight: isCorrect ? 'bold' : 'normal'
    };

    const f = (message) => {
        alert(message);
    };

    return (
        <span style={style} onClick={() => f(label)}>{label}</span>
    );
};

export default AnswersListItem;