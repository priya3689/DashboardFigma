import { RouterProvider } from "react-router-dom"
import router from "./Router/router"
import { Suspense } from "react"



function App() {
  
  return (
    <Suspense fallback={<div className="text-9xl text-pink-600">Loading........</div>}> 
       <RouterProvider router={router} />
    </Suspense>

   
  )
}

export default App
