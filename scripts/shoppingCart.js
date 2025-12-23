// shoppingCart.js
// This module handles displaying the shopping cart with current selections
// Depends on: TransientState.js

import { getGovernor, getFacility, getMineral } from "./TransientState.js"

export const handleShoppingCartChange = async () => {
  // Read current selections from transientState
  const governorId = getGovernor()
  const facilityId = getFacility()
  const mineralId = getMineral()
  
  // Get governor name
  let governorName = "Not selected"
  if (governorId) {
    const governorsResponse = await fetch("http://localhost:8088/governors")
    const governors = await governorsResponse.json()
    const governor = governors.find(governor => governor.id === governorId)
    governorName = `${governor.firstName} ${governor.lastName}`
  }
  
  // Get facility name
  let facilityName = "Not selected"
  if (facilityId) {
    const facilitiesResponse = await fetch("http://localhost:8088/miningFacilities")
    const facilities = await facilitiesResponse.json()
    const facility = facilities.find(f => f.id === Number(facilityId))
    facilityName = facility.facilityName
  }
  
  // Get mineral name
  let mineralName = "Not selected"
  if (mineralId) {
    const mineralsResponse = await fetch("http://localhost:8088/minerals")
    const minerals = await mineralsResponse.json()
    const mineral = minerals.find(m => m.id === mineralId)
    mineralName = mineral.mineralName
  }
  
  // Generate HTML showing current selections
  const cartHTML = `
    <div class="shopping-cart">
      <h3>Space Cart</h3>
      <div class="cart-selections">
        <div class="cart-item">
          <label>Governor:</label>
          <p>${governorName}</p>
        </div>
        <div class="cart-item">
          <label>Facility:</label>
          <p>${facilityName}</p>
        </div>
        <div class="cart-item">
          <label>Mineral:</label>
          <p>${mineralName}</p>
        </div>
      </div>
      <div class="cart-summary">
        <p><strong>Quantity:</strong> 1 ton</p>
      </div>
    </div>
  `
  
  // Update the DOM with the generated HTML
  const cartContainer = document.querySelector("#space-cart")
  cartContainer.innerHTML = cartHTML
}