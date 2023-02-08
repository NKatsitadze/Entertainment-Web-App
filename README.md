Entertainment web app is also one of harder challenges on frontendmentor.
Data is fetched from local JSON file.
Used React Router, for displaying multiple pages, added error page and 
loading element.
Integrated splide library for responsive and swipeable, beautiful carousel.
Used Redux for state management, local json data is kept as redux state,
later it's manipulated by toggler action, besides data, in state is also kept
search word string, that changes depending on search bar value, which dispatches
action on every change. Later redux data state is filtered by search word, and 
rendered by our needs.
Made special context creator components which takes array of objects as argument
from redux and renders elements.
Using typescript, I made sure to create all the correct types for components, for
avoiding bugs in future.
Learnt new way of using SVGs, this time I made react components as svg_s and 
with different states I'm sending different arguments to those components, which
help with styling hover and active states. Also using useLocation, css styles are
applied to svg_s depending on pathname, so refreshing page can't break styling.
