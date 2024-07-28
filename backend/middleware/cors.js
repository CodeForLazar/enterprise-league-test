module.exports = (req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
   res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
   );
   res.setHeader('Access-Control-Allow-Methods', 'GET');
   next();
};
