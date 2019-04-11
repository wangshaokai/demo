<template>
	<div id="app">
		<common-head v-if="$route.path!='/login'"></common-head>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		<common-foot v-if="$route.path!='/login'"></common-foot>
	</div>
</template>

<script>
	import commonHead from '@/components/common/common_head'
	import commonFoot from '@/components/common/common_foot'
	export default {
		name: 'App',
		data(){
			return{
				
			}
		},
		components: {
			commonHead,
			commonFoot
		}
	}
</script>

<style>
 @import "./assets/css/common.css";
 @import "assets/css/animate.css";
</style>
