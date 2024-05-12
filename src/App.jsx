import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {Home, Login, SignUp} from'./Pages'
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
