import { governorChoices } from "./Governors.js"
import { facilityChoices } from "./miningFacilites.js"
import { handleColoniesChange } from "./colonies.js"

import { setGovernor, setFacility } from "./TransientState.js"

const container = document.querySelector("#container")
const selectionsContainer = document.querySelector("#selections-container")
console.log("Container:", container)

const render = async () => {
  // Get the HTML select dropdowns
  const governorHTML = await governorChoices()
  const facilityHTML = await facilityChoices()
  
  // Put dropdowns in the selections container
  selectionsContainer.innerHTML = governorHTML + facilityHTML

  // Add event listener for governor dropdown
  const governorSelect = document.querySelector("#governor-dropdown")
  governorSelect.addEventListener("change", (e) => {
    const governorId = Number(e.target.value)
    setGovernor(governorId)
  })

  // Add event listener for facility dropdown
  const facilitySelect = document.querySelector("#facility")
  facilitySelect.addEventListener("change", (e) => {
    const facilityId = e.target.value
    setFacility(facilityId)
  })

  // Listen for state changes and update colonies display
  document.addEventListener("stateChanged", () => {
    console.log("stateChanged event fired!")
    handleColoniesChange()
  })
}

// Initial call
render()