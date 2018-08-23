import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tags: ['typescript', 'es6', 'vue', 'react', 'jquery', 'html5', 'css3', 'sass', 'bootstrap', 'php', 'firebase'],
    activeTags: [],
    items: [{
      name: `포트폴리오 사이트`,
      company: '개인 프로젝트',
      description: `
        현재 보고 계시는 포트폴리오 사이트입니다.<br/>
        vue-cli3 & typescript & vuex를 이용하여 제작했고<br/>
        firebase hosting을 이용하여 작업했습니다..
      `,
      url: `https://naver.com`,
      techs: ['typescript', 'es6', 'vue', 'html5', 'sass', 'firebase'],
    }, {
      name: `루나소프트 상담톡`,
      company: '루나소프트',
      description: `
        루나소프트에서 개발한 카카오톡 상담톡 서비스입니다.<br/>
        php 라라벨을 프레임워크를 사용한 backend 개발과<br/>
        vuejs와 bootstrap, css3를 이용한 frontend,<br/>
        웹 소켓을 이용한 채팅 기능 구현을 담당했습니다.
      `,
      url: `https://www.lunasoft.co.kr/home/main/page/lunachat/index`,
      techs: ['vue', 'html5', 'css3', 'bootstrap', 'php'],
    }, {
      name: `루나소프트 알림톡`,
      company: '루나소프트',
      description: `
        jquery & php로 개발된 서비스를 유지보수 했습니다.
      `,
      url: `https://www.lunasoft.co.kr/home/main/page/lunatalk/index`,
      techs: ['jquery', 'html5', 'css3', 'php'],
    }, {
      name: `에이랜드`,
      company: '포비즈 코리아',
      description: `
        php로 개발된 에이랜드 쇼핑몰 사이트입니다.<br/>
        backend 개발 및 jquery 스크립트 작업을 진행했습니다.
      `,
      url: `http://www.a-land.co.kr`,
      techs: ['jquery', 'html5', 'css3', 'php'],
    }],
    activeItems: [],
  },
  mutations: {
    setDefaultItems(state) {
      state.activeTags = [ ...state.tags ];
      state.activeItems = [ ...state.items ];
    },
    toggleTag(state, payload) {
      // toggle tag
      const index = state.activeTags.indexOf(payload)
      if (index === -1) state.activeTags.push(payload);
      else state.activeTags.splice(index, 1);

      // set items
      const activeItems = [];
      state.items.map(item => {
        const { techs } = item;
        techs.some(tech => {
          if (state.activeTags.indexOf(tech) !== -1) {
            activeItems.push(item);
            return true;
          }
        });
      });

      state.activeItems = activeItems;
    },
  },
  getters: {
    tags: state => state.tags,
    activeTags: state => state.activeTags,
    items: state => state.items,
    activeItems: state => state.activeItems,
  }
})
