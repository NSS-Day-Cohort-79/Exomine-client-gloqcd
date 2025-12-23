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

export const purchaseMineral = () => {
    /*
        Does the chosen governor's colony already own some of this mineral?
            - If yes, what should happen?
            - If no, what should happen?

        Defining the algorithm for this method is traditionally the hardest
        task for teams during this group project. It will determine when you should use the method of POST, and when you should use PUT.

        Only the foolhardy try to solve this problem with code.
    */

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