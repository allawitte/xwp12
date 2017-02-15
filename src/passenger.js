'use strict';
class Passenger {
    constructor(){
        this._route = '';
    }
    askRoute(route) {
        this._route = route;
        return this._route;
    }
    
        get route(){
            return this._route;
        }    
    
}

module.exports = Passenger;
/**
 * Created by HP on 2/15/2017.
 */
