import * as React from 'react';
import './ChromeSmartSearch.css';

import Background from './components/background/background';
import Info from './components/info/info';
import Search from './components/search/search';
import Settings from './components/settings/settings';

import settingsStorage from './util/settingsStorage';
// import iSettings from './util/iSettings';

export interface iProps{

}

export interface iState{
    theStackObject?: JSX.Element[];
    showBackroundLayer: boolean;
    showInfoLayer: boolean;
    showSearchLayer: boolean;
    showSettingsLayer: boolean;

    settings : settingsStorage;
}

export default class ChromeSmartSearch extends React.Component<iProps, iState>{

    constructor(props: iProps){
        super(props);
        this.state = {
            showBackroundLayer: true,
            showInfoLayer: true,
            showSearchLayer: true,
            showSettingsLayer: true,
            settings : new settingsStorage()
        }
        this.update = this.update.bind(this);
    }

    componentDidMount(){
        this.setDimensions();
        window.setInterval(()=>{this.render()}, 1000);
    }

    update(): void{
        this.forceUpdate();
        // this.setState(this.state);
    }

    private theStack(): Array<JSX.Element>{
        let buffer = [];
        (this.state.showBackroundLayer) ? buffer.push(<Background />) : null;
        (this.state.showInfoLayer) ? buffer.push(<Info />) : null;
        (this.state.showSearchLayer) ? buffer.push(<Search settings={this.state.settings} updateCallback={this.update} />) : null;
        (this.state.showSettingsLayer) ? buffer.push(<Settings settings={this.state.settings} updateCallback={this.update} />) : null;
        return buffer;
    }

    private setDimensions(){
        let root = document.getElementById("root");
        (root != null) ? root.style.width = window.innerWidth + "px" : null;
        (root != null) ? root.style.height = window.innerHeight + "px" : null;
    }

    render(){
        return(<div>{this.theStack()}</div>)
    }

}