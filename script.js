$(document).ready(function() {
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
  
    // function takes inspiration from the choose your own adventure setup
    // all responses must be lowercase and must match 
    // if else statement exactly until another method figured out
    $('.answer1').on('click', function() {
        let answer = $('.input1').val()
        let score = parseInt($('.score').html())
        let newScore = score + 10
        if (answer === 'camera obscura' || 'Camera obscura' || 'Camera Obscura') {
            parseInt($('.score').html(newScore))
            alert('nice going!')
        } else {
            alert('better luck next time')
        }
        $('.answer1').hide()
    })
    $('.answer2').on('click', function() {
        let answer = $('.input2').val()
        let score = parseInt($('.score').html())
        let newScore = score + 10
        if (answer === 'vanitas' || 'vanitas painting' || 'Vanitas painting' || 'Vanitas') {
            parseInt($('.score').html(newScore))
            alert('nice going!')
        } else {
            alert('better luck next time')
        }
        $('.answer2').hide()
    })
    $('.answer3').on('click', function() {
        let answer = $('.input3').val()
        let score = parseInt($('.score').html())
        let newScore = score + 10
        if (answer === 'Delft') {
            parseInt($('.score').html(newScore))
            alert('nice going!')
        } else {
            alert('better luck next time')
        }
        $('.answer3').hide()
    })
    $('.answer4').on('click', function() {
        let answer = $('.input4').val()
        let score = parseInt($('.score').html())
        let newScore = score + 10
        if (answer === 'Rembrandt' || 'Rembrandt van Rijn') {
            parseInt($('.score').html(newScore))
            alert('nice going!')
        } else {
            alert('better luck next time')
        }
        $('.answer4').hide()
    })
    $('.answer5').on('click', function() {
        let answer = $('.input5').val()
        let score = parseInt($('.score').html())
        let newScore = score + 10
        if (answer === 'Caravaggio' || 'Michelangelo Merisi da Caravaggio') {
            parseInt($('.score').html(newScore))
            alert('nice going!')
        } else {
            alert('better luck next time')
        }
        $('.answer5').hide()
    })
    $('.answer6').on('click', function() {
        let answer = $('.input6').val()
        let score = parseInt($('.score').html())
        let newScore = score + 10
        if (answer === 'etching' || 'Etching') {
            parseInt($('.score').html(newScore))
            alert('nice going!')
        } else {
            alert('better luck next time')
        }
        $('.answer6').hide()
    })
    $('.answer7').on('click', function() {
        let answer = $('.input7').val()
        let score = parseInt($('.score').html())
        let newScore = score + 10
        if (answer === 'Bernini' || 'Gian Lorenzo Bernini') {
            parseInt($('.score').html(newScore))
            alert('nice going!')
        } else {
            alert('better luck next time')
        }
        $('.answer7').hide()
    })
    $('.answer8').on('click', function() {
        let answer = $('.input8').val()
        let score = parseInt($('.score').html())
        let newScore = score + 10
        if (answer === 'Medici' || 'the Medici' || 'The Medici') {
            parseInt($('.score').html(newScore))
            alert('nice going!')
        } else {
            alert('better luck next time')
        }
        $('.answer8').hide()
    })
    $('.answer9').on('click', function() {
        let answer = $('.input9').val()
        let score = parseInt($('.score').html())
        let newScore = score + 10
        if (answer === 'genre painting' || 'Genre painting' || 'genre' || 'Genre') {
            parseInt($('.score').html(newScore))
            alert('nice going!')
        } else {
            alert('better luck next time')
        }
        $('.answer9').hide()
    })
    $('.answer10').on('click', function() {
        let answer = $('.input10').val()
        let score = parseInt($('.score').html())
        let newScore = score + 10
        if (answer === 'iconoclasm' || 'Iconoclasm') {
            parseInt($('.score').html(newScore))
            alert('nice going!')
        } else {
            alert('better luck next time')
        }
        $('.answer10').hide()
    })
    
    // should reset score to 0, clear all the answers, and make each button reappear
    // $('.reset').on('click', function() {
    //     let resetScore = 0
    //     $('.answer1').show()
    //     $('.input1').val('')
    //     $('.score').html(resetScore)
    // })
})
