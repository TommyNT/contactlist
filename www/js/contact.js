function init() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	console.log(navigator.contacts);
}

function onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
};

function onError(contactError) {
    alert('onError!');
};

// find all contacts with 'Bob' in any name field
var options      = new ContactFindOptions();
options.desiredFields = [navigator.contacts.fieldType.name];
options.hasPhoneNumber = true;
var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name, navigator.contacts.fieldType.phoneNumbers
];
navigator.contacts.find(fields, onSuccess, onError, options);