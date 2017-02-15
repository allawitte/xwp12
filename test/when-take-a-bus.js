'use strict';
"use strict";
var assert = require('chai').assert;
var Bus = require('../src/bus');
var Passenger = require('../src/passenger');


suite('when going to take a bus', function () {
    test('bus is ready for a trip', function(){
        let bus = new Bus();
        bus.takeDriver();
        assert.equal(bus.isReadyForTrip(), true);
    })

});
/**
 * Created by HP on 2/15/2017.
 */
