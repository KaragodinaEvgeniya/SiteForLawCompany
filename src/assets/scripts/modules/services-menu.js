let arbitrationBtn = document.getElementById('arbitration-btn'),
    privateBtn = document.getElementById('private-btn'),
    legalBtn = document.getElementById('legal-btn');
let arbitration = document.getElementById('arbitration'),
    privates = document.getElementById('private'),
    legalEntity = document.getElementById('legal-entity');  
let arbitrationClose = document.getElementById('arbitration-close'),
    privateClose = document.getElementById('private-close'),
    legalClose = document.getElementById('legal-close');  
let services = document.getElementById('services') 

    arbitrationBtn.addEventListener('click', function(){           
        arbitration.classList.add('arbitration--active');
        services.classList.add('services--active');              
    }); 

    arbitrationClose.addEventListener('click', function(){          
        arbitration.classList.remove('arbitration--active');
        services.classList.remove('services--active');         
    }); 

    privateBtn.addEventListener('click', function(){           
        privates.classList.add('private--active'); 
        services.classList.add('services--active');             
    }); 

    privateClose.addEventListener('click', function(){          
        privates.classList.remove('private--active'); 
        services.classList.remove('services--active');         
    }); 

    legalBtn.addEventListener('click', function(){           
        legalEntity.classList.add('legal--active');
        services.classList.add('services--active');              
    }); 

    legalClose.addEventListener('click', function(){          
        legalEntity.classList.remove('legal--active');
        services.classList.remove('services--active');          
    }); 