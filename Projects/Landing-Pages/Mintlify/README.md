## Building Mintlify

### My Steps

1. Navbar : I make container of width 1200px and center it by giving margin-auto and I used flex to space between the three div .
2. Hero section : While making Hero section I divide into two parts first top part is hero-banner which has glassy background so I make div and apply text-center property so it comes into center and again Inside I create another div which is flex to layout button, text and svg into one row.

- I create Outer div which take full width and
- I create nested div inside it and make it width 50% which is half of outer div so it is exactly half of width then
- I center it with flex, and Inside it I create structure which flow top to bottom so I apply flex-col.
- It includes Hero title, Hero text and a email form so I layout it

```
<div> //outer div
 <div class="w-half flex items-center justify-center flex-col"> // half of outer
   <div >
   <h1>Some Hero Text</h1> //give greater font-size
   </div> // for title
   <div class="w-80 mx-auto"> // why 80% of parent to show the text into new line        so less width given than parent
   <p>some text</p>
   </div> // for text
   <div class="w-80"></div> // for form
 </div>
</div>
```

**NOTE**: First make Outer div full width then make nested div and adjust width in % so it comes into required layout . This is TIP

3. Section TrustedBy : This is very easy section to build first download all svg from the website and add into svg file by creating file for eac logo . **Note : change the fill color to #fff so it shows white in color and also there is some path may miss while copying element so copy them like in Microsoft Logo only logo comes we have to copy by clicking in microsoft and there path in the file**.Then after It is very simple make 4 columns grid and create 8 div and paste src in img tag it will show all . This is very awesome when all Logos shown in screen .

4. Feature Section : This is also easy section . At top part there is simple heading and paragraph and below two card is shown.

- first I make upper part by div with container class
- second is card it is just another div which is display grid and showing two div which has card class

5. UI Preview Section : This is same as above. I center the div with subheading, heading and text and again I create container which has only image . I give section class card so it gives box shadow around it .

6. Enterprise section : This is most complex till now. In this section there is Image section which I keep inside container there I create div for gradient and also div which show above image with some text . I make this div position absolute and the container div relative and used top and left property to adjust above image.

- There is most unique way to gray the image by using filter:grayscale(1) which make image gray soo I used that to make logo to look gray .

In this way all section is created and last footer part is very easy just make three div inside container , give border 1px at both left and right and top bottom

---

#### Thank you for reading. I hope you liked it and I did good job.
