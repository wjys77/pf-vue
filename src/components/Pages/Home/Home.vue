<template>
  <div class="Home">
    <article
      v-for="(portfolio, i) in activeItems"
      :key="i"
    >
      <div
        class="direct-overlay"
        @click="openPage(portfolio.url)"
      >
        <div class="wrapper">
          <span>바로가기</span>
        </div>
      </div>
      <div
        class="pf-name"
        v-text="portfolio.name"
      />
      <div
        class="pf-company"
        v-html="portfolio.company"
      />
      <div
        class="pf-description"
        v-html="portfolio.description"
      />
      <div class="pf-techs">
        <span
          v-for="(tech, i) in portfolio.techs"
          v-text="`#${tech}`"
          :key="i"
        />
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'tags',
      'activeItems',
    ])
  },
  watch: {
    activeItems () {
      this.setLayout();  
    }
  },
  mounted () {
    this.$store.commit('setDefaultItems');
  },
  methods: {
    openPage (url) {
      window.open(url);
    },
    setLayout () {
      const itemRows = 3,
            itemMargin = 15;
            
      const containerWidth = document.body.querySelector('.App .container').offsetWidth,
            itemWidth = Math.round((containerWidth - itemMargin * (itemRows - 1)) / itemRows);

      this.$nextTick(() => {
        const { $el } = this,
              items = $el.querySelectorAll('article');
        // let width, height;

        [].forEach.call(
          items,
          el => this.setItemWidth(el, itemWidth)
        );

        [].forEach.call(
          items,
          (el, index) => {
            let top = 0,
                left = 0;

            if (index === 0) return;

            if (index < itemRows) {
              left = (itemWidth + itemMargin) * index;
            } else {
              const sizes= {};

              for (let i=0; i<index; i++) {
                const { style } = items[i],
                      beforeTop = parseInt(style.top),
                      beforeLeft = parseInt(style.left),
                      beforeHeight = items[i].offsetHeight;

                sizes[beforeLeft] = (sizes[beforeLeft] || 0) + beforeHeight + itemMargin;
              }

              const values = Object.values(sizes),
                    minHeight = Math.min(...values);

              left = Object.keys(sizes).find(key => sizes[key] === minHeight);
              top = minHeight;
            }
            
            // console.log(`------${index}------`);
            // console.log(top);
            // console.log(left);

            el.style.top = `${top}px`;
            el.style.left = `${left}px`;
          }
        );
      });
    },
    setItemWidth (el, itemWidth) {
      el.style.width = `${itemWidth}px`;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.Home {
  article {
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    box-shadow: 0 0 10px #ccc;
    background-color: white;
    transition: all 0.5s ease 0s;
    &:hover {
      cursor: pointer;
      .direct-overlay {
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
      }
    }
    .direct-overlay {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, .50);
      opacity: 0;
      .wrapper {
        span,
        small {
          display: block;
          text-align: center;
          color: white;
        }
        span {
          font-size: 18px;
          font-weight: 900;
        }
        small {
          margin-top: 8px;
          font-size: 14px;
        }
      }
    }
    .pf-name {
      font-size: 13px;
      font-weight: 900;
    }
    .pf-company {
      margin-top: 3px;
      font-size: 11px;
      color: #888;
    }
    .pf-description {
      margin-top: 10px;
    }
    .pf-techs {
      margin-top: 10px;
      display: flex;
      span {
        margin-right: 5px;
        font-size: 10px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>