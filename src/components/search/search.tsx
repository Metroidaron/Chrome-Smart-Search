import * as React from 'react';
import './search.css'; /* CSS File */

import settingsStorage from './../../util/settingsStorage';
import iSettings from './../../util/iSettings';

export interface iProps{
    settings : settingsStorage;
    updateCallback : Function;
}

export interface iState{
    settings : iSettings;
}

export default class Search extends React.Component<iProps, iState>{

    sS : settingsStorage; 

    constructor(props: iProps){
        super(props);
        this.state = {
            settings : {}
        }
        this.sS = new settingsStorage();
    }

    componentDidMount(){
        this.setState({settings : this.sS.getSettingsObject()})
    }

    render(){
        return(
            <div id="searchLayer">
                <div id="five">Welcome {this.props.settings.getSettingsObject().firstName}</div>
            </div>  
        )
    }

}