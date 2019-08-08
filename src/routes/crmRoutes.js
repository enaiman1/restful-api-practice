import { 
    addNewContact, 
    getContact, 
    getContactWithID, 
    updateContact,
    deleteContact, 
} from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) =>{
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request from: ${req.method}`)
        next();
    }, getContact)
    //post end point
    .post(addNewContact);

    app.route('/contact/:contactId')
    //get specific contact
    .get(getContactWithID)

    // put request
    .put(updateContact)

    // delete request
    .delete(deleteContact);
}

export default routes;