import{t as n,s as c,i as o,c as t,a as i,m,b as f,u as x,S as h,M as d,T as b,d as g}from"./index-B4kHu1IF.js";import{S as u}from"./ShinyText-Tq1mhfAh.js";import{B as y}from"./Button-d3lwkUXJ.js";var w=n("<span class=word>"),v=n("<div class=card><div class=loader><div class=words>");const k=a=>{const l=a.children.split(" ").map((r,s)=>(()=>{var e=w();return c(e,"key",s),o(e,r),e})());return t(_,{get children(){var r=v(),s=r.firstChild,e=s.firstChild;return o(e,l),r}})},_=i("div")`
  .card {
    /* color used to softly clip top and bottom of the .words container */
    --bg-color: #111;
    background-color: var(--bg-color);
    padding: 1rem 2rem;
    border-radius: 1.25rem;
  }
  .loader {
    color: rgb(124, 124, 124);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 25px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 40px;
    padding: 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 8px;
  }

  .words {
    overflow: hidden;
    position: relative;
  }
  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 6px;
    color: #956afa;
    animation: spin_4991 8s infinite;
  }

  @keyframes spin_4991 {
    10% {
      -webkit-transform: translateY(-102%);
      transform: translateY(-102%);
    }

    25% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }

    35% {
      -webkit-transform: translateY(-202%);
      transform: translateY(-202%);
    }

    50% {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
    }

    60% {
      -webkit-transform: translateY(-302%);
      transform: translateY(-302%);
    }

    75% {
      -webkit-transform: translateY(-300%);
      transform: translateY(-300%);
    }

    85% {
      -webkit-transform: translateY(-402%);
      transform: translateY(-402%);
    }

    100% {
      -webkit-transform: translateY(-400%);
      transform: translateY(-400%);
    }
  }`,Y=a=>t($,{get children(){return t(y,m({className:"btn",animate:!0},a,{get children(){return a.children}}))}}),$=i.div`
  .btn {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(14, 14, 26);
    color: rgb(234, 234, 234);
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 60px #1f4c65;
    -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
  }

  .btn:active {
    scale: 0.92;
  }

  .btn:hover {
    background: rgb(2,29,78);
    background: white;
    opacity: 0.85;
    color: #5b5eff;
  }`;var X=n("<div class=loader-wrapper><span class=loader-letter>C</span><span class=loader-letter>o</span><span class=loader-letter>m</span><span class=loader-letter>p</span><span class=loader-letter>a</span><span class=loader-letter>n</span><span class=loader-letter>i</span><span class=loader-letter>o</span><span class=loader-letter>n</span><div class=loader>");const S=()=>t(z,{get children(){return X()}}),z=i.div`
  .loader-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    font-family: "Inter", sans-serif;
    font-size: 1.2em;
    font-weight: 300;
    color: white;
    border-radius: 50%;
    background-color: transparent;
    user-select: none;
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: transparent;
    animation: loader-rotate 4s linear infinite;
    z-index: 0;
  }

  @keyframes loader-rotate {
    0% {
      transform: rotate(90deg);
      box-shadow:
        0 10px 20px 0 #fff inset,
        0 20px 30px 0 #ad5fff inset,
        0 60px 60px 0 #471eec inset;
    }
    50% {
      transform: rotate(270deg);
      box-shadow:
        0 10px 20px 0 #fff inset,
        0 20px 10px 0 #d60a47 inset,
        0 40px 60px 0 #311e80 inset;
    }
    100% {
      transform: rotate(450deg);
      box-shadow:
        0 10px 20px 0 #fff inset,
        0 20px 30px 0 #ad5fff inset,
        0 60px 60px 0 #471eec inset;
    }
  }

  .loader-letter {
    display: inline-block;
    opacity: 0.4;
    transform: translateY(0);
    animation: loader-letter-anim 6s infinite;
    z-index: 1;
    border-radius: 50ch;
    border: none;
  }

  .loader-letter:nth-child(1) {
    animation-delay: 0s;
  }
  .loader-letter:nth-child(2) {
    animation-delay: 0.1s;
  }
  .loader-letter:nth-child(3) {
    animation-delay: 0.2s;
  }
  .loader-letter:nth-child(4) {
    animation-delay: 0.3s;
  }
  .loader-letter:nth-child(5) {
    animation-delay: 0.4s;
  }
  .loader-letter:nth-child(6) {
    animation-delay: 0.5s;
  }
  .loader-letter:nth-child(7) {
    animation-delay: 0.6s;
  }
  .loader-letter:nth-child(8) {
    animation-delay: 0.7s;
  }
  .loader-letter:nth-child(9) {
    animation-delay: 0.8s;
  }
  .loader-letter:nth-child(10) {
    animation-delay: 0.9s;
  }

  @keyframes loader-letter-anim {
    0%,
    100% {
      opacity: 0.4;
      transform: translateY(0);
    }
    20% {
      opacity: 1;
      transform: scale(1.15);
    }
    40% {
      opacity: 0.7;
      transform: translateY(0);
    }
  }`;var C=n("<div class=loader><span class=loader-text>Loading <br> Companions</span><span class=load>");const F=()=>t(L,{get children(){return C()}}),L=i.div`
  .loader {
    width: 160px;
    height: 100px;
    position: relative;
  }

  .loader-text {
    position: absolute;
    top: 0;
    padding: 4px;
    margin: 2px;
    color: #C8B6FF;
    animation: text_713 15s ease both infinite;
    font-size: .8rem;
    letter-spacing: 1px;
  }

  .load {
    background-color: #9A79FF;
    border-radius: 50px;
    display: block;
    height: 16px;
    width: 16px;
    bottom: 0;
    position: absolute;
    transform: translateX(64px);
    animation: loading_713 16s ease both infinite;
  }

  .load::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #D1C2FF;
    border-radius: inherit;
    animation: loading2_713 16s linear both infinite;
  }

  @keyframes text_713 {
    0% {
      letter-spacing: 1px;
      transform: translateX(0px);
    }

    40% {
      letter-spacing: 2px;
      transform: translateX(26px);
    }

    80% {
      letter-spacing: 1px;
      transform: translateX(32px);
    }

    90% {
      letter-spacing: 2px;
      transform: translateX(0px);
    }

    100% {
      letter-spacing: 1px;
      transform: translateX(0px);
    }
  }

  @keyframes loading_713 {
    0% {
      width: 16px;
      transform: translateX(0px);
    }

    40% {
      width: 100%;
      transform: translateX(0px);
    }

    80% {
      width: 16px;
      transform: translateX(64px);
    }

    90% {
      width: 100%;
      transform: translateX(0px);
    }

    100% {
      width: 16px;
      transform: translateX(0px);
    }
  }

  @keyframes loading2_713 {
    0% {
      transform: translateX(0px);
      width: 16px;
    }

    40% {
      transform: translateX(0%);
      width: 80%;
    }

    80% {
      width: 100%;
      transform: translateX(0px);
    }

    90% {
      width: 80%;
      transform: translateX(15px);
    }

    100% {
      transform: translateX(0px);
      width: 16px;
    }
  }`;var N=n('<div class="fixed inset-0 bg-black flex justify-center items-center z-50">'),T=n("<div class=relative>");const A=()=>{const[a,l]=f(!1),r=x(),s=()=>{l(!0),setTimeout(()=>{r("/dashboard")},1e4)};return(()=>{var e=T();return o(e,t(h,{get when(){return a()},get children(){var p=N();return o(p,t(F,{})),p}}),null),o(e,t(g,{className:"h-screen min-w-screen px-2 flex flex-col justify-center items-center",get children(){return[t(d.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"flex flex-col gap-2 min-w-screen h-24 items-center justify-center mb-25 text-center",get children(){return[t(k,{children:". Welcome Companions Let'sStudy Together"}),t(S,{})]}}),t(d.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},class:"mb-8",get children(){return t(b,{animate:!0,className:"px-8 text-sm font-serif italic underline-offset-1 opacity-80 text-center",get children(){return t(u,{children:"Join a community of learners studying together in real-time"})}})}}),t(d.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},class:"mb-8 flex gap-4 mx-auto max-w-2xl",get children(){return t(Y,{onClick:s,children:"See Others Live"})}})]}}),null),e})()};export{A as default};
