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
        border: black solid thin;
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
- VS code can use Node.js as a debugger.

### Arrow Functions
- If using curly braces, use the `return` statement
```JS
    () => 3; //Good syntax
    () => { 3; } //Bad syntax
    () => { return 3; } //Good Syntax
    ```
    



## React Notes
- JS tool to
 - simplify common patterns
 - provide comon components
 - improve performance
 - increase device coverage


### React Properties
-  


### React Components
- 


## JSX Notes
- combines JavaScript and HTML
- JSX
```JSX
    const jsx = <p>Hello World</p>
```
- Babel transpiles to JS
- ```JS
     const jsx = React.createElement("p", null, "Hello World");
     ```
- Browser renders to the DOM
- ```html
     <p> Hello World</p>
     ```
- Here's an example
- ```JSX
    function Hello({greeting="wassup", phrase}) {
        return <div>
        <p>{greeting} {phrase}</p>
        </div>
    };

    const root = ReactDOM.createRoot(document,querySelector('#root'));
    root.render(<div><Hello greeting="Hello" phrase="friends" /><Hello gretting="goodbye" phrase="enemies"></div>)
    ```

### State
```JSX
    const Hello = () => {
        const {color, setColor} = React.useState("red");

        function changeColor() {
            setColor (color === "red" ? "green" : "red");
        }

        return (
            <div>
                <p style={{ color: color}}>Hello React</p>
                <button onClick={changeColor}>change</button>
            </div>
        );
    };
```

### Promises
- Browser rendering is *single threaded*.
- If you want it to look like it's running in parallel, you have to use promises.
- Promises have several states
    - pending - Currently running asynchronously
    - fulfilled - completed successfully
    - rejected - failed to complete
- ```jsx
    function callback(resolve) {
        resolve('done'); // resolve is in the promise class, and the promise class passes it in.
    }

    const p = new Promise(callback);

    p.then((result) => console.log(result));
    ```

- ```jsx
    const coinToss = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() >0.1) {
                resolve(Math.random() > 0.5 ? 'heads' : 'tails');
            } else {
                reject('fell off table!');
            }
        }, 
        Math.random()  > 0.5 ? 1000: 2000
      );
    });

    // this is how it was originally done
    coinToss
        .then((result) => console.log(`Toss result: ${result}`));
        .catch((err) => console.error(`Error: ${err}`));
        .finally(() => console.log('1 Toss completed'));

    // can also be written using the await syntax, but everything after it has to wait for the await to resolve.
    const x = await coinToss;
    console.log(`Toss result: ${x}`);
        
    ```
- Await must be the top level module function or called from an async function.

## Service Requests
- browser requests static files from the Server
- browser can also request from an external Service
- `curl` is a command line browser and displays the html without rendering it
- our service can also call other services

###
- 