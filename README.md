# Art-History-Trivia-Game
A ten question quiz to test your knowledge of art history. Modeled after questions you might find on an art history exam. The user has once chance to guess the correct answer, then the button to submit the answer will disappear. Each question answered correctly awards the user ten points.

## Getting Started
To take the quiz online at my project's deployed [github page](https://fjaddison.github.io/Art-History-Trivia-Game/), or you can fork and clone my [repo](https://github.com/fjaddison/Art-History-Trivia-Game) if you'd like to work with the source code.

## Testing the code
Code was validated using and [HTML Validator](https://html5.validator.nu/) and a [CSS Validator](https://jigsaw.w3.org/css-validator/validator). HTML gives two warnings due to two sections lacking headers, but not errors. Currently, the browser's console log displays no errors, but this will change depending on the progress of the script.

## Technologies used
The code is simple, using one function, linked to a 'click' event listener, per button. Each function uses jQuery methods, such as .html() and .val(), to target dom elelements that I wanted to either alter or check with a condition in an if else statement. I targetted the text within the text input field to check with a list of answers that would be considered correct in the quiz in order to give the user points. I had to parseInt() the inner HTML of the score and add 10 when the answer was correct. I additionally used alerts to tell the user if he/she is correct or incorrect. After all of this, the button used to submit the answer is hidden from the user so that it cannot be answered twice to hack the amount of points scored.

## Issues in achieving a minimum viable product
Because the project's script was written with the jQuery framework, targetting the strings or numbers within certain HTML elements proved challenging. I'd like to further simplify the code so that I do not have to have ten functions from each question, so as to reduce the repetitiveness, but I am not at the level for that quite yet. I also struggled with adapting the image I used for various screen sizes. I will have to figure out the proper media queries or styling methods to resolve this.

## Future issues and new features
What will prove to be challening is implementing the input elements with the button type into a form so that the user can press enter on the keyboard and can also click to trigger the event. Eventually, I would also like to create a restart button that sets the quiz back up without the user having to refresh the code. I think it would also be interesting to either put a larger group of questions within an array or object in order to randomize the content so that it's not the exact quiz every time. I hope within time these features can be implemented so that the quiz is not so rudimentary. 

## Built With...
The project's JavaScript was written using the jQuery framework to target DOM elements, but I would like to revert the code to vanilla JavaScript when I become  a little more comfortable targetting the DOM this way. 

## Author
Francis Julian Addison

## Acknowledgements
Special thanks to General Assembly and the instructors for providing support, and inspiration in the prior homework and labs assigned to us students. In particular, the ATM lab and the Pixart homework were of great use to me in developing my project. 

Additional thanks to Wes Bos' _What the Flexbox?!_ even though I am still very much a CSS novice. 

A tip of the hat to [Adobe Color CC](https://color.adobe.com/create/color-wheel/?base=2&rule=Analogous&selected=1&name=My%20Color%20Theme&mode=rgb&rgbvalues=0.23390855848722225,0.32885885278878035,1,0.44347122848603554,0.91,0.6720477287339389,1,0.9705072247795048,0.4514676984676048,0.91,0.5917360326445668,0.4126897061024144,0.8769951242177253,0.3191376768110782,1&swatchOrder=0,1,2,3,4) for my color pallette

Independent research is cited in the code but of particular use to me were [w3schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) and [jQuery's API Documentation](https://api.jquery.com/). 
