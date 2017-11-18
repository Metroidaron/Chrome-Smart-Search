# Chrome Smart Search

### Purpose/Description

Chrome Smart Search is meant to introduce logic into the Google Chrome Omni Bar and allow for easy customization and an enhanced searching experience tailored specifically for the user.

### How to download/use (OutDated and needs update)

Required Programs
- Git (If your looking to clone this repository, you may also download a copy using the download button in the top right)
- Node.js (Used to run the local server and download a local copy of Bootstrap, to avoid relying on a CDN)

Steps
1. Acquire package locally through cloning or download (Unzip if downloaded)
2. Open a command line instance inside the directory
3. Execute the command `npm install`
4. Execute the command `node start`
5. Navigate to localhost:8080

### Mission

> Create a tool that is easy to configure for computer Savvy users that do not necessarily know any programming.

---

### Production Goals/Desired feature list (OutDated and needs update)

>>>
##### Front End  
- Base Web UI that displays when a search from the Omni bar is entered.  This webpage should be slightly customizable (As in Color/background image) while the search is performed and display information as the search is initiated.
- Settings page where the user can access settings that will affect their search settings, but modifying these settings will have no effect on other users of the tool.  
- Server side settings where default values can be modified by any user OR by admin.  These default settings will be established by directly modifying a file or files in the source code.  
- Import/Export Web UI where users can quickly copy/paste a JSON Formatted version of their rules for easy sharing.  This UI should allow the users to select some or all of their rules for sharing. NOTE the rules set forth in this section will only affect the local user, not all users who use the same instance of this tool.
- Display the current rule's description when entering data into the Omni bar, if the input does not match any known rules show any possible rules with the finishing of the rule key word, or use default rules description (In most cases this will likely be Google)
-
##### Back End

- Implement a lightweight Node Server for easy local launching.  This tool, while having the means to be run by a Node server, should be just as easily displayed as a normal website using any other HTTP Server configuration.  If a user wanted they should be able to unzip a local copy and save on their desktop, install npm packages and double click the index.html file to be up and running.
- A Defaults folder that contains all the default files/values for the web tool, well documented and easy to edit in any text editor.
- By Opening index.html, this website should add itself to the Omni bar as a search engine.  If possible this website should prompt the user to make Chrome Smart Search the default search engine.

---

### Rule Types

> help : A Default command that cannot be overridden, stops the search engine at the "Middle Man Page" for the user access the tool and modify settings or seek information residing within the tool.

- Match : Accepts a regular expression describing a pattern such as 12 digits to search for FedEx Tracking Information
- Key : Accepts a key phrase to trigger the rule, and accepts input after that key, such as BestBuy Android Smart Watches
- Redirect : Accepts a key phrase that will trigger a redirect to the desired url, such as ne.d redirects to New Egg Desktops.
- GET : Accepts a key phrase to trigger the rule and places what comes after into the url, such as cart 12345 to place part number 12345 on amazon in your amazon cart.  This rule can be used interchangeably with a Key rule, this type is meant to create a distinction.
- POST : Same as GET but uses the POST method instead (Requires more technical experience with the target website to use effectively)

### More Coming Soon!
