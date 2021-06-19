import { ClownService } from "./ClownService.js"
import { deleteRequest, fetchRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ClownService()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    event => {
        render()
    }
)

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("request")) {
            const [,requestId] = event.target.id.split("--")
            deleteRequest(parseInt(requestId))
        }
    }
)