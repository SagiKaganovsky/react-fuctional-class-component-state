import React, { Component } from 'react';
import '../App.css';
import Profile from '../view/Profile'

class ClassComponent extends Component {
    //state
    state = {
        persons: [
            {
                name: 'Max', age: 28, Summary: 'Our functionality is unparalleled, but our power to deliver.'
            },
            {
                name: 'Manu', age: 29, Summary: 'Spriti introduced new capabilities of the pudding is in the DXP space. If you transition globally,'
            },
            {
                name: 'Stephanie', age: 26, Summary: 'If you transition globally, Without C2C, you will lack cross-media CAE. A company that can synthesize courageously will (eventually) be able to transition easily.'
            }
        ]
        , someOtherState: 'someOtherState'
    }

    //state 
    state2 = {
        andAnotherState: 'And another State'
    }

    buttonClick = () => {
        // state
        this.setState({
            persons: [{
                name: 'Stephanie',
                age: 26,
                Summary: 'If you transition globally, you may also.'
            },
            {
                name: 'Sergei',
                age: 34,
                Summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
            ],

        });

        // state
        this.setState({
            andAnotherState: 'And another state'
        })
    }

    switchNameHandler = (newName) => {
        // state
        this.setState({ persons: [{ name: newName, age: 5, }] });
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {
                    name: event.target.value,
                    age: 34,
                }
            ]
        });
    }

    render() {
        //Console log
        console.log(this.state);
        return (
            <main>
                <div>
                    <p>
                        And Another state : {this.state2.andAnotherState}
                    </p>
                    <button style={{ backgroundColor: 'white', border: '5px solid red', padding: '8px', cursor: 'pointer' }}
                        onClick={this.buttonClick}>
                        Click Me!
                        </button>

                    <button onClick={() => this.switchNameHandler('Elay')}>
                        Switch Names
                    </button>
                    {
                        this.state.persons &&
                        this.state.persons.map(person => (
                            <Profile key={person.name} {...person}
                                click={this.switchNameHandler.bind(this, 'Elay!!')}
                                changed={this.nameChangeHandler} />)

                        )
                    }
                </div>
            </main>
        );
    }
}

export default ClassComponent;
