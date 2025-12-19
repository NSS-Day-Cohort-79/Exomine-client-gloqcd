import { governorChoices } from "./Governors.js"
import { facilityChoices } from "./miningFacilites.js"

import { setGovernor, setFacility } from "./TransientState.js"
facilityChoices
const container = document.querySelector("#container")
console.log("Container:", container)

const render = async () => {
  // Get the HTML select dropdowns
  const governorHTML = await governorChoices()
  const facilityHTML = await facilityChoices()
  
  // Combine both dropdowns into the page
  container.innerHTML = governorHTML + facilityHTML
  console.log("Container after insert:", container.innerHTML)

  // Add event listener for governor dropdown
  const governorSelect = document.querySelector("#governor-dropdown")
  governorSelect.addEventListener("change", (e) => {
    const governorId = e.target.value
    console.log("Selected governor:", governorId)
    setGovernor(governorId)
  })

  // Add event listener for facility dropdown
  const facilitySelect = document.querySelector("#facility")
  facilitySelect.addEventListener("change", (e) => {
    const facilityId = e.target.value
    console.log("Selected facility:", facilityId)
    setFacility(facilityId)
  })
}

// Initial call
render()