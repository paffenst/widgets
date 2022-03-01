import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: "What ist React?",
        content: "React is a front end Javascript framework"
    }, {
        title: "Why use React? ",
        content: "React is a favorite JS libraray amony enginners "
    }, {
        title: "How do you use React? ",
        content: "You use React by creating components "
    }
];
export default () => {

    return (
        <div>
            <Accordion items={items} />
        </div>
    )
};