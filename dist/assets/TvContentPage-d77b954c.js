import{b as n,j as s,a as r,s as i}from"./index-26c353cc.js";import{C as m}from"./ContentCreator-c85180bc.js";const g=function(){const o=n(t=>t.content.data),e=n(t=>t.content.searchWord),a=o.filter(t=>t.category==="TV Series");return s(d,{children:[e.length===0?r("h2",{className:"tv-title",children:"TV Series"}):null,r(m,{content:a,searchWord:e})]})},d=i.div`
    padding-bottom: 3rem;

    .tv-title {
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

                .tv-title {
                    font-size: 1.25rem;
                    margin: 1rem 0rem;
                }
            }
`;export{g as default};
