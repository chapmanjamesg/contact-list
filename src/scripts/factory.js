const factories = {
    //this will populate the DOM when called with a form to add new contacts
    populateHTML: () => {
        return `
        <h1>Contact List<h1>
            <form>
                <fieldset>
                    <label class="inputField" id="firstNameInput" for="firstName">First Name:</label>
                    <input type="text" name="firstName" id="firstName">
                </fieldset>
                <fieldset>
                    <label class="inputField" id="lastNameInput" for="lastName">last Name:</label>
                    <input type="text" name="lastName" id="lastName">
                </fieldset>   
                <fieldset>
                     <label class="inputField" id="phoneNumberInput" for="phoneNumber">Phone Number:</label>
                     <input type="text" name="phoneNumber" id="phoneNumber">
                </fieldset> 
                <fieldset>
                    <label class="inputField" id="addressInput" for="address">Address:</label>
                    <input type="text" name="address" id="address">
                 </fieldset>
            </form>
            <button type="button" id="recordContact">Record Contact</button>
        `
    },

    //made a factory function that will output the name, phone number, and address. this will later be used to POST things to the JSON server.
    createNewContact: (firstName, lastName, phoneNumber, address) => {
        return{
            "firstName": firstName,
            "lastName": lastName,
            "phoneNumber": phoneNumber,
            "address": address
        }
    },
    makeContactComponent: (entry) => {
        return `
        <h2 id="contacts--$${entry.id}"> Name: ${entry.firstName} ${entry.lastName}</h2>
            <div>Phone Number: ${entry.phoneNumber}</div>
            <aside> Address: ${entry.address}</aside>
        `
    }
}
export default factories