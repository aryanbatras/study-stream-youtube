import{b as k,o as de,e as ue,g as fe,t as h,h as me,i as o,j as _,s as G,k as E,l as se,d as X,m as le,n as be,p as W,f as ve,q as ye,c,r as K,M as U,v as q,a as pe,S as F,T as Y,w as we,u as xe}from"./index-Ck2YasaT.js";import{S as $e}from"./ShinyText-BBDBI0lc.js";var _e=h('<div class="relative w-full h-full"style=aspect-ratio:16/10;background-color:black;position:relative><div id=yt-player-container class="absolute inset-0"style=width:100%;height:100%;position:absolute;top:0;left:0></div><div class="absolute inset-0 flex items-center justify-center"style="background-color:black;z-index:1;transition:opacity 500ms ease;will-change:opacity">'),ke=h('<img alt="video thumbnail"style=max-width:100%;max-height:100%;object-fit:cover;object-position:center;display:block;width:100%;height:100%>'),Ce=h('<button style="position:absolute;zIndex:30;background:rgba(255,255,255,0.95);border:none;padding:10px 18px;border-radius:6px;cursor:pointer;transform:translateY(0)">▶ Play'),Pe=h('<div class="absolute inset-0 flex items-center justify-center text-white"style=zIndex:40>Failed to load player');function Ie(e){let i;const[g,u]=k(!1),[y,r]=k(!1),[v,m]=k(!1),[$,I]=k(!1);let n=null,S=()=>e.videoId;function J(){return window.__YT_API_PROMISE||(window.__YT_API_PROMISE=new Promise((w,x)=>{if(window.YT&&window.YT.Player)return w(window.YT);if(!document.getElementById("youtube-iframe-api")){const d=document.createElement("script");d.id="youtube-iframe-api",d.src="https://www.youtube.com/iframe_api",d.async=!0,d.onerror=()=>x(new Error("YouTube API failed to load")),document.head.appendChild(d)}const l=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{l&&l(),w(window.YT)},setTimeout(()=>{window.YT&&window.YT.Player||w(window.YT)},8e3)})),window.__YT_API_PROMISE}function O(w){const x=`https://i.ytimg.com/vi/${w}/hqdefault.jpg`,s=new Image;return s.src=x,s.onload=()=>r(!0),s.onerror=()=>r(!1),x}async function L(w){if(!(!w||!i)){u(!1),m(!1),I(!1),O(w);try{const x=await J();if(!(x&&x.Player)){const s=document.createElement("iframe"),l=`https://www.youtube.com/embed/${w}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&origin=${window.location.origin}&enablejsapi=1`;s.setAttribute("src",l),s.setAttribute("allow","autoplay; encrypted-media; picture-in-picture"),s.setAttribute("allowfullscreen","true"),s.style.width="100%",s.style.height="100%",s.style.border="0",s.style.opacity="0",s.style.transition="opacity 600ms ease",s.style.willChange="opacity, transform",i.innerHTML="",i.appendChild(s),s.onload=()=>{setTimeout(()=>{s.style.opacity="1",setTimeout(()=>m(!0),250)},600)};return}if(n&&typeof n.destroy=="function"){try{n.destroy()}catch{}n=null}n=new x.Player(i,{videoId:w,playerVars:{autoplay:1,mute:1,controls:0,modestbranding:1,rel:0,playsinline:1,origin:window.location.origin,enablejsapi:1,iv_load_policy:3},events:{onReady:s=>{const l=n.getIframe();l&&(l.style.opacity="0",l.style.transition="opacity 600ms ease",l.style.willChange="opacity, transform",l.style.background="black",l.setAttribute("allow","autoplay; encrypted-media; picture-in-picture"));try{const d=s.target.playVideo();d&&typeof d.catch=="function"&&d.catch(t=>{I(!0)})}catch{I(!0)}},onStateChange:s=>{const l=s.data;l===x.PlayerState.PLAYING?setTimeout(()=>{const d=n.getIframe();d&&(d.style.opacity="1"),setTimeout(()=>m(!0),200)},250):l===x.PlayerState.BUFFERING||x.PlayerState.ENDED},onError:s=>{console.error("YT player error:",s),u(!0)}}})}catch(x){console.error("YouTube init error:",x),u(!0)}}}de(()=>L(S())),ue(()=>{if(e.videoId){const w=e.videoId;if(n&&typeof n.destroy=="function"){try{n.destroy()}catch{}n=null}r(!1),m(!1),I(!1),L(w)}}),fe(()=>{try{n&&typeof n.destroy=="function"&&n.destroy()}catch{}n=null});const M=e.videoId?`https://i.ytimg.com/vi/${e.videoId}/hqdefault.jpg`:"";return(()=>{var w=_e(),x=w.firstChild,s=x.nextSibling;return me(l=>i=l,x),o(s,(()=>{var l=_(()=>!!e.videoId);return()=>l()&&(()=>{var d=ke();return d.addEventListener("error",()=>r(!1)),d.addEventListener("load",()=>r(!0)),G(d,"src",M),d})()})(),null),o(s,(()=>{var l=_(()=>!!($()&&!v()));return()=>l()&&(()=>{var d=Ce();return d.$$click=()=>{try{if(n&&typeof n.playVideo=="function")n.playVideo(),I(!1);else{const t=i.querySelector("iframe");t&&(t.contentWindow&&t.contentWindow.postMessage&&t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),t.style.opacity="1",m(!0))}}catch(t){console.warn("Play click failed",t)}},d})()})(),null),o(w,(()=>{var l=_(()=>!!g());return()=>l()&&Pe()})(),null),E(l=>{var d=v()?"0":"1",t=(v(),"none");return d!==l.e&&se(s,"opacity",l.e=d),t!==l.t&&se(s,"pointerEvents",l.t=t),l},{e:void 0,t:void 0}),w})()}X(["click"]);var Se=h("<svg stroke-width=0>");function ge(e,i){const g=le(e.a,i),[u,y]=be(g,["src"]),[r,v]=k(""),m=W(()=>i.title?`${e.c}<title>${i.title}</title>`:e.c);return ue(()=>v(m())),fe(()=>{v("")}),(()=>{var $=Se();return ve($,le({get stroke(){return e.a?.stroke},get color(){return i.color||"currentColor"},get fill(){return i.color||"currentColor"},get style(){return{...i.style,overflow:"visible"}}},y,{get height(){return i.size||"1em"},get width(){return i.size||"1em"},xmlns:"http://www.w3.org/2000/svg",get innerHTML(){return r()}}),!0,!0),o($,()=>ye),$})()}function Te(e){return ge({a:{viewBox:"0 0 512 512"},c:'<path d="M495.9 166.6c3.2 8.7.5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4l-55.6 17.8c-8.8 2.8-18.6.3-24.5-6.8-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4c-1.1-8.4-1.7-16.9-1.7-25.5s.6-17.1 1.7-25.4l-43.3-39.4c-6.9-6.2-9.6-15.9-6.4-24.6 4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2 5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8 8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>'},e)}function re(e){return ge({a:{viewBox:"0 0 384 512"},c:'<path d="M32 32C32 14.3 46.3 0 64 0h256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-29.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8S362.3 352 352 352H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64c-17.7 0-32-14.3-32-32zm128 352h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96z"/>'},e)}var Ee=h('<div class="w-1 h-1 bg-white rounded-full mr-0.5">'),Ae=h("<button>"),Ye=h('<div class="absolute inset-0 z-20 pointer-events-none">'),Le=h('<svg class="w-8 h-8 text-gray-500"fill=none stroke=currentColor viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">'),Me=h('<div class="w-full h-full flex items-center justify-center bg-black">');const ee=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),te=e=>{const{id:i,className:g="",isLive:u=!1,isPinned:y=!1,onPinChange:r}=e,[v,m]=k(!1),$=n=>{n.stopPropagation(),r?.(!y)},I=()=>{ee()&&r?.(!y)};return c(U.div,{get class(){return`relative aspect-video bg-black rounded-lg overflow-hidden ${g} ${ee()?"cursor-pointer":""}`},"data-video-id":i,onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),onClick:I,get children(){return[c(K,{when:i,get fallback(){return(()=>{var n=Me();return o(n,c(U.div,{class:"w-16 h-16 rounded-full bg-black flex items-center justify-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},get children(){return Le()}})),n})()},get children(){return c(Ie,{videoId:i})}}),(()=>{var n=Ye();return o(n,c(U.div,{class:"absolute top-1 left-1 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded flex items-center pointer-events-auto",initial:{opacity:0,y:-5},get animate(){return{opacity:v()?.75:0,y:v()?0:-5}},transition:{duration:.2},get children(){return[Ee(),"LIVE"]}}),null),o(n,c(K,{get when(){return!ee()},get children(){return c(U.div,{class:"absolute top-1 right-1 flex gap-1 pointer-events-auto",initial:{opacity:0,y:-5},get animate(){return{opacity:v()?1:0,y:v()?0:-5}},transition:{duration:.2},get children(){var S=Ae();return S.$$click=$,q(S,`p-3 rounded-full ${y?"bg-primary/90":"bg-black/60"} text-white hover:bg-primary transition-all cursor-pointer shadow-md`),G(S,"title",y?"Unpin":"Pin"),o(S,c(re,{class:"w-6 h-6 transition-transform",classList:{"rotate-45":y}})),S}})}}),null),n})()]}})};X(["click"]);var je=h('<button class=button-with-icon><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 48 48"id=Play class=icon><path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"fill=#ffffff class="color000000 svgShape"></path></svg><span class=text>Go Live'),Ne=h('<div class=" inset-0 bg-black/50 flex items-center justify-center absolute z-50"><div class="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4"><h3 class="text-xl font-medium text-white mb-4">YouTube Channel Required</h3><p class="text-gray-300 mb-6">Please add your YouTube channel URL in settings to go live.</p><div class="flex justify-end space-x-3"><button class="px-4 py-2 text-gray-300 hover:text-white">Cancel</button><button class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Go to Settings');const Ve=({settings:e,onSettingsOpen:i})=>{const[g,u]=k(!1),y=()=>{if(!e().youtubeUrl){u(!0);return}const r=e().youtubeUrl;let v="";if(r.includes("youtube.com/channel/"))v=r.split("youtube.com/channel/")[1].split("/")[0].split("?")[0];else if(r.includes("youtube.com/")){const m=r.split("youtube.com/")[1];m.startsWith("@")?v=m.split("/")[0].substring(1):(m.startsWith("c/")||m.startsWith("user/"))&&(v=m.split("/")[1])}v?window.open(`https://studio.youtube.com/channel/${v}/livestreaming`,"_blank"):window.open("https://studio.youtube.com","_blank")};return[c(ze,{get children(){var r=je();return r.$$click=y,r}}),_(()=>_(()=>!!g())()&&(()=>{var r=Ne(),v=r.firstChild,m=v.firstChild,$=m.nextSibling,I=$.nextSibling,n=I.firstChild,S=n.nextSibling;return n.$$click=()=>u(!1),S.$$click=()=>{u(!1),i()},r})())]},ze=pe.div`
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
  }`;X(["click"]);const R="yt_clone_cache_",De=600*60*1e3,H=(...e)=>{console.log("%c[Cache]","color: #4CAF50; font-weight: bold",...e)},oe={set:(e,i,g=De)=>{try{const u=new Date,y=u.getTime()+g,r={data:i,expiry:y,timestamp:u.toISOString(),ttl:g/1e3+"s"};return localStorage.setItem(`${R}${e}`,JSON.stringify(r)),H(`Cached data for key: "${e}" (expires in ${g/1e3}s)`),!0}catch(u){return console.error("Error saving to cache:",u),!1}},get:e=>{try{const i=localStorage.getItem(`${R}${e}`);if(!i)return H(`Cache miss for key: "${e}" (not found)`),null;const g=JSON.parse(i),u=new Date;if(u.getTime()>g.expiry)return H(`Cache expired for key: "${e}" (expired at ${new Date(g.expiry).toLocaleTimeString()})`),localStorage.removeItem(`${R}${e}`),null;const r=Math.ceil((g.expiry-u.getTime())/1e3);return H(`Cache hit for key: "${e}" (expires in ${r}s)`),g.data}catch(i){return console.error("Error reading from cache:",i),null}},remove:e=>{try{return localStorage.removeItem(`${R}${e}`),!0}catch(i){return console.error("Error removing from cache:",i),!1}},clear:()=>{try{return Object.keys(localStorage).forEach(e=>{e.startsWith(R)&&localStorage.removeItem(e)}),!0}catch(e){return console.error("Error clearing cache:",e),!1}}},Re={LIVE_VIDEOS:"live_videos"},Oe="AIzaSyCme96dbKuwSWqh54Wed8-Rfj2C0r6IDYM",Be="https://www.googleapis.com/youtube/v3",Ue=600*60*1e3,Fe=async(e=12)=>{const i=`${Re.LIVE_VIDEOS}_${e}`,g=oe.get(i);if(g)return g;try{const y=["live study","study with me","live pomodoro"].join("|"),r=await fetch(`${Be}/search?part=snippet&type=video&eventType=live&q=${encodeURIComponent(y)}&maxResults=${e}&key=${Oe}`);if(!r.ok)return new Error(`API request failed with status ${r.status}`);const m=(await r.json()).items?.map($=>$.id.videoId).filter(Boolean)||[];return m.length>0&&oe.set(i,m,Ue),m}catch(u){throw new Error(`Failed to fetch live videos: ${u.message}`)}};function He(){const[e,i]=k({data:[],loading:!1,error:null});return{videos:e,loadLiveVideos:async(u=12)=>{try{i(r=>({...r,loading:!0,error:null}));const y=await Fe(u);i({data:y,loading:!1,error:null})}catch(y){i(r=>({data:r.data,loading:!1,error:y.message||"Failed to load live videos"}))}}}}pe.div`
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
  }`;var We=h('<div class="flex justify-between p-16 items-center mb-4"><div class=flex-1></div><div class="flex gap-4 items-center"><button class="btn flex items-center gap-2 z-10"aria-label=Settings><span>Settings'),qe=h('<div class="fixed inset-0 z-50 bg-black flex"><div class="absolute top-4 right-4 z-50"></div><div class="w-full h-full">'),Ge=h('<div class=p-8><div class="flex justify-between items-center mb-8"><button class="p-2 rounded-full hover:bg-opacity-20 transition-colors"aria-label="Close settings"><svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke-width=2><path d="M18 6L6 18M6 6l12 12"></path></svg></button></div><div class=space-y-8><div class="flex flex-row justify-between items-center gap-4"></div></div><div class=space-y-8><div class="flex flex-row justify-between items-center gap-4"><input type=number class=" w-12 px-2 py-1 rounded-lg bg-black/50 border focus:border-white/30 focus:ring-2 focus:ring-white/50 transition-colors duration-200 text-white placeholder-gray-400 "placeholder=4></div></div><div class="space-y-8 mt-8"><div class=space-y-4><div class="flex flex-col gap-2"><div class="flex flex-col lg:flex-row gap-2"><input type=url placeholder=https://www.youtube.com/@channelname class="flex-1 px-4 py-2 rounded-lg bg-black/50 border border-gray-600 focus:border-white/30 focus:ring-2 focus:ring-white/50 transition-colors duration-200 text-white placeholder-gray-400"><button class="btn btn-primary whitespace-nowrap">Save</button></div><div class="flex items-center mt-4"><input id=showInDashboard type=checkbox class="w-4 h-4 rounded border-gray-600 bg-black/50 focus:ring-2 focus:ring-white/50"><label for=showInDashboard class="ml-2 text-sm text-gray-300">Show my live stream in dashboard'),Ke=h('<div class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"><div class="w-full max-w-2xl p-32">'),Xe=h('<div class="text-sm text-gray-500 flex items-center gap-1"> pinned'),Je=h('<button class="btn btn-primary flex items-center gap-2"><span>Focus Mode'),Qe=h('<div class="min-w-screen mb-12"><div class="flex justify-between items-center mb-6 px-4"><h2 class="text-2xl font-bold flex items-center gap-3"></h2></div><div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4">'),Ze=h('<div class="flex justify-center items-center h-64 bg-black"><span class="loading loading-spinner loading-lg">'),et=h('<div class="alert alert-error"><span>Error: '),tt=h('<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4">'),rt=h('<div class="flex justify-center gap-2 mt-6"><button class="btn btn-sm">Previous</button><button class="btn btn-sm">Next'),it=h("<button>"),ce=h("<div>");function st(){const[e,i]=k({theme:localStorage.getItem("theme")||"",cardsPerPage:localStorage.getItem("cardsPerPage")||"",youtubeUrl:localStorage.getItem("youtubeUrl")||"",showInDashboard:localStorage.getItem("showInDashboard")==="true"||!1}),g=(t,f)=>{localStorage.setItem(t,f),i(b=>({...b,[t]:f}))},[u,y]=k(e().cardsPerPage||4),{videos:r,loadLiveVideos:v}=He(),{isDark:m}=xe(),[$,I]=k({}),[n,S]=k(1),[J,O]=k(!1),[L,M]=k(!1);de(()=>v(12));const w=(t,f)=>{const b={...$(),[t]:f};I(b),Object.values(b).filter(Boolean).length===0&&O(!1)},x=W(()=>(r().data||[]).slice((n()-1)*u(),n()*u())),s=W(()=>Math.ceil((r().data?.length||0)/u())),l=t=>{t>=1&&t<=s()&&S(t)},d=W(()=>Object.values($()).filter(Boolean).length);return c(F,{className:"min-h-screen flex flex-col justify-around items-center",get children(){return[c(F,{className:"min-w-screen  max-w-4xl mb-6",get children(){return[(()=>{var t=We(),f=t.firstChild,b=f.nextSibling,p=b.firstChild,a=p.firstChild;return o(f,(()=>{var C=_(()=>d()>0);return()=>C()&&(()=>{var P=Xe(),A=P.firstChild;return o(P,c(re,{class:"w-5 h-5"}),A),o(P,d,A),P})()})()),o(b,c(Ve,{settings:e,onSettingsOpen:()=>M(!L())}),p),o(b,(()=>{var C=_(()=>d()>0);return()=>C()&&(()=>{var P=Je();return P.$$click=()=>O(!0),P})()})(),p),p.$$click=()=>M(!L()),o(p,c(Te,{class:"w-5 h-5"}),a),t})(),_(()=>_(()=>d()>0)()&&(()=>{var t=Qe(),f=t.firstChild,b=f.firstChild,p=f.nextSibling;return o(b,c(re,{class:"w-7 h-7 text-purple-600"}),null),o(b,c(Y,{animte:!0,children:"Pinned Streams"}),null),o(p,()=>r().data?.filter(a=>$()[a]).map(a=>c(te,{id:a,isPinned:!0,onPinChange:C=>w(a,C),className:"aspect-video col-span-1 sm:col-span-1"}))),t})())]}}),c(F,{className:"w-full p-4 pl-16 pr-16",get children(){return[c(Y,{animate:!0,className:"px-8 text-2xl md:text-4xl lg:text-6xl font-serif font-stretch-50% opacity-80",get children(){return c($e,{children:" Live Streams "})}}),_(()=>_(()=>!!r().loading)()?Ze():_(()=>!!r().error)()?(()=>{var t=et(),f=t.firstChild;return f.firstChild,o(f,()=>r().error,null),t})():[(()=>{var t=tt();return o(t,()=>x().map(f=>c(te,{id:f,get isPinned(){return!!$()[f]},onPinChange:b=>w(f,b)}))),t})(),_(()=>_(()=>s()>1)()&&(()=>{var t=rt(),f=t.firstChild,b=f.nextSibling;return f.$$click=()=>l(n()-1),o(t,()=>Array.from({length:s()},(p,a)=>a+1).map(p=>(()=>{var a=it();return a.$$click=()=>l(p),G(a,"key",p),o(a,p),E(()=>q(a,`btn btn-sm ${n()===p?"btn-primary":""}`)),a})()),b),b.$$click=()=>l(n()+1),E(p=>{var a=n()===1,C=n()===s();return a!==p.e&&(f.disabled=p.e=a),C!==p.t&&(b.disabled=p.t=C),p},{e:void 0,t:void 0}),t})())])]}}),c(K,{get when(){return J()},get children(){var t=qe(),f=t.firstChild,b=f.nextSibling;return o(b,()=>{const p=r().data?.filter(T=>$()[T])||[],a=p.length,C=()=>a<=1?"grid-cols-1 grid-rows-1":a===2?"grid-cols-2 grid-rows-1":a===3||a===4?"grid-cols-2 grid-rows-2":a===5||a===6?"grid-cols-3 grid-rows-2":"grid-cols-4 grid-rows-2",P=T=>a===3&&T===0||(a===5||a===6)&&T<3?"row-span-2":"",A=()=>a===1?"aspect-auto":"aspect-video";return(()=>{var T=ce();return o(T,()=>p.map((N,V)=>(()=>{var j=ce();return o(j,c(te,{id:N,isPinned:!0,hideUI:!0,onPinChange:B=>w(N,B),get className(){return`w-full h-full ${A()}`}})),E(()=>q(j,`relative ${P(V)}`)),j})())),E(()=>q(T,`w-full h-full grid ${C()} gap-1 p-1`)),T})()}),t}}),c(K,{get when(){return L()},get children(){var t=Ke(),f=t.firstChild;return t.$$click=()=>M(!1),f.$$click=b=>b.stopPropagation(),o(f,c(F,{className:"rounded-xl shadow-2xl overflow-hidden",get children(){var b=Ge(),p=b.firstChild,a=p.firstChild,C=a.firstChild,P=p.nextSibling,A=P.firstChild,T=P.nextSibling,N=T.firstChild,V=N.firstChild,j=T.nextSibling,B=j.firstChild,ie=B.firstChild,Q=ie.firstChild,ne=Q.firstChild,he=Q.nextSibling,ae=he.firstChild;return o(p,c(Y,{className:"text-3xl font-bold",children:"Settings"}),a),a.$$click=()=>M(!1),o(A,c(Y,{as:"label",className:"block text-md font-medium m-4",children:"Theme"}),null),o(A,c(we,{saveSettings:g}),null),o(N,c(Y,{as:"label",className:"block text-md font-medium m-4",children:"Cards"}),V),V.addEventListener("change",z=>{const Z=z.target.value,D=parseInt(Z);if(isNaN(D)||D<1){console.error(`Failed to parse value "${Z}" to an integer.`);return}if(D>12){console.error(`Value "${Z}" is greater than 12.`);return}g("cardsPerPage",D),y(D)}),o(j,c(Y,{className:"text-xl font-semibold mb-4",children:"Go Live"}),B),o(ie,c(Y,{as:"label",className:"block text-md font-medium",children:"YouTube Channel URL"}),Q),ne.$$input=z=>g("youtubeUrl",z.target.value),ae.$$input=z=>g("showInDashboard",z.target.checked),E(()=>G(C,"stroke",m()?"currentColor":"black")),E(()=>V.value=e().cardsPerPage||u()),E(()=>ne.value=e().youtubeUrl),E(()=>ae.checked=e().showInDashboard),b}})),t}})]}})}X(["click","input"]);export{st as default};
