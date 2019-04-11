import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	// mode:history,
	routes: [{
			path: '/index',
			name: 'index',
			component: () => import('@/components/index'), //首页
			meta: {
				keepAlive: true
			}
		},
		{
			path: '/industryStandard',
			name: 'industryStandard',
			component: () => import('@/components/IndustryStandard'), //行业准则
			meta: {
				keepAlive: true
			}
		},
		{
			path: '/fgwRecord',
			name: 'fgwRecord',
			component: () => import('@/components/fgwRecord'), //发改委备案名单
			meta: {
				keepAlive: true
			}
		},
		{
			path: '/bankRecord',
			name: 'bankRecord',
			component: () => import('@/components/bankRecord'), //人民银行备案名单
			meta: {
				keepAlive: false
			}
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/components/login'), //企业登录页
			meta: {
				keepAlive: false
			}
		}
	]
})
