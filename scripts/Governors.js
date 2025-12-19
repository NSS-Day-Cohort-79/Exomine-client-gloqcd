import { setGovernor } from "./TransientState.js"

// Function to fetch governors and generate dropdown HTML
export const governorChoices = async () => {
  // Step 1: Make the API request
  const response = await fetch("http://localhost:8088/governors")
  
  // Step 2: Convert the response to JSON (JavaScript object)
  const governors = await response.json()
  
  // Step 3: Create the dropdown HTML string
  let dropdownHTML = `<select id="governor-dropdown">`
  dropdownHTML += `<option value="">Select a Governor</option>`
  
  // Step 4: Loop through each governor and add it to the HTML
  governors.forEach((governor) => {
    const fullName = `${governor.firstName} ${governor.lastName}`
    dropdownHTML += `<option value="${governor.id}" data-governor-id="${governor.id}">
      ${fullName}
    </option>`
  })
  
  dropdownHTML += `</select>`
  
  // Step 5: Return the HTML string
  return dropdownHTML
}

