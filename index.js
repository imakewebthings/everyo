var _ = require('lodash')
var config = require('nconf').argv().env().file('settings.json')
var YoApi = require('yo-api')
var agenda = new require('agenda')({
  db: {
    address: config.get('MONGO_URL')
  }
})
var names = config.get('YO_ACCOUNT_NAMES').split(',')
var apiKeys = config.get('YO_API_KEYS').split(',')
var frequencies = config.get('YO_FREQUENCIES').split(',')
var accounts = _.map(_.zip(names, apiKeys, frequencies), function(values) {
  return _.zipObject(['name', 'apiKey', 'frequency'], values)
})

accounts.forEach(function(account) {
  account.yo = new YoApi(account.apiKey)
  delete account.apiKey
  console.log('Loading %s set to Yo every %s', account.name, account.frequency)
  agenda.define(account.name, function(job, done) {
    var account = job.attrs.data.account
    console.log('%s sending Yo', account.name)
    account.yo.yoall(done)
  })
  agenda.every(account.frequency, account.name, { account: account })
})

console.log('Everyo started')
agenda.start()
