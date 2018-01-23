import iSettings from './iSettings';

class settingsStorage{

    settings : iSettings = <iSettings>{};

    constructor(){
        (typeof(Storage) !== "undefined") ? null : alert("Error, You must use a newer browser; web storage not supported");
        (localStorage.getItem('settings') == null || localStorage.getItem('settings') == "{}") ? this.initSettings() : null; 
        this.fetchSettingsFromStorage();
    }

    fetchSettingsFromStorage(){
        let storageGlimpse = localStorage.getItem("settings");
        this.settings = JSON.parse((storageGlimpse != null) ? storageGlimpse : "{}");
    }

    saveSettingsToStorage(settingsToSave ?: iSettings){
        (settingsToSave != null) ? this.settings = settingsToSave : null;
        localStorage.setItem("settings", JSON.stringify(this.settings));
    }

    getSettingsObject(){
        return this.settings;
    }

    initSettings(){ //Set default values for all settings, if Value is not present, setting does not display.
        let s = this.settings;

        //Personal Info
        s.firstName = "Thor";
        s.lastName = "Odinson";
        s.email = "mjolnir@asgard.gov";
        s.zip = 123456;

        //Application Settings
        s.theme = "light";
        s.wallpaperTint = 50;

        //Save
        this.saveSettingsToStorage();
    }
}

export default settingsStorage;