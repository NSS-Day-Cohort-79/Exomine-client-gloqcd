// shoppingCart.js
// This module handles displaying the shopping cart with current selections
// Depends on: TransientState.js

import { getFacilityMineral } from "./TransientState.js"
import { buyButton } from "./buyButton.js"

export const handleShoppingCartChange = async () => {
  // Step 1: Read the selected facility mineral ID from transientState
  const facilityMineralId = getFacilityMineral()
  // Read buyButton from buyButton.js
  const buyButtonHTML = buyButton()
  
  // Step 2: If no facility mineral selected, return blank HTML
  if (!facilityMineralId) {
    return `<div class="shopping-cart">
      <h3>Space Cart</h3>
      <div>${buyButtonHTML}</div>
    </div>`
  }
  
  // Step 3: Fetch facility minerals to find the selected one
  const facilityMineralsResponse = await fetch("http://localhost:8088/facilityMinerals")
  const facilityMinerals = await facilityMineralsResponse.json()
  const selectedFacilityMineral = facilityMinerals.find(fm => fm.id === facilityMineralId)
  
  // Step 4: Get the mineral ID from the facility mineral
  const mineralId = selectedFacilityMineral.mineralId
  
  // Step 5: Fetch minerals to get the mineral name
  const mineralsResponse = await fetch("http://localhost:8088/minerals")
  const minerals = await mineralsResponse.json()
  const mineral = minerals.find(mineral => mineral.id === mineralId)
  
  // Step 6: Create the shopping cart HTML string displaying the selected mineral
  let cartHTML = `<div class="shopping-cart"> 
  <h3>Space Cart</h3> 
   <div class="cart-item">
   <p>${mineral.mineralName}</p>
   </div>
   <div class="cart-summary">
   <p><strong>Quantity:</strong> 1 ton</p>
   </div>
   <div>${buyButtonHTML}</div>
   </div>`
  
  // Step 7: Return the HTML to be displayed in main.js
  return cartHTML
}