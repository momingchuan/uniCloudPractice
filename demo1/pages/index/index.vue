<template>
<view class="home">
<!-- 	<view class="row" v-for="item in listArr" :key="item.id">
		<image :src="item.picurl" mode=""></image>
		<view > {{item.title}}</view>
	</view> -->
<!-- 	<view v-for="item in userArr" :key="item._id">
		<view>名字：{{item.name}}</view> 
		<view>性别：{{item.gender}}</view> 
		<view>电话：{{item.tel}}</view>
	</view> -->
	
	<form @submit="onsubmit">
		 <input type="text" name="name"/>
		 <input type="text" name="tel"/>
		 <button form-type="submit">提交</button>
	</form>
</view>

</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				listArr:[],
				userArr:[]
			}
		},
		onLoad() {
			// uniCloud.callFunction({
			// 	name:"cloudDemo1",
			// 	data:{}
			// }).then(res=>{
				
			// 	console.log(res)
			// 	this.userArr=res.result.data
			// })




		},
		methods: {
			onsubmit(e){
				console.log(e)
				let obj=e.detail.value;
				uniCloud.callFunction({
					name:"cloudDemo1",
					data:obj
				}).then(res=>{
					console.log(res)
				})				
				
			
			
			},
			


		}
	}
</script>

<style lang="less">


.row{
	border-bottom: 1px solid #ccc;
	padding: 30rpx;
}

</style>
