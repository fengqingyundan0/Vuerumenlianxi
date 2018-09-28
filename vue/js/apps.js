// var data = {
// 	name:"Bukcy"
// }

// 调用Vue组件
Vue.component("greeting",{
	// 数字1前面的英文`符号是es6语法中的可以是语句换行
	template:`
	<p>
		{{name}}：大家好，给大家介绍一下我
		<button @click="changeName">改名</button>
	</p>
	`,
	data:function(){
		return{
			name:"王建国"
		}
		// return data;
	},
	methods:{
		changeName:function(){
			this.name = "Henry"
		}
	}
})


// 属于实例化的对象就是类似于声明HTML中的div容器
new Vue({
	el:"#vue-app-one"
});

new Vue({
	el:"#vue-app-two"
});