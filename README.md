# Roll the dice!

Roll the dice! is an easy and fun game for everyone. I came up with an idea while I was attending a beginner course in programming online. The program was built of three parts: HTML, CSS, and JavaScript. The first two I finished successfully but unfortunately failed the JS part so I thought now was the right moment to put my fear aside and concur in JavaScript by giving my game life and functionality. The website consists of only one page and is easy to navigate. The game is simple and contains all the functions and buttons you need for a fun game.

---
![amiresponsive](assets/readme/final-amiresponsive%3F.png)

[View live site on Github Pages](https://balkaneros91.github.io/whatsss-the-tea/)

---

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

Visitors looking for a short fun game will find themselves in the right place. The game is created for everyone, kids and adults. 

The webpage is pretty straight forward and it has the games instruction right down in the bottom of the page.

In case you wanna grab a coffee and have some fun this game is the perfect site to visit and forget everything else just for 5 minutes and since it is adjusted and designed for all different screen sizes just open your browser and throw the dice!

### User Stories

For the players visiting my online game for the first time, I want them to feel exciting and curious. The game is simple. In case of any confusion the instructions for the games are added in the bottom of the page. 

## Design

### Colour Scheme

The color palette is very simple. The background color is blue and pretty plane as the textual part of the game. All parts which can be selected or are showing some kind of message or result are having a :hover pseudo class and a touch of red so it can be eye-catching.

[Coolors.co](https://coolors.co/) was the website I've used to fetch the colour palette presented.

![Colour Palette](assets/readme/coolors-palette.png)

### Typography

I have used Bubblegum-font since it look catchy and playful but still easy to read.

![Typography](assets/readme/Bubblegum-font.png)

### Wireframes

The Wireframes are created for desktop and mobile view.

![Wireframe for Desktop](assets/readme/desktop-wireframe.png)
![Wireframe for Mobile](assets/readme/mobile-wireframe.png)


## Features

My webpage contains only one page, index.html as a main page.

### Final look of the Home page
![Game Page](assets/readme/website-image.png)

### Future Implementations

This online game has a potential to grow bigger by adding more players, rounds and more complex calculations to the game.

### Accessibility

I have tried my best to be mindful of accessibility, and the steps I've taken for this are the following:

- Semantic HTML
- The choices for the background colors and font-color is simple and doesn't disturb the content
 

## Technologies Used

### Languages Used

HTML, CSS, and JavaScript

### Frameworks, Libraries & Programs Used

As recommended by CI I have used Github plus Gitpod.

I have used Visily to create the wireframes.


## Deployment & Local Development

### Deployment

[View live site on Github Pages](https://balkaneros91.github.io/whatsss-the-tea/)

### Local Development

If you wish to clone my project, please see the following steps below:

1. Navigate to Github: https://balkaneros91.github.io/whatsss-the-tea/
2. Select the 'Clone' button 
3. Copy the url or download as ZIP file
4. Use git clone + the url in your terminal, or unpack the ZIP containing the project

## Testing

Since there are few buttons with different functions presented in the game I have used "disabled" attribute to prevent the option for "clicking" the buttons if it's not their turn in the game.

And the deployed website has been tested in Chrome, Safari, Internet Explorer (Opera) and Firefox. Media queries looks good and been tested throughout different screen sizes.

I have used Responsinator.com for testing:
- [Responsinator](http://www.responsinator.com/)


### Lighthouse

For mobile: 
![Lighthouse](assets/readme/lighthouse-mobile.png)
For desktop: 
![Lighthouse](assets/readme/lighthouse-desktop.png)

### W3C HTML Validator
![W3C HTML Validator](assets/readme/w3c-html.png)

### W3C CSS Validator
![W3C CSS Validator](assets/readme/w3c-css.png)

### JS Hint
![JSHint, A Static Code Analysis Tool for JavaScript](assets/readme/jshint-validation.png)

### Known bugs

No known bugs detected

### Solved Bugs

I came accross many issues and bugs while creating this project. Understanding of flexbox didn't really workout. During the 2nd mentor meeting Antonio Rodriguez introduced me and explained the grid view which saved my first project. I needed a lot of playing around, moving code back and forward until it really settled in my head.

He mentioned that it would be good to add a comment that due to changes and extra time I needed to put all the code together I had to create a new repository and that is why all the commits came in within few hours because I had to migrate everything from one repo to a new one.

Some of the bugs I came accross and fixed: 

+ Background images
  + Description: Diffrent size throughout differet screen sizes
  + Expected behaviour: Full image with no missing sides all the time covering its own content
  + Actual behaviour: The image was too small or too big or missing a part of it
  + Fix: Add code background-size: 100%; or background-size: cover; plus adjusting the media queries

  + Quotation
  + Description: Wrong positioning on the logo image and throughtout different screens changing its place
  + Expected behaviour: To not disturb nor overflow the logo image
  + Actual behaviour: Running over the logo image and due to color choice text can't be read
  + Fix: Adjusting the media queries to different screen sizes

+ Footer
  + Description: Footer wrongly positioned on the small screen
  + Expected behaviour: Footer at all times should be horizontal
  + Actual behaviour: Footer vertical positioning on small screen
  + Fix: Adding the correct class attribute col-s-4.



## Credits

Code Institue projects: I was inspired by the Love Maths walkthrough projects functions which help me a lot with the JS part for my website.
As help I've used the following links mentiond right here below.

### Code Used

- [w3schools](https://www.w3schools.com/)
- [stackoverflow](https://stackoverflow.com/)

### Content

The code is mostly created by me plus I was inspired by some of the content in the above mentioned section, Code Used plus by the code watched on LSM in CI projects.

###  Media

The icons are downloaded from
[FontAwesome](https://fontawesome.com/)
[favicon.io](https://favicon.io/)

###  Acknowledgments

And last but not least a big thanks and loads of kudos to those who has in some way helped me so I could complete my second project:  

- Antonio Rodriguez, my mentor at Code Institute.
- Kemal Demirtas, a very good frind of mine who happens to be a programmer himself.
- Nedicto Entenza Gutierrez, my husband.