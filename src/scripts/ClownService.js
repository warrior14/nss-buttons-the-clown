import { RequestsServices } from "./RequestsServices.js"
import { ServiceForm } from "./ServiceForm.js"


export const ClownService = () => {
    return `
    <h1>Buttons Clown Rentals</h1>
    <section class="serviceForm">
    ${ServiceForm()}
    </section>
    <section class="reservations">
        <h2>Requests Services</h2>
    ${RequestsServices()}
    </section>
    `
}