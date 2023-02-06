import{b as o,j as s,a as n,s as a}from"./index-26c353cc.js";import{C as m}from"./ContentCreator-c85180bc.js";const g=function(){const r=o(e=>e.content.data),t=o(e=>e.content.searchWord),i=r.filter(e=>e.category==="Movie");return s(d,{children:[t.length===0?n("h2",{className:"movies-title",children:"Movies"}):null,n(m,{content:i,searchWord:t})]})},d=a.div`
    padding-bottom: 3rem;

    .movies-title {
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

                .movies-title {
                    font-size: 1.25rem;
                    margin: 1rem 0rem;
                }
            }
`;export{g as default};
