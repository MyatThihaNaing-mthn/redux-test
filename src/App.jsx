import { useSelector } from 'react-redux'
import './App.css'
import EnhancedCounter from './components/EnhancedCounter'
import Login from './components/Login'
import Logout from './components/Logout'

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  return (
    <>
      {!isAuth && <Login/>}
      {isAuth && <Logout/>}
      <EnhancedCounter/>
    </>
  )
}

export default App
