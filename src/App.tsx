
// STYLES
import './App.css'

// COMPONTENTS
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { GoUpOnPage } from './components/GoUpOnPage/GoUpOnPage'

// CONTEXTS
import { IdiomProvider } from './context/IdiomContext'
import { ThemeProvider } from './context/ThemeContext'
import { LoguedProvider } from './context/loguedContext'

function App() {  
  // Cada vez que se haga un scroll en la página
  window.addEventListener("scroll", () => {
    // Si la página se encuentra a más de 200 px en el eje y
    if(window.pageYOffset > 200){
      // Le quitamos la opacidad al header (esto hará que no se vea el componente)
      document.getElementById('nav')!.style.opacity = "0"
      document.getElementById('go-up-on-page__img')!.style.opacity = "1"
    }
    // En caso contrario
    else{
      // Le ponemos opacidad al header (esto hará que se vea el componente)
      document.getElementById('nav')!.style.opacity = "1"
      document.getElementById('go-up-on-page__img')!.style.opacity = "0"
    }
      
    if(window.pageYOffset > 2000) document.getElementById('nav')!.style.display = "none"
    else document.getElementById('nav')!.style.display = "flex"
  });

  return (
    <>
      <IdiomProvider>
        <ThemeProvider>
          <LoguedProvider>
            <Header/>
            <Main />
            <Footer />
            <GoUpOnPage />
          </LoguedProvider>
        </ThemeProvider>
      </IdiomProvider>
    </>
  )
}

export default App
