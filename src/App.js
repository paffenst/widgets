/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React , {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


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
        const [selected,setSelected] = useState(options[0]);
        const [showDropDown,setShowDropDown] = useState(true);
         return (
        <div>
        <Header/>
         <Route path = "/" >
            <Accordion items={items} />   
         </Route>
         <Route path = "/list" >
            <Search  />   
         </Route>
         <Route path = "/dropdown" >
            <Dropdown  
            label="Select a color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
            />   
         </Route>
         <Route path = "/translate" >
            <Translate  />   
         </Route>
        </div>
    );
};