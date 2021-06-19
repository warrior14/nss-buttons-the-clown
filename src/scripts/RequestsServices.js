import { getRequests } from "./dataAcess.js"

export const RequestsServices = () => {
    const requests = getRequests()

    let html = '<ul>'

    const listItems = requests.map(request => {
                        return `<li>
                            Party of ${request.childrenAttending} for ${request.childName} on ${request.dateOfParty}  
                            <button class="request__delete" id="request--${request.id}">
                                Deny
                            </button>    
                        </li>`
    })

    html += listItems.join("")
    html += '</ul>'

    return html
}