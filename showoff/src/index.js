'use strict';

var Alexa = require('alexa-sdk');
var APP_ID = ''; // TODO replace with your app ID (OPTIONAL).

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHelloIntent');
    },
    'SayHelloIntent': function () {
        var intent = this.event.request.intent;
        var nameSlot = intent.slots.HelloName;
        var callName;
        if (intent && intent.slots && nameSlot && nameSlot.value) {
            callName = nameSlot.value.toLowerCase();
        }
        this.emit(':tell', 'Hello ' + callName);
    }
};
