import * as React from 'react';
import './settings.css'; /* CSS File */

import settingsStorage from './../../util/settingsStorage';
import rulesStorage from './../../util/rulesStorage';

export interface iProps{

}

export interface iState{

}

export default class Settings extends React.Component<iProps, iState>{

    constructor(props: iProps){
        super(props);

        //Delete Me
        let sS = new settingsStorage;
        let rS = new rulesStorage;
        sS.firstName = "John Doe";
        rS.fetchRules();
    }

    render(){
        return(<div>Hello From Chrome Smart Search Settings!</div>)
    }

}