import logo from './logo.svg'
import { useState, lazy, Suspense } from 'react'
import './App.css'

const Lazy = lazy(() =>
  import(
    /* webpackChunkName: 'lazy-comp', webpackPrefetch: true */ './LazyComponent'
  )
)

function App() {
  const [state, setState] = useState(false)
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>ONE WITHOUT LOGO</p>
        <button
          onClick={() => {
            setState(true)
          }}
        >
          Click me to load lazy guy
        </button>
        <Suspense fallback={null}>{state ? <Lazy /> : null}</Suspense>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
