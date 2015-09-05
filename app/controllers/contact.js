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
	controller.listContacts = function(req, res) {
		res.json(contacts);
	};
	return controller;
}