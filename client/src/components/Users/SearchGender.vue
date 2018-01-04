<template>
	<panel title="ค้นหาผู้ใช้งาน">
		<v-card flat>
			<v-card-text>
				<v-container fluid>
					<alert :alert="alert" :msgErr="msgErr"></alert>
					<v-layout row>						
						<v-flex xs4>
							<v-subheader class="headline">เพศ</v-subheader>
						</v-flex>
						<v-flex xs6>
							<v-select
							v-bind:items="items"
							v-model="selGender"
							label="Male or Female"
							single-line
							bottom
							></v-select>						
						</v-flex>
						<v-flex xs1>
							<v-btn
							dark
							class="teal darken-1"
							@click="searchByGender">
							ค้นหา
							</v-btn>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-text>
		</v-card>
	</panel>
</template>

<script>
import UserServices from '@/services/UsersServices'

export default {
	props: {
		users: {
			type: Array,
			required: true
		}
	},
	data () {
		return {
			selGender: null,
			alert: false,
			msgErr: '',
			items: ['Male', 'Female']
		}
	},
	methods: {
		async searchByGender () {
			try {
				this.toggleError(false, '')
				let user = (await UserServices.searchByGender(this.selGender.toLowerCase())).data
				this.$emit('showUser', user)
			} catch (error) {
				this.toggleError(true, error.response.data.error)
			}
		},
		toggleError (flag, msg) {
			if (flag) {
				this.alert = true
				this.msgErr = msg
			} else {
				this.alert = false
				this.msgErr = ''
			}
		}
	}
}
</script>

<style scoped>
</style>
