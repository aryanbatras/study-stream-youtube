import{b as I,o as ve,e as ce,g as be,t as m,h as Pe,i as n,j as k,s as W,k as N,l as ge,d as ie,m as fe,n as Ie,p as Z,f as Le,q as Ee,c as s,r as te,M as J,v as ee,a as ye,S as F,T as D,w as Te,u as Ye}from"./index-Bq-i6c_H.js";import{S as pe}from"./ShinyText-B6TXkS6V.js";var Ve=m('<div class="relative w-full h-full"style=aspect-ratio:16/10;background-color:black;position:relative><div id=yt-player-container class="absolute inset-0"style=width:100%;height:100%;position:absolute;top:0;left:0></div><div class="absolute inset-0 flex items-center justify-center"style="background-color:black;z-index:1;transition:opacity 500ms ease;will-change:opacity">'),je=m('<img alt="video thumbnail"style=max-width:100%;max-height:100%;object-fit:cover;object-position:center;display:block;width:100%;height:100%>'),Ae=m('<button style="position:absolute;zIndex:30;background:rgba(255,255,255,0.95);border:none;padding:10px 18px;border-radius:6px;cursor:pointer;transform:translateY(0)">▶ Play'),Ne=m('<div class="absolute inset-0 flex items-center justify-center text-white"style=zIndex:40>Failed to load player');function Me(t){let e;const[f,g]=I(!1),[v,p]=I(!1),[$,P]=I(!1),[S,y]=I(!1);let a=null,w=()=>t.videoId;function j(){return window.__YT_API_PROMISE||(window.__YT_API_PROMISE=new Promise((b,i)=>{if(window.YT&&window.YT.Player)return b(window.YT);if(!document.getElementById("youtube-iframe-api")){const h=document.createElement("script");h.id="youtube-iframe-api",h.src="https://www.youtube.com/iframe_api",h.async=!0,h.onerror=()=>i(new Error("YouTube API failed to load")),document.head.appendChild(h)}const o=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{o&&o(),b(window.YT)},setTimeout(()=>{window.YT&&window.YT.Player||b(window.YT)},8e3)})),window.__YT_API_PROMISE}function z(b){const i=`https://i.ytimg.com/vi/${b}/hqdefault.jpg`,l=new Image;return l.src=i,l.onload=()=>p(!0),l.onerror=()=>p(!1),i}async function A(b){if(!(!b||!e)){g(!1),P(!1),y(!1),z(b);try{const i=await j();if(!(i&&i.Player)){const l=document.createElement("iframe"),o=`https://www.youtube.com/embed/${b}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&origin=${window.location.origin}&enablejsapi=1`;l.setAttribute("src",o),l.setAttribute("allow","autoplay; encrypted-media; picture-in-picture"),l.setAttribute("allowfullscreen","true"),l.style.width="100%",l.style.height="100%",l.style.border="0",l.style.opacity="0",l.style.transition="opacity 600ms ease",l.style.willChange="opacity, transform",e.innerHTML="",e.appendChild(l),l.onload=()=>{setTimeout(()=>{l.style.opacity="1",setTimeout(()=>P(!0),250)},600)};return}if(a&&typeof a.destroy=="function"){try{a.destroy()}catch{}a=null}a=new i.Player(e,{videoId:b,playerVars:{autoplay:1,mute:1,controls:0,modestbranding:1,rel:0,playsinline:1,origin:window.location.origin,enablejsapi:1,iv_load_policy:3},events:{onReady:l=>{const o=a.getIframe();o&&(o.style.opacity="0",o.style.transition="opacity 600ms ease",o.style.willChange="opacity, transform",o.style.background="black",o.setAttribute("allow","autoplay; encrypted-media; picture-in-picture"));try{const h=l.target.playVideo();h&&typeof h.catch=="function"&&h.catch(L=>{y(!0)})}catch{y(!0)}},onStateChange:l=>{const o=l.data;o===i.PlayerState.PLAYING?setTimeout(()=>{const h=a.getIframe();h&&(h.style.opacity="1"),setTimeout(()=>P(!0),200)},250):o===i.PlayerState.BUFFERING||i.PlayerState.ENDED},onError:l=>{console.error("YT player error:",l),g(!0)}}})}catch(i){console.error("YouTube init error:",i),g(!0)}}}ve(()=>A(w())),ce(()=>{if(t.videoId){const b=t.videoId;if(a&&typeof a.destroy=="function"){try{a.destroy()}catch{}a=null}p(!1),P(!1),y(!1),A(b)}}),be(()=>{try{a&&typeof a.destroy=="function"&&a.destroy()}catch{}a=null});const Y=t.videoId?`https://i.ytimg.com/vi/${t.videoId}/hqdefault.jpg`:"";return(()=>{var b=Ve(),i=b.firstChild,l=i.nextSibling;return Pe(o=>e=o,i),n(l,(()=>{var o=k(()=>!!t.videoId);return()=>o()&&(()=>{var h=je();return h.addEventListener("error",()=>p(!1)),h.addEventListener("load",()=>p(!0)),W(h,"src",Y),h})()})(),null),n(l,(()=>{var o=k(()=>!!(S()&&!$()));return()=>o()&&(()=>{var h=Ae();return h.$$click=()=>{try{if(a&&typeof a.playVideo=="function")a.playVideo(),y(!1);else{const L=e.querySelector("iframe");L&&(L.contentWindow&&L.contentWindow.postMessage&&L.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),L.style.opacity="1",P(!0))}}catch(L){console.warn("Play click failed",L)}},h})()})(),null),n(b,(()=>{var o=k(()=>!!f());return()=>o()&&Ne()})(),null),N(o=>{var h=$()?"0":"1",L=($(),"none");return h!==o.e&&ge(l,"opacity",o.e=h),L!==o.t&&ge(l,"pointerEvents",o.t=L),o},{e:void 0,t:void 0}),b})()}ie(["click"]);var De=m("<svg stroke-width=0>");function xe(t,e){const f=fe(t.a,e),[g,v]=Ie(f,["src"]),[p,$]=I(""),P=Z(()=>e.title?`${t.c}<title>${e.title}</title>`:t.c);return ce(()=>$(P())),be(()=>{$("")}),(()=>{var S=De();return Le(S,fe({get stroke(){return t.a?.stroke},get color(){return e.color||"currentColor"},get fill(){return e.color||"currentColor"},get style(){return{...e.style,overflow:"visible"}}},v,{get height(){return e.size||"1em"},get width(){return e.size||"1em"},xmlns:"http://www.w3.org/2000/svg",get innerHTML(){return p()}}),!0,!0),n(S,()=>Ee),S})()}function ze(t){return xe({a:{viewBox:"0 0 512 512"},c:'<path d="M495.9 166.6c3.2 8.7.5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4l-55.6 17.8c-8.8 2.8-18.6.3-24.5-6.8-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4c-1.1-8.4-1.7-16.9-1.7-25.5s.6-17.1 1.7-25.4l-43.3-39.4c-6.9-6.2-9.6-15.9-6.4-24.6 4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2 5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8 8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>'},t)}function oe(t){return xe({a:{viewBox:"0 0 384 512"},c:'<path d="M32 32C32 14.3 46.3 0 64 0h256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-29.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8S362.3 352 352 352H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64c-17.7 0-32-14.3-32-32zm128 352h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96z"/>'},t)}var Re=m('<div class="w-1 h-1 bg-white rounded-full mr-0.5">'),Ue=m("<button>"),Be=m('<div class="absolute inset-0 z-20 pointer-events-none">'),Oe=m('<svg class="w-8 h-8 text-gray-500"fill=none stroke=currentColor viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">'),Fe=m('<div class="w-full h-full flex items-center justify-center bg-black">');const ae=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),H=t=>{const{id:e,className:f="",isLive:g=!1,isPinned:v=!1,onPinChange:p}=t,[$,P]=I(!1),S=a=>{a.stopPropagation(),p?.(!v)},y=()=>{ae()&&p?.(!v)};return s(J.div,{get class(){return`relative aspect-video bg-black rounded-lg overflow-hidden ${f} ${ae()?"cursor-pointer":""}`},"data-video-id":e,onMouseEnter:()=>P(!0),onMouseLeave:()=>P(!1),onClick:y,get children(){return[s(te,{when:e,get fallback(){return(()=>{var a=Fe();return n(a,s(J.div,{class:"w-16 h-16 rounded-full bg-black flex items-center justify-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},get children(){return Oe()}})),a})()},get children(){return s(Me,{videoId:e})}}),(()=>{var a=Be();return n(a,s(J.div,{class:"absolute top-1 left-1 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded flex items-center pointer-events-auto",initial:{opacity:0,y:-5},get animate(){return{opacity:$()?.75:0,y:$()?0:-5}},transition:{duration:.2},get children(){return[Re(),"LIVE"]}}),null),n(a,s(te,{get when(){return!ae()},get children(){return s(J.div,{class:"absolute top-1 right-1 flex gap-1 pointer-events-auto",initial:{opacity:0,y:-5},get animate(){return{opacity:$()?1:0,y:$()?0:-5}},transition:{duration:.2},get children(){var w=Ue();return w.$$click=S,ee(w,`p-3 rounded-full ${v?"bg-primary/90":"bg-black/60"} text-white hover:bg-primary transition-all cursor-pointer shadow-md`),W(w,"title",v?"Unpin":"Pin"),n(w,s(oe,{class:"w-6 h-6 transition-transform",classList:{"rotate-45":v}})),w}})}}),null),a})()]}})};ie(["click"]);var He=m('<button class=button-with-icon><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 48 48"id=Play class=icon><path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"fill=#ffffff class="color000000 svgShape"></path></svg><span class=text>Watch Live'),qe=m('<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"><div class="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4"><h3 class="text-xl font-medium text-white mb-4">YouTube Channel Required</h3><p class="text-gray-300 mb-6">Please add your YouTube channel URL in settings to go live.</p><div class="flex justify-end space-x-3"><button class="px-4 py-2 text-gray-300 hover:text-white">Cancel</button><button class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Go to Settings'),We=m('<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"><div class="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4"><h3 class="text-xl font-medium text-white mb-4">Enter YouTube Live URL</h3><form class=space-y-4><div><input type=url placeholder="https://www.youtube.com/watch?v=..."class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-colors duration-200 text-white placeholder-gray-400"required></div><div class="flex justify-end space-x-3"><button type=button class="px-4 py-2 text-gray-300 hover:text-white">Cancel</button><button type=submit class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Watch'),Ge=m('<p class="mt-1 text-sm text-red-400">');const Ke=t=>{if(!t)return null;const e=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,f=t.match(e);return f&&f[2].length===11?f[2]:null},Xe=({settings:t,onSettingsOpen:e,onVideoLinkSubmit:f})=>{const[g,v]=I(!1),[p,$]=I(""),[P,S]=I(""),y=()=>{if(!t().youtubeUrl){v(!0);return}v("input")},a=w=>{w.preventDefault();const j=Ke(p());j?(f(j),v(!1),$(""),S("")):S("Please enter a valid YouTube video URL")};return[s(Je,{get children(){var w=He();return w.$$click=y,w}}),k(()=>k(()=>g()===!0)()&&(()=>{var w=qe(),j=w.firstChild,z=j.firstChild,A=z.nextSibling,Y=A.nextSibling,b=Y.firstChild,i=b.nextSibling;return b.$$click=()=>v(!1),i.$$click=()=>{v(!1),e()},w})()),k(()=>k(()=>g()==="input")()&&(()=>{var w=We(),j=w.firstChild,z=j.firstChild,A=z.nextSibling,Y=A.firstChild,b=Y.firstChild,i=Y.nextSibling,l=i.firstChild;return A.addEventListener("submit",a),b.$$input=o=>{$(o.target.value),S("")},n(Y,(()=>{var o=k(()=>!!P());return()=>o()&&(()=>{var h=Ge();return n(h,P),h})()})(),null),l.$$click=()=>{v(!1),$(""),S("")},N(()=>b.value=p()),w})())]},Je=ye.div`
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
  }`;ie(["click","input"]);const q="yt_clone_cache_",Qe=600*60*1e3,Q=(...t)=>{console.log("%c[Cache]","color: #4CAF50; font-weight: bold",...t)},re={set:(t,e,f=Qe)=>{try{const g=new Date,v=g.getTime()+f,p={data:e,expiry:v,timestamp:g.toISOString(),ttl:f/1e3+"s"};return localStorage.setItem(`${q}${t}`,JSON.stringify(p)),Q(`Cached data for key: "${t}" (expires in ${f/1e3}s)`),!0}catch(g){return console.error("Error saving to cache:",g),!1}},get:t=>{try{const e=localStorage.getItem(`${q}${t}`);if(!e)return Q(`Cache miss for key: "${t}" (not found)`),null;const f=JSON.parse(e),g=new Date;if(g.getTime()>f.expiry)return Q(`Cache expired for key: "${t}" (expired at ${new Date(f.expiry).toLocaleTimeString()})`),localStorage.removeItem(`${q}${t}`),null;const p=Math.ceil((f.expiry-g.getTime())/1e3);return Q(`Cache hit for key: "${t}" (expires in ${p}s)`),f.data}catch(e){return console.error("Error reading from cache:",e),null}},remove:t=>{try{return localStorage.removeItem(`${q}${t}`),!0}catch(e){return console.error("Error removing from cache:",e),!1}},clear:()=>{try{return Object.keys(localStorage).forEach(t=>{t.startsWith(q)&&localStorage.removeItem(t)}),!0}catch(t){return console.error("Error clearing cache:",t),!1}}},we={LIVE_VIDEOS:"live_videos"},$e="AIzaSyCme96dbKuwSWqh54Wed8-Rfj2C0r6IDYM",_e="https://www.googleapis.com/youtube/v3",ke=300*1e3,Ze=async t=>{const e=`${we.CHANNEL_LIVE}_${t}`,f=re.get(e);if(f)return f;try{const g=await fetch(`${_e}/search?part=snippet&channelId=${t}&eventType=live&type=video&key=${$e}`);if(!g.ok)return null;const p=(await g.json()).items?.[0];return p?(re.set(e,p,ke),p):null}catch(g){return console.error("Error fetching channel live video:",g),null}},et=async(t=12)=>{const e=`${we.LIVE_VIDEOS}_${t}`,f=re.get(e);if(f)return f;try{const v=["live study","study with me","live pomodoro"].join("|"),p=await fetch(`${_e}/search?part=snippet&type=video&eventType=live&q=${encodeURIComponent(v)}&maxResults=${t}&key=${$e}`);if(!p.ok)return new Error(`API request failed with status ${p.status}`);const P=(await p.json()).items?.map(S=>S.id.videoId).filter(Boolean)||[];return P.length>0&&re.set(e,P,ke),P}catch(g){throw new Error(`Failed to fetch live videos: ${g.message}`)}};function tt(){const[t,e]=I({data:[],loading:!1,error:null}),[f,g]=I(null),[v,p]=I(!1);return{videos:t,userLiveVideo:f,loadLiveVideos:async(S=12)=>{try{e(a=>({...a,loading:!0,error:null}));const y=await et(S);e({data:y,loading:!1,error:null})}catch(y){e(a=>({data:a.data,loading:!1,error:y.message||"Failed to load live videos"}))}},checkUserLiveStatus:async S=>{if(!(!S||v())){p(!0);try{const y=await Ze(S);g(y||null)}catch(y){console.error("Error checking user live status:",y),g(null)}p(!1)}}}}ye.div`
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
  }`;var rt=m('<div class="flex justify-between p-16 items-center mb-4"><div class=flex-1></div><div class="flex gap-4 items-center"><button class="btn flex items-center gap-2 z-10"aria-label=Settings><span>Settings'),it=m('<div class="fixed inset-0 z-50 bg-black flex"><div class="absolute top-4 right-4 z-50"></div><div class="w-full h-full">// In the focus mode section (around line 300-350), update the pinned videos list to include both types:'),nt=m('<div class=p-8><div class="flex justify-between items-center mb-8"><button class="p-2 rounded-full hover:bg-opacity-20 transition-colors"aria-label="Close settings"><svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke-width=2><path d="M18 6L6 18M6 6l12 12"></path></svg></button></div><div class=space-y-8><div class="flex flex-row justify-between items-center gap-4"></div></div><div class=space-y-8><div class="flex flex-row justify-between items-center gap-4"><input type=number class=" w-12 px-2 py-1 rounded-lg bg-black/50 border focus:border-white/30 focus:ring-2 focus:ring-white/50 transition-colors duration-200 text-white placeholder-gray-400 "placeholder=4></div></div><div class="space-y-8 mt-8"><div class=space-y-4><div class="flex flex-col gap-2"><div class="flex flex-col lg:flex-row gap-2"><input type=url placeholder=https://www.youtube.com/@channelname class="flex-1 px-4 py-2 rounded-lg bg-black/50 border border-gray-600 focus:border-white/30 focus:ring-2 focus:ring-white/50 transition-colors duration-200 text-white placeholder-gray-400"><button class="btn btn-primary whitespace-nowrap">Save</button></div><div class="flex items-center mt-4"><input id=showInDashboard type=checkbox class="w-4 h-4 rounded border-gray-600 bg-black/50 focus:ring-2 focus:ring-white/50"><label for=showInDashboard class="ml-2 text-sm text-gray-300">Show my live stream in dashboard'),lt=m('<div class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"><div class="w-full max-w-2xl p-32">'),st=m('<div class="text-sm text-gray-500 flex items-center gap-1"> pinned'),at=m('<button class="btn btn-primary flex items-center gap-2"><span>Focus Mode'),ot=m('<div class="min-w-screen mb-12"><div class="flex justify-between items-center mb-6 px-4"><h2 class="text-2xl font-bold flex items-center gap-3"></h2></div><div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4">'),he=m('<div class="flex justify-center items-center h-64 bg-black"><span class="loading loading-spinner loading-lg">'),ct=m("<div class=mt-4>"),dt=m(`<div class="mt-4 p-4 rounded-lg bg-gray-800 border border-gray-700"><span class=text-gray-300>You're not currently live on YouTube.`),ut=m('<div class="alert alert-error"><span>Error: '),gt=m('<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4">'),ft=m('<div class="flex justify-center gap-2 mt-6"><button class="btn btn-sm">Previous</button><button class="btn btn-sm">Next'),pt=m("<button>"),me=m("<div>"),ht=m('<div class="absolute inset-0 bg-black/50 flex items-center justify-center"><span class="text-white text-2xl">+<!> more');function bt(){const t=r=>{l({id:r,title:"Live Stream",thumbnail:`https://img.youtube.com/vi/${r}/mqdefault.jpg`})},[e,f]=I({theme:localStorage.getItem("theme")||"",cardsPerPage:localStorage.getItem("cardsPerPage")||"",youtubeUrl:localStorage.getItem("youtubeUrl")||"",showInDashboard:localStorage.getItem("showInDashboard")?localStorage.getItem("showInDashboard")==="true":!0}),g=(r,d)=>{localStorage.setItem(r,d),f(x=>({...x,[r]:d}))},[v,p]=I(e().cardsPerPage||4),{videos:$,loadLiveVideos:P}=tt(),{isDark:S}=Ye(),[y,a]=I({}),[w,j]=I(1),[z,A]=I(!1),[Y,b]=I(!1),[i,l]=I(null),[o,h]=I(!1);ce(async()=>{const r=e().youtubeUrl;if(r){h(!0);try{const d=await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${r}`);if(!d.ok){l(null);return}const x=await d.text();console.log("RSS Feed Response:",x);const c=new DOMParser().parseFromString(x,"text/xml"),E=Array.from(c.getElementsByTagName("entry"));console.log("All entries:",E);const _=E.find(C=>{const T=C.getElementsByTagName("yt:liveBroadcastContent")[0];return console.log("Entry:",C),console.log("Live broadcast element:",T),console.log("Live broadcast content:",T?.textContent),T?.textContent==="live"});if(console.log("Found live entry:",_),_){console.log("Processing live entry:",_);const C=_.getElementsByTagName("yt:videoId")[0]?.textContent,T=_.getElementsByTagName("title")[0]?.textContent,V=C?`https://img.youtube.com/vi/${C}/mqdefault.jpg`:"";console.log("Extracted video data:",{videoId:C,title:T,thumbnail:V}),l({id:C,title:T,thumbnail:V})}else l(null)}catch(d){console.error("Error checking live status:",d),l(null)}finally{h(!1)}}}),ve(()=>P(25));const L=(r,d,x=!1)=>{const u={...y()},c=x?`live_${r}`:r;d?u[c]=!0:delete u[c],a(u),Object.values(u).filter(Boolean).length===0&&A(!1)},Ce=Z(()=>($().data||[]).slice((w()-1)*v(),w()*v())),G=Z(()=>Math.ceil(($().data?.length||0)/v())),ne=r=>{r>=1&&r<=G()&&j(r)},K=Z(()=>Object.keys(y()).filter(r=>y()[r]).length);return s(F,{className:"min-h-screen flex flex-col justify-around items-center",get children(){return[s(F,{className:"min-w-screen  max-w-4xl mb-6",get children(){return[(()=>{var r=rt(),d=r.firstChild,x=d.nextSibling,u=x.firstChild,c=u.firstChild;return n(d,(()=>{var E=k(()=>K()>0);return()=>E()&&(()=>{var _=st(),C=_.firstChild;return n(_,s(oe,{class:"w-5 h-5"}),C),n(_,K,C),_})()})()),n(x,s(Xe,{settings:e,onSettingsOpen:()=>b(!Y()),onVideoLinkSubmit:t}),u),n(x,(()=>{var E=k(()=>K()>0);return()=>E()&&(()=>{var _=at();return _.$$click=()=>A(!0),_})()})(),u),u.$$click=()=>b(!Y()),n(u,s(ze,{class:"w-5 h-5"}),c),r})(),k(()=>k(()=>K()>0)()&&(()=>{var r=ot(),d=r.firstChild,x=d.firstChild,u=d.nextSibling;return n(x,s(oe,{class:"w-7 h-7 text-purple-600"}),null),n(x,s(D,{animte:!0,children:"Pinned Streams"}),null),n(u,()=>$().data?.filter(c=>y()[c]).map(c=>s(H,{key:`regular_${c}`,id:c,isPinned:!0,onPinChange:E=>L(c,E),className:"aspect-video col-span-1 sm:col-span-1"})),null),n(u,(()=>{var c=k(()=>!!(i()&&y()[`live_${i().id}`]));return()=>c()&&s(H,{get key(){return`live_${i().id}`},get id(){return i().id},get title(){return i().title},get thumbnail(){return i().thumbnail},isLive:!0,isPinned:!0,onPinChange:E=>L(i().id,E,!0),className:"aspect-video col-span-1 sm:col-span-1"})})(),null),r})()),k(()=>k(()=>!!(e().showInDashboard&&e().youtubeUrl))()&&s(F,{className:"w-full p-4 pl-16 pr-16",get children(){return[s(D,{animate:!0,className:"px-8 text-2xl md:text-4xl lg:text-6xl font-serif font-stretch-50% opacity-80",get children(){return s(pe,{children:"Your Live Stream"})}}),k(()=>k(()=>!!o())()?he():k(()=>!!i())()?(()=>{var r=ct();return n(r,s(H,{get id(){return i().id},get title(){return i().title},get thumbnail(){return i().thumbnail},isLive:!0,className:"w-full aspect-video",get isPinned(){return!!y()[`live_${i().id}`]},onPinChange:d=>L(i().id,d,!0)})),r})():dt())]}}))]}}),s(F,{className:"w-full p-4 pl-16 pr-16",get children(){return[s(D,{animate:!0,className:"px-8 text-2xl md:text-4xl lg:text-6xl font-serif font-stretch-50% opacity-80",get children(){return s(pe,{children:" Live Streams "})}}),k(()=>k(()=>!!$().loading)()?he():k(()=>!!$().error)()?(()=>{var r=ut(),d=r.firstChild;return d.firstChild,n(d,()=>$().error,null),r})():[(()=>{var r=gt();return n(r,()=>Ce().map(d=>s(H,{id:d,get isPinned(){return!!y()[d]},onPinChange:x=>L(d,x)}))),r})(),k(()=>k(()=>G()>1)()&&(()=>{var r=ft(),d=r.firstChild,x=d.nextSibling;return d.$$click=()=>ne(w()-1),n(r,()=>Array.from({length:G()},(u,c)=>c+1).map(u=>(()=>{var c=pt();return c.$$click=()=>ne(u),W(c,"key",u),n(c,u),N(()=>ee(c,`btn btn-sm ${w()===u?"btn-primary":""}`)),c})()),x),x.$$click=()=>ne(w()+1),N(u=>{var c=w()===1,E=w()===G();return c!==u.e&&(d.disabled=u.e=c),E!==u.t&&(x.disabled=u.t=E),u},{e:void 0,t:void 0}),r})())])]}}),s(te,{get when(){return z()},get children(){var r=it(),d=r.firstChild,x=d.nextSibling;return x.firstChild,n(x,()=>{const u=[...($().data?.filter(_=>y()[_])||[]).map(_=>({id:_,isLive:!1})),...i()&&y()[`live_${i().id}`]?[{id:i().id,title:i().title,thumbnail:i().thumbnail,isLive:!0}]:[]],c=u.length;if(c===0)return null;const E=()=>{switch(c){case 1:return"grid-cols-1 grid-rows-1";case 2:return"grid-cols-2 grid-rows-1";case 3:return"grid-cols-2 grid-rows-2";case 4:return"grid-cols-2 grid-rows-2";default:return"grid-cols-2 grid-rows-2"}};return(()=>{var _=me();return n(_,()=>u.map((C,T)=>(()=>{var V=me();return ee(V,`relative ${c===3&&T===0?"row-span-2":""}`),n(V,s(H,{get id(){return C.id},get title(){return C.title},get thumbnail(){return C.thumbnail},get isLive(){return C.isLive},isPinned:!0,onPinChange:M=>L(C.id,M,C.isLive),className:"w-full h-full"}),null),n(V,c>4&&T>=4&&(()=>{var M=ht(),R=M.firstChild,X=R.firstChild,U=X.nextSibling;return U.nextSibling,n(R,c-4,U),M})(),null),N(()=>W(V,"key",`focus-${C.isLive?"live":"regular"}-${C.id}`)),V})())),N(()=>ee(_,`w-full h-full grid ${E()} gap-4 p-4`)),_})()},null),r}}),s(te,{get when(){return Y()},get children(){var r=lt(),d=r.firstChild;return r.$$click=()=>b(!1),d.$$click=x=>x.stopPropagation(),n(d,s(F,{className:"rounded-xl shadow-2xl overflow-hidden",get children(){var x=nt(),u=x.firstChild,c=u.firstChild,E=c.firstChild,_=u.nextSibling,C=_.firstChild,T=_.nextSibling,V=T.firstChild,M=V.firstChild,R=T.nextSibling,X=R.firstChild,U=X.firstChild,le=U.firstChild,de=le.firstChild,Se=le.nextSibling,ue=Se.firstChild;return n(u,s(D,{className:"text-3xl font-bold",children:"Settings"}),c),c.$$click=()=>b(!1),n(C,s(D,{as:"label",className:"block text-md font-medium m-4",children:"Theme"}),null),n(C,s(Te,{saveSettings:g}),null),n(V,s(D,{as:"label",className:"block text-md font-medium m-4",children:"Cards"}),M),M.addEventListener("change",B=>{const se=B.target.value,O=parseInt(se);if(isNaN(O)||O<1){console.error(`Failed to parse value "${se}" to an integer.`);return}if(O>12){console.error(`Value "${se}" is greater than 12.`);return}g("cardsPerPage",O),p(O)}),n(R,s(D,{className:"text-xl font-semibold mb-4",children:"Go Live"}),X),n(U,s(D,{as:"label",className:"block text-md font-medium",children:"YouTube Channel URL"}),le),de.$$input=B=>g("youtubeUrl",B.target.value),ue.$$input=B=>g("showInDashboard",B.target.checked),N(()=>W(E,"stroke",S()?"currentColor":"black")),N(()=>M.value=e().cardsPerPage||v()),N(()=>de.value=e().youtubeUrl),N(()=>ue.checked=e().showInDashboard),x}})),r}})]}})}ie(["click","input"]);export{bt as default};
