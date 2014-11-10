$(document).ready(function(){

    var first = '<div class="modal"><h1 class="threedee">Welcome to Gunslinger!</h1><a href="#" class="button playButton">Play!</a></div>';
    $('body').append(first);
    $('.playButton').click(function(){
       $('.threedee').text('Searching For Gunslingers...').css('font-size','60px');
       $('.playButton').hide(); 
       $('.modal').append('<img height="200" src="img/sunny.svg" class="loader">');
       killIntro()
       playSound('ricochet')
       s.myoUser.off('fist')
       setTimeout(function(){
            $('.threedee').text('Opponent Found!').css('font-size','80px');
            $('.loader').hide();
            setTimeout(function(){
                  callPeer()
                  myo_.primeMyo(); 
                $('.threedee').hide();
                $('#times').show();
                $('#videos').show();
                $('#health').show();
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