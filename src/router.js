import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    // Widgets
    {
      path: '/widgets/general',
      meta: {
        title: 'Widgets / General',
      },
      component: () => import('./views/widgets/general'),
    },
    {
      path: '/widgets/lists',
      meta: {
        title: 'Widgets / Lists',
      },
      component: () => import('./views/widgets/lists'),
    },
    {
      path: '/widgets/tables',
      meta: {
        title: 'Widgets / Tables',
      },
      component: () => import('./views/widgets/tables'),
    },
    {
      path: '/widgets/charts',
      meta: {
        title: 'Widgets / Charts',
      },
      component: () => import('./views/widgets/charts'),
    },
    // Cards
    {
      path: '/cards/basic-cards',
      meta: {
        title: 'Cards / Basic',
      },
      component: () => import('./views/cards/basic-cards'),
    },
    {
      path: '/cards/tabbed-cards',
      meta: {
        title: 'Cards / Tabbed',
      },
      component: () => import('./views/cards/tabbed-cards'),
    },
    // UI Kits
    {
      path: '/ui-kits/bootstrap',
      meta: {
        title: 'UI Kit / Bootstrap',
      },
      component: () => import('./views/ui-kits/bootstrap'),
    },
    {
      path: '/ui-kits/antd',
      meta: {
        title: 'UI Kit / Ant Design',
      },
      component: () => import('./views/ui-kits/antd'),
    },
    // Tables
    {
      path: '/tables/bootstrap',
      meta: {
        title: 'Tables / Bootstrap',
      },
      component: () => import('./views/tables/bootstrap'),
    },
    {
      path: '/tables/antd',
      meta: {
        title: 'Tables / Ant Design',
      },
      component: () => import('./views/tables/antd'),
    },
    // Charts
    {
      path: '/charts/chartistjs',
      meta: {
        title: 'Charts / Chartist.js',
      },
      component: () => import('./views/charts/chartistjs'),
    },
    {
      path: '/charts/chartjs',
      meta: {
        title: 'Charts / Chart.js',
      },
      component: () => import('./views/charts/chartjs'),
    },
    {
      path: '/charts/c3',
      meta: {
        title: 'Charts / C3 Charts',
      },
      component: () => import('./views/charts/c3'),
    },
    // Icons
    {
      path: '/icons/feather-icons',
      meta: {
        title: 'Icons / Feather',
      },
      component: () => import('./views/icons/feather-icons'),
    },
    {
      path: '/icons/fontawesome',
      meta: {
        title: 'Icons / Fontawesome',
      },
      component: () => import('./views/icons/fontawesome'),
    },
    {
      path: '/icons/linearicons-free',
      meta: {
        title: 'Icons / Linearicons Free',
      },
      component: () => import('./views/icons/linearicons-free'),
    },
    {
      path: '/icons/icomoon-free',
      meta: {
        title: 'Icons / Icomoon Free',
      },
      component: () => import('./views/icons/icomoon-free'),
    },
    // Advanced
    {
      path: '/advanced/form-examples',
      meta: {
        title: 'Advanced / Form Examples',
      },
      component: () => import('./views/advanced/form-examples'),
    },
    {
      path: '/advanced/email-templates',
      meta: {
        title: 'Advanced / Email Templates',
      },
      component: () => import('./views/advanced/email-templates'),
    },
    {
      path: '/advanced/utilities',
      meta: {
        title: 'Advanced / Utilities',
      },
      component: () => import('./views/advanced/utilities'),
    },
    {
      path: '/advanced/grid',
      meta: {
        title: 'Advanced / Grid',
      },
      component: () => import('./views/advanced/grid'),
    },
    {
      path: '/advanced/typography',
      meta: {
        title: 'Advanced / Typography',
      },
      component: () => import('./views/advanced/typography'),
    },
    {
      path: '/advanced/pricing-tables',
      meta: {
        title: 'Advanced / Pricing Tables',
      },
      component: () => import('./views/advanced/pricing-tables'),
    },
    {
      path: '/advanced/invoice',
      meta: {
        title: 'Advanced / Invoice',
      },
      component: () => import('./views/advanced/invoice'),
    },
    {
      path: '/advanced/colors',
      meta: {
        title: 'Advanced / Colors',
      },
      component: () => import('./views/advanced/colors'),
    },
    {
      path: '*', redirect: '/widgets/general', hidden: true,
    },
  ],
})

export default router
