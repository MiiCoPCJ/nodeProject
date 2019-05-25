const pako = require('pako')

const WebSocket = require('ws')

// url
//const ws = new WebSocket('wss://real.okex.com:10441/websocket?compress=true')
const ws = new WebSocket('wss://real.okex.com:10442/ws/v3')


ws.on('open', function open () {

  //ws.send('{"channel":"ok_sub_futureusd_btc_depth_quarter","event":"addChannel"}')
  ws.send('{"op": "subscribe", "args": ["spot/candle3600s:BTC-USDT"]}')
})

ws.on('message', function incoming (data) {


  if (data instanceof String) {
    console.log(data)
  } else {

    try {
      console.log(pako.inflateRaw(data, {to: 'string'}))
    } catch (err) {
      console.log(err)
    }
  }
})
