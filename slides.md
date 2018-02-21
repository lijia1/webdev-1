
# Web Development From Scratch

---

# What is this course about?

- Learn basic HTML5, CSS and Javascript from scratch
- No pre-requisite necessary

---

# 1. HTML5

# What is HTML5?

- HTML5 is the latest version of **H**yper**T**ext **M**arkup **L**anguage, or HTML
- It is *the* language of the Web
- It describes _the structure and content_ of web pages
- It is used together with CSS (**C**ascading **S**tyle**S**heet) and Javascript to make web pages rich and interactive

### By the end of this chapter
- Make a self profile page

---

# Starting very simply

    !html
    <!DOCTYPE html>
    <html>
      <head>
        <title>Carl Fredricksen's Profile</title>
      </head>
      <body>
        Welcome to Carl Fredricksen's Profile page!
      </body>
    </html>

- HTML5 is made up of tags that usually come in nested pairs
- ... like `<X> <Y> ... </Y> </X>`
- The top-most tag is `<html>`, which has two child tags: `<head>` and `<body>`
- `<title>` is a child tag of `<head>`
- Content of the web page goes inside the `<body>` tag
---

![A very simple web page](slide_assets/img/a-very-simple-web-page.png)

.fx: imageslide

---

# Images and links

    !html
    <body>
      Welcome to Carl Fredricksen's Profile page!
      <img src='img/mugshot.jpg'>
      Click <a href='http://pixar.wikia.com/wiki/Carl_Fredricksen'>here</a> to go to my wiki page.

    </body>

- Tags have attributes (or properties), specified like `name='value'`
- Did you notice?
    - `<img>` has no closing tag
    - Browser ignores line breaks. How do we change that?

---

![Images and links](slide_assets/img/images-and-links.png)

.fx: imageslide

---

# Headings, paragraphs and text format

    !html
    <body>
      <h1>Welcome to Carl Fredricksen's Profile page!</h1> 
      <p><img src='img/mugshot.jpg'></p>
      <h3>Links</h3>
      <p>Click <a href='http://pixar.wikia.com/wiki/Carl_Fredricksen'>here</a> 
         to go to my wiki page.
      </p>
      <h3>Hobbies</h3>
      <p>I <strong>love</strong> travelling, 
         <em>especially</em> by balloons.
      </p>
    </body>

- 5 levels of headings: from `<h1>` to `<h5>`
- `<p>` is used to organize text into paragraphs
- `<em>` (emphasis) is for _italics_, `<strong>` is for **bold**

---

![Headings, paragraphs and text format](slide_assets/img/headings-paragraphs-and-text-format.png)

.fx: imageslide

---

# Tables

    !html
    <table>
        <tr> <td>Name</td> <td>Carl Fredricksen</td> </tr>
        <tr> <td>Age</td> <td>78</td> </tr>
        <tr> <td>Occupation</td> <td>Retiree</td> </tr>            
        <tr> <td>Email</td> 
             <td><a href='mailto:carl@paradisefalls.org'>
                    carl@paradisefalls.org
                 </a>
             </td>
        </tr>
    </table>


---

![Tables](slide_assets/img/tables.png)

.fx: imageslide

---

# Lists, ordered and unordered

    !html
    <h3>Friends</h3>
    <ul>
      <li>Russell</li>
      <li>Dug</li>
      <li>Kevin</li>
    </ul>
    <h3>Countries travelled</h3>
    <ol>
      <li>Venezuela</li>
    </ol>

- `<ul>` is **u**nordered **l**ist - bullets are not numbered
- `<ol>` is **o**rdered **l**ist - bullets are numbered
- `<li>` is **l**ist **i**tem, can be used in either `<ol>` or `<ul>`
- A list can be nested inside another one

---

![Lists, ordered and unordered](slide_assets/img/lists-ordered-and-unordered.png)

.fx: imageslide

---

# 2. CSS

---

# What is CSS?

- **C**ascading **S**tyle**S**heet
- It describes _the format, style and layout_ of web pages

### By the end of this chapter
- Format the self profile page like this

---

![What is CSS?](slide_assets/img/final-touches-2.png)

.fx: imageslide

---

# Directory structure

Use the following structure to keep things neat and allow for future expansion

    my_profile_dir
     |
     |-- css
     |    |
     |    |-- main.css
     |
     |-- img
     |    |
     |    |-- mugshot.jpg
     |
     |-- index.html

---

# Embedding CSS in web page

    !html
    <head>
      <title>Carl Fredricksen's Profile</title>
      <link rel="stylesheet" type="text/css" href="css/main.css">
    </head>

---

# Introducing the `<div>` HTML tag

    !html
    <body>
      <div id='container'>
        <div id='header'>
        </div>
        <div id='overview'>
        </div>
        <div id='mugshot'>
        </div>
        <div id='detail'>
        </div>
        <div id='footer'>
        </div>
      </div>
    </body>

- Used like containers to group content to sections 
- Works together with CSS to format web pages
- Give them unique names using the `id` attribute

---

# Moving content inside `<div>`s

    !html
    <div id='container'>
      <div id='header'>
        <h1>Welcome to Carl Fredricksen's Profile page</h1>
      </div>
      <div id='overview'>
        <table>
            <tr><td>Name</td> <td>Carl Fredricksen</td></tr>
            <tr><td>Age </td> <td>78</td></tr>
            <tr><td>Occupation</td> <td>Retiree</td></tr>            
            <tr><td>Email</td> 
                <td><a href='mailto:carl@paradisefalls.org'>
                carl@paradisefalls.org</a></td>
            </tr>
        </table>
      </div>
      ...
    </div>

---

# Changing colors

    !css
    body 
    {
        color: #333333;
        background-color: #a7a09a;
    }

- `body` is called the _selector_
- `{...}` contains properties and values being set
- `#333333` and #a7a09a are RGB color codes

---

![Changing colors](slide_assets/img/changing-colors.png)

.fx: imageslide

---

# The RGB color code

<img src="slide_assets/img/440px-AdditiveColor.svg.png" alt="The RGB color model" style="width: 300px;"/>

- Uses a mixture of Red, Green and Blue components to represent colors
- A number from 0 to 255 represents the 'intensity' of the component, written in base-16, i.e. from `00` to `ff`. _Quiz: how many colors can RGB represent?_
- For example: #ff0000 is red, #ffff00 is yellow
- The RBG calculator: [https://www.w3schools.com/colors/colors_rgb.asp](https://www.w3schools.com/colors/colors_rgb.asp)

---

# The _selector_ - 1

- "Selects" the HTML element(s) whose properties are to be modified
- 3 basic kinds:
    - by element type, e.g. `body { ... }`
    - by element id, e.g. `#header { ... }`
    - by element class, e.g. `.someclass { ... }`
- Mix-and-match
    - example 1: `div#header { ... }`
    - example 2: `div h1 { ... }`
    - example 3: `#header h1, #header h2 { ... }`

_Can you guess what each of selectors in the above examples do?_

---

# The _selector_ - 2

- example 1: `div#header { ... }`
    - The `<div id='header'>` element is selected
- example 2: `div h1 { ... }`
    - All `<h1>` elements that are _inside_ any `<div>` element are selected
- example 3: `#header h1, #footer h2 { ... }`
    - All `<h1>` elements that are _inside_ any HTML elements with `id='header'`, plus all `<h2>` elements that are _inside_ any HTML elements with `id='footer'` are selected
- Selector syntax is complex
    - For complete reference, visit [https://www.w3schools.com/cssref/css_selectors.asp](https://www.w3schools.com/cssref/css_selectors.asp)

---

# What are the properties I can change?

- This site [https://www.w3schools.com/cssref/default.asp](https://www.w3schools.com/cssref/default.asp) is a good reference

---

# Before we go further ...

Let's give each `<div>` a different background color. This will help our eyes when we re-arrange them.

---

![Changing background color of all divs](slide_assets/img/changing-background-color-of-all-divs.png)

.fx: imageslide

---

# Changing fonts

    !css
    #header h1
    {
        font-family: 'Impact';
    }
    #overview
    {
        ...
        font-family: 'Helvetica';
        font-size: 20pt;
    }
    #detail
    {
        ...
        font-family: 'Helvetica';
        font-size: 16pt;
    }
    #footer
    {  
        font-family: 'Courier New';
        font-size: 12pt;
    }

---

![Changing fonts](slide_assets/img/changing-fonts.png)

.fx: imageslide

---

# The Box Model

<img src="slide_assets/img/box-model-standard-small.png" alt="The Box Model" style="width: 500px;"/>

---

# Centering the page

    !css
    #container
    {
        max-width: 750px;
        margin-top:    0;
        margin-bottom: 0; 
        margin-left:   auto;
        margin-right:  auto;
        background-color: #99c;
    }
- `max-width` 
    - when browser is larger, element's width is set to 750px; when browser is smaller, the element will be automatically resized
- `auto` for margin
    - Browser will automatically determine the margin size using any space left.
    - This has a centering effect when used for left and right margins.

---

![Centering the page](slide_assets/img/centering-the-page.png)

.fx: imageslide

---

# Putting `<div>`s side-by-side

    !css
    #overview
    {
        float: left;
        width: 550px;
    }
    #mugshot
    {
        float: right;
        width: 200px;
    }
    #mugshot img
    {
        display: block; /* what does this line do??? ;-) */
        max-width: 100%;
        max-height: 100%;
    }

- `float` allows elements to be side by side, instead of one after another

---

![Putting divs side by side](slide_assets/img/putting-divs-side-by-side.png)

.fx: imageslide

---

# Staying clear of floated elements

    !css
    #detail
    {
        ...
        clear: both;
    }

- Did you notice the 'detail' section went under the mugshot?
    - This happens to elements next to floated ones
    - Solution: `clear: both;`

---

![Staying clear of floated elements](slide_assets/img/staying-clear-of-floated-elements.png)

.fx: imageslide

---

# Using Chrome to troubleshoot

- What is this gap? Let's use Chrome's Developer Tool to find out

![What is this?](slide_assets/img/what-is-this.png)

---

![Use Chrome to troubleshoot](slide_assets/img/use-chrome-to-troubleshoot.png)

.fx: imageslide

---

# Margin collapsing

- "The top and bottom margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as margin collapsing." - [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- Occurs when parent has no margin or padding to separate itself from its first or last child
- The collapsed margin ends up outside the parent

---

# Margin collapsing - the fix

    !css
    div
    {
        padding-top: 0.1px;
        padding-bottom: 0.1px;
    }
    
---

![Margin collapsing the fix](slide_assets/img/margin-collapsing-the-fix.png)

.fx: imageslide

---

# Final touches - 1

Add paddings to make things look less crammed

    !css
    #overview
    {
        padding-top:    5px;
        padding-bottom: 5px;
        padding-left:  15px;
        padding-right: 15px;
    }
    #detail
    {
        padding: 5px 15px;       
    }
    #footer
    {
        padding: 5px 15px;        
    }
---

![Final touches 1](slide_assets/img/final-touches-1.png)

.fx: imageslide

---

# Finak touches - 1 _what's wrong?_

Need to subtract left and right padding from width

    !css
    #overview
    {
        width: 520px;         /* was 550px */
        padding-top:    5px;
        padding-bottom: 5px;
        padding-left:  15px;
        padding-right: 15px;        
    }

---

![Final touches 1 what's wrong](slide_assets/img/final-touches-1-whats-wrong.png)

.fx: imageslide

---

# Final touches - 2

    !css
    body
    {
        margin: 0;
    }
    #header h1
    {
        text-align: center; 
    }
    td#fieldname
    {
        width: 40%;
    }
    #overview
    {
        background-color: #9cc;
    }

---

![Final touches 2](slide_assets/img/final-touches-2.png)

.fx: imageslide

---

# 3. Javascript

---
