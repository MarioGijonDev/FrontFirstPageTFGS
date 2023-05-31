
// STYLES
import './App.css'

// COMPONTENTS
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'

// CONTEXTS
import { IdiomProvider } from './context/IdiomContext'
import { ThemeProvider } from './context/ThemeContext'
import { LoguedProvider } from './context/loguedContext'

function App() {

  


  return (
    <>
      <IdiomProvider>
        <ThemeProvider>
          <LoguedProvider>
            <Header/>
            <Main />
            <Footer />
          </LoguedProvider>
          
        </ThemeProvider>
      </IdiomProvider>
    </>
  )
}

export default App
