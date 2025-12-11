import{b as _,o as de,e as ue,g as fe,t as g,h as me,i as o,j as I,s as G,k as T,l as se,d as re,m as oe,n as be,p as W,f as ve,q as ye,c as l,r as K,M as F,v as q,a as pe,S as U,T as M,w as we,u as xe}from"./index-CmIQwxpp.js";import{S as $e}from"./ShinyText-Cr4PXHBR.js";var _e=g('<div class="relative w-full h-full"style=aspect-ratio:16/10;background-color:black;position:relative><div id=yt-player-container class="absolute inset-0"style=width:100%;height:100%;position:absolute;top:0;left:0></div><div class="absolute inset-0 flex items-center justify-center"style="background-color:black;z-index:1;transition:opacity 500ms ease;will-change:opacity">'),Pe=g('<img alt="video thumbnail"style=max-width:100%;max-height:100%;object-fit:cover;object-position:center;display:block;width:100%;height:100%>'),ke=g('<button style="position:absolute;zIndex:30;background:rgba(255,255,255,0.95);border:none;padding:10px 18px;border-radius:6px;cursor:pointer;transform:translateY(0)">▶ Play'),Ie=g('<div class="absolute inset-0 flex items-center justify-center text-white"style=zIndex:40>Failed to load player');function Ce(e){let r;const[h,m]=_(!1),[v,c]=_(!1),[$,w]=_(!1),[x,S]=_(!1);let i=null,E=()=>e.videoId;function X(){return window.__YT_API_PROMISE||(window.__YT_API_PROMISE=new Promise((b,y)=>{if(window.YT&&window.YT.Player)return b(window.YT);if(!document.getElementById("youtube-iframe-api")){const d=document.createElement("script");d.id="youtube-iframe-api",d.src="https://www.youtube.com/iframe_api",d.async=!0,d.onerror=()=>y(new Error("YouTube API failed to load")),document.head.appendChild(d)}const s=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{s&&s(),b(window.YT)},setTimeout(()=>{window.YT&&window.YT.Player||b(window.YT)},8e3)})),window.__YT_API_PROMISE}function O(b){const y=`https://i.ytimg.com/vi/${b}/hqdefault.jpg`,a=new Image;return a.src=y,a.onload=()=>c(!0),a.onerror=()=>c(!1),y}async function L(b){if(!(!b||!r)){m(!1),w(!1),S(!1),O(b);try{const y=await X();if(!(y&&y.Player)){const a=document.createElement("iframe"),s=`https://www.youtube.com/embed/${b}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&origin=${window.location.origin}&enablejsapi=1`;a.setAttribute("src",s),a.setAttribute("allow","autoplay; encrypted-media; picture-in-picture"),a.setAttribute("allowfullscreen","true"),a.style.width="100%",a.style.height="100%",a.style.border="0",a.style.opacity="0",a.style.transition="opacity 600ms ease",a.style.willChange="opacity, transform",r.innerHTML="",r.appendChild(a),a.onload=()=>{setTimeout(()=>{a.style.opacity="1",setTimeout(()=>w(!0),250)},600)};return}if(i&&typeof i.destroy=="function"){try{i.destroy()}catch{}i=null}i=new y.Player(r,{videoId:b,playerVars:{autoplay:1,mute:1,controls:0,modestbranding:1,rel:0,playsinline:1,origin:window.location.origin,enablejsapi:1,iv_load_policy:3},events:{onReady:a=>{const s=i.getIframe();s&&(s.style.opacity="0",s.style.transition="opacity 600ms ease",s.style.willChange="opacity, transform",s.style.background="black",s.setAttribute("allow","autoplay; encrypted-media; picture-in-picture"));try{const d=a.target.playVideo();d&&typeof d.catch=="function"&&d.catch(t=>{S(!0)})}catch{S(!0)}},onStateChange:a=>{const s=a.data;s===y.PlayerState.PLAYING?setTimeout(()=>{const d=i.getIframe();d&&(d.style.opacity="1"),setTimeout(()=>w(!0),200)},250):s===y.PlayerState.BUFFERING||y.PlayerState.ENDED},onError:a=>{console.error("YT player error:",a),m(!0)}}})}catch(y){console.error("YouTube init error:",y),m(!0)}}}de(()=>L(E())),ue(()=>{if(e.videoId){const b=e.videoId;if(i&&typeof i.destroy=="function"){try{i.destroy()}catch{}i=null}c(!1),w(!1),S(!1),L(b)}}),fe(()=>{try{i&&typeof i.destroy=="function"&&i.destroy()}catch{}i=null});const j=e.videoId?`https://i.ytimg.com/vi/${e.videoId}/hqdefault.jpg`:"";return(()=>{var b=_e(),y=b.firstChild,a=y.nextSibling;return me(s=>r=s,y),o(a,(()=>{var s=I(()=>!!e.videoId);return()=>s()&&(()=>{var d=Pe();return d.addEventListener("error",()=>c(!1)),d.addEventListener("load",()=>c(!0)),G(d,"src",j),d})()})(),null),o(a,(()=>{var s=I(()=>!!(x()&&!$()));return()=>s()&&(()=>{var d=ke();return d.$$click=()=>{try{if(i&&typeof i.playVideo=="function")i.playVideo(),S(!1);else{const t=r.querySelector("iframe");t&&(t.contentWindow&&t.contentWindow.postMessage&&t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),t.style.opacity="1",w(!0))}}catch(t){console.warn("Play click failed",t)}},d})()})(),null),o(b,(()=>{var s=I(()=>!!h());return()=>s()&&Ie()})(),null),T(s=>{var d=$()?"0":"1",t=($(),"none");return d!==s.e&&se(a,"opacity",s.e=d),t!==s.t&&se(a,"pointerEvents",s.t=t),s},{e:void 0,t:void 0}),b})()}re(["click"]);var Se=g("<svg stroke-width=0>");function ge(e,r){const h=oe(e.a,r),[m,v]=be(h,["src"]),[c,$]=_(""),w=W(()=>r.title?`${e.c}<title>${r.title}</title>`:e.c);return ue(()=>$(w())),fe(()=>{$("")}),(()=>{var x=Se();return ve(x,oe({get stroke(){return e.a?.stroke},get color(){return r.color||"currentColor"},get fill(){return r.color||"currentColor"},get style(){return{...r.style,overflow:"visible"}}},v,{get height(){return r.size||"1em"},get width(){return r.size||"1em"},xmlns:"http://www.w3.org/2000/svg",get innerHTML(){return c()}}),!0,!0),o(x,()=>ye),x})()}function Ee(e){return ge({a:{viewBox:"0 0 512 512"},c:'<path d="M495.9 166.6c3.2 8.7.5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4l-55.6 17.8c-8.8 2.8-18.6.3-24.5-6.8-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4c-1.1-8.4-1.7-16.9-1.7-25.5s.6-17.1 1.7-25.4l-43.3-39.4c-6.9-6.2-9.6-15.9-6.4-24.6 4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2 5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8 8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>'},e)}function te(e){return ge({a:{viewBox:"0 0 384 512"},c:'<path d="M32 32C32 14.3 46.3 0 64 0h256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-29.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8S362.3 352 352 352H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64c-17.7 0-32-14.3-32-32zm128 352h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96z"/>'},e)}var Te=g('<div class="w-1 h-1 bg-white rounded-full mr-0.5">'),Ae=g("<button>"),Me=g('<div class="absolute inset-0 z-20 pointer-events-none">'),Ye=g('<svg class="w-8 h-8 text-gray-500"fill=none stroke=currentColor viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">'),Le=g('<div class="w-full h-full flex items-center justify-center bg-black">');const Z=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),ee=e=>{const{id:r,className:h="",isLive:m=!1,isPinned:v=!1,onPinChange:c}=e,[$,w]=_(!1),x=i=>{i.stopPropagation(),c?.(!v)},S=()=>{Z()&&c?.(!v)};return l(F.div,{get class(){return`relative aspect-video bg-black rounded-lg overflow-hidden ${h} ${Z()?"cursor-pointer":""}`},"data-video-id":r,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),onClick:S,get children(){return[l(K,{when:r,get fallback(){return(()=>{var i=Le();return o(i,l(F.div,{class:"w-16 h-16 rounded-full bg-black flex items-center justify-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},get children(){return Ye()}})),i})()},get children(){return l(Ce,{videoId:r})}}),(()=>{var i=Me();return o(i,l(F.div,{class:"absolute top-1 left-1 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded flex items-center pointer-events-auto",initial:{opacity:0,y:-5},get animate(){return{opacity:$()?.75:0,y:$()?0:-5}},transition:{duration:.2},get children(){return[Te(),"LIVE"]}}),null),o(i,l(K,{get when(){return!Z()},get children(){return l(F.div,{class:"absolute top-1 right-1 flex gap-1 pointer-events-auto",initial:{opacity:0,y:-5},get animate(){return{opacity:$()?1:0,y:$()?0:-5}},transition:{duration:.2},get children(){var E=Ae();return E.$$click=x,q(E,`p-3 rounded-full ${v?"bg-primary/90":"bg-black/60"} text-white hover:bg-primary transition-all cursor-pointer shadow-md`),G(E,"title",v?"Unpin":"Pin"),o(E,l(te,{class:"w-6 h-6 transition-transform",classList:{"rotate-45":v}})),E}})}}),null),i})()]}})};re(["click"]);var je=g('<button class=button-with-icon><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 48 48"id=Play class=icon><path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"fill=#ffffff class="color000000 svgShape"></path></svg><span class=text>Go Live');const Ne=()=>l(Ve,{get children(){return je()}}),Ve=pe.div`
  .button-with-icon {
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0px solid #d32f2f;
    font-family: "Istok Web", sans-serif;
    letter-spacing: 2px;
    padding: 0 12px;
    text-align: center;
    width: 116px;
    height: 40px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: normal;
    border-radius: 6px;
    outline: none;
    user-select: none;
    cursor: pointer;
    transform: translateY(0px);
    position: relative;
    box-shadow:
      inset 0 30px 30px -15px rgba(255, 255, 255, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0),
      inset 0 1px 20px rgba(0, 0, 0, 0.1),
      0 3px 0 #d32f2f,
      0 3px 2px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.1),
      0 10px 20px rgba(0, 0, 0, 0.1);
    background: #e53935;
    color: white;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
    transition: 200ms all ease-in-out;
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
  }`,R="yt_clone_cache_",ze=600*60*1e3,H=(...e)=>{console.log("%c[Cache]","color: #4CAF50; font-weight: bold",...e)},le={set:(e,r,h=ze)=>{try{const m=new Date,v=m.getTime()+h,c={data:r,expiry:v,timestamp:m.toISOString(),ttl:h/1e3+"s"};return localStorage.setItem(`${R}${e}`,JSON.stringify(c)),H(`Cached data for key: "${e}" (expires in ${h/1e3}s)`),!0}catch(m){return console.error("Error saving to cache:",m),!1}},get:e=>{try{const r=localStorage.getItem(`${R}${e}`);if(!r)return H(`Cache miss for key: "${e}" (not found)`),null;const h=JSON.parse(r),m=new Date;if(m.getTime()>h.expiry)return H(`Cache expired for key: "${e}" (expired at ${new Date(h.expiry).toLocaleTimeString()})`),localStorage.removeItem(`${R}${e}`),null;const c=Math.ceil((h.expiry-m.getTime())/1e3);return H(`Cache hit for key: "${e}" (expires in ${c}s)`),h.data}catch(r){return console.error("Error reading from cache:",r),null}},remove:e=>{try{return localStorage.removeItem(`${R}${e}`),!0}catch(r){return console.error("Error removing from cache:",r),!1}},clear:()=>{try{return Object.keys(localStorage).forEach(e=>{e.startsWith(R)&&localStorage.removeItem(e)}),!0}catch(e){return console.error("Error clearing cache:",e),!1}}},De={LIVE_VIDEOS:"live_videos"},Re="AIzaSyCme96dbKuwSWqh54Wed8-Rfj2C0r6IDYM",Oe="https://www.googleapis.com/youtube/v3",Be=600*60*1e3,Fe=async(e=12)=>{const r=`${De.LIVE_VIDEOS}_${e}`,h=le.get(r);if(h)return h;try{const v=["live study","study with me","live pomodoro"].join("|"),c=await fetch(`${Oe}/search?part=snippet&type=video&eventType=live&q=${encodeURIComponent(v)}&maxResults=${e}&key=${Re}`);if(!c.ok)return new Error(`API request failed with status ${c.status}`);const w=(await c.json()).items?.map(x=>x.id.videoId).filter(Boolean)||[];return w.length>0&&le.set(r,w,Be),w}catch(m){throw new Error(`Failed to fetch live videos: ${m.message}`)}};function Ue(){const[e,r]=_({data:[],loading:!1,error:null});return{videos:e,loadLiveVideos:async(m=12)=>{try{r(c=>({...c,loading:!0,error:null}));const v=await Fe(m);r({data:v,loading:!1,error:null})}catch(v){r(c=>({data:c.data,loading:!1,error:v.message||"Failed to load live videos"}))}}}}pe.div`
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
  }`;var He=g('<div class="flex justify-between p-16 items-center mb-4"><div class=flex-1></div><div class="flex gap-4 items-center"><button class="btn btn-ghost flex items-center gap-2 z-10"aria-label=Settings><span>Settings'),We=g('<div class="fixed inset-0 z-50 bg-black flex"><div class="absolute top-4 right-4 z-50"></div><div class="w-full h-full">'),qe=g('<div class=p-8><div class="flex justify-between items-center mb-8"><button class="p-2 rounded-full hover:bg-opacity-20 transition-colors"aria-label="Close settings"><svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke-width=2><path d="M18 6L6 18M6 6l12 12"></path></svg></button></div><div class=space-y-8><div class="flex flex-row justify-between items-center gap-4"></div></div><div class=space-y-8><div class="flex flex-row justify-between items-center gap-4"><input type=number class=" w-12 px-2 py-1 rounded-lg bg-black/50 border focus:border-white/30 focus:ring-2 focus:ring-white/50 transition-colors duration-200 text-white placeholder-gray-400 "placeholder=4></div></div><div class="space-y-8 mt-8"><div class=space-y-4><div class="flex flex-col gap-2"><div class="flex flex-col lg:flex-row gap-2"><input type=url placeholder=https://www.youtube.com/@channelname class="flex-1 px-4 py-2 rounded-lg bg-black/50 border border-gray-600 focus:border-white/30 focus:ring-2 focus:ring-white/50 transition-colors duration-200 text-white placeholder-gray-400"><button class="btn btn-primary whitespace-nowrap">Save</button></div><div class="flex items-center mt-4"><input id=showInDashboard type=checkbox class="w-4 h-4 rounded border-gray-600 bg-black/50 focus:ring-2 focus:ring-white/50"><label for=showInDashboard class="ml-2 text-sm text-gray-300">Show my live stream in dashboard'),Ge=g('<div class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"><div class="w-full max-w-2xl p-32">'),Ke=g('<div class="text-sm text-gray-500 flex items-center gap-1"> pinned'),Xe=g('<button class="btn btn-primary flex items-center gap-2"><span>Focus Mode'),Je=g('<div class="min-w-screen mb-12"><div class="flex justify-between items-center mb-6 px-4"><h2 class="text-2xl font-bold flex items-center gap-3"></h2></div><div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4">'),Qe=g('<div class="flex justify-center items-center h-64 bg-black"><span class="loading loading-spinner loading-lg">'),Ze=g('<div class="alert alert-error"><span>Error: '),et=g('<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4">'),tt=g('<div class="flex justify-center gap-2 mt-6"><button class="btn btn-sm">Previous</button><button class="btn btn-sm">Next'),rt=g("<button>"),ce=g("<div>");function at(){const[e,r]=_({theme:localStorage.getItem("theme")||"",cardsPerPage:localStorage.getItem("cardsPerPage")||"",youtubeUrl:localStorage.getItem("youtubeUrl")||"",showInDashboard:localStorage.getItem("showInDashboard")==="true"||!1}),h=(t,u)=>{localStorage.setItem(t,u),r(p=>({...p,[t]:u}))},[m,v]=_(e().cardsPerPage||4),{videos:c,loadLiveVideos:$}=Ue(),{isDark:w}=xe(),[x,S]=_({}),[i,E]=_(1),[X,O]=_(!1),[L,j]=_(!1);de(()=>$(12));const b=(t,u)=>{const p={...x(),[t]:u};S(p),Object.values(p).filter(Boolean).length===0&&O(!1)},y=W(()=>(c().data||[]).slice((i()-1)*m(),i()*m())),a=W(()=>Math.ceil((c().data?.length||0)/m())),s=t=>{t>=1&&t<=a()&&E(t)},d=W(()=>Object.values(x()).filter(Boolean).length);return l(U,{className:"min-h-screen flex flex-col justify-around items-center",get children(){return[l(U,{className:"min-w-screen  max-w-4xl mb-6",get children(){return[(()=>{var t=He(),u=t.firstChild,p=u.nextSibling,f=p.firstChild,n=f.firstChild;return o(u,(()=>{var P=I(()=>d()>0);return()=>P()&&(()=>{var k=Ke(),A=k.firstChild;return o(k,l(te,{class:"w-5 h-5"}),A),o(k,d,A),k})()})()),o(p,l(Ne,{}),f),o(p,(()=>{var P=I(()=>d()>0);return()=>P()&&(()=>{var k=Xe();return k.$$click=()=>O(!0),k})()})(),f),f.$$click=()=>j(!L()),o(f,l(Ee,{class:"w-5 h-5"}),n),t})(),I(()=>I(()=>d()>0)()&&(()=>{var t=Je(),u=t.firstChild,p=u.firstChild,f=u.nextSibling;return o(p,l(te,{class:"w-7 h-7 text-purple-600"}),null),o(p,l(M,{animte:!0,children:"Pinned Streams"}),null),o(f,()=>c().data?.filter(n=>x()[n]).map(n=>l(ee,{id:n,isPinned:!0,onPinChange:P=>b(n,P),className:"aspect-video col-span-1 sm:col-span-1"}))),t})())]}}),l(U,{className:"w-full p-4 pl-16 pr-16",get children(){return[l(M,{animate:!0,className:"px-8 text-2xl md:text-4xl lg:text-6xl font-serif font-stretch-50% opacity-80",get children(){return l($e,{children:" Live Streams "})}}),I(()=>I(()=>!!c().loading)()?Qe():I(()=>!!c().error)()?(()=>{var t=Ze(),u=t.firstChild;return u.firstChild,o(u,()=>c().error,null),t})():[(()=>{var t=et();return o(t,()=>y().map(u=>l(ee,{id:u,get isPinned(){return!!x()[u]},onPinChange:p=>b(u,p)}))),t})(),I(()=>I(()=>a()>1)()&&(()=>{var t=tt(),u=t.firstChild,p=u.nextSibling;return u.$$click=()=>s(i()-1),o(t,()=>Array.from({length:a()},(f,n)=>n+1).map(f=>(()=>{var n=rt();return n.$$click=()=>s(f),G(n,"key",f),o(n,f),T(()=>q(n,`btn btn-sm ${i()===f?"btn-primary":""}`)),n})()),p),p.$$click=()=>s(i()+1),T(f=>{var n=i()===1,P=i()===a();return n!==f.e&&(u.disabled=f.e=n),P!==f.t&&(p.disabled=f.t=P),f},{e:void 0,t:void 0}),t})())])]}}),l(K,{get when(){return X()},get children(){var t=We(),u=t.firstChild,p=u.nextSibling;return o(p,()=>{const f=c().data?.filter(C=>x()[C])||[],n=f.length,P=()=>n<=1?"grid-cols-1 grid-rows-1":n===2?"grid-cols-2 grid-rows-1":n===3||n===4?"grid-cols-2 grid-rows-2":n===5||n===6?"grid-cols-3 grid-rows-2":"grid-cols-4 grid-rows-2",k=C=>n===3&&C===0||(n===5||n===6)&&C<3?"row-span-2":"",A=()=>n===1?"aspect-auto":"aspect-video";return(()=>{var C=ce();return o(C,()=>f.map((N,V)=>(()=>{var Y=ce();return o(Y,l(ee,{id:N,isPinned:!0,hideUI:!0,onPinChange:B=>b(N,B),get className(){return`w-full h-full ${A()}`}})),T(()=>q(Y,`relative ${k(V)}`)),Y})())),T(()=>q(C,`w-full h-full grid ${P()} gap-1 p-1`)),C})()}),t}}),l(K,{get when(){return L()},get children(){var t=Ge(),u=t.firstChild;return t.$$click=()=>j(!1),u.$$click=p=>p.stopPropagation(),o(u,l(U,{className:"rounded-xl shadow-2xl overflow-hidden",get children(){var p=qe(),f=p.firstChild,n=f.firstChild,P=n.firstChild,k=f.nextSibling,A=k.firstChild,C=k.nextSibling,N=C.firstChild,V=N.firstChild,Y=C.nextSibling,B=Y.firstChild,ie=B.firstChild,J=ie.firstChild,ne=J.firstChild,he=J.nextSibling,ae=he.firstChild;return o(f,l(M,{className:"text-3xl font-bold",children:"Settings"}),n),n.$$click=()=>j(!1),o(A,l(M,{as:"label",className:"block text-md font-medium m-4",children:"Theme"}),null),o(A,l(we,{saveSettings:h}),null),o(N,l(M,{as:"label",className:"block text-md font-medium m-4",children:"Cards"}),V),V.addEventListener("change",z=>{const Q=z.target.value,D=parseInt(Q);if(isNaN(D)||D<1){console.error(`Failed to parse value "${Q}" to an integer.`);return}if(D>12){console.error(`Value "${Q}" is greater than 12.`);return}h("cardsPerPage",D),v(D)}),o(Y,l(M,{className:"text-xl font-semibold mb-4",children:"Go Live"}),B),o(ie,l(M,{as:"label",className:"block text-md font-medium",children:"YouTube Channel URL"}),J),ne.$$input=z=>h("youtubeUrl",z.target.value),ae.$$input=z=>h("showInDashboard",z.target.checked),T(()=>G(P,"stroke",w()?"currentColor":"black")),T(()=>V.value=e().cardsPerPage||m()),T(()=>ne.value=e().youtubeUrl),T(()=>ae.checked=e().showInDashboard),p}})),t}})]}})}re(["click","input"]);export{at as default};
