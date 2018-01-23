import * as React from 'react';
import './ChromeSmartSearch.css';

import Background from './components/background/background';
import Info from './components/info/info';
import Search from './components/search/search';
import Settings from './components/settings/settings';

export interface iProps{

}

export interface iState{
    showBackroundLayer: boolean;
    showInfoLayer: boolean;
    showSearchLayer: boolean;
    showSettingsLayer: boolean;

    theStackObject?: JSX.Element[];
}

export default class ChromeSmartSearch extends React.Component<iProps, iState>{

    constructor(props: iProps){
        super(props);
        this.state = {
            showBackroundLayer: true,
            showInfoLayer: true,
            showSearchLayer: true,
            showSettingsLayer: true,
        }
    }

    componentDidMount(){
        this.setDimensions();
    }

    private theStack(): Array<JSX.Element>{
        let buffer = [];
        (this.state.showBackroundLayer) ? buffer.push(<Background />) : null;
        (this.state.showInfoLayer) ? buffer.push(<Info />) : null;
        (this.state.showSearchLayer) ? buffer.push(<Search />) : null;
        (this.state.showSettingsLayer) ? buffer.push(<Settings />) : null;
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