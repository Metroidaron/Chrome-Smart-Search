import * as React from 'react';
import './background.css'; /* CSS File */

export interface iProps{

}

export interface iState{

}

export default class Background extends React.Component<iProps, iState>{

    constructor(props: iProps){
        super(props);
    }

    buildStaticUrl(): string{
        // https://wall.alphacoders.com/api2.0/get.php?auth=e594d9b6455a56f9467a4f3395f113c7&method=sub_category_list&id=10
        
        let baseurl = "https://wall.alphacoders.com/api2.0/get.php?";
        let apiKey = "e594d9b6455a56f9467a4f3395f113c7";
        let method = "sub_category";
        let id = "10"; //nature

        return(baseurl + "auth=" + apiKey + "&method=" + method + "&id=" + id)
    }

    extractImage(){

    }

    render(){
        return(<div id="backgroundLayer"><img src="https://images5.alphacoders.com/386/386084.jpg" /></div>)
    }

}