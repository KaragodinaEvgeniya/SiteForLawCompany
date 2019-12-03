function ready(){    

    
    let btn= document.getElementById('moreDetails');
    let consent= document.getElementById('consent');
    let btnClose= document.getElementById('consent-close');
    
    btn.addEventListener('click', function(){      
      consent.classList.add('consent--open');      
    });  

    btnClose.addEventListener('click', function(){        
        consent.classList.remove('consent--open');        
      });  
  
  
      
}   
document.addEventListener("DOMContentLoaded", ready);