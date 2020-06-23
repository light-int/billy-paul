<template>
  <div id="addo-page"> <a href="#" class="js-addo-nav-toggle addo-nav-toggle"><i></i></a>
    <AppSidebar/>
      <!-- Main Section -->
      <div id="addo-main">
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <AppFooter/>
      </div>
  </div>
</template>

<script>

import AppSidebar from './components/sidebar'
import AppFooter from './components/footer'


export default {
  name: 'App',
  components:{
    AppSidebar,
    AppFooter
  }
}
</script>

<style>
 
.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
