import Layout from '../../layout/index.vue'

export default {
  path: '/board',
  name: 'board',
  component: Layout,
  redirect: '/board/system-overview',
  children: [
    {
      path: 'system-overview',
      name: 'system-overview',
      component: () => import('./system-overview/index.vue'),
    },
  ],
}
