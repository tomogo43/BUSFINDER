
// Feathers configuration
import io from 'socket.io-client'
const socket = io("http://localhost:3030")

import feathers from '@feathersjs/client'

// import store from '@/store'

const app = feathers()

app.configure(feathers.socketio(socket))
// app.configure(feathers.authentication({ storage: window.localStorage }))


// app.service('todos').on('created', todo => {
//    console.log('TODO EVENT created', todo)
//    store.commit('CREATE_TODO', todo)
// })
// app.service('todos').on('patched', todo => {
//    console.log('TODO EVENT patched', todo)
//    store.commit('PATCH_TODO', todo)
// })
// app.service('todos').on('removed', todo => {
//    console.log('TODO EVENT removed', todo)
//    store.commit('DELETE_TODO', todo)
// })


export default app
