import { lazy } from 'react'
const CommonRoutes = [
    {
        path: '/forgot-password',
        exact: true,
        component: lazy(() => import('../../views/pages/authentication/ForgotPassword')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    }
]

export default CommonRoutes