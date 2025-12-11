import{b as P,o as W,e as K,g as X,t as f,h as ee,i as p,j as _,s as N,k as S,l as H,d as O,m as F,n as te,p as Y,f as re,q as ne,c as m,r as D,M as A,v as M,a as J,S as L,T as U}from"./index-BjwWQhhi.js";import{S as ie}from"./ShinyText-DBZhUhI8.js";var oe=f('<div class="relative w-full h-full"style=aspect-ratio:16/10;background-color:black;position:relative><div id=yt-player-container class="absolute inset-0"style=width:100%;height:100%;position:absolute;top:0;left:0></div><div class="absolute inset-0 flex items-center justify-center"style="background-color:black;z-index:1;transition:opacity 500ms ease;will-change:opacity">'),ae=f('<img alt="video thumbnail"style=max-width:100%;max-height:100%;object-fit:cover;object-position:center;display:block;width:100%;height:100%>'),se=f('<button style="position:absolute;zIndex:30;background:rgba(255,255,255,0.95);border:none;padding:10px 18px;border-radius:6px;cursor:pointer;transform:translateY(0)">▶ Play'),le=f('<div class="absolute inset-0 flex items-center justify-center text-white"style=zIndex:40>Failed to load player');function ce(r){let t;const[g,d]=P(!1),[h,a]=P(!1),[v,y]=P(!1),[w,$]=P(!1);let s=null,x=()=>r.videoId;function k(){return window.__YT_API_PROMISE||(window.__YT_API_PROMISE=new Promise((n,i)=>{if(window.YT&&window.YT.Player)return n(window.YT);if(!document.getElementById("youtube-iframe-api")){const c=document.createElement("script");c.id="youtube-iframe-api",c.src="https://www.youtube.com/iframe_api",c.async=!0,c.onerror=()=>i(new Error("YouTube API failed to load")),document.head.appendChild(c)}const o=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{o&&o(),n(window.YT)},setTimeout(()=>{window.YT&&window.YT.Player||n(window.YT)},8e3)})),window.__YT_API_PROMISE}function C(n){const i=`https://i.ytimg.com/vi/${n}/hqdefault.jpg`,e=new Image;return e.src=i,e.onload=()=>a(!0),e.onerror=()=>a(!1),i}async function l(n){if(!(!n||!t)){d(!1),y(!1),$(!1),C(n);try{const i=await k();if(!(i&&i.Player)){const e=document.createElement("iframe"),o=`https://www.youtube.com/embed/${n}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&origin=${window.location.origin}&enablejsapi=1`;e.setAttribute("src",o),e.setAttribute("allow","autoplay; encrypted-media; picture-in-picture"),e.setAttribute("allowfullscreen","true"),e.style.width="100%",e.style.height="100%",e.style.border="0",e.style.opacity="0",e.style.transition="opacity 600ms ease",e.style.willChange="opacity, transform",t.innerHTML="",t.appendChild(e),e.onload=()=>{setTimeout(()=>{e.style.opacity="1",setTimeout(()=>y(!0),250)},600)};return}if(s&&typeof s.destroy=="function"){try{s.destroy()}catch{}s=null}s=new i.Player(t,{videoId:n,playerVars:{autoplay:1,mute:1,controls:0,modestbranding:1,rel:0,playsinline:1,origin:window.location.origin,enablejsapi:1,iv_load_policy:3},events:{onReady:e=>{const o=s.getIframe();o&&(o.style.opacity="0",o.style.transition="opacity 600ms ease",o.style.willChange="opacity, transform",o.style.background="black",o.setAttribute("allow","autoplay; encrypted-media; picture-in-picture"));try{const c=e.target.playVideo();c&&typeof c.catch=="function"&&c.catch(b=>{$(!0)})}catch{$(!0)}},onStateChange:e=>{const o=e.data;o===i.PlayerState.PLAYING?setTimeout(()=>{const c=s.getIframe();c&&(c.style.opacity="1"),setTimeout(()=>y(!0),200)},250):o===i.PlayerState.BUFFERING||i.PlayerState.ENDED},onError:e=>{console.error("YT player error:",e),d(!0)}}})}catch(i){console.error("YouTube init error:",i),d(!0)}}}W(()=>l(x())),K(()=>{if(r.videoId){const n=r.videoId;if(s&&typeof s.destroy=="function"){try{s.destroy()}catch{}s=null}a(!1),y(!1),$(!1),l(n)}}),X(()=>{try{s&&typeof s.destroy=="function"&&s.destroy()}catch{}s=null});const u=r.videoId?`https://i.ytimg.com/vi/${r.videoId}/hqdefault.jpg`:"";return(()=>{var n=oe(),i=n.firstChild,e=i.nextSibling;return ee(o=>t=o,i),p(e,(()=>{var o=_(()=>!!r.videoId);return()=>o()&&(()=>{var c=ae();return c.addEventListener("error",()=>a(!1)),c.addEventListener("load",()=>a(!0)),N(c,"src",u),c})()})(),null),p(e,(()=>{var o=_(()=>!!(w()&&!v()));return()=>o()&&(()=>{var c=se();return c.$$click=()=>{try{if(s&&typeof s.playVideo=="function")s.playVideo(),$(!1);else{const b=t.querySelector("iframe");b&&(b.contentWindow&&b.contentWindow.postMessage&&b.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),b.style.opacity="1",y(!0))}}catch(b){console.warn("Play click failed",b)}},c})()})(),null),p(n,(()=>{var o=_(()=>!!g());return()=>o()&&le()})(),null),S(o=>{var c=v()?"0":"1",b=(v(),"none");return c!==o.e&&H(e,"opacity",o.e=c),b!==o.t&&H(e,"pointerEvents",o.t=b),o},{e:void 0,t:void 0}),n})()}O(["click"]);var de=f("<svg stroke-width=0>");function ue(r,t){const g=F(r.a,t),[d,h]=te(g,["src"]),[a,v]=P(""),y=Y(()=>t.title?`${r.c}<title>${t.title}</title>`:r.c);return K(()=>v(y())),X(()=>{v("")}),(()=>{var w=de();return re(w,F({get stroke(){return r.a?.stroke},get color(){return t.color||"currentColor"},get fill(){return t.color||"currentColor"},get style(){return{...t.style,overflow:"visible"}}},h,{get height(){return t.size||"1em"},get width(){return t.size||"1em"},xmlns:"http://www.w3.org/2000/svg",get innerHTML(){return a()}}),!0,!0),p(w,()=>ne),w})()}function z(r){return ue({a:{viewBox:"0 0 384 512"},c:'<path d="M32 32C32 14.3 46.3 0 64 0h256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-29.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8S362.3 352 352 352H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64c-17.7 0-32-14.3-32-32zm128 352h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96z"/>'},r)}var pe=f('<div class="w-1 h-1 bg-white rounded-full mr-0.5">'),fe=f("<button>"),ge=f('<div class="absolute inset-0 z-20 pointer-events-none">'),me=f('<svg class="w-8 h-8 text-gray-500"fill=none stroke=currentColor viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">'),he=f('<div class="w-full h-full flex items-center justify-center bg-black">');const j=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),V=r=>{const{id:t,className:g="",isLive:d=!1,isPinned:h=!1,onPinChange:a}=r,[v,y]=P(!1),w=s=>{s.stopPropagation(),a?.(!h)},$=()=>{j()&&a?.(!h)};return m(A.div,{get class(){return`relative aspect-video bg-black rounded-lg overflow-hidden ${g} ${j()?"cursor-pointer":""}`},"data-video-id":t,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),onClick:$,get children(){return[m(D,{when:t,get fallback(){return(()=>{var s=he();return p(s,m(A.div,{class:"w-16 h-16 rounded-full bg-black flex items-center justify-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},get children(){return me()}})),s})()},get children(){return m(ce,{videoId:t})}}),(()=>{var s=ge();return p(s,m(A.div,{class:"absolute top-1 left-1 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded flex items-center pointer-events-auto",initial:{opacity:0,y:-5},get animate(){return{opacity:v()?.75:0,y:v()?0:-5}},transition:{duration:.2},get children(){return[pe(),"LIVE"]}}),null),p(s,m(D,{get when(){return!j()},get children(){return m(A.div,{class:"absolute top-1 right-1 flex gap-1 pointer-events-auto",initial:{opacity:0,y:-5},get animate(){return{opacity:v()?1:0,y:v()?0:-5}},transition:{duration:.2},get children(){var x=fe();return x.$$click=w,M(x,`p-3 rounded-full ${h?"bg-primary/90":"bg-black/60"} text-white hover:bg-primary transition-all cursor-pointer shadow-md`),N(x,"title",h?"Unpin":"Pin"),p(x,m(z,{class:"w-6 h-6 transition-transform",classList:{"rotate-45":h}})),x}})}}),null),s})()]}})};O(["click"]);J.div`
  .button-with-icon {
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #d32f2f;
    font-family: "Istok Web", sans-serif;
    letter-spacing: 1px;
    padding: 0 12px;
    text-align: center;
    width: 112px;
    height: 30px;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: normal;
    border-radius: 3px;
    outline: none;
    user-select: none;
    cursor: pointer;
    transform: translateY(0px);
    position: relative;
    box-shadow:
      inset 0 30px 30px -15px rgba(255, 255, 255, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.3),
      inset 0 1px 20px rgba(0, 0, 0, 0),
      0 3px 0 #d32f2f,
      0 3px 2px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.1),
      0 10px 20px rgba(0, 0, 0, 0.1);
    background: #e53935;
    color: white;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
    transition: 150ms all ease-in-out;
  }

  .button-with-icon .icon {
    margin-right: 8px;
    width: 20px;
    height: 20px;
    transition: all 0.5s ease-in-out;
  }

  .button-with-icon:active {
    transform: translateY(3px);
    box-shadow:
      inset 0 16px 2px -15px rgba(0, 0, 0, 0),
      inset 0 0 0 1px rgba(255, 255, 255, 0.15),
      inset 0 1px 20px rgba(0, 0, 0, 0.1),
      0 0 0 #d32f2f,
      0 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 0 rgba(0, 0, 0, 0),
      0 0 0 rgba(0, 0, 0, 0);
  }

  .button-with-icon:hover .text {
    transform: translateX(85px);
  }

  .button-with-icon:hover .icon {
    transform: translate(27px);
    scale: 1.05;
  }

  .text {
    transition: all 0.5s ease-in-out;
  }`;const E="yt_clone_cache_",ye=600*60*1e3,T=(...r)=>{console.log("%c[Cache]","color: #4CAF50; font-weight: bold",...r)},q={set:(r,t,g=ye)=>{try{const d=new Date,h=d.getTime()+g,a={data:t,expiry:h,timestamp:d.toISOString(),ttl:g/1e3+"s"};return localStorage.setItem(`${E}${r}`,JSON.stringify(a)),T(`Cached data for key: "${r}" (expires in ${g/1e3}s)`),!0}catch(d){return console.error("Error saving to cache:",d),!1}},get:r=>{try{const t=localStorage.getItem(`${E}${r}`);if(!t)return T(`Cache miss for key: "${r}" (not found)`),null;const g=JSON.parse(t),d=new Date;if(d.getTime()>g.expiry)return T(`Cache expired for key: "${r}" (expired at ${new Date(g.expiry).toLocaleTimeString()})`),localStorage.removeItem(`${E}${r}`),null;const a=Math.ceil((g.expiry-d.getTime())/1e3);return T(`Cache hit for key: "${r}" (expires in ${a}s)`),g.data}catch(t){return console.error("Error reading from cache:",t),null}},remove:r=>{try{return localStorage.removeItem(`${E}${r}`),!0}catch(t){return console.error("Error removing from cache:",t),!1}},clear:()=>{try{return Object.keys(localStorage).forEach(r=>{r.startsWith(E)&&localStorage.removeItem(r)}),!0}catch(r){return console.error("Error clearing cache:",r),!1}}},ve={LIVE_VIDEOS:"live_videos"},be="AIzaSyCme96dbKuwSWqh54Wed8-Rfj2C0r6IDYM",we="https://www.googleapis.com/youtube/v3",xe=600*60*1e3,$e=async(r=12)=>{const t=`${ve.LIVE_VIDEOS}_${r}`,g=q.get(t);if(g)return g;try{const h=["live study","study with me","live pomodoro"].join("|"),a=await fetch(`${we}/search?part=snippet&type=video&eventType=live&q=${encodeURIComponent(h)}&maxResults=${r}&key=${be}`);if(!a.ok)return new Error(`API request failed with status ${a.status}`);const y=(await a.json()).items?.map(w=>w.id.videoId).filter(Boolean)||[];return y.length>0&&q.set(t,y,xe),y}catch(d){throw new Error(`Failed to fetch live videos: ${d.message}`)}};function _e(){const[r,t]=P({data:[],loading:!1,error:null});return{videos:r,loadLiveVideos:async(d=12)=>{try{t(a=>({...a,loading:!0,error:null}));const h=await $e(d);t({data:h,loading:!1,error:null})}catch(h){t(a=>({data:a.data,loading:!1,error:h.message||"Failed to load live videos"}))}}}}J.div`
  @keyframes animate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  .container {
    position: relative;
    top: -40px;
    transform: skewY(-35deg);
    animation: animate 5s linear infinite;
    .cube {
      position: relative;
      z-index: 2;
      &:nth-child(2) {
        z-index: 1;
        translate: -60px -60px;
      }
      &:nth-child(3) {
        z-index: 3;
        translate: 60px 60px;
      }
      div {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 15px;
        translate: calc(-35px * var(--x)) calc(-30px * var(--y));
        span {
          position: relative;
          display: inline-block;
          width: 22px;
          height: 32px;
          background: #dcdcdc;
          z-index: calc(1 * var(--i));
          transition: 1.5s;
          &:hover {
            transition: 0s;
            background: #ef4149;
            filter: drop-shadow(0 0 30px #ef4149);
            &:before,
            &:after {
              transition: 0s;
              background: #ef4149;
            }
          }
          &:before {
            content: "";
            position: absolute;
            left: -40px;
            width: 40px;
            height: 100%;
            background: #fff;
            transform-origin: right;
            transform: skewY(45deg);
            transition: 1.5s;
          }
          &:after {
            content: "";
            position: absolute;
            top: -40px;
            left: 0px;
            width: 100%;
            height: 40px;
            background: #f2f2f2;
            transform-origin: bottom;
            transform: skewX(45deg);
            transition: 1.5s;
          }
        }
      }
    }
  }`;var Pe=f('<div class="flex justify-between p-16 items-center mb-4">'),Ie=f('<div class="fixed inset-0 z-50 bg-black flex"><div class="absolute top-4 right-4 z-50"></div><div class="w-full h-full">'),ke=f('<div class="text-sm text-gray-500 flex items-center gap-1"> pinned'),Ce=f('<button class="btn btn-primary flex items-center gap-2"><span>Focus Mode'),Ee=f('<div class="min-w-screen mb-12"><div class="flex justify-between items-center mb-6 px-4"><h2 class="text-2xl font-bold flex items-center gap-3"></h2></div><div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4">'),Se=f('<div class="flex justify-center items-center h-64 bg-black"><span class="loading loading-spinner loading-lg">'),Ae=f('<div class="alert alert-error"><span>Error: '),Te=f('<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4">'),Ye=f('<div class="flex justify-center gap-2 mt-6"><button class="btn btn-sm">Previous</button><button class="btn btn-sm">Next'),Me=f("<button>"),G=f("<div>");function je(){const{videos:t,loadLiveVideos:g}=_e(),[d,h]=P({}),[a,v]=P(1),[y,w]=P(!1);W(()=>g(12));const $=(l,u)=>{const n={...d(),[l]:u};h(n),Object.values(n).filter(Boolean).length===0&&w(!1)},s=Y(()=>(t().data||[]).slice((a()-1)*4,a()*4)),x=Y(()=>Math.ceil((t().data?.length||0)/4)),k=l=>{l>=1&&l<=x()&&v(l)},C=Y(()=>Object.values(d()).filter(Boolean).length);return m(L,{className:"min-h-screen flex flex-col justify-around items-center",get children(){return[m(L,{className:"min-w-screen  max-w-4xl mb-6",get children(){return[(()=>{var l=Pe();return p(l,(()=>{var u=_(()=>C()>0);return()=>u()&&[(()=>{var n=ke(),i=n.firstChild;return p(n,m(z,{class:"w-5 h-5"}),i),p(n,C,i),n})(),(()=>{var n=Ce();return n.$$click=()=>w(!0),n})()]})()),l})(),_(()=>_(()=>C()>0)()&&(()=>{var l=Ee(),u=l.firstChild,n=u.firstChild,i=u.nextSibling;return p(n,m(z,{class:"w-7 h-7 text-purple-600"}),null),p(n,m(U,{animte:!0,children:"Pinned Streams"}),null),p(i,()=>t().data?.filter(e=>d()[e]).map(e=>m(V,{id:e,isPinned:!0,onPinChange:o=>$(e,o),className:"aspect-video col-span-1 sm:col-span-1"}))),l})())]}}),m(L,{className:"w-full p-4 pl-16 pr-16",get children(){return[m(U,{animate:!0,className:"px-8 text-2xl md:text-4xl lg:text-6xl font-serif font-stretch-50% opacity-80",get children(){return m(ie,{children:" Live Streams "})}}),_(()=>_(()=>!!t().loading)()?Se():_(()=>!!t().error)()?(()=>{var l=Ae(),u=l.firstChild;return u.firstChild,p(u,()=>t().error,null),l})():[(()=>{var l=Te();return p(l,()=>s().map(u=>m(V,{id:u,get isPinned(){return!!d()[u]},onPinChange:n=>$(u,n)}))),l})(),_(()=>_(()=>x()>1)()&&(()=>{var l=Ye(),u=l.firstChild,n=u.nextSibling;return u.$$click=()=>k(a()-1),p(l,()=>Array.from({length:x()},(i,e)=>e+1).map(i=>(()=>{var e=Me();return e.$$click=()=>k(i),N(e,"key",i),p(e,i),S(()=>M(e,`btn btn-sm ${a()===i?"btn-primary":""}`)),e})()),n),n.$$click=()=>k(a()+1),S(i=>{var e=a()===1,o=a()===x();return e!==i.e&&(u.disabled=i.e=e),o!==i.t&&(n.disabled=i.t=o),i},{e:void 0,t:void 0}),l})())])]}}),m(D,{get when(){return y()},get children(){var l=Ie(),u=l.firstChild,n=u.nextSibling;return p(n,()=>{const i=t().data?.filter(I=>d()[I])||[],e=i.length,o=()=>e<=1?"grid-cols-1 grid-rows-1":e===2?"grid-cols-2 grid-rows-1":e===3||e===4?"grid-cols-2 grid-rows-2":e===5||e===6?"grid-cols-3 grid-rows-2":"grid-cols-4 grid-rows-2",c=I=>e===3&&I===0||(e===5||e===6)&&I<3?"row-span-2":"",b=()=>e===1?"aspect-auto":"aspect-video";return(()=>{var I=G();return p(I,()=>i.map((B,Q)=>(()=>{var R=G();return p(R,m(V,{id:B,isPinned:!0,hideUI:!0,onPinChange:Z=>$(B,Z),get className(){return`w-full h-full ${b()}`}})),S(()=>M(R,`relative ${c(Q)}`)),R})())),S(()=>M(I,`w-full h-full grid ${o()} gap-1 p-1`)),I})()}),l}})]}})}O(["click"]);export{je as default};
