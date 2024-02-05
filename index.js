var elementsDoubts = document.querySelectorAll('.doubts')

elementsDoubts.forEach(function(doubts){
  doubts.addEventListener('click', function(){
    doubts.classList.toggle('ativa')
  })
})

