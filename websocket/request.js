const pako = require('pako')

const WebSocket = require('ws')


var RequestClass = function() {
    // run code here, or...
};

// ...add a method, which we do in this example:
RequestClass.prototype.getList = function() {


	// url
	const ws = new WebSocket('wss://real.okex.com:10441/websocket?compress=true')

	ws.on('open', function open () {

	  ws.send('{"channel":"ok_sub_futureusd_btc_depth_quarter","event":"addChannel"}')
	})

	ws.on('message', function incoming (data) {

	  if (data instanceof String) {
	    return data
	  } else {

	    try {
	    	msg = pako.inflateRaw(data, {to: 'string'})
				console.log(typeof(msg))
	       return msg
	    } catch (err) {
	    	 console.log(err)
	       return err
	    }
	  }
    ws.close();
	})
};

// now expose with module.exports:
exports.Request = RequestClass;
