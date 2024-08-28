import './App.css'
import Tiers from './components/Tiers/Tiers'
import Users from './components/Users/Users'

function App() {

  return (
    <>
      <div className='app_container flex justify-center container mx-auto'>
      <Tiers></Tiers>
      <Users></Users>
      </div>
    </>
  )
}

export default App
