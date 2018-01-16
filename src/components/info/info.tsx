import * as React from 'react';
import './info.css'; /* CSS File */

export interface iProps{

}

export interface iState{
    quadrantOne : JSX.Element;
    quadrantTwo : JSX.Element;
    quadrantThree : JSX.Element;
    quadrantFour : JSX.Element;

    weather : string;


}

export default class Info extends React.Component<iProps, iState>{

    constructor(props: iProps){
        super(props);
        this.state={
            quadrantOne : <div></div>,
            quadrantTwo : <div></div>,
            quadrantThree : <div></div>,
            quadrantFour : <div></div>,
            weather : "Fetching Weather"
        }
    }
    
    componentDidMount(){
        this.weather();
    }

    quadrantOne(): JSX.Element{
        let results = <div id="quadOne">Quadrant One</div>;
        return results;
    }

    quadrantTwo(): JSX.Element{
        let results = <div id="quadTwo">{this.state.weather}</div>;
        return results;
    }

    quadrantThree(): JSX.Element{
        let results = <div id="quadThree"></div>;
        return results;
    }

    quadrantFour(): JSX.Element{
        let results = <div id="quadFour"></div>;
        return results;
    }
    
    weather(){
        fetch("http://api.openweathermap.org/data/2.5/weather?q=32714&APPID=9c31c121d1c2294620017c6f60dd7874").then(r => r.text()).then(data => this.setState({weather: data}));
    }

    render(){
        return(
        <div id="infoLayer">
            {this.quadrantOne()}
            {this.quadrantTwo()}
            {this.quadrantThree()}
            {this.quadrantFour()}
        </div>
        );
    }

}