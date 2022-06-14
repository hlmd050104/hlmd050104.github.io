(() => {
  onClickDropDown()
  ScrollTop()
  visibleText()
  
  
  navigator.geolocation.getCurrentPosition((position)=> {
  const { latitude, longitude } = position.coords;
  let lat = document.querySelector('.lat')
  let long = document.querySelector('.long')
  
  lat.innerText  = latitude
  long.innerText  = longitude
})

})()

function getSiblings(elem) {
  // Setup siblings array and get the first sibling
  var siblings = [];
  var sibling = elem.parentNode.firstChild;

  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling
  }

  return siblings;

}

function visibleText() {
  const items = [...document.querySelectorAll('.js-intro-content')]
  infinite(items)
}

function infinite(items) {
  let count = 0

  items.forEach((item, index) => {
    setTimeout(() => {
      count++
   
      getSiblings(item).map(getSIb => { getSIb.style.display = 'none' })

      item.style.display = 'block';

      if (count === items.length) {
        setTimeout(() => {
          infinite(items)
        }, 2000);
      } 

    }, 2000 * index)
  })
}


function onClickDropDown() {
  const btnHamburger = document.querySelector('.js-btn-hamburger')
  const menu = document.querySelector('.js-navbar-list')
  const btnPlus = [...document.querySelectorAll('.js-navbar-list-item')]


  btnHamburger.addEventListener('click', () => {
    menu.classList.toggle('open-menu')
    btnHamburger.classList.toggle('btn--close')
  })

  btnPlus.forEach(item => {
    const menuChild = item.querySelector('.js-navbar-dropdown')
    item.addEventListener('click', event => {
      event.preventDefault()
      menuChild.classList.toggle('open-menu-child')
    })
    
    menuChild.addEventListener('click', event => {
      event.stopPropagation()
    })
  });
}

function ScrollTop() {
  const btnTop = document.querySelector('#js-scroll-top')

  window.addEventListener('scroll', () => {
    return window.scrollY >= 300 ? btnTop.classList.add('is-visible') : btnTop.classList.remove('is-visible')
  })

  btnTop.addEventListener('click', function TopscrollTo() {
    if (window.scrollY != 0) {
      setTimeout(() => {
        window.scrollTo(0, window.scrollY - 20);
        TopscrollTo();
      }, 5)
    }
  })
}

