<template>
	<panel title="ค้นหาผู้ใช้งาน">
		<v-card flat>
			<v-card-text>
				<v-container fluid>
					<alert :alert="alert" :msgErr="msgErr"></alert>
					<v-layout row>						
						<v-flex xs4>
							<v-subheader class="headline">อีเมล์</v-subheader>
						</v-flex>
						<v-flex xs6>
							<v-text-field
							v-model="email"
							name="input-1"
							label="Email"
							id="txt_email"
							v-on:keyup.enter="searchByEmail"
							></v-text-field>							
						</v-flex>
						<v-flex xs1>
							<v-btn
							dark
							class="teal darken-1"
							@click="searchByEmail">
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
			email: null,
			alert: false,
			msgErr: ''
		}
	},
	methods: {
		async searchByEmail () {
			try {
				this.toggleError(false, '')
				let user = (await UserServices.searchByEmail(this.email)).data
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
