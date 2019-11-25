export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
    children:[
        {
            path:'city',
            component: () => import('@/components/City')
        },
        {
            path:'hotPlaying',
            component: () => import('@/components/HotPlaying')
        },
        {
            path:'comingSoon',
            component: () => import('@/components/ComingSoon')
        },
        {
            path:'search',
            component: () => import('@/components/Search')
        },
        {
            path:'/movie',
            redirect:'/movie/hotPlaying'
        }
    ]
}