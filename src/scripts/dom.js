import factories from "./factory";

let contactEntries = ""
const renderHTML = {
    fillHTML: () => {
        let formContainer = document.querySelector("#display-container")
        formContainer.innerHTML = factories.populateHTML()
    },
    addHTML: (contacts) => {
        let contactContainer = document.querySelector("#display-container2");
        contactContainer.innerHTML = ""
        for (let i = 0; i< contacts.length; i++){
            contactEntries = contacts[i];
            contactEntries.innerHTML += factories.makeContactComponent(contactEntries)
        }
    }
}

export default renderHTML;