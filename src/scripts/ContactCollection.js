//these are the API calls that I will use to GET and POST things to the JSON server
const API =  {
    getAllContacts(){
        return fetch("http://localhost:8088/contacts")
        //the method GET is assumed if no other method is called
            .then(response => response.json())
    },
    saveContact(){
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
    }
}
//this is exporting the API function so that it can be used in other .js files
export default API