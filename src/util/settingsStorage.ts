class settingsStorage{

    constructor(){
        (typeof(Storage) !== "undefined") ? null : alert("Error, You must use a newer browser; web storage not supported");
    }

    fetchSettings(){

    }

    saveSettings(){

    }

    firstName : string;
    lastName : string;
    email : string; 
    zip : number; // for Weather

    theme : string; // Dark, Light
    wallpaperTint : number; // 0 to 1


}

export default settingsStorage;