import{b as C,o as xe,g as we,j as je,t as f,k as Me,i as s,l as _,s as W,n as j,p as me,e as te,c as a,S as Z,M as J,q as Q,a as $e,r as ae,d as F,T as R,v as Ae,f as Ye}from"./index-kpmvit0S.js";import{F as oe,a as Ve}from"./index-BHwaXLMj.js";import{S as be}from"./ShinyText-OoQ-h6UQ.js";var Ne=f('<div class="relative w-full h-full"style=aspect-ratio:16/10;background-color:black;position:relative><div id=yt-player-container class="absolute inset-0"style=width:100%;height:100%;position:absolute;top:0;left:0></div><div class="absolute inset-0 flex items-center justify-center"style="background-color:black;z-index:1;transition:opacity 500ms ease;will-change:opacity">'),De=f('<img alt="video thumbnail"style=max-width:100%;max-height:100%;object-fit:cover;object-position:center;display:block;width:100%;height:100%>'),Re=f('<button style="position:absolute;zIndex:30;background:rgba(255,255,255,0.95);border:none;padding:10px 18px;border-radius:6px;cursor:pointer;transform:translateY(0)">▶ Play'),Ue=f('<div class="absolute inset-0 flex items-center justify-center text-white"style=zIndex:40>Failed to load player');function Oe(e){let t;const[h,d]=C(!1),[y,m]=C(!1),[k,I]=C(!1),[P,v]=C(!1);let l=null,x=()=>e.videoId;function Y(){return window.__YT_API_PROMISE||(window.__YT_API_PROMISE=new Promise((b,i)=>{if(window.YT&&window.YT.Player)return b(window.YT);if(!document.getElementById("youtube-iframe-api")){const p=document.createElement("script");p.id="youtube-iframe-api",p.src="https://www.youtube.com/iframe_api",p.async=!0,p.onerror=()=>i(new Error("YouTube API failed to load")),document.head.appendChild(p)}const o=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{o&&o(),b(window.YT)},setTimeout(()=>{window.YT&&window.YT.Player||b(window.YT)},8e3)})),window.__YT_API_PROMISE}function U(b){const i=`https://i.ytimg.com/vi/${b}/hqdefault.jpg`,n=new Image;return n.src=i,n.onload=()=>m(!0),n.onerror=()=>m(!1),i}async function V(b){if(!(!b||!t)){d(!1),I(!1),v(!1),U(b);try{const i=await Y();if(!(i&&i.Player)){const n=document.createElement("iframe"),o=`https://www.youtube.com/embed/${b}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&origin=${window.location.origin}&enablejsapi=1`;n.setAttribute("src",o),n.setAttribute("allow","autoplay; encrypted-media; picture-in-picture"),n.setAttribute("allowfullscreen","true"),n.style.width="100%",n.style.height="100%",n.style.border="0",n.style.opacity="0",n.style.transition="opacity 600ms ease",n.style.willChange="opacity, transform",t.innerHTML="",t.appendChild(n),n.onload=()=>{setTimeout(()=>{n.style.opacity="1",setTimeout(()=>I(!0),250)},600)};return}if(l&&typeof l.destroy=="function"){try{l.destroy()}catch{}l=null}l=new i.Player(t,{videoId:b,playerVars:{autoplay:1,mute:1,controls:0,modestbranding:1,rel:0,playsinline:1,origin:window.location.origin,enablejsapi:1,iv_load_policy:3},events:{onReady:n=>{const o=l.getIframe();o&&(o.style.opacity="0",o.style.transition="opacity 600ms ease",o.style.willChange="opacity, transform",o.style.background="black",o.setAttribute("allow","autoplay; encrypted-media; picture-in-picture"));try{const p=n.target.playVideo();p&&typeof p.catch=="function"&&p.catch(T=>{v(!0)})}catch{v(!0)}},onStateChange:n=>{const o=n.data;o===i.PlayerState.PLAYING?setTimeout(()=>{const p=l.getIframe();p&&(p.style.opacity="1"),setTimeout(()=>I(!0),200)},250):o===i.PlayerState.BUFFERING||i.PlayerState.ENDED},onError:n=>{console.error("YT player error:",n),d(!0)}}})}catch(i){console.error("YouTube init error:",i),d(!0)}}}xe(()=>V(x())),we(()=>{if(e.videoId){const b=e.videoId;if(l&&typeof l.destroy=="function"){try{l.destroy()}catch{}l=null}m(!1),I(!1),v(!1),V(b)}}),je(()=>{try{l&&typeof l.destroy=="function"&&l.destroy()}catch{}l=null});const M=e.videoId?`https://i.ytimg.com/vi/${e.videoId}/hqdefault.jpg`:"";return(()=>{var b=Ne(),i=b.firstChild,n=i.nextSibling;return Me(o=>t=o,i),s(n,(()=>{var o=_(()=>!!e.videoId);return()=>o()&&(()=>{var p=De();return p.addEventListener("error",()=>m(!1)),p.addEventListener("load",()=>m(!0)),W(p,"src",M),p})()})(),null),s(n,(()=>{var o=_(()=>!!(P()&&!k()));return()=>o()&&(()=>{var p=Re();return p.$$click=()=>{try{if(l&&typeof l.playVideo=="function")l.playVideo(),v(!1);else{const T=t.querySelector("iframe");T&&(T.contentWindow&&T.contentWindow.postMessage&&T.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),T.style.opacity="1",I(!0))}}catch(T){console.warn("Play click failed",T)}},p})()})(),null),s(b,(()=>{var o=_(()=>!!h());return()=>o()&&Ue()})(),null),j(o=>{var p=k()?"0":"1",T=(k(),"none");return p!==o.e&&me(n,"opacity",o.e=p),T!==o.t&&me(n,"pointerEvents",o.t=T),o},{e:void 0,t:void 0}),b})()}te(["click"]);var Be=f('<div class="w-1 h-1 bg-white rounded-full mr-0.5">'),ze=f("<button>"),Fe=f('<div class="absolute inset-0 z-20 pointer-events-none">'),qe=f('<svg class="w-8 h-8 text-gray-500"fill=none stroke=currentColor viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">'),He=f('<div class="w-full h-full flex items-center justify-center bg-black">');const le=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),q=e=>{const{id:t,className:h="",isLive:d=!1,isPinned:y=!1,onPinChange:m}=e,[k,I]=C(!1),P=l=>{l.stopPropagation(),m?.(!y)},v=()=>{le()&&m?.(!y)};return a(J.div,{get class(){return`relative aspect-video bg-black rounded-lg overflow-hidden ${h} ${le()?"cursor-pointer":""}`},"data-video-id":t,onMouseEnter:()=>I(!0),onMouseLeave:()=>I(!1),onClick:v,get children(){return[a(Z,{when:t,get fallback(){return(()=>{var l=He();return s(l,a(J.div,{class:"w-16 h-16 rounded-full bg-black flex items-center justify-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},get children(){return qe()}})),l})()},get children(){return a(Oe,{videoId:t})}}),(()=>{var l=Fe();return s(l,a(J.div,{class:"absolute top-1 left-1 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded flex items-center pointer-events-auto",initial:{opacity:0,y:-5},get animate(){return{opacity:k()?.75:0,y:k()?0:-5}},transition:{duration:.2},get children(){return[Be(),"LIVE"]}}),null),s(l,a(Z,{get when(){return!le()},get children(){return a(J.div,{class:"absolute top-1 right-1 flex gap-1 pointer-events-auto",initial:{opacity:0,y:-5},get animate(){return{opacity:k()?1:0,y:k()?0:-5}},transition:{duration:.2},get children(){var x=ze();return x.$$click=P,Q(x,`p-3 rounded-full ${y?"bg-primary/90":"bg-black/60"} text-white hover:bg-primary transition-all cursor-pointer shadow-md`),W(x,"title",y?"Unpin":"Pin"),s(x,a(oe,{class:"w-6 h-6 transition-transform",classList:{"rotate-45":y}})),x}})}}),null),l})()]}})};te(["click"]);var We=f('<button class=button-with-icon><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 48 48"id=Play class=icon><path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"fill=#ffffff class="color000000 svgShape"></path></svg><span class=text>Go Live'),Ge=f('<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"><div class="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4"><h3 class="text-xl font-medium text-white mb-4">YouTube Channel Required</h3><p class="text-gray-300 mb-6">Please add your YouTube channel URL in settings to go live.</p><div class="flex justify-end space-x-3"><button class="px-4 py-2 text-gray-300 hover:text-white">Cancel</button><button class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Go to Settings'),Ke=f('<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"><div class="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4"><h3 class="text-xl font-medium text-white mb-4">Enter YouTube Live URL</h3><form class=space-y-4><div><input type=url placeholder="https://www.youtube.com/watch?v=..."class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-colors duration-200 text-white placeholder-gray-400"required></div><div class="flex justify-end space-x-3"><button type=button class="px-4 py-2 text-gray-300 hover:text-white">Cancel</button><button type=submit class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Watch'),Je=f('<p class="mt-1 text-sm text-red-400">');const Xe=e=>{if(!e)return null;const t=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,h=e.match(t);return h&&h[2].length===11?h[2]:null},Qe=({settings:e,onSettingsOpen:t,onVideoLinkSubmit:h})=>{const[d,y]=C(!1),[m,k]=C(""),[I,P]=C(""),v=()=>{if(!e().youtubeUrl){y(!0);return}y("input")},l=x=>{x.preventDefault();const Y=Xe(m());Y?(h(Y),y(!1),k(""),P("")):P("Please enter a valid YouTube video URL")};return[a(Ze,{get children(){var x=We();return x.$$click=v,x}}),_(()=>_(()=>d()===!0)()&&(()=>{var x=Ge(),Y=x.firstChild,U=Y.firstChild,V=U.nextSibling,M=V.nextSibling,b=M.firstChild,i=b.nextSibling;return b.$$click=()=>y(!1),i.$$click=()=>{y(!1),t()},x})()),_(()=>_(()=>d()==="input")()&&(()=>{var x=Ke(),Y=x.firstChild,U=Y.firstChild,V=U.nextSibling,M=V.firstChild,b=M.firstChild,i=M.nextSibling,n=i.firstChild;return V.addEventListener("submit",l),b.$$input=o=>{k(o.target.value),P("")},s(M,(()=>{var o=_(()=>!!I());return()=>o()&&(()=>{var p=Je();return s(p,I),p})()})(),null),n.$$click=()=>{y(!1),k(""),P("")},j(()=>b.value=m()),x})())]},Ze=$e.div`
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
    margin-left: 8px;
    width: 25px;
    height: 25px;
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
  }`;te(["click","input"]);const H="yt_clone_cache_",et=600*60*1e3,X=(...e)=>{console.log("%c[Cache]","color: #4CAF50; font-weight: bold",...e)},ee={set:(e,t,h=et)=>{try{const d=new Date,y=d.getTime()+h,m={data:t,expiry:y,timestamp:d.toISOString(),ttl:h/1e3+"s"};return localStorage.setItem(`${H}${e}`,JSON.stringify(m)),X(`Cached data for key: "${e}" (expires in ${h/1e3}s)`),!0}catch(d){return console.error("Error saving to cache:",d),!1}},get:e=>{try{const t=localStorage.getItem(`${H}${e}`);if(!t)return X(`Cache miss for key: "${e}" (not found)`),null;const h=JSON.parse(t),d=new Date;if(d.getTime()>h.expiry)return X(`Cache expired for key: "${e}" (expired at ${new Date(h.expiry).toLocaleTimeString()})`),localStorage.removeItem(`${H}${e}`),null;const m=Math.ceil((h.expiry-d.getTime())/1e3);return X(`Cache hit for key: "${e}" (expires in ${m}s)`),h.data}catch(t){return console.error("Error reading from cache:",t),null}},remove:e=>{try{return localStorage.removeItem(`${H}${e}`),!0}catch(t){return console.error("Error removing from cache:",t),!1}},clear:()=>{try{return Object.keys(localStorage).forEach(e=>{e.startsWith(H)&&localStorage.removeItem(e)}),!0}catch(e){return console.error("Error clearing cache:",e),!1}}},_e={LIVE_VIDEOS:"live_videos"},ke="AIzaSyCme96dbKuwSWqh54Wed8-Rfj2C0r6IDYM",Se="https://www.googleapis.com/youtube/v3",Ce=300*1e3,tt=async e=>{const t=`${_e.CHANNEL_LIVE}_${e}`,h=ee.get(t);if(h)return h;try{const d=await fetch(`${Se}/search?part=snippet&channelId=${e}&eventType=live&type=video&key=${ke}`);if(!d.ok)return null;const m=(await d.json()).items?.[0];return m?(ee.set(t,m,Ce),m):null}catch(d){return console.error("Error fetching channel live video:",d),null}},rt=async(e=12)=>{const t=`${_e.LIVE_VIDEOS}_${e}`,h=ee.get(t);if(h)return h;try{const y=["live study","study with me","live pomodoro"].join("|"),m=await fetch(`${Se}/search?part=snippet&type=video&eventType=live&q=${encodeURIComponent(y)}&maxResults=${e}&key=${ke}`);if(!m.ok)return new Error(`API request failed with status ${m.status}`);const I=(await m.json()).items?.map(P=>P.id.videoId).filter(Boolean)||[];return I.length>0&&ee.set(t,I,Ce),I}catch(d){throw new Error(`Failed to fetch live videos: ${d.message}`)}};function it(){const[e,t]=C({data:[],loading:!1,error:null}),[h,d]=C(null),[y,m]=C(!1);return{videos:e,userLiveVideo:h,loadLiveVideos:async(P=12)=>{try{t(l=>({...l,loading:!0,error:null}));const v=await rt(P);t({data:v,loading:!1,error:null})}catch(v){t(l=>({data:l.data,loading:!1,error:v.message||"Failed to load live videos"}))}},checkUserLiveStatus:async P=>{if(!(!P||y())){m(!0);try{const v=await tt(P);d(v||null)}catch(v){console.error("Error checking user live status:",v),d(null)}m(!1)}}}}$e.div`
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
  }`;var nt=f('<div class="flex justify-between p-16 items-center mb-4"><div class=flex-1></div><div class="flex gap-4 items-center"><button class="btn flex items-center gap-2 z-10"aria-label=Settings><span>Settings'),st=f('<div class="fixed inset-0 z-50 bg-black flex"><div class="absolute top-4 right-4 z-50"></div><div class="w-full h-full">'),at=f('<div class=p-8><div class="flex justify-between items-center mb-8"><button class="p-2 rounded-full hover:bg-opacity-20 transition-colors"aria-label="Close settings"><svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke-width=2><path d="M18 6L6 18M6 6l12 12"></path></svg></button></div><div class=space-y-8><div class="flex flex-row justify-between items-center gap-4"></div></div><div class=space-y-8><div class="flex flex-row justify-between items-center gap-4"><input type=number class=" w-12 px-2 py-1 rounded-lg bg-black/50 border focus:border-white/30 focus:ring-2 focus:ring-white/50 transition-colors duration-200 text-white placeholder-gray-400 "placeholder=4></div></div><div class="space-y-8 mt-8"><div class=space-y-4><div class="flex items-center justify-between"><label for=showTimer class="text-sm text-gray-300">Show Timer</label><input id=showTimer type=checkbox class="toggle toggle-primary"></div><div class="flex items-center justify-between"><label for=showTaskManager class="text-sm text-gray-300">Show Task Manager</label><input id=showTaskManager type=checkbox class="toggle toggle-primary"></div></div></div><div class="space-y-8 mt-8"><div class=space-y-4><div class="flex flex-col gap-2"><div class="flex flex-col lg:flex-row gap-2"><input type=url placeholder=https://www.youtube.com/@channelname class="flex-1 px-4 py-2 rounded-lg bg-black/50 border border-gray-600 focus:border-white/30 focus:ring-2 focus:ring-white/50 transition-colors duration-200 text-white placeholder-gray-400"><button class="btn btn-primary whitespace-nowrap">Save</button></div><div class="flex items-center mt-4"><input id=showInDashboard type=checkbox class="w-4 h-4 rounded border-gray-600 bg-black/50 focus:ring-2 focus:ring-white/50"><label for=showInDashboard class="ml-2 text-sm text-gray-300">Show my live stream in dashboard'),lt=f('<div class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"><div class="w-full max-w-2xl">'),ot=f('<div class="text-sm text-gray-500 flex items-center gap-1"> pinned'),ct=f('<button class="btn btn-primary flex items-center gap-2"><span>Focus Mode'),dt=f('<div class="min-w-screen mb-12"><div class="flex justify-between items-center mb-6 px-4"><h2 class="text-2xl font-bold flex items-center gap-3"></h2></div><div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4">'),ve=f('<div class="flex justify-center items-center h-64 bg-black"><span class="loading loading-spinner loading-lg">'),ut=f("<div class=mt-4>"),gt=f(`<div class="mt-4 p-4 rounded-lg bg-gray-800 border border-gray-700"><span class=text-gray-300>You're not currently live on YouTube.`),pt=f('<div class="alert alert-error"><span>Error: '),ft=f('<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4">'),ht=f('<div class="flex justify-center gap-2 mt-6"><button class="btn btn-sm">Previous</button><button class="btn btn-sm">Next'),mt=f("<button>"),ye=f("<div>"),bt=f('<div class="absolute inset-0 bg-black/50 flex items-center justify-center"><span class="text-white text-2xl">+<!> more');if(typeof window<"u"&&(window.JitsiMeetExternalAPI=window.JitsiMeetExternalAPI||null,!window.JitsiMeetExternalAPI)){const e=document.createElement("script");e.src="https://meet.jit.si/external_api.js",e.async=!0,document.head.appendChild(e)}function wt(){const e=r=>{n({id:r,title:"Live Stream",thumbnail:`https://img.youtube.com/vi/${r}/mqdefault.jpg`})},[t,h]=C({theme:localStorage.getItem("theme")||"",cardsPerPage:localStorage.getItem("cardsPerPage")||"",youtubeUrl:localStorage.getItem("youtubeUrl")||"",showInDashboard:localStorage.getItem("showInDashboard")?localStorage.getItem("showInDashboard")==="true":!0,showTimer:localStorage.getItem("showTimer")?localStorage.getItem("showTimer")==="true":!0,showTaskManager:localStorage.getItem("showTaskManager")?localStorage.getItem("showTaskManager")==="true":!0}),d=(r,u)=>{localStorage.setItem(r,u),h(w=>({...w,[r]:u})),["showTimer","showTaskManager"].includes(r)&&setTimeout(()=>window.location.href="/dashboard",500)},[y,m]=C(t().cardsPerPage||4),{videos:k,loadLiveVideos:I}=it(),{isDark:P}=Ye(),[v,l]=C({}),[x,Y]=C(1),[U,V]=C(!1),[M,b]=C(!1),[i,n]=C(null),[o,p]=C(!1);we(async()=>{const r=t().youtubeUrl;if(r){p(!0);try{const u=await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${r}`);if(!u.ok){n(null);return}const w=await u.text();console.log("RSS Feed Response:",w);const c=new DOMParser().parseFromString(w,"text/xml"),E=Array.from(c.getElementsByTagName("entry"));console.log("All entries:",E);const $=E.find(S=>{const L=S.getElementsByTagName("yt:liveBroadcastContent")[0];return console.log("Entry:",S),console.log("Live broadcast element:",L),console.log("Live broadcast content:",L?.textContent),L?.textContent==="live"});if(console.log("Found live entry:",$),$){console.log("Processing live entry:",$);const S=$.getElementsByTagName("yt:videoId")[0]?.textContent,L=$.getElementsByTagName("title")[0]?.textContent,A=S?`https://img.youtube.com/vi/${S}/mqdefault.jpg`:"";console.log("Extracted video data:",{videoId:S,title:L,thumbnail:A}),n({id:S,title:L,thumbnail:A})}else n(null)}catch(u){console.error("Error checking live status:",u),n(null)}finally{p(!1)}}}),xe(()=>I(25));const T=(r,u,w=!1)=>{const g={...v()},c=w?`live_${r}`:r;u?g[c]=!0:delete g[c],l(g),Object.values(g).filter(Boolean).length===0&&V(!1)},Ie=ae(()=>(k().data||[]).slice((x()-1)*y(),x()*y())),G=ae(()=>Math.ceil((k().data?.length||0)/y())),re=r=>{r>=1&&r<=G()&&Y(r)},K=ae(()=>Object.keys(v()).filter(r=>v()[r]).length);return a(F,{className:"min-h-screen flex flex-col justify-around items-center",get children(){return[a(F,{className:"min-w-screen  max-w-4xl mb-6",get children(){return[(()=>{var r=nt(),u=r.firstChild,w=u.nextSibling,g=w.firstChild,c=g.firstChild;return s(u,(()=>{var E=_(()=>K()>0);return()=>E()&&(()=>{var $=ot(),S=$.firstChild;return s($,a(oe,{class:"w-5 h-5"}),S),s($,K,S),$})()})()),s(w,a(Qe,{settings:t,onSettingsOpen:()=>b(!M()),onVideoLinkSubmit:e}),g),s(w,(()=>{var E=_(()=>K()>0);return()=>E()&&(()=>{var $=ct();return $.$$click=()=>V(!0),$})()})(),g),g.$$click=()=>b(!M()),s(g,a(Ve,{class:"w-5 h-5"}),c),r})(),_(()=>_(()=>K()>0)()&&(()=>{var r=dt(),u=r.firstChild,w=u.firstChild,g=u.nextSibling;return s(w,a(oe,{class:"w-7 h-7 text-purple-600"}),null),s(w,a(R,{animte:!0,children:"Pinned Streams"}),null),s(g,()=>k().data?.filter(c=>v()[c]).map(c=>a(q,{key:`regular_${c}`,id:c,isPinned:!0,onPinChange:E=>T(c,E),className:"aspect-video col-span-1 sm:col-span-1"})),null),s(g,(()=>{var c=_(()=>!!(i()&&v()[`live_${i().id}`]));return()=>c()&&a(q,{get key(){return`live_${i().id}`},get id(){return i().id},get title(){return i().title},get thumbnail(){return i().thumbnail},isLive:!0,isPinned:!0,onPinChange:E=>T(i().id,E,!0),className:"aspect-video col-span-1 sm:col-span-1"})})(),null),r})()),_(()=>_(()=>!!(t().showInDashboard&&t().youtubeUrl))()&&a(F,{className:"w-full p-4 pl-16 pr-16",get children(){return[a(R,{animate:!0,className:"px-8 text-2xl md:text-4xl lg:text-6xl font-serif font-stretch-50% opacity-80",get children(){return a(be,{children:"Your Live Stream"})}}),_(()=>_(()=>!!o())()?ve():_(()=>!!i())()?(()=>{var r=ut();return s(r,a(q,{get id(){return i().id},get title(){return i().title},get thumbnail(){return i().thumbnail},isLive:!0,className:"w-full aspect-video",get isPinned(){return!!v()[`live_${i().id}`]},onPinChange:u=>T(i().id,u,!0)})),r})():gt())]}}))]}}),a(F,{className:"w-full p-4 pl-16 pr-16",get children(){return[a(R,{animate:!0,className:"px-8 text-2xl md:text-4xl lg:text-6xl font-serif font-stretch-50% opacity-80",get children(){return a(be,{children:" Live Streams "})}}),_(()=>_(()=>!!k().loading)()?ve():_(()=>!!k().error)()?(()=>{var r=pt(),u=r.firstChild;return u.firstChild,s(u,()=>k().error,null),r})():[(()=>{var r=ft();return s(r,()=>Ie().map(u=>a(q,{id:u,get isPinned(){return!!v()[u]},onPinChange:w=>T(u,w)}))),r})(),_(()=>_(()=>G()>1)()&&(()=>{var r=ht(),u=r.firstChild,w=u.nextSibling;return u.$$click=()=>re(x()-1),s(r,()=>Array.from({length:G()},(g,c)=>c+1).map(g=>(()=>{var c=mt();return c.$$click=()=>re(g),W(c,"key",g),s(c,g),j(()=>Q(c,`btn btn-sm ${x()===g?"btn-primary":""}`)),c})()),w),w.$$click=()=>re(x()+1),j(g=>{var c=x()===1,E=x()===G();return c!==g.e&&(u.disabled=g.e=c),E!==g.t&&(w.disabled=g.t=E),g},{e:void 0,t:void 0}),r})())])]}}),a(Z,{get when(){return U()},get children(){var r=st(),u=r.firstChild,w=u.nextSibling;return s(w,()=>{const g=[...(k().data?.filter($=>v()[$])||[]).map($=>({id:$,isLive:!1})),...i()&&v()[`live_${i().id}`]?[{id:i().id,title:i().title,thumbnail:i().thumbnail,isLive:!0}]:[]],c=g.length;if(c===0)return null;const E=()=>{switch(c){case 1:return"grid-cols-1 grid-rows-1";case 2:return"grid-cols-2 grid-rows-1";case 3:return"grid-cols-2 grid-rows-2";case 4:return"grid-cols-2 grid-rows-2";default:return"grid-cols-2 grid-rows-2"}};return(()=>{var $=ye();return s($,()=>g.map((S,L)=>(()=>{var A=ye();return Q(A,`relative ${c===3&&L===0?"row-span-2":""}`),s(A,a(q,{get id(){return S.id},get title(){return S.title},get thumbnail(){return S.thumbnail},get isLive(){return S.isLive},isPinned:!0,onPinChange:D=>T(S.id,D,S.isLive),className:"w-full h-full"}),null),s(A,c>4&&L>=4&&(()=>{var D=bt(),O=D.firstChild,ie=O.firstChild,B=ie.nextSibling;return B.nextSibling,s(O,c-4,B),D})(),null),j(()=>W(A,"key",`focus-${S.isLive?"live":"regular"}-${S.id}`)),A})())),j(()=>Q($,`w-full h-full grid ${E()} gap-4 p-4`)),$})()}),r}}),a(Z,{get when(){return M()},get children(){var r=lt(),u=r.firstChild;return r.$$click=()=>b(!1),u.$$click=w=>w.stopPropagation(),s(u,a(F,{className:"rounded-xl shadow-2xl overflow-hidden",get children(){var w=at(),g=w.firstChild,c=g.firstChild,E=c.firstChild,$=g.nextSibling,S=$.firstChild,L=$.nextSibling,A=L.firstChild,D=A.firstChild,O=L.nextSibling,ie=O.firstChild,B=ie.firstChild,Pe=B.firstChild,ce=Pe.nextSibling,Te=B.nextSibling,Ee=Te.firstChild,de=Ee.nextSibling,ue=O.nextSibling,ge=ue.firstChild,pe=ge.firstChild,ne=pe.firstChild,fe=ne.firstChild,Le=ne.nextSibling,he=Le.firstChild;return s(g,a(R,{className:"text-3xl font-bold",children:"Settings"}),c),c.$$click=()=>b(!1),s(S,a(R,{as:"label",className:"block text-md font-medium m-4",children:"Theme"}),null),s(S,a(Ae,{saveSettings:d}),null),s(A,a(R,{as:"label",className:"block text-md font-medium m-4",children:"Cards"}),D),D.addEventListener("change",N=>{const se=N.target.value,z=parseInt(se);if(isNaN(z)||z<1){console.error(`Failed to parse value "${se}" to an integer.`);return}if(z>12){console.error(`Value "${se}" is greater than 12.`);return}d("cardsPerPage",z),m(z)}),ce.$$input=N=>d("showTimer",N.target.checked),de.$$input=N=>d("showTaskManager",N.target.checked),s(ue,a(R,{className:"text-xl font-semibold mb-4",children:"Go Live"}),ge),s(pe,a(R,{as:"label",className:"block text-md font-medium",children:"YouTube Channel URL"}),ne),fe.$$input=N=>d("youtubeUrl",N.target.value),he.$$input=N=>d("showInDashboard",N.target.checked),j(()=>W(E,"stroke",P()?"currentColor":"black")),j(()=>D.value=t().cardsPerPage||y()),j(()=>ce.checked=t().showTimer),j(()=>de.checked=t().showTaskManager),j(()=>fe.value=t().youtubeUrl),j(()=>he.checked=t().showInDashboard),w}})),r}})]}})}te(["click","input"]);export{wt as default};
