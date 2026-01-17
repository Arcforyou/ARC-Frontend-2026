import Router from "./routes/router"
import './assets/scss/index.scss'
import { Toaster } from "react-hot-toast"
import { toastOptions } from "./components/toastConfig"
import '../src/assets/main.css'
function App() {
  console.log("app Render");
  
  return (
    <>
      <Toaster toastOptions={toastOptions} reverseOrder={true} />
      <Router/>
    </>
  )
}

export default App
