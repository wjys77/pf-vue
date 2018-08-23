import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tags: ['typescript', 'es6', 'vue', 'react', 'jquery', 'html5', 'css3', 'sass', 'bootstrap', 'php', 'firebase'],
    activeTag: '',
    items: [{
      name: `포트폴리오 사이트`,
      company: '개인 프로젝트',
      description: `
        현재 보고 계시는 포트폴리오 사이트입니다.<br/>
        vue-cli3 & typescript & vuex를 이용하여 제작했고<br/>
        firebase hosting을 이용하여 페이지를 띄웠습니다.
      `,
      url: `https://naver.com`,
      techs: ['typescript', 'es6', 'vue', 'html5', 'sass', 'firebase'],
    }, {
      name: `루나소프트 백오피스 패키지`,
      company: '루나소프트',
      description: `
        루나소프트에서 사용하는 백오피스 화면 패키지 입니다.<br/>
        vuejs를 이용하여 작업했고 npm에 배포되어 있습니다.<br/>
        해당 패키지를 이용하여 내부 어드민 페이지, 파트너스 서비스,<br/>
        톡스토어 관리자 화면 등을 제작했습니다.
      `,
      url: `https://www.npmjs.com/package/lunasoft-backoffice`,
      techs: ['es6', 'vue', 'html5', 'sass'],
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
        php로 개발된 에이랜드 쇼핑몰입니다.<br/>
        backend 개발 및 jquery 스크립트 작업을 진행했습니다.
      `,
      url: `http://www.a-land.co.kr`,
      techs: ['jquery', 'html5', 'css3', 'php'],
    }, {
      name: `다이소몰`,
      company: '포비즈 코리아',
      description: `
        php로 개발된 다이소몰의 유지보수를 담당했습니다.<br/>
        php는 템플릿 언더바 게시판 솔루션을 주로 사용했습니다.
      `,
      url: `https://www.daisomall.co.kr`,
      techs: ['jquery', 'html5', 'css3', 'php'],
    }, {
      name: `이택구 사랑채 펜션, 골프돔, 엑터게이트 등등..`,
      company: '채움아이',
      description: `
        채움아이라는 웹 에디전시에서 약 2년간 20여개의 웹 사이트를<br/>
        제작 했습니다.<br/>
        주로 xhtml, html5, css3, jquery, 반응형 웹, 모바일 웹<br/>
        등의 기술을 다뤘고, 그누보드를 이용한 게시판 연동을<br/>
        담당했습니다.
      `,
      url: ``,
      techs: ['jquery', 'html5', 'css3', 'php'],
    }],
    activeItems: [],
  },
  mutations: {
    setDefaultItems(state) {
      state.activeTags = [ ...state.tags ];
      state.activeItems = [ ...state.items ];
    },
    setActiveTag(state, payload) {
      // toggle tag
      state.activeTag = payload;

      // set items
      let activeItems = [];

      if (payload === '') {
        activeItems = [ ...state.items ];
      } else {
        state.items.map(item => {
          const { techs } = item;
          if (techs.indexOf(payload) !== -1) activeItems.push(item);
        });
      }

      state.activeItems = activeItems;
    },
  },
  getters: {
    tags: state => state.tags,
    activeTag: state => state.activeTag,
    items: state => state.items,
    activeItems: state => state.activeItems,
  }
})
