# Today's Notes- 02/06

## Intro to CSS
- simple mechanism for adding style
- style sheet is set of rules
- each rule consists of one+ selectors and a declaration block
- declaraction blocks consist of {}

< p> {color:red;font-size 16px;}

3 different scopes of CSS:
- local: confined to single element (tag)
- internal: affects elements in entire page
- external: can affect other pages


Precedence:

inline> internal> external

inline: 
< h1 style="color:white">

## different types of selectors:

- element/tag/type selector- redefines the look of a specific tag

ex. body{background-color: #0005}

 - class selector- can apply to any tag

 ex. .indent{margin-right:5%;margin-left...}

 - ID selector- can be applied to a single element with that id on a page

 ex. #myID {color:#1234A;}

 - grouping- several selectors share same declarations

 ex. h1, h2, h3 {font-family: Georgia;}

 - universal selector- written with *, matches the name of any element type

 ex. *{font:blue;}

 - decendent selector- match an element that is the decendent 