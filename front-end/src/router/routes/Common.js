import { lazy } from 'react'
const CommonRoutes = [
    {
        path: '/forgot-password',
        exact: true,
        component: lazy(() => import('../../views/authentication/forgot-password')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    },
    {
        path: '/sign-up',
        exact: true,
        component: lazy(() => import('../../views/authentication/sign-up')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    }
]

export default CommonRoutes