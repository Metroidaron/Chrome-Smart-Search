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

    initSettings(){
        this.settings.firstName = "Jane";
        this.settings.lastName = "Doe";
        this.settings.theme = "light";
        this.settings.wallpaperTint = 0;
        this.saveSettingsToStorage();
    }
}

export default settingsStorage;