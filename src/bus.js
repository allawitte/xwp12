'use strict';
class Bus {
    constructor(){
        this._isReady = true;
    }

    takeDriver(driver){
        return true;
    }
    isReadyForTrip(){
        return this._isReady;
    }

}
module.exports = Bus;
/**
 * Created by HP on 2/15/2017.
 */
