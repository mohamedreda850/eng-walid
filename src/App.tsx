import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Layout from './Modules/Layout/Layout'
import HomePageColection from './Modules/HomePage/HomePageColection/HomePageColection'

function App() {
const route = createBrowserRouter([
{
  path: "/",
  element:<Layout />,
  errorElement: <div>404 Not Found</div>,
  children:[{
    index: true,
    element: <HomePageColection />
  }]
}
])

  return (
    <>
    <RouterProvider router={route}>

    </RouterProvider>

    </>
  )
}

export default App
