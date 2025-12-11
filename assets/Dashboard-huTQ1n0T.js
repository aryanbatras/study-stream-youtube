import{b as $,o as te,e as re,g as ie,t as f,h as oe,i as c,j as x,s as U,k as S,l as J,d as X,m as Q,n as se,p as F,f as le,q as ce,c as d,r as q,M as R,v as H,a as ne,S as D,T as V,w as de,u as ue}from"./index-D00YHoyE.js";import{S as fe}from"./ShinyText-DoPgOsOm.js";var pe=f('<div class="relative w-full h-full"style=aspect-ratio:16/10;background-color:black;position:relative><div id=yt-player-container class="absolute inset-0"style=width:100%;height:100%;position:absolute;top:0;left:0></div><div class="absolute inset-0 flex items-center justify-center"style="background-color:black;z-index:1;transition:opacity 500ms ease;will-change:opacity">'),ge=f('<img alt="video thumbnail"style=max-width:100%;max-height:100%;object-fit:cover;object-position:center;display:block;width:100%;height:100%>'),he=f('<button style="position:absolute;zIndex:30;background:rgba(255,255,255,0.95);border:none;padding:10px 18px;border-radius:6px;cursor:pointer;transform:translateY(0)">▶ Play'),me=f('<div class="absolute inset-0 flex items-center justify-center text-white"style=zIndex:40>Failed to load player');function ve(i){let n;const[u,m]=$(!1),[v,l]=$(!1),[y,p]=$(!1),[_,P]=$(!1);let s=null,k=()=>i.videoId;function T(){return window.__YT_API_PROMISE||(window.__YT_API_PROMISE=new Promise((g,h)=>{if(window.YT&&window.YT.Player)return g(window.YT);if(!document.getElementById("youtube-iframe-api")){const r=document.createElement("script");r.id="youtube-iframe-api",r.src="https://www.youtube.com/iframe_api",r.async=!0,r.onerror=()=>h(new Error("YouTube API failed to load")),document.head.appendChild(r)}const t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{t&&t(),g(window.YT)},setTimeout(()=>{window.YT&&window.YT.Player||g(window.YT)},8e3)})),window.__YT_API_PROMISE}function A(g){const h=`https://i.ytimg.com/vi/${g}/hqdefault.jpg`,e=new Image;return e.src=h,e.onload=()=>l(!0),e.onerror=()=>l(!1),h}async function z(g){if(!(!g||!n)){m(!1),p(!1),P(!1),A(g);try{const h=await T();if(!(h&&h.Player)){const e=document.createElement("iframe"),t=`https://www.youtube.com/embed/${g}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&origin=${window.location.origin}&enablejsapi=1`;e.setAttribute("src",t),e.setAttribute("allow","autoplay; encrypted-media; picture-in-picture"),e.setAttribute("allowfullscreen","true"),e.style.width="100%",e.style.height="100%",e.style.border="0",e.style.opacity="0",e.style.transition="opacity 600ms ease",e.style.willChange="opacity, transform",n.innerHTML="",n.appendChild(e),e.onload=()=>{setTimeout(()=>{e.style.opacity="1",setTimeout(()=>p(!0),250)},600)};return}if(s&&typeof s.destroy=="function"){try{s.destroy()}catch{}s=null}s=new h.Player(n,{videoId:g,playerVars:{autoplay:1,mute:1,controls:0,modestbranding:1,rel:0,playsinline:1,origin:window.location.origin,enablejsapi:1,iv_load_policy:3},events:{onReady:e=>{const t=s.getIframe();t&&(t.style.opacity="0",t.style.transition="opacity 600ms ease",t.style.willChange="opacity, transform",t.style.background="black",t.setAttribute("allow","autoplay; encrypted-media; picture-in-picture"));try{const r=e.target.playVideo();r&&typeof r.catch=="function"&&r.catch(a=>{P(!0)})}catch{P(!0)}},onStateChange:e=>{const t=e.data;t===h.PlayerState.PLAYING?setTimeout(()=>{const r=s.getIframe();r&&(r.style.opacity="1"),setTimeout(()=>p(!0),200)},250):t===h.PlayerState.BUFFERING||h.PlayerState.ENDED},onError:e=>{console.error("YT player error:",e),m(!0)}}})}catch(h){console.error("YouTube init error:",h),m(!0)}}}te(()=>z(k())),re(()=>{if(i.videoId){const g=i.videoId;if(s&&typeof s.destroy=="function"){try{s.destroy()}catch{}s=null}l(!1),p(!1),P(!1),z(g)}}),ie(()=>{try{s&&typeof s.destroy=="function"&&s.destroy()}catch{}s=null});const E=i.videoId?`https://i.ytimg.com/vi/${i.videoId}/hqdefault.jpg`:"";return(()=>{var g=pe(),h=g.firstChild,e=h.nextSibling;return oe(t=>n=t,h),c(e,(()=>{var t=x(()=>!!i.videoId);return()=>t()&&(()=>{var r=ge();return r.addEventListener("error",()=>l(!1)),r.addEventListener("load",()=>l(!0)),U(r,"src",E),r})()})(),null),c(e,(()=>{var t=x(()=>!!(_()&&!y()));return()=>t()&&(()=>{var r=he();return r.$$click=()=>{try{if(s&&typeof s.playVideo=="function")s.playVideo(),P(!1);else{const a=n.querySelector("iframe");a&&(a.contentWindow&&a.contentWindow.postMessage&&a.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),a.style.opacity="1",p(!0))}}catch(a){console.warn("Play click failed",a)}},r})()})(),null),c(g,(()=>{var t=x(()=>!!u());return()=>t()&&me()})(),null),S(t=>{var r=y()?"0":"1",a=(y(),"none");return r!==t.e&&J(e,"opacity",t.e=r),a!==t.t&&J(e,"pointerEvents",t.t=a),t},{e:void 0,t:void 0}),g})()}X(["click"]);var ye=f("<svg stroke-width=0>");function ae(i,n){const u=Q(i.a,n),[m,v]=se(u,["src"]),[l,y]=$(""),p=F(()=>n.title?`${i.c}<title>${n.title}</title>`:i.c);return re(()=>y(p())),ie(()=>{y("")}),(()=>{var _=ye();return le(_,Q({get stroke(){return i.a?.stroke},get color(){return n.color||"currentColor"},get fill(){return n.color||"currentColor"},get style(){return{...n.style,overflow:"visible"}}},v,{get height(){return n.size||"1em"},get width(){return n.size||"1em"},xmlns:"http://www.w3.org/2000/svg",get innerHTML(){return l()}}),!0,!0),c(_,()=>ce),_})()}function be(i){return ae({a:{viewBox:"0 0 512 512"},c:'<path d="M495.9 166.6c3.2 8.7.5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4l-55.6 17.8c-8.8 2.8-18.6.3-24.5-6.8-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4c-1.1-8.4-1.7-16.9-1.7-25.5s.6-17.1 1.7-25.4l-43.3-39.4c-6.9-6.2-9.6-15.9-6.4-24.6 4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2 5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8 8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>'},i)}function K(i){return ae({a:{viewBox:"0 0 384 512"},c:'<path d="M32 32C32 14.3 46.3 0 64 0h256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-29.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8S362.3 352 352 352H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64c-17.7 0-32-14.3-32-32zm128 352h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96z"/>'},i)}var we=f('<div class="w-1 h-1 bg-white rounded-full mr-0.5">'),xe=f("<button>"),$e=f('<div class="absolute inset-0 z-20 pointer-events-none">'),_e=f('<svg class="w-8 h-8 text-gray-500"fill=none stroke=currentColor viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">'),ke=f('<div class="w-full h-full flex items-center justify-center bg-black">');const W=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),G=i=>{const{id:n,className:u="",isLive:m=!1,isPinned:v=!1,onPinChange:l}=i,[y,p]=$(!1),_=s=>{s.stopPropagation(),l?.(!v)},P=()=>{W()&&l?.(!v)};return d(R.div,{get class(){return`relative aspect-video bg-black rounded-lg overflow-hidden ${u} ${W()?"cursor-pointer":""}`},"data-video-id":n,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),onClick:P,get children(){return[d(q,{when:n,get fallback(){return(()=>{var s=ke();return c(s,d(R.div,{class:"w-16 h-16 rounded-full bg-black flex items-center justify-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},get children(){return _e()}})),s})()},get children(){return d(ve,{videoId:n})}}),(()=>{var s=$e();return c(s,d(R.div,{class:"absolute top-1 left-1 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded flex items-center pointer-events-auto",initial:{opacity:0,y:-5},get animate(){return{opacity:y()?.75:0,y:y()?0:-5}},transition:{duration:.2},get children(){return[we(),"LIVE"]}}),null),c(s,d(q,{get when(){return!W()},get children(){return d(R.div,{class:"absolute top-1 right-1 flex gap-1 pointer-events-auto",initial:{opacity:0,y:-5},get animate(){return{opacity:y()?1:0,y:y()?0:-5}},transition:{duration:.2},get children(){var k=xe();return k.$$click=_,H(k,`p-3 rounded-full ${v?"bg-primary/90":"bg-black/60"} text-white hover:bg-primary transition-all cursor-pointer shadow-md`),U(k,"title",v?"Unpin":"Pin"),c(k,d(K,{class:"w-6 h-6 transition-transform",classList:{"rotate-45":v}})),k}})}}),null),s})()]}})};X(["click"]);ne.div`
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
  }`;const N="yt_clone_cache_",Ce=600*60*1e3,B=(...i)=>{console.log("%c[Cache]","color: #4CAF50; font-weight: bold",...i)},Z={set:(i,n,u=Ce)=>{try{const m=new Date,v=m.getTime()+u,l={data:n,expiry:v,timestamp:m.toISOString(),ttl:u/1e3+"s"};return localStorage.setItem(`${N}${i}`,JSON.stringify(l)),B(`Cached data for key: "${i}" (expires in ${u/1e3}s)`),!0}catch(m){return console.error("Error saving to cache:",m),!1}},get:i=>{try{const n=localStorage.getItem(`${N}${i}`);if(!n)return B(`Cache miss for key: "${i}" (not found)`),null;const u=JSON.parse(n),m=new Date;if(m.getTime()>u.expiry)return B(`Cache expired for key: "${i}" (expired at ${new Date(u.expiry).toLocaleTimeString()})`),localStorage.removeItem(`${N}${i}`),null;const l=Math.ceil((u.expiry-m.getTime())/1e3);return B(`Cache hit for key: "${i}" (expires in ${l}s)`),u.data}catch(n){return console.error("Error reading from cache:",n),null}},remove:i=>{try{return localStorage.removeItem(`${N}${i}`),!0}catch(n){return console.error("Error removing from cache:",n),!1}},clear:()=>{try{return Object.keys(localStorage).forEach(i=>{i.startsWith(N)&&localStorage.removeItem(i)}),!0}catch(i){return console.error("Error clearing cache:",i),!1}}},Pe={LIVE_VIDEOS:"live_videos"},Ie="AIzaSyCme96dbKuwSWqh54Wed8-Rfj2C0r6IDYM",Se="https://www.googleapis.com/youtube/v3",Ee=600*60*1e3,Te=async(i=12)=>{const n=`${Pe.LIVE_VIDEOS}_${i}`,u=Z.get(n);if(u)return u;try{const v=["live study","study with me","live pomodoro"].join("|"),l=await fetch(`${Se}/search?part=snippet&type=video&eventType=live&q=${encodeURIComponent(v)}&maxResults=${i}&key=${Ie}`);if(!l.ok)return new Error(`API request failed with status ${l.status}`);const p=(await l.json()).items?.map(_=>_.id.videoId).filter(Boolean)||[];return p.length>0&&Z.set(n,p,Ee),p}catch(m){throw new Error(`Failed to fetch live videos: ${m.message}`)}};function Ae(){const[i,n]=$({data:[],loading:!1,error:null});return{videos:i,loadLiveVideos:async(m=12)=>{try{n(l=>({...l,loading:!0,error:null}));const v=await Te(m);n({data:v,loading:!1,error:null})}catch(v){n(l=>({data:l.data,loading:!1,error:v.message||"Failed to load live videos"}))}}}}ne.div`
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
  }`;var Me=f('<div class="flex justify-between p-16 items-center mb-4"><div class=flex-1></div><div class="flex gap-4"><button class="btn btn-ghost flex items-center gap-2 z-10"aria-label=Settings><span>Settings'),Ye=f('<div class="fixed inset-0 z-50 bg-black flex"><div class="absolute top-4 right-4 z-50"></div><div class="w-full h-full">'),je=f('<div class=p-8><div class="flex justify-between items-center mb-8"><button class="p-2 rounded-full hover:bg-opacity-20 transition-colors"aria-label="Close settings"><svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke-width=2><path d="M18 6L6 18M6 6l12 12"></path></svg></button></div><div class=space-y-8><div class="flex flex-row justify-between items-center gap-4"></div></div><div class=space-y-8><div class="flex flex-row justify-between items-center gap-4"><input type=number class=" w-12 px-2 py-1 rounded-lg bg-black/50 border focus:border-white/30 focus:ring-2 focus:ring-white/50 transition-colors duration-200 text-white placeholder-gray-400 "placeholder=4>'),Le=f('<div class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"><div class="w-full max-w-2xl p-32">'),Ve=f('<div class="text-sm text-gray-500 flex items-center gap-1"> pinned'),Ne=f('<button class="btn btn-primary flex items-center gap-2"><span>Focus Mode'),ze=f('<div class="min-w-screen mb-12"><div class="flex justify-between items-center mb-6 px-4"><h2 class="text-2xl font-bold flex items-center gap-3"></h2></div><div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4">'),Oe=f('<div class="flex justify-center items-center h-64 bg-black"><span class="loading loading-spinner loading-lg">'),Re=f('<div class="alert alert-error"><span>Error: '),De=f('<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4">'),Be=f('<div class="flex justify-center gap-2 mt-6"><button class="btn btn-sm">Previous</button><button class="btn btn-sm">Next'),Fe=f("<button>"),ee=f("<div>");function qe(){const[i,n]=$(4),{videos:u,loadLiveVideos:m}=Ae(),{isDark:v}=ue(),[l,y]=$({}),[p,_]=$(1),[P,s]=$(!1),[k,T]=$(!1);te(()=>m(12));const A=(e,t)=>{const r={...l(),[e]:t};y(r),Object.values(r).filter(Boolean).length===0&&s(!1)},z=F(()=>(u().data||[]).slice((p()-1)*i(),p()*i())),E=F(()=>Math.ceil((u().data?.length||0)/i())),g=e=>{e>=1&&e<=E()&&_(e)},h=F(()=>Object.values(l()).filter(Boolean).length);return d(D,{className:"min-h-screen flex flex-col justify-around items-center",get children(){return[d(D,{className:"min-w-screen  max-w-4xl mb-6",get children(){return[(()=>{var e=Me(),t=e.firstChild,r=t.nextSibling,a=r.firstChild,o=a.firstChild;return c(t,(()=>{var b=x(()=>h()>0);return()=>b()&&(()=>{var w=Ve(),I=w.firstChild;return c(w,d(K,{class:"w-5 h-5"}),I),c(w,h,I),w})()})()),c(r,(()=>{var b=x(()=>h()>0);return()=>b()&&(()=>{var w=Ne();return w.$$click=()=>s(!0),w})()})(),a),a.$$click=()=>T(!k()),c(a,d(be,{class:"w-5 h-5"}),o),e})(),x(()=>x(()=>h()>0)()&&(()=>{var e=ze(),t=e.firstChild,r=t.firstChild,a=t.nextSibling;return c(r,d(K,{class:"w-7 h-7 text-purple-600"}),null),c(r,d(V,{animte:!0,children:"Pinned Streams"}),null),c(a,()=>u().data?.filter(o=>l()[o]).map(o=>d(G,{id:o,isPinned:!0,onPinChange:b=>A(o,b),className:"aspect-video col-span-1 sm:col-span-1"}))),e})())]}}),d(D,{className:"w-full p-4 pl-16 pr-16",get children(){return[d(V,{animate:!0,className:"px-8 text-2xl md:text-4xl lg:text-6xl font-serif font-stretch-50% opacity-80",get children(){return d(fe,{children:" Live Streams "})}}),x(()=>x(()=>!!u().loading)()?Oe():x(()=>!!u().error)()?(()=>{var e=Re(),t=e.firstChild;return t.firstChild,c(t,()=>u().error,null),e})():[(()=>{var e=De();return c(e,()=>z().map(t=>d(G,{id:t,get isPinned(){return!!l()[t]},onPinChange:r=>A(t,r)}))),e})(),x(()=>x(()=>E()>1)()&&(()=>{var e=Be(),t=e.firstChild,r=t.nextSibling;return t.$$click=()=>g(p()-1),c(e,()=>Array.from({length:E()},(a,o)=>o+1).map(a=>(()=>{var o=Fe();return o.$$click=()=>g(a),U(o,"key",a),c(o,a),S(()=>H(o,`btn btn-sm ${p()===a?"btn-primary":""}`)),o})()),r),r.$$click=()=>g(p()+1),S(a=>{var o=p()===1,b=p()===E();return o!==a.e&&(t.disabled=a.e=o),b!==a.t&&(r.disabled=a.t=b),a},{e:void 0,t:void 0}),e})())])]}}),d(q,{get when(){return P()},get children(){var e=Ye(),t=e.firstChild,r=t.nextSibling;return c(r,()=>{const a=u().data?.filter(C=>l()[C])||[],o=a.length,b=()=>o<=1?"grid-cols-1 grid-rows-1":o===2?"grid-cols-2 grid-rows-1":o===3||o===4?"grid-cols-2 grid-rows-2":o===5||o===6?"grid-cols-3 grid-rows-2":"grid-cols-4 grid-rows-2",w=C=>o===3&&C===0||(o===5||o===6)&&C<3?"row-span-2":"",I=()=>o===1?"aspect-auto":"aspect-video";return(()=>{var C=ee();return c(C,()=>a.map((M,Y)=>(()=>{var j=ee();return c(j,d(G,{id:M,isPinned:!0,hideUI:!0,onPinChange:L=>A(M,L),get className(){return`w-full h-full ${I()}`}})),S(()=>H(j,`relative ${w(Y)}`)),j})())),S(()=>H(C,`w-full h-full grid ${b()} gap-1 p-1`)),C})()}),e}}),d(q,{get when(){return k()},get children(){var e=Le(),t=e.firstChild;return e.$$click=()=>T(!1),t.$$click=r=>r.stopPropagation(),c(t,d(D,{className:"rounded-xl shadow-2xl overflow-hidden",get children(){var r=je(),a=r.firstChild,o=a.firstChild,b=o.firstChild,w=a.nextSibling,I=w.firstChild,C=w.nextSibling,M=C.firstChild,Y=M.firstChild;return c(a,d(V,{className:"text-3xl font-bold",children:"Settings"}),o),o.$$click=()=>T(!1),c(I,d(V,{as:"label",className:"block text-md font-medium m-4",children:"Theme"}),null),c(I,d(de,{}),null),c(M,d(V,{as:"label",className:"block text-md font-medium m-4",children:"Cards"}),Y),Y.addEventListener("change",j=>{const L=j.target.value,O=parseInt(L);if(isNaN(O)||O<1){console.error(`Failed to parse value "${L}" to an integer.`);return}if(O>12){console.error(`Value "${L}" is greater than 12.`);return}n(O)}),S(()=>U(b,"stroke",v()?"currentColor":"black")),S(()=>Y.value=Math.max(1,Math.min(12,i()||4))),r}})),e}})]}})}X(["click"]);export{qe as default};
