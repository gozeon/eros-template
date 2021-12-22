export default {
  path: '**',
  name: 'not-found',
  component: () => import('./404/index.vue'),
}
