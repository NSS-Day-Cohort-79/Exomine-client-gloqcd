# main.js
1. import html functions from governors, miningFacilities, colonies, buyButton, and boughtList.js
2. document.querySelector(#container)
3. render all of our html

# governors.js
1. Import setGovernor() from transientState 
2. HandleGovernorChange function - changeEvent
3. define and export governorChoices() function that fetches governor array from database.json and creates governor html and has drop down menu of listed governors with select element

# colonies.js
1. define and export ColonyInventory() function that fetches colonyInventory array from database.json and lists bought minerals inventory
2. import boughtList()
3. using a for of(loop)to decide which governor belongs to which colony and whether they are active

# minerals.js
1. Import setMinerals() from transientState 
2. HandleMineralChange function - changeEvent
3. def (loop)ine and export mineralChoices() function that fetches mineral array from database.json and creates mineral html and has drop down menu of listed minerals with select element

# miningFacilities.js
1. Import setMiningFacility() from transientState 
2. HandleFacilityChange function - changeEvent
3. def(loop)ine and export facilityChoices() function that fetches facility array from database.json and creates facility html and has drop down menu of listed facilities with select element
4. requires a for of(loop) to determine the type, quantity, and availability of minerals sold.

# shoppingCart.js 
1. define and create shoppingCart() function that exports and creates shopping cart html
2. needs to know what has been clicked from transient state
3. returns html to be accessed in main.js


# buyButton.js
1. define and export buyButton() function that creates button HTML. clear shopping cart once purchased. push to boughtList
2. needs to know what has been selected and update database
3. calls addBoughtMinerals() and subtractFromMinedMinerals() when purchase button is clicked 
4. requires a for of(loop) with an if statement to determine which mineral is added and subtracted from and where.

# transientState.js
1. Create transient State object
2. Create and export setGovernor, setFacility, setMineral
3. Create and export saveMineralPurchase PUT request

# boughtList.js
1. define and export boughtList() function that builds html to show what was bought and how much. display updated inventory
2. Name of colony should change depending on governor selected

# Database.json
1. set up database.json in api folder with arrays of governors, colonies, facilities, and minerals 