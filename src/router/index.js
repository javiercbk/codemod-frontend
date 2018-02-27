import Vue from 'vue';
import Router from 'vue-router';
import FileCompare from '@/components/file-compare.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      props: { folder: null, fileName: null },
      component: FileCompare,
    },
    {
      path: '/file',
      name: 'file-compare-empty',
      props: { folder: null, fileName: null },
      component: FileCompare,
    },
    {
      path: '/file/*/:fileName',
      name: 'file-compare',
      props: route => ({ folder: route.query.q, fileName: route.params.fileName }),
      component: FileCompare,
    },
  ],
});
