<template>
	<div class="main">
		<div class="top">
			<div class="box clearFix">
				<p class="fl">
					<img src="../../static/images/login_logo.png" alt="" />
					<span>征信企业登录平台</span>
				</p>
				<ul class="fr">
					<li>
						<span></span><i></i><input id="corpPeople" type="text" placeholder="请输入用户名" />
					</li>
					<li>
						<span></span><i></i><input id="z2" type="password" placeholder="请输入密码" />
					</li>
					<li class="clearFix">
						<span class=""></span><i></i><input id="checkCode" type="text" style="width:200px;" placeholder="请输入验证码" v-model="codev"/><img
						 :src="codeSrc" class="yzm" id="randImage" @click="getYanzhengma">
					</li>
					<li>
						<a href="javascript:;" onclick='userRegist()'>登录</a>
					</li>
				</ul>
			</div>
		</div>
		<p class="bott">©Copyright 国诚信征信有限公司 | 京ICP备14036010号－1 | www.gcx365.com</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
               codeSrc:"/api/usermanage/userController/getPicCheckCode.do",
			   codev:""
			}
		},
		methods:{
			//获取验证码
			getYanzhengma(){
				this.codeSrc='/api/usermanage/userController/getPicCheckCode.do?'+Math.random();
			},
			// 点击登录
			userRegist(){
				
			},
			//判断验证码
			checkCode() {
				var flag;
				if(checkCode1 == "") {
					this.$message.error('请输入验证码');
					flag = false;
				} else {
					$.ajaxSettings.async = false;
					$.post("/usermanage/userController/subImageCode.do", {
							imageCode: checkCode1
						},
						function(result) {
							if(result.status == 0) {
								flag = true;
							} else {
								this.$message.error('请输入正确的验证码');
							}
						});
				}
				return flag;
			}
		}
	}
</script>

<style scoped="scoped">
	.main .top {
		width: 100%;
		height: 925px;
		background: url(../../static/images/login_bk.png) no-repeat;
		background-size: cover;
		position: relative;
	}

	.main .bott {
		height: 49px;
		text-align: center;
		line-height: 49px;
		font-size: 16px;
		color: #0072e8;
	}

	.main .box {
		width: 1000px;
		height: 582px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -296px;
		margin-left: -500px;
		background: url(../../static/images/login_xbk.png)no-repeat;
		background-size: cover;
		border-radius: 16px;
		box-shadow: 0px 3px 21px 0px rgba(0, 81, 165, 0.7);

	}

	.main .box p {
		width: 301px;
		text-align: center;
		margin: 146px 0 0 113px;
	}

	.main .box p span {
		display: block;
		width: 301px;
		font-size: 36px;
		color: #0072e8;
		margin-top: 29px;
	}

	.main ul {
		margin: 151px 65px 0 0;
	}

	.main ul li {
		width: 336px;
		height: 52px;
		position: relative;
		margin-bottom: 40px;
	}

	.main ul li input {
		width: 336px;
		height: 52px;
		border-radius: 5px;
		border: none;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		text-indent: 82px;
		color: #666666;
		font-size: 16px;
	}

	.main ul li i {
		display: inline-block;
		width: 3px;
		height: 20px;
		background: #0072e8;
		position: absolute;
		top: 15px;
		left: 59px;
		z-index: 2;
	}

	.main ul li:nth-child(1) span {
		display: inline-block;
		width: 19px;
		height: 21px;
		background: url(../../static/images/user.png) no-repeat;
		position: absolute;
		top: 14px;
		left: 21px;
		z-index: 2;
	}

	.main ul li:nth-child(2) span {
		display: inline-block;
		width: 20px;
		height: 24px;
		background: url(../../static/images/pass.png) no-repeat;
		position: absolute;
		top: 13px;
		left: 21px;
		z-index: 2;
	}

	.main ul li:nth-child(3) span {
		display: inline-block;
		width: 21px;
		height: 25px;
		background: url(../../static/images/yanz.png) no-repeat;
		position: absolute;
		top: 13px;
		left: 21px;
		z-index: 2;
	}

	.main .yzm {
		width: 120px;
		height: 52px;
		position: absolute;
		top: 0;
		right: 0;
	}

	.main ul li a {
		display: inline-block;
		width: 336px;
		height: 52px;
		background: #004a96;
		color: white;
		font-size: 20px;
		border-radius: 5px;
		text-align: center;
		line-height: 52px;
	}
</style>
