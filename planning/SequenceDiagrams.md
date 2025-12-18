```mermaid

sequenceDiagram

Title: main

   participant Browser
    participant main.js
    participant governors.js
    participant miningFacilities.js
    participant minerals.js
    participant colonies.js
    participant buyButton.js
    participant boughtList.js
    participant shoppingCart.js
    participant API as JSON Server API
    participant DB as database.json
    participant DOM
    participant User

    Browser->>main.js: Load and execute
    main.js->>main.js: Call render()
    
    main.js->>governors.js: Call governorChoices()
    governors.js->>API: GET request to /governors
    API->>DB: Read governors data
    DB-->>API: Return governors array
    API-->>governors.js: Return governor data
    governors.js->>governors.js: Generate HTML
    governors.js-->>main.js: Return generated HTML
    
    main.js->>miningFacilities.js: Call facilityChoices()
    miningFacilities.js->>API: GET request to /miningFacilities
    API->>DB: Read miningFacilities data
    DB-->>API: Return miningFacilities array
    API-->>miningFacilities.js: Return facility data
    miningFacilities.js->>miningFacilities.js: Generate HTML
    miningFacilities.js-->>main.js: Return generated HTML
    
    main.js->>colonies.js: Call Colonies()
    colonies.js->>API: GET request to /colonies
    API->>DB: Read colonies data
    DB-->>API: Return colonies array
    API-->>colonies.js: Return colonies data
    colonies.js->>colonies.js: Generate HTML
    colonies.js-->>main.js: Return generated HTML
    
    main.js->>buyButton.js: Call buyButton()
    buyButton.js->>buyButton.js: Generate HTML
    buyButton.js-->>main.js: Return generated HTML
    
    main.js->>boughtList.js: Call boughtList()
    boughtList.js->>API: GET request to /colonies
    API->>DB: Read colonies data
    DB-->>API: Return colonies array
    API-->>boughtList.js: Return colonies data
    boughtList.js->>boughtList.js: Generate HTML
    boughtList.js-->>main.js: Return generated HTML
    
    main.js->>shoppingCart.js: Call shoppingCart()
    shoppingCart.js->>shoppingCart.js: Generate HTML
    shoppingCart.js-->>main.js: Return generated HTML
    
    main.js->>main.js: Combine HTML from all components
    main.js->>DOM: Update innerHTML
    DOM-->>User: Display rendered HTML

```
-----------------------------------------------------
-----------------------------------------------------
-----------------------------------------------------

 ```mermaid

 sequenceDiagram

    Title: Governors Sequence
   
    participant User
    participant DOM
    participant main.js
    participant governors.js
    participant transientState.js
    participant colonies.js
    participant API as JSON Server API
    participant DB as database.json

    User->>DOM: Selects governor from dropdown
    DOM->>main.js: Event listener detects change
    main.js->>governors.js: Call handleGovernorChange()
    governors.js->>transientState.js: Call setGovernor(governorId)
    transientState.js->>transientState.js: Update state and trigger "stateChanged" event
    main.js->>main.js: Event listener detects "stateChanged"
    main.js->>colonies.js: Call handleColoniesChange()
    colonies.js->>API: GET request to /colonies
    API->>DB: Read colonies data
    DB-->>API: Return colonies array
    API-->>colonies.js: Return colonies data
    colonies.js->>colonies.js: Generate HTML with colonies data
    colonies.js->>DOM: Update innerHTML with new colonies


```

-----------------------------------------------------
-----------------------------------------------------
-----------------------------------------------------


```mermaid

sequenceDiagram

Title: Mining Facilities 

    participant User
    participant DOM
    participant main.js
    participant miningFacilities.js
    participant transientState.js
    participant minerals.js
    participant API as JSON Server API
    participant DB as database.json

    User->>DOM: Selects facility from dropdown
    DOM->>main.js: Event listener detects change
    main.js->>miningFacilities.js: Call handleFacilityChange()
    miningFacilities.js->>transientState.js: Call setFacility(facilityId)
    transientState.js->>transientState.js: Update state and trigger "stateChanged" event
    main.js->>main.js: Event listener detects "stateChanged"
    main.js->>minerals.js: Call handleMineralsChange()
    minerals.js->>API: GET request to /minerals
    API->>DB: Read minerals data
    DB-->>API: Return minerals array
    API-->>minerals.js: Return minerals data
    minerals.js->>minerals.js: Generate HTML with minerals data
    minerals.js->>DOM: Update innerHTML with new minerals

```

-----------------------------------------------------
-----------------------------------------------------
-----------------------------------------------------

```mermaid
    sequenceDiagram
Title: Minerals

    participant User
    participant DOM
    participant main.js
    participant minerals.js
    participant transientState.js
    participant shoppingCart.js

    User->>DOM: Clicks on mineral radio button
    DOM->>main.js: Event listener detects change
    main.js->>minerals.js: Call handleMineralChange()
    minerals.js->>transientState.js: Call setMineral(mineralId)
    transientState.js->>transientState.js: Update state and trigger "stateChanged" event
    main.js->>main.js: Event listener detects "stateChanged"
    main.js->>shoppingCart.js: Call handleShoppingCartChange()
    shoppingCart.js->>transientState.js: Read selected mineral from state
    shoppingCart.js->>shoppingCart.js: Generate HTML with selected mineral
    shoppingCart.js->>DOM: Update innerHTML with shopping cart

```
-----------------------------------------------------
-----------------------------------------------------
-----------------------------------------------------

```mermaid

sequenceDiagram

Title: Buy-Button

    participant User
    participant DOM
    participant main.js
    participant buyButton.js
    participant transientState.js
    participant API as JSON Server API
    participant DB as database.json
    participant colonies.js
    participant miningFacilities.js
    participant boughtList.js

    User->>DOM: Clicks Purchase Mineral button
    DOM->>main.js: Event listener detects click
    main.js->>buyButton.js: Call handlePurchase()
    buyButton.js->>transientState.js: Read selections (governor, facility, mineral)
    buyButton.js->>API: PUT request to update colonies
    API->>DB: Update Colony_Minerals table
    DB-->>API: Confirm update
    buyButton.js->>API: PUT request to update mining facility
    API->>DB: Update Mined_Minerals table
    DB-->>API: Confirm update
    buyButton.js->>buyButton.js: Trigger customEvent "purchaseComplete" event
    main.js->>main.js: Event listener detects customEvent "purchaseComplete"
    main.js->>colonies.js: Call handleColoniesChange()
    colonies.js->>API: GET request to /colonies
    API-->>colonies.js: Return updated colonies data
    colonies.js->>DOM: Update innerHTML with updated inventory
    main.js->>miningFacilities.js: Call handleFacilitiesChange()
    miningFacilities.js->>API: GET request to /miningFacilities
    API-->>miningFacilities.js: Return updated facilities data
    miningFacilities.js->>DOM: Update innerHTML with updated facility inventory
    main.js->>boughtList.js: Call handleBoughtListChange()
    boughtList.js->>API: GET request to /colonies
    API-->>boughtList.js: Return updated colonies data
    boughtList.js->>DOM: Update innerHTML with updated purchase history
    main.js->>buyButton.js: Call handleClearCart()
    buyButton.js->>transientState.js: Call clearSelections()
    transientState.js->>transientState.js: Clear mineral and facility (keep governor)

```