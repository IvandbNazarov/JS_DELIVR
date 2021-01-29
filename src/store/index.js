const url = 'https://data.jsdelivr.com/v1';

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
	state: {
		lists: [],
		headers: [
			{
				text: 'Package Name',
				align: 'start',
				value: 'name',
			},
			{
				text: 'Type',
				value: 'type'
			}],
		itemsPerPage: 10,
		filteredLists: [],
		isOpen: false,
		versions: [],
		currentItem: {},
		extendedInfo: []
	},
	getters: {
		itemsPerPage: (state) => state.itemsPerPage,
		headers: (state) => state.headers,
		allPackages: (state) => state.filteredLists,
		isOpen: (state) => state.isOpen,
		versions: (state) => state.versions,
		versionInfo: (state) => state.versionInfo
	},
	mutations: {
		FILTER_LIST: (state, payload) => {
			state.filteredLists = state.lists.filter(item => item.name.indexOf(payload.searchValue.toLowerCase()) > -1)
		},
		UPDATE_LIST: (state, payload) => {
			state.lists = payload.lists
			state.filteredLists = payload.lists
		},
		TOGGLE_MODAL: (state, isOpen, event) => {
			state.isOpen = isOpen
		},
		SET_VERSIONS: (state, payload) => {
			state.versions = payload.versions
		},
		SET_CURRENT_ITEM: (state, currentItem) => {
			state.currentItem = currentItem
		},
		SET_EXTENDED_INFO: (state, payload) => {
			state.extendedInfo = payload.extendedInfo
		}
	},
	actions: {
		getPackages({ commit }) {
			axios
				.get(url + "/stats/packages")
				.then((response) => {
					commit('UPDATE_LIST', { lists: response.data })
				});
		},
		filterValues({ commit }, payload) {
			commit('FILTER_LIST', { searchValue: payload })
		},
		toggleModalWindow({ commit }, isOpen) {
			commit('TOGGLE_MODAL', isOpen)
		},
		getVersions({ commit, dispatch }, payload) {
			commit('SET_CURRENT_ITEM', payload)
			axios
				.get(`${url}/package/${payload.type}/${payload.name}`)
				.then((response) => {
					commit('SET_VERSIONS', { versions: response.data.versions })
					dispatch('toggleModalWindow', true)
				})
		},
		getInfoVersions({ commit }, selectedVersion) {
			axios
				.get(`${url}/package/${this.state.currentItem.type}/${this.state.currentItem.name}@${selectedVersion}`)
				.then((response) => {
					debugger
					commit('SET_EXTENDED_INFO', { extendedInfo: response.data })
				})
		}
	}
})
