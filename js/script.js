
function carregar(){
    var msg = window.document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date()
    var hora = data.getHours();


    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 5){
        //boa madrgrada rgb(6, 6, 83)
        img.src = 'img/noite.jpg';
        document.body.style.background = 'rgb(6, 6, 83)'
    }else if (hora >= 5 && hora < 8){
        //Bom dia 
        img.src = 'img/seisateoito.jpg';
        document.body.style.background = '#ED7D2D'

    }else if (hora >=8 && hora < 10){
        //boa dia
        img.src = 'img/manha.jpg'; 
        document.body.style.background = '#E3D3B4'

    }else if (hora >=10 && hora < 12){
        img.src = 'img/10as12.jpg'; 
        document.body.style.background = '#54B2F6'

    }else if (hora >=12 && hora < 14){
        img.src = 'img/meiodia.jpg';
        document.body.style.background = '#C3DFEB'

    }else if (hora >=14 && hora < 16){
        img.src = 'img/14as16.jpg';
        document.body.style.background = '#525F7D'

    }else if (hora >=16 && hora < 18){
        img.src = 'img/tarde.jpg';
        document.body.style.background = '#4C6004'

    }else if (hora >=18 && hora < 20){
        img.src = 'img/18as19.jpg';
        document.body.style.background = '#D16A19'

    }else{
        img.src = 'img/noite.jpg' ;
        document.body.style.background = '#001041'
        
    }

}


