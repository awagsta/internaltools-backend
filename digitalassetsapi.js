/**
 * The ExpressJS namespace.
 * @external ExpressApplicationObject
 * @see {@link http://expressjs.com/3x/api.html#app}
 */ 

/**
 * Mobile Cloud custom code service entry point.
 * @param {external:ExpressApplicationObject}
 * service 
 */

 var assets = require("./databaseTables/assets.js");
 var pillars = require("./databaseTables/pillars.js");
 var industries = require("./databaseTables/industries.js");
 var hubsters = require("./databaseTables/hubsters.js");
 var cloudServices = require("./databaseTables/cloud-services.js");

module.exports = function(service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */


	/**
	 * Insert an asset into the database.
	 */
	service.post('/mobile/custom/DigitalAssetsAPI/assets', assets.post(req,res));

	/**
	 * Get all assets from the database.
	 */
	service.get('/mobile/custom/DigitalAssetsAPI/assets', assets.getAll(req,res));

	/**
	 * Get an asset by id from the database.
	 */
	service.get('/mobile/custom/DigitalAssetsAPI/assets/:id', assets.getId(req, res));

	/**
	 * Insert a combination of pillars into the database.
	 */
	service.post('/mobile/custom/DigitalAssetsAPI/pillars', pillars.post(req, res));

	/**
	 * Get all pillar types from the database.
	 */
	service.get('/mobile/custom/DigitalAssetsAPI/pillars', pillars.getAll(req, res));

	/**
	 * Get a pillar by id from the database.
	 */
	service.get('/mobile/custom/DigitalAssetsAPI/pillars/:id', pillars.getId(req, res));

	/**
	 * Insert a combination of industries into the database.
	 */
	service.post('/mobile/custom/DigitalAssetsAPI/industries', industries.post(req, res));

	/**
	 * Get all industry types from the database.
	 */
	service.get('/mobile/custom/DigitalAssetsAPI/industries', industries.getAll(req, res));

	/**
	 * Get industry by id from the database.
	 */
	service.get('/mobile/custom/DigitalAssetsAPI/industries/:id', industries.getId(res, req));

	/**
	 * Insert a new combination of hubsters into the database.
	 */
	service.post('/mobile/custom/DigitalAssetsAPI/hubsters', hubsters.post(req,res));

	/**
	 * Get all hubster names from the database.
	 */
	service.get('/mobile/custom/DigitalAssetsAPI/hubsters', hubsters.getAll(req, res));

	/**
	 * Get name of a hubster from the database.
	 */
	service.get('/mobile/custom/DigitalAssetsAPI/hubsters/:id', hubsters.getId(req, res));

	/**
	 * Create new combination of cloud services in the database.
	 */
	service.post('/mobile/custom/DigitalAssetsAPI/cloud-services', cloudServices.post(req, res));

	/**
	 * Get names of all cloud services from the database.
	 */
	service.get('/mobile/custom/DigitalAssetsAPI/cloud-services', cloudServices.getAll(req, res));

	/**
	 * Get cloud service by id from the database.
	 */
	service.get('/mobile/custom/DigitalAssetsAPI/cloud-services/:id', cloudServices.getId(req, res));
};