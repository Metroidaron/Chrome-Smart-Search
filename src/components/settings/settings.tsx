import * as React from 'react';
import './settings.css'; /* CSS File */

import settingsStorage from './../../util/settingsStorage';
import iSettings from './../../util/iSettings';

export interface iProps{

}

export interface iState{
    settings : iSettings;
}

export default class Settings extends React.Component<iProps, iState>{

    sS : settingsStorage;

    constructor(props: iProps){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            settings : {}
        }
        //Delete Me
        this.sS = new settingsStorage();
    }

    componentDidMount(){
        this.setState({settings : this.sS.getSettingsObject()})
    }

    handleChange(e: Event){
        
        this.sS.saveSettingsToStorage(this.state.settings);
    }

    render(){
        return(
        <div id="settingsLayer">
            <input value={this.state.settings.firstName} onChange={(e) => this.handleChange} type="text" />
            <input value={this.state.settings.lastName} onChange={(e) => this.handleChange} type="text" />
            <input value={this.state.settings.email} onChange={(e) => this.handleChange} type="text" />
            <input value={this.state.settings.zip} onChange={(e) => this.handleChange} type="number" />
            <input value={this.state.settings.theme} onChange={(e) => this.handleChange} type="text" />
            <input value={this.state.settings.wallpaperTint} onChange={(e) => this.handleChange} type="text" />
        </div>);
    }

}