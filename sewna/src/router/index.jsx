import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import NeedDesigner from '../pages/NeedDesigner'

export const router = createBrowserRouter([
  {
    path: 'wel',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/need-designer',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <NeedDesigner />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

