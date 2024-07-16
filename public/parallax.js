function scrollEffect(scrollY, heightFooter) {
    if (scrollY >= heightFooter) {
      document.querySelector('footer').style.bottom = '0px';
    } else {
      document.querySelector('footer').style.bottom = '-' + heightFooter + 'px';
    }
  }
  
  window.addEventListener('load', function() {
    var windowHeight = window.innerHeight,
        footerHeight = document.querySelector('footer').offsetHeight,
        heightDocument = windowHeight + document.querySelector('.content').offsetHeight + footerHeight - 20;
  
    document.querySelector('#scroll-animate').style.height = heightDocument + 'px';
    document.querySelector('#scroll-animate-main').style.height = heightDocument + 'px';
  
    document.querySelector('header').style.height = windowHeight + 'px';
    document.querySelector('header').style.lineHeight = windowHeight + 'px';
  
    document.querySelector('.content').style.marginTop = windowHeight + 'px';
  
    scrollEffect(window.scrollY, footerHeight);
  
    window.onscroll = function() {
      var scroll = window.scrollY;
  
      document.querySelector('#scroll-animate-main').style.top = '-' + scroll + 'px';
      document.querySelector('header').style.backgroundPositionY = 50 - (scroll * 100 / heightDocument) + '%';
  
      scrollEffect(scroll, footerHeight);
    }
  });

