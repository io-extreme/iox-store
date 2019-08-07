/**
 * iox-store
 *
 * Copyright(c) 2019 Gleison M. Vasconcelos
 * MIT Licensed
 */

const store = module.exports = {}

store.$ = require('./store.js')

/**
 * Set the variable in store
 *
 * @param name The name of variable
 * @param value The value of variable
 * @retun store
 */
store.set = function (name, value) {
  store.$[name] = value
  return store
}

/**
 * Get the variable in store
 *
 * @param name The name of variable
 * @return The variable value
 */
store.get = function (name) {
  return store.$[name]
}

/**
 * Delete the variable
 *
 * @param The name of variable
 * @return store
 */
store.delete = function (name) {
  delete store.$[name]
  return store
}
