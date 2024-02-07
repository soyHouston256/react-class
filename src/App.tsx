import './App.css'
import { ClickOutSide } from './components/click-outside'
import { Interval } from './components/interval'
import { IsOnline } from './components/is-online'
import { LocalStorage } from './components/local-storage'
import { Previous } from './components/previus'
import { Toggle } from './components/toggle'

function App() {

  return (
    <main>
      <Toggle/>
      <ClickOutSide/>
      <LocalStorage/>
      <IsOnline/>
      <Previous/>
      <Interval/>
    </main>
  )
}

export default App
