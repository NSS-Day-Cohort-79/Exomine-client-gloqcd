import { governorChoices } from "./Governors.js"
import { facilityChoices } from "./miningFacilites.js"
import { handleColoniesChange } from "./colonies.js"
import { handleMineralsChange } from "./minerals.js"

import { setGovernor, setFacility } from "./TransientState.js"

const container = document.querySelector("#container")
const selectionsContainer = document.querySelector("#selections-container")
const colonyContainer = document.querySelector("#colony-container")
const facilityMineralsContainer = document.querySelector("#facility-minerals")

console.log("Container:", container)

const render = async () => {
  // Get the HTML select dropdowns
  const governorHTML = await governorChoices()
  const facilityHTML = await facilityChoices()
  const facilityMineralsHTML = await handleMineralsChange()
  
  // Put dropdowns in the selections container
  selectionsContainer.innerHTML = governorHTML + facilityHTML
  facilityMineralsContainer.innerHTML = facilityMineralsHTML

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

  // Listen for state changes and update colonies display
  document.addEventListener("stateChanged", async () => {
    console.log("stateChanged event fired!")
    const colonyHTML = await handleColoniesChange()
    const mineralsHTML = await handleMineralsChange()

    colonyContainer.innerHTML = colonyHTML
    facilityMineralsContainer.innerHTML = mineralsHTML
  })
}

// Initial call
render()