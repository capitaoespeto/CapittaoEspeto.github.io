
function typeWrite(text){
    const textoArray = text.innerHTML.split('');
    text.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        text.innerHTML += letra;
    }, 64 * i)

  });
}

function exibirpedido () {
 <section>
  <img src=  http://quintaldoespeto.com.br/relacionamento/images/cardapio-thumb.png/>
</section>


function catchOrder() {

  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const options = document.querySelectorAll('#ingredient');
  const drink = document.getElementById('drinkSelected').value;
  
  var ingredients = new Array();

  for(var i = 0; i < options.length; i++) {
    if($(options[i]).prop("checked") == true) {
      ingredients[i] = options.item(i).value;
    }
  }

  var order = [
    
  {
    name: name,
    address: address,
    phone: phone  
  },
  {
    ingredients: ingredients.flat(),
    drink: drink
  }

]

var linkUncoded =
"Nome do cliente: " + order[0].name + "\n" +
"Endereço: " + order[0].address + "\n" +
"Telefone: " + order[0].phone + "\n" +
"Ingredientes: " + order[1].ingredients + "\n" +
"bebida: " + order[1].drink + "\n";

var linkCoded = window.encodeURIComponent(linkUncoded);
var link = "https://api.whatsapp.com/send?phone=000000000000&text=" + linkCoded;

window.location.href = link;

}

window.onload = function() {
    const title = document.getElementById('sub');
    typeWrite(title);

    $('.principal, .order').on('click', function() {
        $('html, body').animate({
          scrollTop: $(document).height()
        }, 1500);
      });

      $('.start').on('click', function() {
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
      });

      const target = document.querySelectorAll('[data-anime]');
      const animationClass = 'animate';

    function animeScroll() {
      const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
      target.forEach((element) => {
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else {
            element.classList.remove(animationClass);
        }
    })
}

    window.addEventListener('scroll', () => {
       animeScroll();
});

$(".juice").click(function() {
  if ($(".juice").prop("checked")) {
    $(".juices").css("display", "inherit")
    $(".others").css("display", "none")
  }
})

$(".other").click(function() {
  if ($(".other").prop("checked")) {
    $(".others").css("display", "inherit")
    $(".juices").css("display", "none")
  }
})
    
}


