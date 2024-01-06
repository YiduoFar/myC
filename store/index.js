import Vue from 'vue'
import Vuex from 'vuex'

// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// 定义你的全局状态
		// season: uni.getStorageSync('vuex').season,
		bottomBarCurrent: 0,
	},
	mutations: {
		// 定义修改全局状态的方法
	},
	actions: {
		// 定义触发mutations的异步方法
	},
	getters: {
		// 定义获取全局状态的方法
	},
	// plugins: [
	// 	createPersistedState({
	// 		key: 'app_config_data', // 状态保存到本地的 key   
	// 		paths: ['season'], // 要持久化的状态，在state里面取，如果有嵌套，可以  a.b.c   
	// 		storage: { // 存储方式定义  
	// 			getItem: (key) => uni.getStorageSync(key), // 获取  
	// 			setItem: (key, value) => uni.setStorageSync(key, value), // 存储  
	// 			removeItem: (key) => uni.removeStorageSync(key) // 删除  
	// 		}
	// 	})
	// ]
})

export default store