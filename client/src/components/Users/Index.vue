<template>
    <v-layout column>
		<v-flex xs12>
			<v-card flat color="secondary" class="navSearch">
				<v-btn outline large color="grey lighten-3" 
					v-for="(item, index) in searchMenus" :key="index"
					@click="selComponent(index)">{{ item }}</v-btn>
			</v-card>
		</v-flex>
        <v-flex xs8 offset-xs2 style="margin-top:5px;">
			<component :is='selectedComponent' v-bind:users="users" v-on:showUser="setUser($event)" />
            <!-- <search-panel v-bind:users="users" v-on:showUser="setUser($event)"></search-panel>
            <search-first-name v-bind:users="users" v-on:showUser="setUser($event)"></search-first-name> -->
        </v-flex>
		<v-flex xs12>
			<user-panel v-bind:users="users"></user-panel>
		</v-flex>
    </v-layout>
</template>

<script>
import SearchId from './SearchPanel'
import SearchFirstName from './SearchFirstName'
import UserPanel from './UserPanel'

export default {
	components: {
		SearchId,
		UserPanel,
		SearchFirstName
	},
	data () {
		return {
			users: [],
			selectedComponent: SearchId,
			searchMenus: ['ค้นหาด้วยไอดี', 'ค้นหาด้วยชื่อ', 'ค้นหาด้วยนามสกุล', 'ค้นหาด้วยอีเมล์', 'ค้นหาด้วยเพศ', 'ค้นหาด้วยอายุ']
		}
	},
	methods: {
		setUser (user) {
			this.users = []
			this.users.push(user)
		},
		selComponent (index) {
			console.log(index)
		}
	}
}
</script>

<style scoped>
.navSearch{
	padding-bottom: 5px;
}
</style>
