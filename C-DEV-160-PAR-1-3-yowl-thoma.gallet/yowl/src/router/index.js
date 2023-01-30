import { createRouter, createWebHistory } from 'vue-router'
 import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import MyHome from '../components/MyHome.vue'
import AddPost from '../components/AddPost.vue'
import MyUser from '../components/MyUser.vue'
import ModifPost from '../components/ModifPost.vue'
import ModifUser from '../components/ModifUser.vue'

const routes = [
  {
    path: '/ModifUser',
    name: 'ModifUser',
    component: ModifUser
  },
  {
    path: '/ModifPost',
    name: 'ModifPost',
    component: ModifPost
  },
{
  path: '/MyUser',
  name: 'MyUser',
  component: MyUser

},
  {
    path: '/AddPost',
    name: 'AddPost',
    component: AddPost
  },

  {
    path: '/',
    name: 'Myhome',
    component: MyHome

  },
{
   path: '/SignIn',
   name: 'SignIn',
   component: SignIn
  },
 {
  path: '/inscription',
  name: 'inscription',
  component:SignUp
 }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
