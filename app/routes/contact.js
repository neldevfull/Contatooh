// app/routes/contact.js
module.exports = function(app) {
	var controller = app.controllers.contact;
	app.get('/contacts', controller.getContacts);
	app.get('/contacts/:id', controller.getContact);
}