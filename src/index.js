import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import { MainPage } from './components/MainPage/MainPage'
import { SchoolsOutlet } from './components/SchoolsOutlet/SchoolsOutlet'
import { ForumOutlet } from './components/ForumOutlet/ForumOutlet'

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
        path: 'content/',
        element: <SchoolsOutlet />,
        children: [
          {
            path: '*',
            element: '',
          },
        ],
      },
      {
        path: 'forum/*',
        element: <ForumOutlet />,
      },
    ],
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
