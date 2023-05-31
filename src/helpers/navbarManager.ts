
const closeNavbar = ()=>
  (document.getElementById('responsive-navbar-items__article') as HTMLElement).classList.remove('responsive-navbar-items__article--active')
  

const openNavbar = ()=>
  (document.getElementById('responsive-navbar-items__article') as HTMLElement).classList.add('responsive-navbar-items__article--active')
  
  

export const HelperHandleActiveResponsiveNavbar = (logo: any, theme: any)=>{

  const responsiveNavbar = document.getElementById('responsive-navbar-items__article') as HTMLElement
  const logoText = document.querySelector('#logo-content__aside p') as HTMLElement
  const logoImage = document.querySelector('#logo-content__aside img') as HTMLImageElement
  const idiomIcon = document.querySelector('#idiom') as HTMLElement
  const hideOnResponsiveNavbar = document.querySelectorAll('.hide-on-responsive-navbar') as NodeList
  const toggle = document.querySelector('.toggle') as HTMLElement;

  if(responsiveNavbar.classList.contains('responsive-navbar-items__article--active')){
    
    closeNavbar()
    logoImage.src = logo.dark.logoImg
    logoText.style.color = "#ffffff";
    idiomIcon.style.color = "#ffffff";
    idiomIcon.style.borderColor = "#ffffff";
    document.body.classList.remove('no-scroll')
    logoImage.src = logo.dark.logoImg
    hideOnResponsiveNavbar.forEach((element: Node) => {
      (element as HTMLElement).classList.remove('hide')
    })
    toggle.classList.remove('active')
    
  }else{

    openNavbar()

    toggle.classList.add('active')

    if(theme === 'dark'){

      logoText.style.color = "#ffffff";
      idiomIcon.style.color = "#ffffff";
      idiomIcon.style.borderColor = "#ffffff";
      logoImage.src = logo.dark.logoImg

    }else{
      if(theme === 'light'){

        logoText.style.color = "#000000";
        idiomIcon.style.color = "#000000";
        idiomIcon.style.borderColor = "#000000";
        logoImage.src = logo.light.logoImg

      }
    }

    document.body.classList.add('no-scroll')
    hideOnResponsiveNavbar.forEach((element: Node) => {
      (element as HTMLElement).classList.add('hide')
    })
    
  }

}