/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Pierre-Gilles Leymarie
  */

/**
 * Check Foreign action Token
 */  


module.exports = function(req, res, next) {

	if(req.param('foreignactiontoken') && req.param('foreignactiontoken') == sails.config.foreignActionToken )
		return next();
	else
		res.forbidden('Foreign Action Token is not valid');
};