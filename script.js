$(document).ready(function(){
    console.log('hello')
    // I will need to target each input button with an event listener
    // each response will work with an if/else statement
    // if response matches (lower to uppercase), ten points added to div element containing score
    // else no points added and alert(better luck next time)
    // each event should also make button dissappear (hide), so user can't answer twice
    // if score === 100, style change implemented (green screen or animation etc)
    // if 90, alert(you got an A- or 90%)
    // if 80, alert(you got a B-)
    // and so forth until...
    // if score <= 50 alert(you failed, try again)
    // button to refresh if possible
    
    // $('.answer1').on('click', function() {
    //     console.log($('.input1').val())
    // })

    $('.answer1').on('click', function() {
        let answer = $('.input1').val()
        let score = parseInt($('.score').html())
        let newScore = score + 10
        if (answer === 'camera obscura') {
            parseInt($('.score').html(newScore))
        } else {
            alert('better luck next time')
        }
        $('.answer1').hide()
    })
})
