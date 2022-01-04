const form = document.querySelector('.form');
const image = document.querySelector('.pic-choice');
const type = form.type.value;
const typeTrans = form.type;
const typeBoite = form.boite;


// typeBoite.forEach(e => {
//     e.addEventListener('change',f=>{
//         const boite = e.value;
//         if(boite==1){
//             const man = document.querySelectorAll('.no-auto');
//             man.forEach(e=> {
//                 e.setAttribute('disabled','');
//             });
//         }else if (boite==2){
//             const auto = document.querySelectorAll('.no-man');
//             auto.forEach(e=> {
//                 e.setAttribute('disabled','');
//             });
//         };
//     })
// });
typeTrans.forEach(e => {
    e.addEventListener('change',()=>{
        const trans = e.value;
        if(trans==1){
            const moto = document.querySelectorAll('.moto');
            moto.forEach(e=>{
                e.removeAttribute('disabled');
            })
        }else if(trans==2){
            const cita = document.querySelectorAll('.citadine');
            cita.forEach(e=>{
                e.removeAttribute('disabled');
            })
        }else if(trans==3){
            const compa = document.querySelectorAll('.compacte');
            compa.forEach(e=>{
                e.removeAttribute('disabled');
            })
        }else if(trans==4){
            const berl = document.querySelectorAll('.berline');
            berl.forEach(e=>{
                e.removeAttribute('disabled');
            })
        }else if(trans==5){
            const uti = document.querySelectorAll('.utilitaire');
            uti.forEach(e=>{
                e.removeAttribute('disabled');
            })
        }else if(trans==6){
            const engin = document.querySelectorAll('.engin');
            engin.forEach(e=>{
                e.removeAttribute('disabled');
            })
        }else if(trans==7){
            const camion = document.querySelectorAll('.camion');
            camion.forEach(e=>{
                e.removeAttribute('disabled');
            })
        }
    })
})



form.addEventListener('submit',e=>{
    e.preventDefault();
    const type = form.type.value;
    let y =" ";
    let prix0 = 0;
    let prix1 = 0;
    let prix2 = 0;
    // const boite = form.boite.value;
    if(type==1){
        prix0+=10;
        image.style.backgroundImage="url('images/moto1.jpg')";
        
    }else if(type==2){
        prix0 += 12;
        image.style.backgroundImage="url('images/citadin.png')";
        y="Manuel";
    }else if(type==3){
        prix0+=14;
        image.style.backgroundImage="url('images/car2.png')";
        y="Manuel";
    }else if(type==4){
        prix0+=20;
        prix1+=(prix0*(19/100));
        image.style.backgroundImage="url('images/berline.png')";
        y="Automatique";
    }else if(type==5){
        prix0+=16;
        image.style.backgroundImage="url('images/utilitaire.jpg')";
        y="Manuel";
    }else if(type==6){
        prix0+=900;
        image.style.backgroundImage="url('images/engin.png')";
        y="Manuel";
    }else if(type==7){
        prix0+=250;
        prix1+=(prix0*(19/100));
        image.style.backgroundImage="url('images/camion.jpg')";
        y="Automatique";
    };
    
    const motor = form.motor.value;
    if(motor==1){
        prix1+=(prix0*(5/100));
    }else if(motor==2){
        prix2+=(prix0*(9/100));
    }else if(motor==3){
        prix2+=(prix0*(14/100));
    }else if(motor==4){
        prix2+=(prix0*(21/100));
    }
    let jour = form.jour.value;
    let prix=(prix0+prix1+prix2)*jour;
    const affichage=document.querySelector("#prix");
    const affichage2=document.querySelector("#boite-titre");
    affichage.textContent=`${prix.toFixed(2)}`;
    affichage2.textContent=`${y}`;
    

});