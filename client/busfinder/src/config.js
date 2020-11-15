
const BACKEND_DICT = {
   development: 'http://localhost:3030',
}

// envvar names must start with `VUE_APP`, see: https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code
const BACKEND_URL = BACKEND_DICT[process.env.VUE_APP_MODE] || BACKEND_DICT['development']

module.exports = {

   VERSION: '0.8.3',

   BACKEND_URL,

}