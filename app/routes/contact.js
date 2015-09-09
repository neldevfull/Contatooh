// app/routes/contact.js
module.exports = function(app) {
	var controller = app.controllers.contact;
	// Config routes
	app.route('/contacts')
		.get(controller.getContacts)
		.post(controller.saveContact);
		
	app.route('/contacts/:id') 
		.get(controller.getContact)
		.delete(controller.removeContact);
}; 