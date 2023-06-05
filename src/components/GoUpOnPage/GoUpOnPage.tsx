// STYLES
import './goUpOnPage.css'

export function GoUpOnPage(){

  const handleClick = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return(
    <img id='go-up-on-page__img' onClick={handleClick} src='../../../public/img/goUp.png'/>
  )
}