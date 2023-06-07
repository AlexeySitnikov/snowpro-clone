import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import { MainPage } from './components/MainPage/MainPage'
// import { SchoolsOutlet } from './components/SchoolsOutlet/SchoolsOutlet'
import { ForumOutlet } from './components/ForumOutlet/ForumOutlet'
import { AboutUs } from './components/AboutUs/AboutUs'
import { SchoolCalendar } from './components/SchoolsCalendar/SchoolsCalendar'
import { Instructors } from './components/Instructors/Instructors'
import { Media } from './components/Media/Media'
import { Contacts } from './components/Contacts/Contacts'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
    path: '/snowpro-clone/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      // {
      //   path: 'content/',
      //   element: <SchoolsOutlet />,
      //   children: [
      //     {
      //       path: '*',
      //       element: '',
      //     },
      //   ],
      // },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'schools',
        element: <SchoolCalendar />,
      },
      {
        path: 'instructors',
        element: <Instructors />,
      },
      {
        path: 'media',
        element: <Media />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
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
