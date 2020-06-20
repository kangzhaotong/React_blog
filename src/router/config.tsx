import Auth from './Auth';
import Dashboard from '../pages/dashboard/idnex';
import Article from '../pages/blog-manage/article';
import Tag from '../pages/blog-manage/tag';
import CreateTag from '../pages/blog-manage/tag/CreateTag';
import Login from '../pages/login';
import RouteWithSubRouters from './RouteWithSubRouters';

export default [
  {
    // 顶级路由 是一个单纯的路基组件，没有任何icon name这些和路由导航相关的东西
    // 路由鉴权 不管什么情况，都是需要走这个组件的 都是必须先过这个组件的关卡

    component: Auth,
    routers: [
      {
        // 1级级路由
        component: Dashboard,
        icon: '',
        name: '工作台',
        path: '/dashboard',
      },
      {
        // 1级级路由
        component: Login,
        path: '/dashboard',
      },

      // 还有一个404 的页面，
      {
        // 1级级路由
        component: RouteWithSubRouters,
        icon: '',
        name: '博客管理',
        path: '/article-manage',
        routers: [
          {
            // 2级级路由
            component: RouteWithSubRouters,
            icon: '',
            name: '标签管理',
            path: '/tag',
            routers: [
              {
                // 3级级路由
                component: RouteWithSubRouters,
                icon: '',
                name: '标签列表',
                path: '/list',
                routers: [
                  {
                    // 4级级路由
                    component: Tag,
                  },
                  {
                    path: '/create',
                    icon: '',
                    name: '新建标签',
                    component: CreateTag,
                  }
                ]
              }
            ]
          },
          {
            // 2级级路由
            component: RouteWithSubRouters,
            icon: '',
            name: '文章管理',
            path: '/article',
            routers: [
              {
                // 3级级路由
                component: RouteWithSubRouters,
                icon: '',
                name: '文章列表',
                path: '/list',
                routers: [
                  {
                    // 4级级路由
                    component: Article,
                  },
                  {
                    path: '/create',
                    icon: '',
                    name: '新建标签',
                    component: CreateTag,
                  }
                ]
              }
            ]
          }
        ]
      },

      {
        // 1级级路由
        component: RouteWithSubRouters,
        icon: '',
        name: '个人中心', // 因为个人中心有很多模块: 记账系统， plan模块, 知识管理
        path: '/person',
        routers: [
          {
            // 2级级路由
            component: RouteWithSubRouters,
            icon: '',
            name: '记账系统',
            path: '/account',
            routers: [
              {
                // 3级级路由
                component: RouteWithSubRouters,
                icon: '',
                name: '账务列表',
                path: '/list',
                routers: [
                  {
                    // 4级级路由
                    component: Tag,
                  }
                ]
              }
            ]
          },
          {
            // 2级级路由
            component: RouteWithSubRouters,
            icon: '',
            name: '规划管理',
            path: '/plan',
            routers: [
              {
                // 3级级路由
                component: RouteWithSubRouters,
                icon: '',
                name: '近期TODO',
                path: '/list',
                routers: [
                  {
                    // 4级级路由
                    component: Tag,
                  },
                  {
                    path: '/create',
                    icon: '',
                    name: '新建计划',
                    component: CreateTag,
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];