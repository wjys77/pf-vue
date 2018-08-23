<template>
  <nav class="Nav">
    <a
      @click="setActiveTag('')"
      :class="{  active: activeTag === ''}"
    >#ALL</a>
    <a
      v-for="(tag, i) in tags"
      @click="setActiveTag(tag)"
      :key="i"
      :class="{ active: tag === activeTag }"
    >#{{ tag }}</a>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'tags',
      'activeTag',
    ]),
  },
  mounted () {
    [].map.call(
      this.$el.querySelectorAll('a'),
      el => el.style.width = `${el.offsetWidth}px`
    )
  },
  methods: {
    ...mapMutations([
      'setActiveTag',
    ]),
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fjalla+One');
@import '@/scss/variables.scss';

.Nav {
  padding: 35px 0;
  display: flex;
  justify-content: center;
  a {
    margin: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Fjalla One', sans-serif;
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
    color: #333;
    &.active {
      color: $color-red !important;
    }
    &:hover {
      cursor: pointer;
      color: #555;
    }
    &:active {
      font-size: 16px;
    }
  }
}
</style>