import { createBrowserRouter } from 'react-router-dom'

import { MainPage } from '../pages/MainPage'
import { NotFound } from '../pages/NotFound'

export default createBrowserRouter(
    [{
            path: '/',
            element: <MainPage />,
        },
        {
            path: '*',
            element: <NotFound />
        },
    ]
)