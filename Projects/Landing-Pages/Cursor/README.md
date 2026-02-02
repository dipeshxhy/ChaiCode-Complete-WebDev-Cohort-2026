# Building Cursor Landing Page Only By Using Raw HTML & CSS

This is assignment given by Sir at Cohort 2026 to practice HTML and CSS and Have some real practice on building and designing website layout . so I build this by looking [cursor.com](https://cursor.com) landing page.
![ScreenShot of Webpage](./imgs/SC.png)

## I have Used this Font and Color

[link to general stylesheets](./css/general.css)

```
:root {
  --color-accent: #14120b;
  --color-accent-light: #1b1913;

  --primary-text-color: #edecec;
  --bg-button-white: #d7d6d5;
  --color-gray: #b6b5b3;
  /*  #EDECEC */
  --font-size-small: 1.4rem;
  --font-size-base: 1.6rem;

  --fw-regular: 400;
  --fw-md: 600;
  --fw-bold: 700;

  --spacing-sm: 0.8rem;
  --spacing-md: 2rem;
}
@font-face {
  font-family: 'cursorRegular';
  src:
    url(../fonts/f30fd2e485acf1bc-s.p.3d1b066d.woff2) format('woff2'),
    url(../fonts/f30fd2e485acf1bc-s.p.3d1b066d.woff) format('woff');
}
@font-face {
  font-family: 'cursorBold';
  src:
    url(../fonts/CursorGothic_Bold-s.p.95169710.woff2) format('woff2'),
    url(../fonts/CursorGothic_Bold-s.p.95169710.woff) format('woff');
}

```

## Live Link

**cursordev** : [![Live Demo](https://img.shields.io/badge/Live-Demo-green)](https://cursordev-iota.vercel.app/)

## My Steps

Our Hitesh Sir has tauught always look row wise , one component at one time . so There is no problem comes in building any website. so My first approach was

1. **Build Navbar** : In this section , I use `nav` semantic tag and download all the assets from the real website from dev tool. so

- I create first nav tag
- then I give 3 divs and use **flexbox** with **justify-space-between** which helps me to achieve this **navbar**
- I also use **position:absolute** in Resources link and make one div with more links that show when hover to resources link only

2.  **Build Hero Section** : This is main page so I used **main** Tag and from here all the sections that is visible in website comes here . I followed:

- I made two CSS files one name is **general.css** and another name is **style.css** . By name general contains reusable CSS Styles and style contains styles of sections .
- I made a **container** class that has **max-width:1300px**. It helps to keep the layout fixed at center padding on both sides. This helps in consistent layout of overall webpage.
- I also create code editor which show above of hero page by manually and It help me to practice more in Grid and make columns and place the code .

3. **Build Trusted Section** : In this section , I got all the company logos and make div for each logo , give padding and used **flexbox** to bring in one row and center it by using flex properties **align-items** & **justify-content**: **center** . easy

4. **Features Section** : This is most easy section , first I make utility class for grid like .grid, .grid--2-cols, .grid--3-cols in general css because this is most used class for layout building . then after I took screenshot for image and create two columns of size 2fr and auto for image and align them to center .
5. **Testimonials Section** : I love making Card because Just design one card and copy and paste to other card . I used grid for making 4 columns and In one card I divide into top and bottom part and In this way The vertical alignment of card to push bottom part at bottom is easy just by **margin-top:auto** That is simple way of it.

In this way I build whole landing page . I have used Most semantic tags like nav, section,main,time,footer and I have used **:root** for making variables like

- **--color-accent**
- **--spacing-md**
  
so I got chance of learning and practicing most of CSS properties and I got more familiar in CSS Grid and FlexBox . Now I Can think and Build the Layout .
---
Thank You For Reading it. 

