import { getRequests, deleteRequest } from "./dataAccess.js"



document.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("request")) {
            const [,requestId] = event.target.id.split("--")
            deleteRequest(parseInt(requestId))
        }
    }
)



export const RequestsServices = () => {
    const requests = getRequests()


    let sortedRequestsServices = requests.sort((a,b) => {
        return parseInt(a.dateOfParty.split("-").join("")) - parseInt(b.dateOfParty.split("-").join(""))
    });


    let html = '<ul>'

    const listItems = sortedRequestsServices.map(request => {
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