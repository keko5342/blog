window.onload = function(){
    var positionY = 0;
    var anchor = ['#top', '#profile', '#product', '#link'];
    var aindex = 0;

    document.addEventListener("wheel", function(event){
        event.preventDefault();
    }, {passive: false});

    //Chrome
    window.onmousewheel = function(event){
        var y = event.deltaY;
        if(event.deltaY < 0){
            //ue
            aindex = aindex - 1;
            window.location.hash = anchor[aindex];
            if(aindex <= 0){
                window.location.hash = anchor[0];
                aindex = 0;
            }
            //alert('ue')
        }else if(event.deltaY > 0){
            //sita
            aindex = aindex + 1;
            window.location.hash = anchor[aindex];
            if(aindex > 3){
                window.location.hash = anchor[3];
                aindex = 3
            }
            //alert('sita')
        }
    }
}