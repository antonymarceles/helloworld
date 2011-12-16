Ti.UI.backgroundColor = '#ddd';

var forms = require('forms');
var fields = [
	{ title:'Name', type:'text', id:'name' },
	{ title:'Email', type:'email', id:'email' },
	{ title:'Address', type:'text', id:'address' },
	{ title:'City', type:'text', id:'city' },
	/* { title:'State', type:'picker', id:'state', data: [
		'Alabama', 'Alaska', 'Arizona',	'Arkansas',
		'California', 'Colorado', 'Connecticut', 'Delaware',
		'Florida', 'Georgia', 'Hawaii',	'Idaho',
		'Illinois',	'Indiana', 'Iowa', 'Kansas',
		'Kentucky',	'Louisiana', 'Maine', 'Maryland',
		'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
		'Missouri',	'Montana', 'Nebraska', 'Nevada',
		'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
		'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
		'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
		'South Dakota', 'Tennessee', 'Texas', 'Utah',
		'Vermont', 'Virginia', 'Washington', 'West Virginia' 
	] }, 
	{ title:'Zip Code', type:'number', id:'zip' },
	{ title:'Phone', type:'phone', id:'phone' },
	{ title:'Password', type:'password', id:'password' },
	{ title:'Birthday', type:'date', id:'birthday' },*/
	{ title:'Submit', type:'submit', id:'registerUser' }
];

exports.login_form = function() {
	var form1 = forms.createForm({
		style: forms.STYLE_HINT,
		fields: fields
	});
	form1.addEventListener('registerUser', function(e) {
		var dbconnwin1 = Ti.Database.open('mydb1');

		dbconnwin1.execute('CREATE TABLE IF NOT EXISTS user_details(id INTEGER PRIMARY KEY, name VARCHAR(16) NOT NULL, email VARCHAR(40), address VARCHAR(100), city VARCHAR(20))');

		dbconnwin1.execute('INSERT INTO DATABASETEST (id, name, email, address, city ) VALUES(?,?,?,?,?,?)',1, name.value, email.value, address.value, city.value);
	});
	return form1; 
}

