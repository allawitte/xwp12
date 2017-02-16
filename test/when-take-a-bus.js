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

    let createPassenger = function() {
        return new Passenger();
    };

    let createBus = function(){
        return new Bus();
    }



    suite(' and I ask for a route', function(){
        test(' - bus driver answers a route', function(){
            let passenger = createPassenger();
            let bus = createBus();
            let route = passenger.askRoute('Central Station');

            assert.equal(bus.currentRouteIncludes(route), true);
        })


    })

    suite(' and I ask for a ticket', function(){
        test(' - bus driver sells me a ticket', function(){
            let passenger = createPassenger();
            let bus = createBus();
            bus.sellTicket(passenger);

            assert.equal(passenger.ticket, true);
        })


    })

});
/**
 * Created by HP on 2/15/2017.
 */
