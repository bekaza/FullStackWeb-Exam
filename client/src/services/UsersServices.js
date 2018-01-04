import Api from '@/services/Api'

export default {
	showAll () {
		return Api().get(`users/get`)
	},
	showById (userId) {
		return Api().get(`users/${userId}`)
	},
	searchByFirstname (firstname) {
		return Api().get(`users/firstname/${firstname}`)
	},
	searchByLastname (lastname) {
		return Api().get(`users/lastname/${lastname}`)
	},
	searchByEmail (email) {
		return Api().get(`users/email/${email}`)
	},
	searchByGender (gender) {
		return Api().get(`users/gender/${gender}`)
	},
	searchByAge (age) {
		return Api().get(`users/age/${age}`)
	},
	searchByMinMaxAge (minAge, maxAge) {
		return Api().get(`users/age/${minAge}-${maxAge}`)
	}
}
