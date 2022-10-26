/**
 * Viewname paraméterű kirendereléséért felelős middleware
 */

module.exports = function (objectrepository, ViewName){

    return function (req, res){
        res.render(ViewName,
            res.locals);
        console.log('site rendered: ' + ViewName);
    };
};