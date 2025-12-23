import { governorChoices } from "./Governors.js"
import { facilityChoices } from "./miningFacilities.js"
import { handleColoniesChange } from "./colonies.js"
import { handleMineralsChange } from "./minerals.js"
import { handleShoppingCartChange } from "./shoppingCart.js"
import { setGovernor, setFacility, setFacilityMineral } from "./TransientState.js"

const selectionsContainer = document.querySelector("#selections-container")
const colonyContainer = document.querySelector("#colony-container")
const facilityMineralsContainer = document.querySelector("#facility-minerals")
const shoppingCartContainer = document.querySelector("#shopping-cart")


const render = async () => {
  // Get the HTML select dropdowns
  const governorHTML = await governorChoices()
  const facilityHTML = await facilityChoices()
  const facilityMineralsHTML = await handleMineralsChange()
  const shoppingCartHTML = await handleShoppingCartChange()
  
  
  // Put dropdowns in the selections container
  selectionsContainer.innerHTML = governorHTML + facilityHTML
  facilityMineralsContainer.innerHTML = facilityMineralsHTML
  shoppingCartContainer.innerHTML = shoppingCartHTML

  // Add event listener for governor dropdown
  const governorSelect = document.querySelector("#governor-dropdown")
  governorSelect.addEventListener("change", (e) => {
    const governorId = Number(e.target.value)
    setGovernor(governorId)
  })

  // Add event listener for facility dropdown
  const facilitySelect = document.querySelector("#facility")
  facilitySelect.addEventListener("change", (e) => {
    const facilityId = Number(e.target.value)
    
    setFacility(facilityId)
  })

// Add event listeners for mineral radio buttons
  const mineralRadios = document.querySelectorAll('input[name="mineral"]')
  mineralRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      const facilityMineralId = Number(e.target.value)
      setFacilityMineral(facilityMineralId)
    })
  })

  // Listen for state changes and update colonies display
  document.addEventListener("stateChanged", async () => {
  document.addEventListener("stateChanged", async () => {
    console.log("stateChanged event fired!")
    const colonyHTML = await handleColoniesChange()
    const mineralsHTML = await handleMineralsChange()

    colonyContainer.innerHTML = colonyHTML
    facilityMineralsContainer.innerHTML = mineralsHTML

    // Re-attach event listeners for mineral radio buttons after minerals update
    const newMineralRadios = document.querySelectorAll('input[name="mineral"]')
    newMineralRadios.forEach(radio => {
      radio.addEventListener("change", (e) => {
        const facilityMineralId = Number(e.target.value)
        setFacilityMineral(facilityMineralId)
      })
    })
    // Update shopping cart when state changes (mineral selected)
 const shoppingCartHTML = await handleShoppingCartChange()
 if (shoppingCartHTML) {
 shoppingCartContainer.innerHTML = shoppingCartHTML
  }
})
})
}
 // Initial call
render()