import { createBrowserRouter } from 'react-router'
import Home from '@/pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home msg="Hello World!" />,
  },
])

export default router
