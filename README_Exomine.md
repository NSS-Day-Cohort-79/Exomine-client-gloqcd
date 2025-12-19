# Star Forge Exchange

This is an exchange site used by Governors of different colonies to purchase Minerals from available mining facilites for their respected colony.

## Description

The proper way to use this site is to first Load said site and select a Governor via a dropdown list. Each Governor belongs to a Colony thought multiple can belong to a singular Colony. Then you should select a mining facility via a dropdown list. This will then load a list of minerals available at said Mining Facility. Each mineral will have a mineral name and quantity. And will only appear if their are enough sellable items for that mineral. You will then add each desired mineral to your cart, which can only be selected one ton at a time. You should then see the selected minerals in your checkout cart. Once you then click the buy button the previously selected items in the facility inventory will clear, the cart will clear, and you will now see your purchased minerals in the respected colony inventory. Now you can then start the process over picking your desired governor, facility, and then purchasing which ever minerals you'd prefer.

## Getting Started
Exomine - Space Mining Management System
Getting Started
Prerequisites
Before you begin, make sure you have the following installed on your computer:

Node.js (version 14 or higher)

Download from nodejs.org
To check if you have it installed, open your terminal and type: node --version


npm (comes with Node.js)

Check version with: npm --version


A code editor like Visual Studio Code (recommended)
A modern web browser (Chrome, Firefox, Edge, or Safari)

Installation
Follow these steps to get Exomine running on your local machine:

Clone or download the project

bash   # If using git:
   git clone <your-repository-url>
   cd exomine
   

# Run the server
http-server -p 8080
Option C: Using VS Code Live Server Extension

Install the "Live Server" extension in VS Code
Right-click on index.html
Select "Open with Live Server"

Step 3: Open the Application
Once both servers are running, open your web browser and go to:
http://localhost:8080
You should see the Exomine interface with dropdowns for governors and mining facilities!
Setting Up Your Database
Your database.json file should contain the initial data structure. Here's an example:
json{
  "governors": [
    {
      "id": 1,
      "name": "Commander Sarah Chen",
      "active": true,
      "colonyId": 1
    }
  ],
  "colonies": [
    {
      "id": 1,
      "name": "Mars Colony Alpha",
      "minerals": []
    }
  ],
  "minerals": [
    {
      "id": 1,
      "name": "Iron Ore",
      "value": 100
    }
  ],
  "miningFacilities": [
    {
      "id": 1,
      "name": "Valles Marineris Mine",
      "location": "Mars",
      "active": true,
      "minerals": []
    }
  ]
}
Troubleshooting
Problem: "Cannot GET /" or blank page

Make sure you're running a web server (Step 2 above)
Don't just open index.html directly in your browser

Problem: API requests fail or no data loads

Check that JSON Server is running on port 8088
Look in your browser's console (F12) for error messages
Verify your API URLs in the JavaScript files match http://localhost:8088

Problem: Port already in use

Change the port numbers in the commands above (e.g., use 8089 or 3000)
Update any hardcoded port numbers in your JavaScript files

Problem: CORS errors

This shouldn't happen with JSON Server, but if it does, make sure you're accessing the app through a web server (not file://)

Next Steps
Once you have the application running:

Select a governor from the dropdown
Choose a mining facility
Pick a mineral to mine
Click "Purchase Mineral" to add it to your colony's inventory
View your colony's mineral collection in the "Bought List" section

Development Tips

Keep both terminal windows open while developing
JSON Server will automatically reload when you edit database.json
Refresh your browser to see changes to your JavaScript or HTML files
Use browser Developer Tools (F12) to debug JavaScript issues
Check the Console tab for error messages
Use the Network tab to see API requests and responses

Stopping the Application
To stop running the application:

In the JSON Server terminal: Press Ctrl + C
In the web server terminal: Press Ctrl + C

### Dependencies
* **Operating System**: Windows 10 or later, macOS 10.15 or later, or Ubuntu 18.04 LTS or later
* **Runtime/Language**: [Node.js 16+ with npm](https://nodejs.org/) OR [Python 3.8+](https://www.python.org/downloads/) (depending on your project)
* **Database**: PostgreSQL 12+ (if your project uses a database)
* **Other Tools**: Git for version control, Docker (optional, for containerized development)

**Installation Instructions**:
1. Install Node.js from nodejs.org (this includes npm automatically)
2. Clone the repository: `git clone [your-repo-url]`
3. Navigate to the project folder: `cd [Exomine-client-gloqcd]`
4. Install project dependencies: `npm install`

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

Jordan Haddock
Gmailhaddock@gmail.com

Dakota Seagraves 
GmailSeagraves@gmail.com

Maggie Flatt
Gmailflatt@gmail.com

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)