import{b as n,j as s,a as o,s as d}from"./index-26c353cc.js";import{C as a}from"./ContentCreator-c85180bc.js";const g=function(){const r=n(e=>e.content.data),t=n(e=>e.content.searchWord),m=r.filter(e=>e.isBookmarked&&e.category==="Movie"),i=r.filter(e=>e.isBookmarked&&e.category==="TV Series");return s(l,{children:[t.length===0?o("h2",{className:"bookmarked-title",children:"Bookmarked Movies"}):null,o(a,{content:m,searchWord:t}),t.length===0?o("h2",{className:"bookmarked-title",children:"Bookmarked TV Series"}):null,o(a,{content:i,searchWord:t})]})},l=d.div`
    padding-bottom: 3rem;

    .bookmarked-title {
        font-weight: 300;
        font-size: 2rem;
        letter-spacing: -0.5px;
        margin: 1.5rem 0rem;
    }

        @media(max-width: 48em) {
            padding-bottom: 2rem;
        }

            @media(max-width: 32.5em) {
                padding-bottom: 1rem;

                .bookmarked-title {

                    font-size: 1.25rem;
                    margin: 1rem 0rem;
                }
            }
`;export{g as default};
