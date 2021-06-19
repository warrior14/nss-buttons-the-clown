import { ClownService } from "./ClownService.js"
import { fetchRequests } from "./dataAccess.js"

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

