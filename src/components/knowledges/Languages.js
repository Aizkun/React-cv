import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Jquery", xp: 1},
            {id: 2, value: "Php", xp: 1},
            {id: 3, value: "SQL", xp: 1},
            {id: 4, value: "Html", xp: 1}
        ],
        frameworks: [
            {id: 1, value: "React", xp: 0.2},
            {id: 2, value: "Bootstrap", xp: 1},
            {id: 3, value: "Symfony", xp: 0.1}
        ]
    }
    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className='languagesFrameworks'>
                <ProgressBar 
                    languages={languages}
                    className="languageDisplay"
                    title="langages"
                />
                <ProgressBar 
                    languages={frameworks}
                    title="Frameworks & Bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;