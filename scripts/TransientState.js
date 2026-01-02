const transientState = {
    governorId: null,
    facilityId: null,
    facilityMineralId: null,
    cart:[] 
}

export const setGovernor = (governorId) => {
    transientState.governorId = governorId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getGovernor = () => {
    return transientState.governorId
}

export const setFacility = (facilityId) => {
    transientState.facilityId = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getFacility = () => {
    return transientState.facilityId
}

export const setFacilityMineral = (facilityMineralId) => {
    transientState.facilityMineralId = facilityMineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getFacilityMineral = () => {
    return transientState.facilityMineralId
}

export const purchaseMineral = async () => {

    // 1. Get current selections from transient state (governor, facility, mineral)
    const selectedGovernor = getGovernor()
    const selectedFacility = getFacility()
    const selectedMineral = getFacilityMineral()
    
    // 2. Fetch the selected facility mineral to get quantityAvailable
    const facilityMineralResponse = await fetch(`http://localhost:8088/facilityMinerals/${selectedMineral}`)
    const facilityMineral = await facilityMineralResponse.json()
    
    // 3. Check if colony already has this mineral in colonyMinerals
    const governorsResponse = await fetch("http://localhost:8088/governors")
    const governors = await governorsResponse.json()
    const selectedGovernorData = governors.find(governor => governor.id === selectedGovernor)
    const colonyId = selectedGovernorData.colonyId
       
    const colonyMineralResponse = await fetch(`http://localhost:8088/colonyMinerals?colonyId=${colonyId}`)   
    const colonyMineral = await colonyMineralResponse.json()
    
    // 4. If record EXISTS: Use PUT to update existing colonyMineral
    const existingMineral = colonyMineral.find(cm => cm.mineralId === facilityMineral.mineralId)
    if (existingMineral) {
        const putOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: existingMineral.id,
                colonyId: existingMineral.colonyId,
                mineralId: existingMineral.mineralId,
                quantity: existingMineral.quantity + 1
            })
        }
        const updateResponse = await fetch(`http://localhost:8088/colonyMinerals/${existingMineral.id}`, putOptions)
    } else {
        // 5. If record DOES NOT EXIST: Use POST to create new colonyMineral
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                colonyId: colonyId,
                mineralId: facilityMineral.mineralId,
                quantity: 1
            })
        }
        const createResponse = await fetch(`http://localhost:8088/colonyMinerals`, postOptions)
    }
    
    // 6. Use PUT to update facilityMineral (decrease quantityAvailable)
    if (facilityMineral) {
        const putOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: facilityMineral.id,
                miningFacilityId: facilityMineral.miningFacilityId,
                mineralId: facilityMineral.mineralId,
                quantityAvailable: facilityMineral.quantityAvailable - 1
            })
        }
        const facilityUpdateResponse = await fetch(`http://localhost:8088/facilityMinerals/${facilityMineral.id}`, putOptions)
    }
    
    // 7. Trigger state change event
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const clearSelections = () => {
    //Clear facility selection 
        setFacility(null)
    //Clear mineral selection 
        setFacilityMineral(null)
    //Trigger the stateChanged event
    document.dispatchEvent(new CustomEvent("stateChanged"))
}