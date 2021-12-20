import Layout from '../../layout/index.vue'

export default {
  path: '/table',
  name: 'table',
  component: Layout,
  redirect: '/table/table-base',
  meta: {
    text: '表格',
  },
  children: [
    {
      path: 'table-base',
      name: 'table-base',
      meta: {
        text: '基础',
      },
      component: () => import('./base/index.vue'),
    },
  ],
}
