import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numberOfKids">Number of children attending the party</label>
            <input type="number" name="numberOfKids" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address of party</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date of reservation</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="lengthInHours">Length of party in hours</label>
            <input type="number" name="lengthInHours" class="input" />
        </div>
        <button class="button" id="submitRequest">Submit Reservation</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value
        const numberOfKids = document.querySelector("input[name='numberOfKids']").value
        const address = document.querySelector("input[name='address']").value
        const serviceDate = document.querySelector("input[name='serviceDate']").value
        const lengthInHours = document.querySelector("input[name='lengthInHours']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: parentName,
            childName: childName,
            childrenAttending: numberOfKids,
            partyAddress: address,
            dateOfParty: serviceDate,
            partyLength: lengthInHours
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})