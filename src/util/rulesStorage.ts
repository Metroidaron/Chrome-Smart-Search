class rulesStorage {

    constructor() {
        (typeof (Storage) !== "undefined") ? null : alert("Error, You must use a newer browser; web storage not supported");
    }

    fetchRules() {

    }

    saveRules() {

    }


}

class rulesMatch {
    type        : "Match";
    typeDescription: "Match input to a specific pattern, then navigate to a specified url passing input along in url";
    name        : string;   // Fedex Tracking Number
    target      : string;   // thisTab
    key         : string;   // ^[Ff]edex
    forceKey    : boolean;  // true
    url         : string;   // https://www.fedex.com/apps/fedextrack/?tracknumbers=%s
    inputFilter : string;   // \\d{12,14}|\\d{4}.\\d{4}.\\d{4}
}

class rulesRedirect {
    type        : "Redirect";
    typeDescription: "Match input to a specific pattern, then redirect the user to the requested url, without passing input along in url";
    name        : string;   // Facebook Homepage
    target      : string;   // thisTab
    url         : string;   // https://www.facebook.com
    inputFilter : string ;  // ^[Ff][Bb] 
}

class rulesGet {  // Example: Sample johnSnow1234 packLeader2017 'stark family tree' 
    type     : "Get";
    typeDescription: "Match input to a specific pattern, then redirect the user to the requested url, while passing multiple values in the url";
    name     : string;   // Sample Website Login and Query
    target   : string;   // thisTab
    key      : string;   // ^[Ss]ample
    forceKey : boolean;  // true
    url      : string;   // http://www.MyWebsite.com/?username=%s{0}&passwordKey=%s{1}&query=%s{2}
}

class rulesPost { // Example : KingsLanding Dtargaryen MotherOfDragons 'targaryen family tree'
    type     : "Post";
    typeDescription: "Match input to a specific pattern, then redirect the user to the requested url, while passing multiple values via POST";
    name     : string;   // Sample Website Login and Query 
    target   : string;   // thisTab
    key      : string;   // ^[Kk]ings[Ll]anding
    forceKey : boolean;  // false
    url      : string;   // http://www.KingsLandingSearch.com/?username=%s{un}&passwordKey=%s{pw}&query=%s{query}
}

class rulesScript{
    type : "Script";
    typeDescription: "Match input to a specific pattern, then execute javascript script hosted externally (example uses github gist)";
    name : string;  // ???
    key : string; // ^[Mm]y[Jj]avascript
    src  : string;  // https://gist.githubusercontent.com/emkay/1346824/raw/a3181a1d2c4c2aaeb1210277763fcefbb4047a01/hello.js
}

class rulesGist{
    type : "Gist";
    typeDescription: "Pull rull in from github Gist (Allows for easy/mass creation, updating and sharing chrome smart search rules)";

}