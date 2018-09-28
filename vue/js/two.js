var one = new Vue({
	el:"#vue-app-one",
	data:{
		title:"app one的内容"
	},
	methods:{

	},
	computed:{
		greet:function(){
			return "Hellow App One"
		}
	}
});

var two = new Vue({
	el:"#vue-app-two",
	data:{
		title:"app two的内容"
	},
	methods:{
		// 修改one的title的值
		changeTitle:function(){
			one.title = "我已经改名了"
		}
	},
	computed:{
		greet:function(){
			return "Hellow App Two"
		}
	}
});

two.title = "app two的title也发生改变";