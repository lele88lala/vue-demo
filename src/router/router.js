import main from '../pages/main/main.vue';

let appRouters = [
  {
    path: '/',
    name: 'main',
    component: main,
    children: [
      {
        path: '/homePageNav',
        name: 'homePageNav',
        meta: {
          headerTitle: '首页',
          showHeader: true
        },
        // component: resolve => require.ensure([], () => resolve(requir('../components/page-one.vue')))
        component: () => import('pages/homePage/homePageNav/homePageNav.vue')
      },
      {
        path: '/liveBroadcastNav',
        name: 'liveBroadcastNav',
        meta: {
          headerTitle: '直播',
          showHeader: true
        },
        component: () => import('pages/liveBroadcast/liveBroadcastNav/liveBroadcastNav.vue')
      },
      {
        path: '/questionBankNav',
        name: 'questionBankNav',
        meta: {
          headerTitle: '题库',
          showHeader: false
        },
        component: () => import('pages/questionBank/questionBankNav/questionBankNav.vue')
      },
      {
        path: '/communityNav',
        name: 'communityNav',
        meta: {
          headerTitle: '社区回答',
          showHeader: false
        },
        component: () => import('pages/community/communityNav/communityNav.vue')
      },
      {
        path: '/mineNav',
        name: 'mineNav',
        meta: {
          headerTitle: '我的',
          showHeader: false
        },
        component: () => import('pages/mine/mineNav/mineNav.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'noPage',
    component: () => import('pages/homePage/homePageNav/homePageNav.vue')
  }
];
export const routers = [
  ...appRouters
];
