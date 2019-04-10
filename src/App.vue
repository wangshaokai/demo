<template>
	<div id="app">
		<common-head></common-head>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		<common-foot></common-foot>
	</div>
</template>

<script>
	import commonHead from '@/components/common/common_head'
	import commonFoot from '@/components/common/common_foot'
	export default {
		name: 'App',
		components: {
			commonHead,
			commonFoot
		}
	}
</script>

<style>
 @import "./assets/css/common.css"
</style>
