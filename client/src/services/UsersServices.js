import Api from '@/services/Api'

export default {
	showById (userId) {
		return Api().get(`users/${userId}`)
	},
	searchByFirstname (firstname) {
		return Api().get(`users/firstname/${firstname}`)
	}
}
