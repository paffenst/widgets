import React , {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

    const options = [
        {
            label: 'The Color Red',
            value: 'red'
        },
        {
            label: 'The Color Green',
            value: 'green'
        },
        {
            label: 'The Color Blue',
            value: 'blue'
        }
    ];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Dropdown 
            selected={selected} 
            onSelectedChange={setSelected}
            options={options} />  
        </div>
    );
};