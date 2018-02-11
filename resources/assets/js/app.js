import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.component('example-component', require('./components/ExampleComponent.vue'));

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const NotFoundComponent = { template: '<div>NotFoundComponent</div>' }
const User = {
    template: '<div>User {{ $route.params.id }}</div>'
}

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/user/:id', component: User },
    { path: '*', component: NotFoundComponent }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const appElement = document.getElementById('app');

if(appElement) {
    const app = new Vue({
        router
    }).$mount('#app')
}
