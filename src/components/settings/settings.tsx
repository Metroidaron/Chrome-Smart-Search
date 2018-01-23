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

    handleChange(event: any){
        let element: any = event.target.value;
        console.log(event.target.name + ": " + element);
        this.state.settings[event.target.name] = element;
        this.sS.saveSettingsToStorage(this.state.settings);
    }

    showSettingsForm(): JSX.Element{
        let results : JSX.Element[] = [];
        let settings = this.state.settings;

        for(let data in settings){
            console.log("Data Key: " + data + " Data Key Value: " + settings[data]);
            results.push(<input onChange={this.handleChange} key={data} defaultValue={settings[data]} name={data} />)
        }

        return <div>{results}</div>;
    }

    render(){
        return(
        <div id="settingsLayer">
            {this.showSettingsForm()}
        </div>);
    }

}