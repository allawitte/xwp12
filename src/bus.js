'use strict';
class Bus {
    constructor(){
        this._isReady = false;
    }

    takeDriver(driver){
        this._isReady = true;
        return this._isReady;
    }
    isReadyForTrip(){
        return this._isReady;
    }

}
module.exports = Bus;
/**
 * Created by HP on 2/15/2017.
 */
