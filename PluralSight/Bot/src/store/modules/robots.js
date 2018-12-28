import axios from 'axios';

export default {
  // state is always namespaced itself, but mutations, etc, is not.
  namespaced: true,
  // every state should have a initial value;
  state: {
    foo: 'robots-foo',
    cart: [],
    parts: null,
  },
  // all changes of data should be in mutations;
  mutations: {
    // cart data
    addRobotToCart(state, robot) {
      /* eslint no-alert:0 */
      /* eslint no-restricted-globals:0 */
      state.cart.push(robot);
    },

    updateParts(state, parts) {
      /* eslint no-alert:0 */
      /* eslint no-restricted-globals:0 */
      state.parts = parts;
      // es 可能不允许直接修改state, 但是mutataion 是用来进行state修改的,
      // 所以 error的话 请修改eslintrc.js, rules , 'no-param-reassign': 0,
    },
  },
  // API Actions
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then(result => commit('updateParts', result.data))
        .catch(console.error);
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      // return 一个 promise 以告知 已经完成
      return axios.post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot));
    },
  },
  // Cart Sale Item Getters, 计算和一些逻辑操作可以在这里
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    },
    foo(state) {
      return `robots-getter/${state.foo}`;
    },
  },
};
