import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import TheHeader from './components/TheHeader/TheHeader.jsx'
import TheFooter from './components/TheFooter/TheFooter.jsx'
import { createBrowserRouter, RouterProvider  } from "react-router"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children: [...] - можно добавить дочерние маршруты
  },
  {
    path: "/about",
    element: <About />
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TheHeader />
    <RouterProvider router={router} />
    <TheFooter />
  </StrictMode>,
)
