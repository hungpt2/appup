module.exports = function() {
  return function(req, res, next) {
    var allowedOrigins = [
      'http://localhost:8081',
      'http://localhost:6060'
    ];
    
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header("Access-Control-Allow-Origin", "http://localhost:8081");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  };
}