/**
 * Created by xhq on 2017/5/16.
 */
var list = [
    {
        title:'吃饭'
    },
    {
        title:'睡觉'
    },
    {
        title:'打豆豆'
    }
];

new Vue({
    el:'.main',
    data:{
        list:list,
        todo:''
    },
    methods:{
       addTodo(){
           this.list.push({
               title:this.todo
           })
           this.todo = '';
       }
    }
});