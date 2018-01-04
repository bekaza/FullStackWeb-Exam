import Api from '@/services/Api'

export default {
	showAll () {
		return Api().get(`user/get`)
	},
	showById (userId) {
		return Api().get(`user/${userId}`)
	},
	searchByFirstname (firstname) {
		return Api().get(`user/firstname/${firstname}`)
	},
	searchByLastname (lastname) {
		return Api().get(`user/lastname/${lastname}`)
	},
	searchByEmail (email) {
		return Api().get(`user/email/${email}`)
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
