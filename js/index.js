AOS.init({ 
    easing: 'ease',
    duration: 1000,
    once: true
  })

  // tabs script

  
function openCity(evt , cityName){
    
    var i, tabcontent, tablink;

    tabcontent = document.getElementsByClassName('tab-content');
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }

    tablink = document.getElementsByClassName('tabLink');
    for(i = 0; i < tablink.length; i++){
        tablink[i].className = tablink[i].className.replace('active2', '');
    }

    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.className += ' active2';
    
    document.getElementById('defaultOpen').click();

}