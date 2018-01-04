<template>
	<v-alert outline color="error" icon="warning" v-model="alert">
		{{ msgErr }}
	</v-alert>
</template>

<script>
export default {
	props: [ 'alert', 'msgErr' ]
}
</script>

<style scoped>

</style>

