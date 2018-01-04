<template>
	<panel title="ค้นหาผู้ใช้งาน">
		<v-card flat>
			<v-card-text>
				<v-container fluid>
					<alert :alert="alert" :msgErr="msgErr"></alert>
					<v-layout row>
						<v-flex xs4>
							<v-subheader class="headline">อายุ</v-subheader>
						</v-flex>
						<v-flex xs8 d-inline-flex>
							<v-select
							v-bind:items="items"
							v-model="selAge"
							label="Select"
							single-line
							bottom
							></v-select>						
							<v-btn
							dark
							class="teal darken-1"
							@click="searchByAge">
							ค้นหา
							</v-btn>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs4>
							<v-subheader class="headline">ช่วงอายุ</v-subheader>
						</v-flex>
						<v-flex xs8 d-inline-flex>
							<v-select
							v-bind:items="items"
							v-model="minAge"
							label="ตั้งแต่"							
							bottom
							></v-select>
							<v-select
							v-bind:items="items"
							v-model="maxAge"
							label="ถึง"
							bottom
							></v-select>
							<v-btn
							dark
							class="teal darken-1"
							@click="searchByMinMaxAge">
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
import _ from 'lodash'

export default {
	props: {
		users: {
			type: Array,
			required: true
		}
	},
	data () {
		return {
			selAge: 1,
			minAge: null,
			maxAge: null,
			alert: false,
			msgErr: '',
			items: _.range(151)
		}
	},
	methods: {
		async searchByAge () {
			try {
				this.toggleError(false, '')
				let user = (await UserServices.searchByAge(this.selAge)).data
				this.$emit('showUser', user)
			} catch (error) {
				this.toggleError(true, error.response.data.error)
			}
		},
		async searchByMinMaxAge () {
			if (this.minAge == null || this.maxAge == null) {
				this.toggleError(true, 'กรุณาระบุอายุตั้งแต่ และถึง')
				setTimeout(() => {
					this.alert = false
				}, 2000)
			} else if (this.minAge > this.maxAge) {
				this.toggleError(true, 'กรุณาระบุช่วงอายุให้ถูกต้อง')
			} else {
				try {
					this.toggleError(false, '')
					let user = (await UserServices.searchByMinMaxAge(this.minAge, this.maxAge)).data
					this.$emit('showUser', user)
				} catch (error) {
					this.toggleError(true, error.response.data.error)
				}
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
