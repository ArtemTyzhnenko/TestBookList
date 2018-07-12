import React, {Component} from 'react';
import BookContainer from '../containers/BookContainer/BookContainer';
import './App.scss';

export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <BookContainer/>
            </div>
        );
    };
};
