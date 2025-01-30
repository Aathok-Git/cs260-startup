# CS 260 Notes

[My startup](https://startup.lukemartinez.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS Notes

Use Route53 DNS to get the domain and use an EC2 Web Server

## HTML Notes

- Default page should return an html doc called index.html
- 

## CSS Notes
- CSS determines how the page should render the HTML.
- The style element in CSS affects all the text in the HTML
- An inline style will override the global style
- the reference in html has to match the name of the CSS file
- use something like `<link rel="stylesheet" href="styles.css" />`
- In css, declare the type of tag you want the style to affect (called a selector)
- can import fonts with the `@import url('google font url')`


## AI Notes

- Don't use anything you don't understand
- Ask AI to explain it and then rewrite the function from scratch
- Ask AI to critique my code

## Network Notes
- The S in HTTPS stands for "secure"

## DNS Notes
- The DNS stores the IP address for different domain names so users don't need to memorize the IP to the websites they want to visit, just the domain name. DNS returns the IP to the computer so the computer can make the connection.

## Codepen Notes
- Try to experiment with codepen often

### Codepen Links
- Default Assignment for Codepen: https://codepen.io/Luke-Martinez/pen/XJrxaaB
- Flexbox Assignment: https://codepen.io/Luke-Martinez/pen/JoPxGPN

## Responsive Design notes
- Use it to help the webpage be rendered differently on different sized displays and still look good.
- use: 
    - ```css
        <meta 
        name ="viewport"
        content ="width=device-width, initial-scale =1/>
        ```
    - ```css
        aside {
        float: right;
        padding: 3em;
        margin: 0.5em;
        border: lack solid thin;
        }
        ```
        - these variables can be changed but should be present.
        - 3em will make it three times the size of the default letter m, so it's very variable
    - `none`
    - `block`
    - `inline`
    - `flex`
    - `grid`

    - ```css
        .container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, lfr))
        grid-auto-rows: 300px; /* Sets the row to 300px regardless of display size */
        grid-gap: 1em; /* The Gap between grids is the size of 1 oetter m */
        }
        ```
    Flex:
    - ```css
        .container {
            display: flex;
        }

        .item {
            flex: 0 0 50px; /* variables are grow, shrink, basis. grow and shrink are fractional units, and basis is the base size.*/
        }
        ```
    Media:
    - ```css
        @media (orientation: portrait) { /* can also be landscape. Will override other css if in this orientation */
            body {
                flex-direction: column;
            }
        }
        ```

## JavaScript Notes
-  Interpretive
- On every web browser and here to stay.