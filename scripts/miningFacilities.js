export const facilityChoices = async () => {
    const database = await fetch("http://localhost:8088/miningFacilities")
    const facilities = await database.json() 
    
    let HTML = '<select id="facility">'  
    HTML += '<option value="0">Choose a facility...</option>'
    
    for (const facility of facilities) {
        HTML += `<option value="${facility.id}">${facility.facilityName}</option>`
    }
    
    HTML += '</select>'
    return HTML
}