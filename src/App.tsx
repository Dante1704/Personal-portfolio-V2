import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import Pdf from './components/Pdf'

function App (): JSX.Element {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdf" element={<Pdf />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
