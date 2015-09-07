// app/controllers/contatc.js
var contacts = [
	{
		_id: 1, name: 'Contact Example 1',
		email: 'cont1@company.com'
	},
	{
		_id: 2, name: 'Contact Example 2',
		email: 'cont2@company.com'	
	},
	{
		_id: 3, name: 'Contact Example 3',
		email: 'cont3@company.com'	
	}
];

module.exports = function() {
	var controller = {};
	// Response contacts list
	controller.listContacts = function(req, res) {
		res.json(contacts);
	};
	// Get contact
	controller.getContact = function(req, res) {
		var contact = contacts.filter(function(contact) {
			return contact._id = req.params.id
		})[0];
			contact ?
				res.json(contact) :
				res.status(404).send('Contact not found'); 
	}
	return controller;
} 