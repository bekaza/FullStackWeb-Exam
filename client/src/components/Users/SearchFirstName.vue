<template>
	<panel title="ค้นหาผู้ใช้งาน">
		<v-card flat>
			<v-card-text>
				<v-container fluid>
					<v-alert outline color="error" icon="warning" v-model="alert">
						{{ msgErr }}
					</v-alert>
					<v-layout row>						
						<v-flex xs4>
							<v-subheader class="headline">ค้นหาผู้ใช้งานด้วยชื่อ</v-subheader>
						</v-flex>
						<v-flex xs6>
							<v-text-field
							v-model="firstname"
							name="input-1"
							label="Firstname"
							id="txt_firstname"
							v-on:keyup.enter="searchByFirstname"
							></v-text-field>							
						</v-flex>
						<v-flex xs1>
							<v-btn
							dark
							class="teal darken-1"
							@click="searchByFirstname">
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
			firstname: null,
			alert: false,
			msgErr: ''
		}
	},
	methods: {
		async searchByFirstname () {
			try {
				this.toggleError(false, '')
				let user = (await UserServices.searchByFirstname(this.firstname)).data
				// this.users = []
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
