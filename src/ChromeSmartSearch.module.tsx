import * as React from 'react';
import './ChromeSmartSearch.css';

import Background from './components/background/background.module';

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
            showSettingsLayer: false,
        }
    }

    private theStack(): Array<JSX.Element>{
        let buffer = [];
        (this.state.showBackroundLayer) ? buffer.push(<Background />) : null;
        return buffer;
    }

    render(){
        return(<div>{this.theStack()}</div>)
    }

}