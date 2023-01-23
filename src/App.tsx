import React from 'react';

import classes from './App.module.css';
import {Team} from './components/Team/Team';

function App() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <Team/>
            </div>
        </div>
    );
}

export default App;
