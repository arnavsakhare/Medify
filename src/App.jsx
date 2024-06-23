import { Outlet } from "react-router-dom"
import { CssBaseline} from '@mui/material'
import Download from "./components/DownloadSection/Download"
import Footer from "./components/Footer/Footer"


function App() {
  

  return (
    <div>
      <CssBaseline />
      <Outlet />
      <Download />
      <Footer />
    </div>
  )
}

export default App
