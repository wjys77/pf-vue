<template>
  <div class="App">
    <LayoutHeader />
    <LayoutNav />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import LayoutHeader from '@/components/Header';
import LayoutNav from '@/components/Nav';

export default {
  components: {
    LayoutHeader,
    LayoutNav,
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
@import '@/scss/variables.scss';

html,
body,
.App {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.App {
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  line-height: 125%;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12.2px;
  -ms-user-select: none; 
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  .container {
    flex: 1;
    width: $container-width;
    margin: 0 auto;
    position: relative;
  }
}
</style>
