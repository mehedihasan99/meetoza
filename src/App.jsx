import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFound from './pages/NotFound'
import Registration from './pages/Registration'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<HomePage />} path="/" />
      </Route>
      <Route element={<LoginPage />} path="/login" />
      <Route element={<Registration />} path="/registration" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  )
}

export default App
