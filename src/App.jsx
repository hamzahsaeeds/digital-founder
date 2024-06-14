import './App.css'
import MainPage from './components/MainPage'
import '@fontsource/plus-jakarta-sans'
import "@fontsource/plus-jakarta-sans/800.css";
import RocketPath from './components/RocketPath';

function App() {

  return (
    <>
      <MainPage />
      <div className='hidden lg:block'>
        <RocketPath />
      </div>
    </>
  )
}

export default App
