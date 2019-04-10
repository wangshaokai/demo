<template>
	
		<div>
			<div class="head">
				<div class="warp clearFix">
					<span class="fl">您当前的所属地区是：中国</span>
					<p class="fr">
						<a href="register.html" class="fl log_cor">注册</a>
						<span class="fl">|</span>
						<a href="javascript:;" class="fl log_cor conmmon_log">企业登录</a>
						<span class="fl name_tuichu conmmon_name"><i style="cursor:pointer;"></i><a href="javascript:;" class="log_cor">退出登录</a></span>
						<a href="about_us.html" class="fr">关于平台</a>
					</p>
				</div>
			</div>
			<div class="logo">
				<div class="warp">
					<img src="../../../static/images/logo.png" />
				</div>
			</div>
			<div class="nav">
				<ul class="warp clearFix qita">
					<li class="fl" v-for="(item,index) in navList">
						<router-link :to="item.url">{{item.title}}</router-link>
						<span></span>
					</li>
				</ul>
				<div class="clearFix two">
					<p class="fl" onclick="window.location.href='fgw_record.html'">
						<img src="images/fgw.png" />
						<i>信用服务机构<br>（参与委行业信用建设）</i>
					</p>
					<p class="fl" onclick="window.location.href='bank_record.html'">
						<img src="images/rmyh.png" alt="" />
						<i class="i1">人民银行备案名单</i>
					</p>
				</div>
			</div>
		</div>

</template>

<script>
	export default {
		data() {
			return {
                navList:[
					
					{
						title:"首页",
						url:"index"
					},
					{
						title:"备案名单",
						url:""
					},
					{
						title:"行业准则",
						url:""
					},
					{
						title:"信息公示",
						url:""
					},
					{
						title:"信用评价",
						url:""
					},{
						title:"信用记录",
						url:""
					},
					{
						title:"联合惩戒",
						url:""
					},
				]
			};
		},
		mounted(){
			// this.getCity()
		},
		methods:{
			//获取当前位置
// 			getCity(){
// 				console.log(IPData)
// 			}
		}
	}
</script>

<style scoped="scoped">
	.head {
		height: 34px;
		background: #dedede;
		line-height: 34px;
		font-size: 13px;
	}

	.head div>span {
		color: #666666;
	}

	.log_cor {
		color: #0185e1;
	}

	.name_tuichu>i {
		padding: 0 10px;
	}

	.common_log {
		display: none;
	}

	.head p span,
	.head p a {
		margin-left: 10px;
	}

	.head p span.fl {
		color: #cecece;
	}

	.head p a.fr {
		color: #666666;
		margin-left: 20px;
	}

	.logo {
		height: 108px;
		background: url(../../../static/images/logo1.png) no-repeat;
	}

	.nav {
		width: 100%;
		height: 60px;
		background: #0185e1;
		position: relative;
	}

	.nav ul {
		display: flex;
		flex-flow: nowrap;
		justify-content: space-between;
	}

	.nav ul li {
		position: relative;
		z-index: 2;
	}

	.nav>div {
		position: absolute;
		top: 60px;
		left: 0;
		width: 100%;
		z-index: 1;
		background: white;
		display: none;
	}

	.nav div p {
		text-align: center;
		padding: 32px 25px 20px;
		cursor: pointer;
	}

	.nav div p:nth-child(1) {
		margin-left: 600px;
	}

	.nav div p.active1 {
		background: #eeeeee;
	}

	.nav div p i {
		display: block;
		margin-top: 7px;
	}

	.nav ul li a {
		display: inline-block;
		padding: 0 30px;
		text-align: center;
		line-height: 60px;
		font-size: 17px;
		color: white;
	}

	.nav ul li.acti {
		background: #0269b1;
	}

	.nav ul li.acti span {
		display: block;
		width: 0px;
		height: 0px;
		border: 8px solid transparent;
		border-top: 8px solid white;
		margin: 0 auto;
	}

	.two {
		-moz-box-shadow: 0px -5px 5px 5px #999;
		/* For Firefox3.6+ */
		-webkit-box-shadow: 0px 5px 20px 5px #d8d8d8;
		/* For Chrome5+, Safari5+ */
		/*box-shadow: 0px 0px 5px #999 inset;*/
		/* For Latest Opera */
	}
</style>
