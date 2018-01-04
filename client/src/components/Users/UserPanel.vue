<template>
	<panel title="ข้อมูลผู้ใช้งาน" class="head">
		<v-data-table
		v-bind:headers="headers"
		v-bind:items="users"
		v-bind:search="search"
		v-bind:pagination.sync="pagination"
		:total-items="totalItems"
		:loading="loading"
		class="elevation-1"
		>
			<template slot="items" slot-scope="props">
				<td>{{ props.item.id }}</td>
				<td class="text-xs-left">{{ props.item.first_name }}</td>
				<td class="text-xs-left">{{ props.item.last_name }}</td>
				<td class="text-xs-left">{{ props.item.email }}</td>
				<td class="text-xs-left">{{ props.item.gender }}</td>
				<td class="text-xs-right">{{ props.item.age }}</td>
			</template>
		</v-data-table>
  </panel>
</template>

<script>
export default {
	props: {
		users: {
			type: Array,
			required: true
		}
	},
	data () {
		return {
			search: '',
			totalItems: 0,
			items: [],
			loading: false,
			pagination: {
				sortBy: null
			},
			headers: [
				{ text: 'ID', value: 'id', align: 'center' },
				{ text: 'First Name', value: 'first_name', align: 'center' },
				{ text: 'Last Name', value: 'last_name', align: 'center' },
				{ text: 'Email', value: 'email', align: 'center' },
				{ text: 'Gender', value: 'gender', align: 'center' },
				{ text: 'Age', value: 'age', align: 'center' }
			]
		}
	},
	watch: {
		pagination: {
			handler () {
				// console.log(this.loading)
			},
			deep: true
		},
		users: {
			handler () {
				this.pagination.page = 1
				this.loading = true
				setTimeout(() => {
					this.loading = false
				}, 1000)
			}
		}
	}
	/* methods: {
		getDataFromApi () {
			this.loading = true
			return new Promise((resolve, reject) => {
				const { sortBy, descending, page, rowsPerPage } = this.pagination

				let items = this.users
				const total = items.length
				console.log(this.pagination)
				if (this.pagination.sortBy) {
					items = items.sort((a, b) => {
						const sortA = a[sortBy]
						const sortB = b[sortBy]

						if (descending) {
							if (sortA < sortB) return 1
							if (sortA > sortB) return -1
							return 0
						} else {
							if (sortA < sortB) return -1
							if (sortA > sortB) return 1
							return 0
						}
					})
				}

				if (rowsPerPage > 0) {
					items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
				}

				setTimeout(() => {
					this.loading = false
					resolve({
						items,
						total
					})
				}, 1000)
			})
		}
	} */
}
</script>

<style scoped>
.head{
	margin-top: 20px;
}
</style>
