class rulesStorage {

    liveRuleSet: liveRuleSet;

    constructor() {
        (typeof (Storage) !== "undefined") ? null : alert("Error, You must use a newer browser; web storage not supported");
        (localStorage.getItem("rules") != null) ? this.fetchRules() : alert("Sorry, you have no rules saved");
    }

    fetchRules() {
        let storageGlimpse = localStorage.getItem("rules");
        this.liveRuleSet = JSON.parse((storageGlimpse != null) ? storageGlimpse : "");
        
    }

    updateRules(newRule: any){
        this.liveRuleSet.rules.push(newRule);
    }

    saveRules() {
        localStorage.setItem("rules", JSON.stringify(this.liveRuleSet));
    }
}

export default rulesStorage;

export interface liveRuleSet{
    rules : any[];
}

export interface rulesMatch{
    readonly type            : "Match";
    readonly typeDescription : "Match input to a specific pattern, then navigate to a specified url passing input along in url";
    
    active      ? : boolean;  // Determines if this rule is currently active 
    name        ? : string;   // Fedex Tracking Number
    target      ? : string;   // thisTab
    key         ? : string;   // ^[Ff]edex
    forceKey    ? : boolean;  // true
    url         ? : string;   // https://www.fedex.com/apps/fedextrack/?tracknumbers=%s
    inputFilter ? : string;   // \\d{12,14}|\\d{4}.\\d{4}.\\d{4}
}

export interface rulesRedirect {
    readonly type            : "Redirect";
    readonly typeDescription : "Match input to a specific pattern, then redirect the user to the requested url, without passing input along in url";
    
    active      ? : boolean;  // Determines if this rule is currently active 
    name        ? : string;   // Facebook Homepage
    target      ? : string;   // thisTab
    url         ? : string;   // https://www.facebook.com
    inputFilter ? : string ;  // ^[Ff][Bb] 
}

export interface rulesGet {  // Example: Sample johnSnow1234 packLeader2017 'stark family tree' 
    readonly type            : "Get";
    readonly typeDescription : "Match input to a specific pattern, then redirect the user to the requested url, while passing multiple values in the url";
    
    active   ? : boolean;  // Determines if this rule is currently active 
    name     ? : string;   // Sample Website Login and Query
    target   ? : string;   // thisTab
    key      ? : string;   // ^[Ss]ample
    forceKey ? : boolean;  // true
    url      ? : string;   // http://www.MyWebsite.com/?username=%s{0}&passwordKey=%s{1}&query=%s{2}
}

export interface rulesPost { // Example : KingsLanding Dtargaryen MotherOfDragons 'targaryen family tree'
    readonly type            : "Post";
    readonly typeDescription : "Match input to a specific pattern, then redirect the user to the requested url, while passing multiple values via POST";
    
    active   ? : boolean;  // Determines if this rule is currently active 
    name     ? : string;   // Sample Website Login and Query 
    target   ? : string;   // thisTab
    key      ? : string;   // ^[Kk]ings[Ll]anding
    forceKey ? : boolean;  // false
    url      ? : string;   // http://www.KingsLandingSearch.com/?username=%s{un}&passwordKey=%s{pw}&query=%s{query}
}

export interface rulesScript{
    readonly type            : "Script";
    readonly typeDescription : "Match input to a specific pattern, then execute javascript script hosted externally (example uses github gist)";
    
    active ? : boolean;  // Determines if this rule is currently active 
    name   ? : string;   // ???
    key    ? : string;   // ^[Mm]y[Jj]avascript
    src    ? : string;   // https://gist.githubusercontent.com/emkay/1346824/raw/a3181a1d2c4c2aaeb1210277763fcefbb4047a01/hello.js
}

export interface rulesGist{
    readonly type            : "Gist";
    readonly typeDescription : "Pull rull in from github Gist (Allows for easy/mass creation, updating and sharing chrome smart search rules)";
    
    active ? : boolean;  // Determines if this rule is currently active 
}