'use strict';
class Passenger {
    constructor() {
        this._route = '';
        this._hasTicket = false;
    }

    askRoute(currentRoute) {
        this._route = currentRoute;
        return this._route;
    }

    get route() {
        return this._route;
    }
    
    set ticket(value){
        this._hasTicket = value;
    }

    get ticket(){
        return this._hasTicket;
    }

}

module.exports = Passenger;
/**
 * Created by HP on 2/15/2017.
 */
