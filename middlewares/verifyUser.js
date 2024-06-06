const verifyUser = (request, response, next) => {
 if (!request.query.userId) {
     return response.status(401).json({ error: 'no tienes los permisos' });

 }    
return next();
};
    module.exports=verifyUser;