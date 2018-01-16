import * as React from 'react';
import './search.css'; /* CSS File */

export interface iProps{

}

export interface iState{

}

export default class Search extends React.Component<iProps, iState>{

    constructor(props: iProps){
        super(props);
    }

    render(){
        return(
            <div id="searchLayer">
                <div id="five">Search Content Goes here.  :)</div>
            </div>  
        )
    }

}