import{t as s,s as c,i as l,c as e,a as i,m as p,M as o,T as m,A as f,S as h}from"./index-kQL3Odtx.js";import{S as b}from"./ShinyText-CZnA5wqC.js";import{B as x}from"./Button-CBQ8PLB2.js";var y=s("<span class=word>"),u=s("<div class=card><div class=loader><div class=words>");const g=a=>{const d=a.children.split(" ").map((r,n)=>(()=>{var t=y();return c(t,"key",n),l(t,r),t})());return e(w,{get children(){var r=u(),n=r.firstChild,t=n.firstChild;return l(t,d),r}})},w=i("div")`
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
  }`,k=a=>e(v,{get children(){return e(x,p({className:"btn",animate:!0},a,{get children(){return a.children}}))}}),v=i.div`
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
  }`;var Y=s("<div class=loader-wrapper><span class=loader-letter>C</span><span class=loader-letter>o</span><span class=loader-letter>m</span><span class=loader-letter>p</span><span class=loader-letter>a</span><span class=loader-letter>n</span><span class=loader-letter>i</span><span class=loader-letter>o</span><span class=loader-letter>n</span><div class=loader>");const $=()=>e(S,{get children(){return Y()}}),S=i.div`
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
  }`,T=()=>e(h,{className:"h-screen min-w-screen px-2 flex flex-col justify-center items-center",get children(){return[e(o.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"flex flex-col gap-2 min-w-screen h-24 items-center  justify-center mb-25 text-center",get children(){return[e(g,{children:". Welcome Companions Let'sStudy Together"}),e($,{})]}}),e(o.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},class:"mb-8",get children(){return e(m,{animate:!0,className:"px-8 text-sm font-serif italic underline-offset-1 opacity-80 text-center",get children(){return e(b,{children:" Join a community of learners studying together in real-time "})}})}}),e(o.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},class:"mb-8 flex gap-4 mx-auto max-w-2xl",get children(){return e(k,{get children(){return e(f,{href:"/dashboard",children:"See Others Live"})}})}})]}});export{T as default};
