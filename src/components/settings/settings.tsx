import * as React from 'react';
import './settings.css'; /* CSS File */

import settingsStorage from './../../util/settingsStorage';
// import iSettings from './../../util/iSettings';

export interface iProps{
    settings : settingsStorage;
    updateCallback : Function;
    settingsToggle : Function;
}

export interface iState{
}

export default class Settings extends React.Component<iProps, iState>{

    constructor(props: iProps){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
        }
    }

    componentDidMount(){
        this.setBackground();
    }

    handleChange(event: any){
        let element: any = event.target.value;
        // console.log("Saving Modification: " + event.target.name + ": " + element);
        this.props.settings.getSettingsObject()[event.target.name] = element;
        this.props.settings.saveSettingsToStorage(this.props.settings.getSettingsObject());
        this.props.updateCallback();
    }

    setBackground(){
        let elem = document.getElementById('settingsLayer');
        let number = this.props.settings.getSettingsObject().wallpaperTint;
        // console.log("Setting color to: " + number);
        (elem != null || elem != undefined) ? elem.style.backgroundColor = 'rgba(0,0,0,' + number + ')' : null;
    }

    showSettingsForm(): JSX.Element{
        let results : JSX.Element[] = [];
        let settings = this.props.settings.getSettingsObject();

        for(let data in settings){
            // console.log("Data Key: " + data + " Data Key Value: " + settings[data]);
            results.push(<div className="setting"><label>{data}</label><input onChange={this.handleChange} key={data} defaultValue={settings[data]} name={data} /></div>)
        }

        return <div>{results}</div>;
    }

    render(){
        return(
        <div id="settingsLayer">
            <div id="closeButton" onClick={() => this.props.settingsToggle(0)}><i className="fa fa-times" aria-hidden="true"></i></div>
            <h1>{this.props.settings.getSettingsObject().firstName}'s Settings</h1>
            <hr />
            {this.showSettingsForm()}
            {this.setBackground()}
        </div>);
    }

}