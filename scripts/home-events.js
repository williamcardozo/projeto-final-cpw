var devePintarNavbar = true;

var runOnScroll =  function() {
    var navbar = document.getElementById('navbar')
    var biografia = document.getElementById('biografia')
    var posicaoBiografia = biografia.getBoundingClientRect()
    var posicaoDaBiografiaNoTopoParaPintarONavbar = 80

    if(posicaoBiografia.top > posicaoDaBiografiaNoTopoParaPintarONavbar && !devePintarNavbar) {
        navbar.style.backgroundColor =  'rgba(0, 0, 0, 0)'
        devePintarNavbar = true
    }
    else if(posicaoBiografia.top < posicaoDaBiografiaNoTopoParaPintarONavbar && devePintarNavbar) {
        navbar.style.backgroundColor =  'rgba(0, 0, 0, 1)'
        devePintarNavbar = false
    }
};

  