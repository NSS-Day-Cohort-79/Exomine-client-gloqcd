import { getFacility } from "./TransientState.js"

export const handleMineralsChange = async () => {
    const facilityId = getFacility()
    const mineralsResponse = await fetch("http://localhost:8088/minerals")
    const minerals = await mineralsResponse.json() 
    
    const facilityMineralsResponse = await fetch("http://localhost:8088/facilityMinerals")
    const facilityMinerals = await facilityMineralsResponse.json()

        const mineralsAtFacility = facilityMinerals.filter(facilityMineral => facilityMineral.miningFacilityId === facilityId)
    
        const transformedMinerals = mineralsAtFacility.map(facilityMineral => {
        const mineral = minerals.find(mineral => mineral.id === facilityMineral.mineralId)
            return `<input type="radio" name="mineral" value="${facilityMineral.id}" id="mineral-${facilityMineral.id}">
            <label for="mineral-${facilityMineral.id}">${mineral.mineralName}: ${facilityMineral.quantityAvailable}</label>`
        })

       const mineralsAtFacilityHTML = transformedMinerals.join('') 

        const facilityMineralsHTML = `
        <div class="facility-minerals">
            <h2>Minerals at Facility</h2>
            <ul>
                ${mineralsAtFacilityHTML}
            </ul>  
        </div>
    `
   return facilityMineralsHTML
} 
