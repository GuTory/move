/**
 * kitölri a gyakorlatot az edésből (a gyakorlat maga mint entitás benne marad az adatbázisban, csak nem kapcsolódik hozzá edzés)
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository){

    return function (req, res, next){

        /**
         * kapcsolótáblából ki kell venni -> nem kaszkádolt törlés
         */

        return next();
    }
}