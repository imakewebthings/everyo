var _ = require('lodash')
var config = require('nconf').argv().env().file('settings.json')
var restify = require('restify')
var moment = require('moment')
var YoApi = require('yo-api')
var server = restify.createServer()

function setupServer() {
  server.listen(config.get('PORT'), function() {
    console.log('Server started at %s', server.url)
  })

  server.use(restify.acceptParser(server.acceptable))
  server.use(restify.queryParser())

  server.get('/accounts/:account', function(req, res, next) {
    console.log('%s subscribed to %s', req.params.username, req.params.account)
    res.send(201, {
      username: req.params.username,
      subscribed: req.params.account
    })
  })
}

function createYoTimer(account) {
  var timeframe = account.frequency.split(' ')
  var amount = parseInt(timeframe[0], 10)
  var duration = moment.duration.apply(null, [amount, timeframe[1]])
  setInterval(function() {
    account.yo.yoall(function(err, res, body) {
      if (err) {
        console.error('Error with %s when trying to Yo', account.name)
      }
    })
  }, duration.asMilliseconds())
}

function loadAccounts() {
  var names = config.get('YO_ACCOUNT_NAMES').split(',')
  var apiKeys = config.get('YO_API_KEYS').split(',')
  var frequencies = config.get('YO_FREQUENCIES').split(',')
  var accounts = _.map(_.zip(names, apiKeys, frequencies), function(values) {
    return _.zipObject(['name', 'apiKey', 'frequency'], values)
  })
  accounts.forEach(function(account) {
    account.yo = new YoApi(account.apiKey)
    createYoTimer(account)
  })
}

loadAccounts()
setupServer()
