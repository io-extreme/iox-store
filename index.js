const store = {
  $: {},
  set(name, value){
    store.$[name] = value 
    return store
  },
  get(name){
    return store.$[name]
  },
  delete(name){
    delete store.$[name]
    return store
  }
}
module.exports = store
