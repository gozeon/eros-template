import Layout from '../../layout/index.vue'

export default {
  path: '/description',
  name: 'description',
  component: Layout,
  redirect: '/description/description-base',
  meta: {
    text: '描述列表',
  },
  children: [
    {
      path: 'description-base',
      name: 'description-base',
      meta: {
        text: '基础',
      },
      component: () => import('./base/index.vue'),
    },
    {
      path: 'description-size',
      name: 'description-size',
      meta: {
        text: '尺寸',
      },
      component: () => import('./size/index.vue'),
    },
  ],
}
