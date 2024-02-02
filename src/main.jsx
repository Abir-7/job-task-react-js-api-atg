import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(

 <div className='container'>
 <RouterProvider router={router}/>
 </div>

)
