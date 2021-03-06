import Vue from 'vue'
import Vuex from 'vuex'
// configure Vue with Vuex
Vue.use(Vuex)
import { productGetters, manufacturerGetters } from './getters'
import { productMutations, cartMutations, manufacturerMutations } from './mutations'

// create state
export default new Vuex.Store({
    strict: true,
    state: {
        // bought items
        cart: [],
        // ajax loader
        showLoader: false,
        // selected product
        product: {},
        // all products
        products: [],
        // all manufacturers
        manufacturers: []
    },

    // GETTERS
    getters: Object.assign({}, productGetters, manufacturerGetters),
    //MUTATIONS
    mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
})
