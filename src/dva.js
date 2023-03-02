import { create } from 'dva-core'

let app
let store
let dispatch

const createApp = (opts) => {
  app = create(opts)
  if (!global.registered) {
    opts.models.forEach((model) => app.model(model))
  }
  global.registered = true
  app.start()
  store = app._store
  app.getStore = () => store
  dispatch = store.dispatch
  app.dispatch = dispatch
  return app
}

export default createApp
