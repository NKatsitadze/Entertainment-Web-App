import{s as n,u as c,j as r,F as d,a as t,t as g}from"./index-26c353cc.js";const p="/assets/icon-bookmark-empty-7df18d69.svg",A="/assets/icon-bookmark-full-8103888e.svg",f="/assets/icon-play-0d3bd984.svg",h="/assets/icon-category-movie-80c77375.svg",u="/assets/icon-category-tv-f2ace09a.svg",a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAfSURBVHgBY/z//78DAwODPRAfYIIyQMABxDkI5RwAAKRBBkKGECM5AAAAAElFTkSuQmCC",w=function({content:s,searchWord:i}){const l=c(),o=[...s].reverse().filter(e=>e.title.toLowerCase().includes(i)),m=function(e){l(g({obj:e}))};return r(d,{children:[i.length!==0?r(b,{children:["Found ",o.length," results for '",i,"'"]}):null,t(v,{children:o.map(e=>r("div",{className:"movie-box",children:[r("div",{className:"image-container",children:[r("div",{className:"play-box",children:[t("img",{src:f,alt:"play icon"}),t("span",{children:"Play"})]}),t("img",{className:"img",src:e.thumbnail.regular.large,alt:"trending image"}),t("div",{onClick:m.bind(null,e),role:"button",className:"bookmark",children:t("img",{src:e.isBookmarked?A:p,alt:"bookmark icon"})})]}),r("div",{className:"info-box",children:[r("div",{className:"info",children:[t("span",{children:e.year}),t("img",{className:"oval",src:a,alt:"dot"}),t("img",{src:e.category==="Movie"?h:u,alt:"movie/tv icon"}),t("span",{children:e.category}),t("img",{className:"oval",src:a,alt:"dot"}),t("span",{children:e.rating})]}),t("div",{className:"title",children:e.title})]})]},e.title))})]})},b=n.h2`
    font-weight: 300;
    font-size: 2rem;
    letter-spacing: -0.5px;
    margin-bottom: 2rem;
    margin-top: 1rem;

        @media(max-width: 48em) {
            margin-bottom: 1.5rem;
        }

            @media(max-width: 32.5em) {
                font-size: 1.25rem;
            }
`,v=n.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    column-gap: 2.5rem;
    row-gap: 2rem;
    width: calc(100% - 2.25rem);

    .movie-box {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
       

    .image-container {
        position: relative;
        overflow: hidden;
        border-radius: 0.5rem;
        cursor: pointer;

        &:hover .play-box {
            opacity: 1;
            pointer-events: auto;
        }

        &:hover .img {
            filter: brightness(0.9);
            transform: scale(1);
            transform: rotate(0.0001deg);
        }
        
        .play-box {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.9rem;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 255, 255, 0.25);
            height: 3rem;
            width: 7rem;
            border-radius: 1.8rem;
            opacity: 0;
            pointer-events: none;
            cursor: pointer;
            transition: all 0.15s;
            z-index: 5;

            span {
                font-weight: 500;
                font-size: 1.125rem;
            }
        }
    
        .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
            transition: all 0.15s;
            transform: scale(1.05);
            backface-visibility: none;
        }
    
        .bookmark {
            position: absolute;
            top: 1rem;
            right: 1rem;
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
            background: var(--Dark-Blue);
            opacity: 0.55;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            &:hover {
                background: rgba(255,255,255,0.5);
            }
        }
    }

        .info-box {
            display: flex;
            flex-direction: column;
            gap: 5px;

            .info {
                font-size: 0.8rem;
                font-weight: 300;
                opacity: 0.75;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .oval {
                height: 3px;
                width: 3px;
                align-self: center;
            }
        }

        .title {
            font-weight: 500;
            font-size: 1.125rem;
        }
    }

        @media(max-width: 48em) {
            grid-template-columns: repeat(3, 1fr);
            width: calc(100% - 1.5rem);
            column-gap: 1.875rem;
            row-gap: 1.5rem;
        }

            @media(max-width: 32.5em) {
                grid-template-columns: repeat(2, 1fr);
                column-gap: 1rem;
                row-gap: 1rem;
                width: calc(100% - 1rem);

                .movie-box {
                    .image-container {
                        .bookmark {
                            top: 0.5rem;
                            right: 0.5rem;
                        }

                        .play-box {
                            height: 2.5rem;
                            width: 6.5rem;

                            span {
                                font-size: 1rem;
                            }
                        }
                    }
                }
            }
    
`;export{w as C,p as a,A as b,f as i,h as m,a as o,u as t};
