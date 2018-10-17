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
module.exports = function(service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */


	service.post('/mobile/custom/DigitalAssetsAPI/assets', function(req,res) {
		var rowData = req.body;
		req.oracleMobile.database.insert('Assets', rowData).then(
			function(result){
				res.status(result.statusCode).send(result.result);
			},
			function(error){
				res.status(error.statusCode).send(error.error);
			}
		);
	});

	service.get('/mobile/custom/DigitalAssetsAPI/assets', function(req,res) {
		req.oracleMobile.database.getAll('Assets').then(
			function (result){
				res.status(result.statusCode).send(result.result);
			},
			function (error) {
				res.status(error.statusCode).send(error.error);
			}
		);
	});

	service.post('/mobile/custom/DigitalAssetsAPI/pillars', function(req,res) {
		var rowData = req.body;
		req.oracleMobile.database.insert('Pillars', rowData).then(
			function(result){
				res.status(result.statusCode).send(result.result);
			},
			function(error){
				res.status(error.statusCode).send(error.error);
			}
		);
	});

	service.get('/mobile/custom/DigitalAssetsAPI/pillars', function(req,res) {
		req.oracleMobile.database.getAll('Pillars').then(
			function (result){
				res.status(result.statusCode).send(result.result);
			},
			function (error) {
				res.status(error.statusCode).send(error.error);
			}
		);
	});

	service.post('/mobile/custom/DigitalAssetsAPI/industries', function(req,res) {
		var rowData = req.body;
		req.oracleMobile.database.insert('Industries', rowData).then(
			function(result){
				res.status(result.statusCode).send(result.result);
			},
			function(error){
				res.status(error.statusCode).send(error.error);
			}
		);
	});

	service.get('/mobile/custom/DigitalAssetsAPI/industries', function(req,res) {
		req.oracleMobile.database.getAll('Industries').then(
			function (result){
				res.status(result.statusCode).send(result.result);
			},
			function (error) {
				res.status(error.statusCode).send(error.error);
			}
		);
	});

	service.post('/mobile/custom/DigitalAssetsAPI/hubsters', function(req,res) {
		var rowData = req.body;
		req.oracleMobile.database.insert('Hubsters', rowData).then(
			function(result){
				res.status(result.statusCode).send(result.result);
			},
			function(error){
				res.status(error.statusCode).send(error.error);
			}
		);
	});

	service.get('/mobile/custom/DigitalAssetsAPI/hubsters', function(req,res) {
		req.oracleMobile.database.getAll('Hubsters', {fields: 'name'}).then(
			function (result){
				res.status(result.statusCode).send(result.result);
			},
			function (error) {
				res.status(error.statusCode).send(error.error);
			}
		);
	});

	service.post('/mobile/custom/DigitalAssetsAPI/cloud-services', function(req,res) {
		var rowData = req.body;
		req.oracleMobile.database.insert('Cloud-services', rowData).then(
			function(result){
				res.status(result.statusCode).send(result.result);
			},
			function(error){
				res.status(error.statusCode).send(error.error);
			}
		);
	});

	service.get('/mobile/custom/DigitalAssetsAPI/cloud-services', function(req,res) {
		req.oracleMobile.database.getAll('Cloud-services', {fields: 'name'}).then(
			function (result){
				res.status(result.statusCode).send(result.result);
			},
			function (error) {
				res.status(error.statusCode).send(error.error);
			}
		);
	});

	service.get('/mobile/custom/DigitalAssetsAPI/hubsters/:id', function(req, res){
		var id = req.params.id;
		req.oracleMobile.database.get('Hubsters', id).then(
			function(result){
				res.status(result.statusCode).send(result.result);
			},
			function(error){
				res.status(error.statusCode).send(error.error);
			}
		);
	});

	service.get('/mobile/custom/DigitalAssetsAPI/assets/:id', function(req,res) {
		var id = req.params.id;
		req.oracleMobile.database.get('Assets', id).then(
			function (result){
				res.status(result.statusCode).send(result.result);
			},
			function (error) {
				res.status(error.statusCode).send(error.error);
			}
		);
	});

};