# Carousel

Greetings! Thank you for reading about Carousel. Here is a [Live Link](https://coreyladovsky.com/Carousel) to see it in action.

### The Concept:
There are so many built-in Carousel libraries, that people often forget what it's like to build their own. This is the heart of the project; to get my hands dirty and build my very own photo carousel. This app is responsive and mobile friendly. To change pages you can click the arrows, use the arrow keys on your keypad, click the dots, or swipe.

### The Technologies:
This app was written with React and JavaScript. I am also working with HTML5 and CSS3 for styling purposes.
This app utilizes the [JQuery](https://jquery.com/) library for ease of manipulating the dom.
I also used the [React Swipeable](https://github.com/dogfessional/react-swipeable) library to handle swiping actions.

### The Difficulties:
The hardest part was creating a smooth animation from one slide to the next. During my first attempt to build this, I kept one photo component that showed one slide. When I would click to change pages I would instantly go to the next slide. Functional, but not attractive. With my initial implementation I wasn't able to have the classic slide animation because I could only show one set of props at a time.
The solution: I created two photo components. They are positioned absolute with one directly behind the other. When a change slide command is made, my component figures out what my next page will be, it does the transition, and then sets the current page to be the same. 
