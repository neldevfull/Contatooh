// app/controllers/contatc.js
var contacts   = [
	{
		_id: 1,
		name: 'contact 1',
		email: 'cont1@gmail.com'
	},
	{
		_id: 2,
		name: 'contact 2',
		email: 'cont2@gmail.com'
	},
	{
		_id: 3,
		name: 'contact 3',
		email: 'cont3@gmail.com'
	}
];
var ID_CONTACT = 3; 

module.exports = function() { 
	var controller = {}; 
	// Get Contacts list 
	controller.getContacts = function(req, res) {
		res.json(contacts);
	};
	// Get Contact 
	controller.getContact = function(req, res) {
		var idContact = req.params.id; 
		var contact = contacts.filter(function(contact) {
			return contact._id == idContact;  
		})[0];		
		contact ? res.json(contact) :
			res.status(404).send('Contact not found');
	}; 
	// Remove Contact
	controller.removeContact = function(req, res) {				
		var idContact = req.params.id;
		var contactR  = '';
		contacts = contacts.filter(function(contact) {
			if(contact._id == idContact)
				contactR = contact; 
			return contact._id != idContact;
		});				
		res.json(contactR);
	}; 
	// Save Contact
	controller.saveContact = function(req, res) {
		var contact = req.body;
		contact = contact._id ?
			update(contact) :
			insert(contact);
		res.json(contact);
	};
	// Insert Contact
	function insert(contactNew) {
		contactNew._id = ++ID_CONTACT;
		contacts.push(contactNew);
		return contactNew;
	}
	// Update Contact
	function update(contactUp) {
		contacts = contacts.map(function(contact) {
			if(contact._id == contactUp._id)
				contact = contactUp;
			return contact;
		});
		return contactUp; 
	}
	return controller;   
}  