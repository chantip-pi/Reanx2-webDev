<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
<script>
//import { RouterLink, RouterView } from "vue-router";
//import profile from "./views/Profile.vue";
import Main from  "./layouts/main.vue";
import Default from  "./layouts/default.vue";
export default{
  components:{
    Main,Default,
  },
  computed: {
    layout(){
      console.log(this.$route.meta);
      return this.$route.meta.layout || Default;
    },
  },
}
</script>



<!-- <div
    class="font-black text-7xl flex justify-around box-content h-60 content-around h-14 bg-gradient-to-r from-blue-500 to-pink-500 text-white"
  >
    <br />
    ReanX2
  </div>
  <header>
    <div
      class="wrapper box-border h-10 grid grid-cols-3 gap-4 place-items-around"
    >
      <nav>
        <RouterLink to="/" class="hover:text-pink-500">Home</RouterLink>
        <RouterLink class="hover:text-pink-500" to="/about">About</RouterLink>
        <RouterLink class="hover:text-pink-500" to="/profile"
          >Profile</RouterLink
        >
      </nav>
    </div>
  </header> -->
