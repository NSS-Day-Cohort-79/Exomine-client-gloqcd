import { facilityChoices } from "./miningFacilites.js"

///import { facilityChoices } from "./miningFacilities.js"

const container = document.querySelector("#container")
console.log("Container:", container)

const render = async () => {
    // Get the HTML select dropdown
    const facilityHTML = await facilityChoices()
    
    container.innerHTML = facilityHTML
    console.log("Container after insert:", container.innerHTML)

    
    // Add event listener to the select
    const selectElement = document.querySelector("#facility")
    selectElement.addEventListener("change", (e) => {
        const facilityId = e.target.value
        console.log("Selected facility:", facilityId)
        // Handle facility selection 
    })
}

// Initial call
render()