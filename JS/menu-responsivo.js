addEventListener('DOMContentLoaded', ()=>{
    const btn_menu = document.querySelector('.btn_menu')
    var li_a_1= document.querySelector('.videosScroll');
    var li_a_2= document.querySelector('.cursoTradingScroll');
    var li_a_3= document.querySelector('.paquetesScroll');
    var li_a_4= document.querySelector('.blogScroll');
    var li_a_5= document.querySelector('.miseccScroll');
    var li_a_6= document.querySelector('.sobremiScroll');
    var h2= document.querySelector('.h2-header');

    if(btn_menu){
        btn_menu.addEventListener('click', ()=> {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
            h2.style.display='none';
            if(li_a_1){
                li_a_1.addEventListener('click', ()=>{
                    menu_items.style.display='none';
                    if(btn_menu){
                        btn_menu.addEventListener('click', function(){
                            menu_items.style.display='block';
                            h2.style.display='block';
                        })
                    }
                })

                if(li_a_2){
                    li_a_2.addEventListener('click', ()=>{
                        menu_items.style.display='none';
                        if(btn_menu){
                            btn_menu.addEventListener('click', function(){
                                menu_items.style.display='block';
                                h2.style.display='block';
                            })
                        }
                    })
                }

                if(li_a_3){
                    li_a_3.addEventListener('click', ()=>{
                        menu_items.style.display='none';
                        if(btn_menu){
                            btn_menu.addEventListener('click', function(){
                                menu_items.style.display='block';
                                h2.style.display='block';
                            })
                        }
                    })
                }

                if(li_a_4){
                    li_a_4.addEventListener('click', ()=>{
                        menu_items.style.display='none';
                        if(btn_menu){
                            btn_menu.addEventListener('click', function(){
                                menu_items.style.display='block';
                                h2.style.display='block';
                            })
                        }
                    })
                }

                if(li_a_5){
                    li_a_5.addEventListener('click', ()=>{
                        menu_items.style.display='none';
                        if(btn_menu){
                            btn_menu.addEventListener('click', function(){
                                menu_items.style.display='block';
                                h2.style.display='block';
                            })
                        }
                    })
                }

                if(li_a_6){
                    li_a_6.addEventListener('click', ()=>{
                        menu_items.style.display='none';
                        if(btn_menu){
                            btn_menu.addEventListener('click', function(){
                                menu_items.style.display='block';
                                h2.style.display='block';
                            })
                        }
                    })
                }
            }
        })
    }
})