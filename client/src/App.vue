<template>
  	<div id="app">
		<v-app>
			<main>
				<v-container fluid>
					<router-view></router-view>
				</v-container>
			</main>
		</v-app>
  </div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style>
#app {
  	font-family: 'Avenir', Helvetica, Arial, sans-serif;
  	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  	color: #2c3e50;
  	text-align: center;
}
.container{
	margin: 0;
	padding:0;
}
</style>
