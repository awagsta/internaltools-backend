module.export = {
    post: function (req,res) {
        var rowData = req.body;
        req.oracleMobile.database.insert('Assets', rowData).then(
            function success (result){
                res.status(result.statusCode).send(result.result);
            },
            function failure (error){
                res.status(error.statusCode).send(error.error);
            }
        );
    },
    
    getAll: function (req, res){
        req.oracleMobile.database.getAll('Assets').then(
            function success (result){
                res.status(result.statusCode).send(result.result);
            },
            function failure (error) {
                res.status(error.statusCode).send(error.error);
            }
        );
    },
    
    getId: function(req,res){
        var id = req.params.id;
        req.oracleMobile.database.get('Assets', id).then(
            function success(result){
                res.status(result.statusCode).send(result.result);
            },
            function failure(error){
                res.status(error.statusCode).send(error.error);
            }
        );
    },

    update: function(req, res){
        var rowData = req.body;
        req.oracleMobile.database.merge('Assets', rowData).then(
            function success(result){
                res.status(result.statusCode).send(result.result);
            },
            function failure(error){
                res.status(error.statusCode).send(error.error);
            }
        );
    },

    delete: function(req, res){
        var id = req.params.id;
        req.oracleMobile.database.delete('Assets', id).then(
            function success(result){
                res.status(result.statusCode).send(result.result);
            },
            function failure(error){
                res.status(error.statusCode).send(error.error);
            }
        );
    }
};