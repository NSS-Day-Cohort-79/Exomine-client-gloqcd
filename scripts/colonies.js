import { getGovernor } from "./TransientState.js"

export const handleColoniesChange = async () => {
    //reads selected governor Id from transientState
    const selectedGovernorId = getGovernor()
    
    //Fetches the governor's colony_id from the Governors endpoint 
    const governorsResponse = await fetch("http://localhost:8088/governors")
    const governors = await governorsResponse.json()

    const selectedGovernor = governors.find(governor => governor.id === selectedGovernorId)
    
    // Fetches that specific colony's data and mineral inventory from /Colonies endpoint
    const colonyId = selectedGovernor.colonyId
    const coloniesResponse = await fetch(`http://localhost:8088/colonies/${colonyId}`)
    const selectedColony = await coloniesResponse.json()
    
    const colonyMineralsResponse = await fetch(`http://localhost:8088/colonyMinerals?colonyId=${colonyId}`)
    const colonyMinerals = await colonyMineralsResponse.json()
    
    // Fetches all minerals to get mineral names
    const mineralsResponse = await fetch("http://localhost:8088/minerals")
    const minerals = await mineralsResponse.json()
    
    // Generates HTML to display only that colony and its minerals
    let mineralsHTML = ""
    
    if (colonyMinerals.length > 0) {
        const mineralsList = colonyMinerals.map(colonyMineral => {
            const mineral = minerals.find(mineral => mineral.id === colonyMineral.mineralId)
            return `<li>${mineral.mineralName}: ${colonyMineral.quantity}</li>`
        })
        mineralsHTML = mineralsList.join('')
    }
    
    const colonyHTML = `
        <div class="colony-card">
            <h2>${selectedColony.colonyName}</h2>
            <ul>
                ${mineralsHTML}
            </ul>
        </div>
    `
    
    // Updates the DOM with the generated HTML
    const colonyContainer = document.getElementById('colony-container')
    colonyContainer.innerHTML = colonyHTML
}