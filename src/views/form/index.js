import Layout from '../../layout/index.vue'

export default {
  path: '/form',
  name: 'form',
  component: Layout,
  redirect: '/form/form-base',
  meta: {
    text: '表单',
  },
  children: [
    {
      path: 'form-base',
      name: 'form-base',
      meta: {
        text: '基础',
      },
      component: () => import('./base/index.vue'),
    },
  ],
}
