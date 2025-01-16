import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,RouterProvider} from "react-router-dom";

import App from './App.jsx'
import IntranetView from './Components/Views/IntranetView.jsx';
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
   
  },
  {
    path: "/intranet",
    element: <IntranetView/>,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
