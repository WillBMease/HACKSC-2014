$(document).ready(function(){

    var first = '<div class="modal"><h1 class="threedee">Welcome to MyoDuel!</h1><a href="#" class="button playButton">Play!</a></div>';
    $('body').append(first);
    $('.playButton').click(function(){
       $('.threedee').text('Searching For Gunslingers...').css('font-size','60px');
       $('.playButton').hide(); 
       $('.modal').append('<img height="200" src="img/sunny.svg" class="loader">');
       setTimeout(function(){
            $('.threedee').text('Gunslinger Found!').css('font-size','80px');
            $('.loader').hide();
            setTimeout(function(){
                  callPeer()
                  myo_.primeMyo(); 
                $('.threedee').hide();
                $('#times').show();
            }, 1000);
        }, 1000);
    });

});


// function loadRound(){
//   $('.threedee').text('Gunslinger Found!').css('font-size','80px');
//             $('.loader').hide();
//             setTimeout(function(){
//                 $('.threedee').hide();
//                 $('#times').show();
//             }, 2500);
// }