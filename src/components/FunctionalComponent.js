import React, { useState } from 'react';
import '../App.css';
import Profile from '../view/Profile'

import UserInput from '../UserInput/UserInput';
import UserOutput from '../UserOutput/UserOutput';

const FunctionalComponent = () => {
    //state
    const [userName, setUserName] = useState('Romi');
    const [personsState, setPersons] = useState({
        persons: [{
            name: 'Max',
            age: 28,
            Summary: 'Our functionality is unparalleled, but our power to deliver.'
        }, {
            name: 'Manu',
            age: 29,
            Summary: 'Spriti introduced new capabilities of the pudding is in the DXP space. If you transition globally,'
        }, {
            name: 'Stephanie',
            age: 26,
            Summary: 'If you transition globally, you may also reintermediate magnetically.'
        }],
        OtherStateHere: "Some other state"
    });

    const userInputHandler = (event) => setUserName(event.target.value)

    //Console log
    console.log(personsState);

    const buttonClick = () => {
        //state
        setPersons({
            persons: [...personsState.persons,
            {
                name: 'Sergei',
                age: 34,
                Summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do a.'
            }
            ]
        });

        setPersons({
            andAnotherState: 'And another state'
        });
    }

    const nameChangeHandler = (event) => {
        //state
        setPersons({
            persons: [
                ...personsState.persons,
                {
                    name: event.target.value,
                    age: 34,
                    Summary: 'Lorem ipsum dolor sit amet, magna aliqua.'
                }
            ]
        });
    }

    return (
        <>
        <p>Motivation: Knowing this will help to solve the problem</p>
            <div>
                <UserInput changed={userInputHandler} />
                <UserOutput userName={userName} />

                <button onClick={buttonClick} >
                    Click Me!
                </button>

                {
                    personsState.persons &&
                    personsState.persons.map(person =>
                        <Profile key={person.name} {...person}
                            click={buttonClick}
                            changed={nameChangeHandler}
                        />
                    )
                }
            </div>
        </>

    );
}
export default FunctionalComponent;