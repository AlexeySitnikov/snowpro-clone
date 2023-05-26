import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import { MainPage } from './components/MainPage/MainPage'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'news/:newsID',
        element: <Outlet />,
      },
    ],
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
