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
    time : string;
}

export default class Search extends React.Component<iProps, iState>{

    sS : settingsStorage; 
    interval : any;

    constructor(props: iProps){
        super(props);
        this.state = {
            settings : {},
            time : new Date(Date.now()).toLocaleTimeString()
        }
        this.sS = new settingsStorage();
        this.getTime = this.getTime.bind(this);
    }

    componentDidMount(){
        this.setState({settings : this.sS.getSettingsObject()})
        this.interval = window.setInterval(()=>{this.getTime()}, 10);
    }

    getTimeFrame(): string{
        let d = new Date();
        let timeFrame = "";
        switch(d.getHours()){
            case 0 : timeFrame = "Good Morning"; break;
            case 1 : timeFrame = "Good Morning"; break;
            case 2 : timeFrame = "Good Morning"; break;
            case 4 : timeFrame = "Good Morning"; break;
            case 3 : timeFrame = "Good Morning"; break;
            case 5 : timeFrame = "Good Morning"; break;
            case 6 : timeFrame = "Good Morning"; break;
            case 7 : timeFrame = "Good Morning"; break;
            case 8 : timeFrame = "Good Morning"; break;
            case 9 : timeFrame = "Good Morning"; break;
            case 10 : timeFrame = "Good Morning"; break;
            case 11 : timeFrame = "Good Morning"; break;
            case 12 : timeFrame = "Good Afternoon"; break;
            case 13 : timeFrame = "Good Afternoon"; break;
            case 14 : timeFrame = "Good Afternoon"; break;
            case 15 : timeFrame = "Good Afternoon"; break;
            case 16 : timeFrame = "Good Afternoon"; break;
            case 17 : timeFrame = "Good Afternoon"; break;
            case 18 : timeFrame = "Good Evening"; break;
            case 19 : timeFrame = "Good Evening"; break;
            case 20 : timeFrame = "Good Evening"; break;
            case 21 : timeFrame = "Good Evening"; break;
            case 22 : timeFrame = "Good Evening"; break;
            case 23 : timeFrame = "Good Evening"; break;
          }
        return timeFrame;
    }

    getTime(){
        let d = new Date(Date.now());
        this.setState({time: d.toLocaleTimeString()});
        this.forceUpdate();
    }

    setBackground(){
        let elem = document.getElementById("five");
        let number = this.props.settings.getSettingsObject().wallpaperTint;
        (elem != null || elem != undefined) ? elem.style.backgroundColor = 'rgba(0,0,0,' + number + ')' : null;
    }

    render(){
        return(
            <div id="searchLayer">
                <div id="five">
                    {this.getTimeFrame()} {this.props.settings.getSettingsObject().firstName}, It's currently {this.state.time}
                    <br />
                    <div id="query"><input type="text" placeholder="Ask Something..." /></div>
                </div>
                {this.setBackground()}
            </div>  
        )
    }

}