// 实例化对象
new Vue({
	el:"#vue-app",
	data:{
		name:"",
		age:30,
		x:0,
		y:0,
		a:0,
		b:0,
		changeColor:false,
		changeLength:false,
		baidu:"https://www.baidu.com",
		baidus:"<a href='https://www.baidu.com'>Bai Du</a>",
		error:false,
		success:false,
		characters:["Mario","Luffy","Yoshi"],
		users:[
			{name:"Henry",age:"12"},
			{name:"Bucky",age:"13"},
			{name:"Emily",age:"14"},
		]
	},
	methods:{
		// this指的是Vue实例化出来的对象
		greet:function(time){
			return 'Good '+time+"!";
		},
		add:function(inc){
			this.age += inc;
		},
		subtract:function(dec){
			this.age -= dec;
		},
		updateXY:function(event){
			// console.log(event)
			this.x=event.offsetX;
			this.y = event.offsetY;
		},
		alert:function(){
			alert("Hellow")
		},
		logName:function(){
			// console.log("你正在输入你的名字")其中$refs.后面跟的是Html中ref=里面的内容
			this.name = this.$refs.name.value;
		},
		logAge:function(){
			// console.log("你正在输入你的年龄")
			this.age = this.$refs.age.value;
		},
		// 太耗费性能这种计算方法直接用computed
		// addToA:function(){
		// 	return this.a + this.age;
		// },
		// addToB:function(){
		// 	return this.b + this.age;
		// }
		// stopMoving:function(event){
		// 	event.stopPropagation();
		// }
	},
	// vue自带的计算属性，这样减少性能损耗
	computed:{
		addToA:function(){
			return this.a + this.age;
		},
		addToB:function(){
			return this.b + this.age;
		},
		compClasses:function(){
			return {
				changeColor:this.changeColor,
				changeLength:this.changeLength
			}
		}
	}

});
// el:element 需要获取的元素，一定是html中的根容器元素
// data:用于数据的存储
// methods: 用于存储各种方法
// data-binding:给属性绑定对应值