import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './store/store'

import Root from './Pages/Root'
import LoadingPage from './Components/LoadingPage'
import ErrorPage from './Components/ErrorPage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const LazyAllContentPage = React.lazy(() => import('./Pages/AllContentPage'))
const LazyMoviesContentPage = React.lazy(() => import('./Pages/MoviesContentPage'))
const LazyTvContentPage = React.lazy(() => import('./Pages/TvContentPage')) 
const LazyBookmarkedContentPage = React.lazy(() => import('./Pages/BookmarkedContentPage'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <React.Suspense fallback={<LoadingPage />}><LazyAllContentPage /></React.Suspense>,
      },
      {
        path: 'movies',
        element: <React.Suspense fallback={<LoadingPage />}><LazyMoviesContentPage /></React.Suspense>,
      },
      {
        path: 'tv-series',
        element: <React.Suspense fallback={<LoadingPage />}><LazyTvContentPage /></React.Suspense>,
      },
      {
        path: 'bookmarked',
        element: <React.Suspense fallback={<LoadingPage />}><LazyBookmarkedContentPage /></React.Suspense>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
