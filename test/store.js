const test = require('tap').test
const store = require('../index')

test('test set', function (t) {
  store.set('main', 20)
  t.equal(store.$.main, 20)
  t.end()
})

test('test get', function (t) {
  store.set('main', 30)
  t.equal(store.get('main'), 30)
  t.end()
})

test('test delete', function (t) {
  store.delete('main')
  t.notEquals(store.get('main'), 30)
  t.end()
})
