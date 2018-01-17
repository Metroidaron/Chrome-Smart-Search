import * as React from 'react';
import './settings.css'; /* CSS File */

import settingsStorage from './../../util/settingsStorage';

export interface iProps{

}

export interface iState{

}

export default class Settings extends React.Component<iProps, iState>{

    constructor(props: iProps){
        super(props);

        //Delete Me
        let sS = new settingsStorage;
        sS.firstName = "John Doe";
    }

    render(){
        return(<div>Hello From Chrome Smart Search Settings!</div>)
    }

}