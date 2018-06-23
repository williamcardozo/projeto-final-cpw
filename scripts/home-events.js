var runOnScroll =  function() {
    var navbar = document.getElementById('navbar')
    var biografia = document.getElementById('biografia')
    var posicaoBiografia = biografia.getBoundingClientRect()
    var posicaoDaBiografiaNoTopoParaPintarONavbar = 80
    
    if(posicaoBiografia.top > posicaoDaBiografiaNoTopoParaPintarONavbar) {
        navbar.style.backgroundColor =  'rgba(0, 0, 0, 0)'
    }
    else {
        navbar.style.backgroundColor =  'rgba(0, 0, 0, 1)'
    }
};

  