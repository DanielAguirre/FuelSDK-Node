var util = require('util');
var helpers = require('../helpers');
	
/*
https://code.exacttarget.com/apis-sdks/fuel-sdks/tracking/open-tracking.html
*/	
	
var OpenEvent = function (parent, options) {
	
	this.parent = parent;
	this.objName = 'OpenEvent';
	
	this.config = options;
	options = options || {};
	this.options = options.options || {};
	this.props = options.props || {};   //props corresponds to the Objects attribute in the SOAP envelope.

};


OpenEvent.prototype.get = function(cb) {
	var filter = {filter: this.config.filter} || null;

	if (!this.props || helpers.isEmpty(this.props)) {
		cb({error: 'A property list is required for OpenEvent retrieval.', documentation: 'https://code.exacttarget.com/apis-sdks/fuel-sdks/list-subscribers/list-subscriber-retrieve.html'});
	} else {
		this.parent.SoapClient.retrieve(
			this.objName,
			this.props,
			filter,
			function( err, response ) {
				if ( err ) {
					cb( err );
				}
				cb(response);
			}
		);
	}		
};




module.exports = OpenEvent;