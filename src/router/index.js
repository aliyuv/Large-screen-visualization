import Vue from "vue";
import HomeHello from "@/views/Home";
import VueRouter from "vue-router";
//注册路由组件
Vue.use(VueRouter);

//路由规则
const routes = [
    {
        path: "/",
        component: HomeHello
    }
]
// 创建路由
export default new VueRouter({
    routes
})
