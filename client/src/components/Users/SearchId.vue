<template>
	<panel title="ค้นหาผู้ใช้งาน">
		<v-card flat>
			<v-card-text>
				<v-container fluid>
					<alert :alert="alert" :msgErr="msgErr"></alert>
					<v-layout row>						
						<v-flex xs4>
							<v-subheader class="headline">ไอดี</v-subheader>
						</v-flex>
						<v-flex xs6>
							<v-form v-model="valid" v-on:submit.prevent>
								<v-text-field
								v-model="userId"
								name="input-1"
								label="Id"
								id="txt_userId"
								:rules="userIdRules"
								v-on:keyup.enter="searchById"
								></v-text-field>
							</v-form>			
						</v-flex>
						<v-flex xs1>
							<v-btn
							dark
							class="teal darken-1"
							@click="searchById">
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
			valid: false,
			userIdRules: [ (v) => /^[0-9]*$/gm.test(v) || 'id must be valid' ],
			userId: null,
			alert: false,
			msgErr: ''
		}
	},
	methods: {
		allowNumber (event) {
		},
		async searchById () {
			if (this.valid) {
				try {
					this.toggleError(false, '')
					let user = (await UserServices.showById(this.userId)).data
					// this.users = []
					this.$emit('showUser', user)
				} catch (error) {
					this.toggleError(true, error.response.data.error)
				}
			} else {
				this.toggleError(true, 'id must be valid')
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
