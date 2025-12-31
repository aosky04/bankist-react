import { RouterProvider } from 'react-router'
import router from '@/routes'

function RootLayout() {
  return (
    <div className="font-inter">
      <RouterProvider router={router} />
    </div>
  )
}

export default RootLayout
