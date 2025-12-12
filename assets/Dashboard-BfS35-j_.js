import{b as C,o as $e,e as _e,g as Ve,t as p,h as Ae,i as l,j as _,s as W,k as L,l as ve,d as te,c as s,n as Z,M as X,p as Q,a as ke,q as se,S as F,T as D,r as Ne,u as Re}from"./index-kQL3Odtx.js";import{F as oe,a as De}from"./index-BsLKVuI4.js";import{S as ye}from"./ShinyText-CZnA5wqC.js";var Ue=p('<div class="relative w-full h-full"style=aspect-ratio:16/10;background-color:black;position:relative><div id=yt-player-container class="absolute inset-0"style=width:100%;height:100%;position:absolute;top:0;left:0></div><div class="absolute inset-0 flex items-center justify-center"style="background-color:black;z-index:1;transition:opacity 500ms ease;will-change:opacity">'),Oe=p('<img alt="video thumbnail"style=max-width:100%;max-height:100%;object-fit:cover;object-position:center;display:block;width:100%;height:100%>'),Be=p('<button style="position:absolute;zIndex:30;background:rgba(255,255,255,0.95);border:none;padding:10px 18px;border-radius:6px;cursor:pointer;transform:translateY(0)">▶ Play'),ze=p('<div class="absolute inset-0 flex items-center justify-center text-white"style=zIndex:40>Failed to load player');function Fe(r){let e;const[f,d]=C(!1),[y,m]=C(!1),[k,I]=C(!1),[P,v]=C(!1);let a=null,x=()=>r.videoId;function A(){return window.__YT_API_PROMISE||(window.__YT_API_PROMISE=new Promise((b,i)=>{if(window.YT&&window.YT.Player)return b(window.YT);if(!document.getElementById("youtube-iframe-api")){const h=document.createElement("script");h.id="youtube-iframe-api",h.src="https://www.youtube.com/iframe_api",h.async=!0,h.onerror=()=>i(new Error("YouTube API failed to load")),document.head.appendChild(h)}const o=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{o&&o(),b(window.YT)},setTimeout(()=>{window.YT&&window.YT.Player||b(window.YT)},8e3)})),window.__YT_API_PROMISE}function U(b){const i=`https://i.ytimg.com/vi/${b}/hqdefault.jpg`,n=new Image;return n.src=i,n.onload=()=>m(!0),n.onerror=()=>m(!1),i}async function N(b){if(!(!b||!e)){d(!1),I(!1),v(!1),U(b);try{const i=await A();if(!(i&&i.Player)){const n=document.createElement("iframe"),o=`https://www.youtube.com/embed/${b}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&origin=${window.location.origin}&enablejsapi=1`;n.setAttribute("src",o),n.setAttribute("allow","autoplay; encrypted-media; picture-in-picture"),n.setAttribute("allowfullscreen","true"),n.style.width="100%",n.style.height="100%",n.style.border="0",n.style.opacity="0",n.style.transition="opacity 600ms ease",n.style.willChange="opacity, transform",e.innerHTML="",e.appendChild(n),n.onload=()=>{setTimeout(()=>{n.style.opacity="1",setTimeout(()=>I(!0),250)},600)};return}if(a&&typeof a.destroy=="function"){try{a.destroy()}catch{}a=null}a=new i.Player(e,{videoId:b,playerVars:{autoplay:1,mute:1,controls:0,modestbranding:1,rel:0,playsinline:1,origin:window.location.origin,enablejsapi:1,iv_load_policy:3},events:{onReady:n=>{const o=a.getIframe();o&&(o.style.opacity="0",o.style.transition="opacity 600ms ease",o.style.willChange="opacity, transform",o.style.background="black",o.setAttribute("allow","autoplay; encrypted-media; picture-in-picture"));try{const h=n.target.playVideo();h&&typeof h.catch=="function"&&h.catch(T=>{v(!0)})}catch{v(!0)}},onStateChange:n=>{const o=n.data;o===i.PlayerState.PLAYING?setTimeout(()=>{const h=a.getIframe();h&&(h.style.opacity="1"),setTimeout(()=>I(!0),200)},250):o===i.PlayerState.BUFFERING||i.PlayerState.ENDED},onError:n=>{console.error("YT player error:",n),d(!0)}}})}catch(i){console.error("YouTube init error:",i),d(!0)}}}$e(()=>N(x())),_e(()=>{if(r.videoId){const b=r.videoId;if(a&&typeof a.destroy=="function"){try{a.destroy()}catch{}a=null}m(!1),I(!1),v(!1),N(b)}}),Ve(()=>{try{a&&typeof a.destroy=="function"&&a.destroy()}catch{}a=null});const Y=r.videoId?`https://i.ytimg.com/vi/${r.videoId}/hqdefault.jpg`:"";return(()=>{var b=Ue(),i=b.firstChild,n=i.nextSibling;return Ae(o=>e=o,i),l(n,(()=>{var o=_(()=>!!r.videoId);return()=>o()&&(()=>{var h=Oe();return h.addEventListener("error",()=>m(!1)),h.addEventListener("load",()=>m(!0)),W(h,"src",Y),h})()})(),null),l(n,(()=>{var o=_(()=>!!(P()&&!k()));return()=>o()&&(()=>{var h=Be();return h.$$click=()=>{try{if(a&&typeof a.playVideo=="function")a.playVideo(),v(!1);else{const T=e.querySelector("iframe");T&&(T.contentWindow&&T.contentWindow.postMessage&&T.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),T.style.opacity="1",I(!0))}}catch(T){console.warn("Play click failed",T)}},h})()})(),null),l(b,(()=>{var o=_(()=>!!f());return()=>o()&&ze()})(),null),L(o=>{var h=k()?"0":"1",T=(k(),"none");return h!==o.e&&ve(n,"opacity",o.e=h),T!==o.t&&ve(n,"pointerEvents",o.t=T),o},{e:void 0,t:void 0}),b})()}te(["click"]);var qe=p('<div class="w-1 h-1 bg-white rounded-full mr-0.5">'),He=p("<button>"),We=p('<div class="absolute inset-0 z-20 pointer-events-none">'),Ge=p('<svg class="w-8 h-8 text-gray-500"fill=none stroke=currentColor viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">'),Ke=p('<div class="w-full h-full flex items-center justify-center bg-black">');const ae=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),q=r=>{const{id:e,className:f="",isLive:d=!1,isPinned:y=!1,onPinChange:m}=r,[k,I]=C(!1),P=a=>{a.stopPropagation(),m?.(!y)},v=()=>{ae()&&m?.(!y)};return s(X.div,{get class(){return`relative aspect-video bg-black rounded-lg overflow-hidden ${f} ${ae()?"cursor-pointer":""}`},"data-video-id":e,onMouseEnter:()=>I(!0),onMouseLeave:()=>I(!1),onClick:v,get children(){return[s(Z,{when:e,get fallback(){return(()=>{var a=Ke();return l(a,s(X.div,{class:"w-16 h-16 rounded-full bg-black flex items-center justify-center",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},get children(){return Ge()}})),a})()},get children(){return s(Fe,{videoId:e})}}),(()=>{var a=We();return l(a,s(X.div,{class:"absolute top-1 left-1 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded flex items-center pointer-events-auto",initial:{opacity:0,y:-5},get animate(){return{opacity:k()?.75:0,y:k()?0:-5}},transition:{duration:.2},get children(){return[qe(),"LIVE"]}}),null),l(a,s(Z,{get when(){return!ae()},get children(){return s(X.div,{class:"absolute top-1 right-1 flex gap-1 pointer-events-auto",initial:{opacity:0,y:-5},get animate(){return{opacity:k()?1:0,y:k()?0:-5}},transition:{duration:.2},get children(){var x=He();return x.$$click=P,Q(x,`p-3 rounded-full ${y?"bg-primary/90":"bg-black/60"} text-white hover:bg-primary transition-all cursor-pointer shadow-md`),W(x,"title",y?"Unpin":"Pin"),l(x,s(oe,{class:"w-6 h-6 transition-transform",classList:{"rotate-45":y}})),x}})}}),null),a})()]}})};te(["click"]);var Xe=p('<button class=button-with-icon><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 48 48"id=Play class=icon><path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"fill=#ffffff class="color000000 svgShape"></path></svg><span class=text>Go Live'),Je=p('<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"><div class="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4"><h3 class="text-xl font-medium text-white mb-4">YouTube Channel Required</h3><p class="text-gray-300 mb-6">Please add your YouTube channel URL in settings to go live.</p><div class="flex justify-end space-x-3"><button class="px-4 py-2 text-gray-300 hover:text-white">Cancel</button><button class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Go to Settings'),Qe=p('<div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"><div class="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4"><h3 class="text-xl font-medium text-white mb-4">Enter YouTube Live URL</h3><form class=space-y-4><div><input type=url placeholder="https://www.youtube.com/watch?v=..."class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-colors duration-200 text-white placeholder-gray-400"required></div><div class="flex justify-end space-x-3"><button type=button class="px-4 py-2 text-gray-300 hover:text-white">Cancel</button><button type=submit class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Watch'),Ze=p('<p class="mt-1 text-sm text-red-400">');const et=r=>{if(!r)return null;const e=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,f=r.match(e);return f&&f[2].length===11?f[2]:null},tt=({settings:r,onSettingsOpen:e,onVideoLinkSubmit:f})=>{const[d,y]=C(!1),[m,k]=C(""),[I,P]=C(""),v=()=>{if(!r().youtubeUrl){y(!0);return}y("input")},a=x=>{x.preventDefault();const A=et(m());A?(f(A),y(!1),k(""),P("")):P("Please enter a valid YouTube video URL")};return[s(rt,{get children(){var x=Xe();return x.$$click=v,x}}),_(()=>_(()=>d()===!0)()&&(()=>{var x=Je(),A=x.firstChild,U=A.firstChild,N=U.nextSibling,Y=N.nextSibling,b=Y.firstChild,i=b.nextSibling;return b.$$click=()=>y(!1),i.$$click=()=>{y(!1),e()},x})()),_(()=>_(()=>d()==="input")()&&(()=>{var x=Qe(),A=x.firstChild,U=A.firstChild,N=U.nextSibling,Y=N.firstChild,b=Y.firstChild,i=Y.nextSibling,n=i.firstChild;return N.addEventListener("submit",a),b.$$input=o=>{k(o.target.value),P("")},l(Y,(()=>{var o=_(()=>!!I());return()=>o()&&(()=>{var h=Ze();return l(h,I),h})()})(),null),n.$$click=()=>{y(!1),k(""),P("")},L(()=>b.value=m()),x})())]},rt=ke.div`
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
  }`;te(["click","input"]);const H="yt_clone_cache_",it=600*60*1e3,J=(...r)=>{console.log("%c[Cache]","color: #4CAF50; font-weight: bold",...r)},ee={set:(r,e,f=it)=>{try{const d=new Date,y=d.getTime()+f,m={data:e,expiry:y,timestamp:d.toISOString(),ttl:f/1e3+"s"};return localStorage.setItem(`${H}${r}`,JSON.stringify(m)),J(`Cached data for key: "${r}" (expires in ${f/1e3}s)`),!0}catch(d){return console.error("Error saving to cache:",d),!1}},get:r=>{try{const e=localStorage.getItem(`${H}${r}`);if(!e)return J(`Cache miss for key: "${r}" (not found)`),null;const f=JSON.parse(e),d=new Date;if(d.getTime()>f.expiry)return J(`Cache expired for key: "${r}" (expired at ${new Date(f.expiry).toLocaleTimeString()})`),localStorage.removeItem(`${H}${r}`),null;const m=Math.ceil((f.expiry-d.getTime())/1e3);return J(`Cache hit for key: "${r}" (expires in ${m}s)`),f.data}catch(e){return console.error("Error reading from cache:",e),null}},remove:r=>{try{return localStorage.removeItem(`${H}${r}`),!0}catch(e){return console.error("Error removing from cache:",e),!1}},clear:()=>{try{return Object.keys(localStorage).forEach(r=>{r.startsWith(H)&&localStorage.removeItem(r)}),!0}catch(r){return console.error("Error clearing cache:",r),!1}}},Se={LIVE_VIDEOS:"live_videos"},Ce="AIzaSyCme96dbKuwSWqh54Wed8-Rfj2C0r6IDYM",Ie="https://www.googleapis.com/youtube/v3",Pe=300*1e3,nt=async r=>{const e=`${Se.CHANNEL_LIVE}_${r}`,f=ee.get(e);if(f)return f;try{const d=await fetch(`${Ie}/search?part=snippet&channelId=${r}&eventType=live&type=video&key=${Ce}`);if(!d.ok)return null;const m=(await d.json()).items?.[0];return m?(ee.set(e,m,Pe),m):null}catch(d){return console.error("Error fetching channel live video:",d),null}},lt=async(r=12)=>{const e=`${Se.LIVE_VIDEOS}_${r}`,f=ee.get(e);if(f)return f;try{const y=["live study","study with me","live pomodoro"].join("|"),m=await fetch(`${Ie}/search?part=snippet&type=video&eventType=live&q=${encodeURIComponent(y)}&maxResults=${r}&key=${Ce}`);if(!m.ok)return new Error(`API request failed with status ${m.status}`);const I=(await m.json()).items?.map(P=>P.id.videoId).filter(Boolean)||[];return I.length>0&&ee.set(e,I,Pe),I}catch(d){throw new Error(`Failed to fetch live videos: ${d.message}`)}};function st(){const[r,e]=C({data:[],loading:!1,error:null}),[f,d]=C(null),[y,m]=C(!1);return{videos:r,userLiveVideo:f,loadLiveVideos:async(P=12)=>{try{e(a=>({...a,loading:!0,error:null}));const v=await lt(P);e({data:v,loading:!1,error:null})}catch(v){e(a=>({data:a.data,loading:!1,error:v.message||"Failed to load live videos"}))}},checkUserLiveStatus:async P=>{if(!(!P||y())){m(!0);try{const v=await nt(P);d(v||null)}catch(v){console.error("Error checking user live status:",v),d(null)}m(!1)}}}}ke.div`
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
  }`;var at=p('<div class="flex justify-between p-16 items-center mb-4"><div class=flex-1></div><div class="flex gap-4 items-center"><button class="btn flex items-center gap-2 z-10"aria-label=Settings><span>Settings'),ot=p('<div class="fixed inset-0 z-50 bg-black flex"><div class="absolute top-4 right-4 z-50"></div><div class="w-full h-full">'),ct=p('<div class=p-8><div class="flex justify-between items-center mb-8"><button class="p-2 rounded-full hover:bg-opacity-20 transition-colors"aria-label="Close settings"><svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke-width=2><path d="M18 6L6 18M6 6l12 12"></path></svg></button></div><div class=space-y-8><div class="flex flex-row justify-between items-center gap-4"></div></div><div class=space-y-8><div class="flex flex-row justify-between items-center gap-4"><input type=number class=" w-12 px-2 py-1 rounded-lg bg-black/50 border focus:border-white/30 focus:ring-2 focus:ring-white/50 transition-colors duration-200 text-white placeholder-gray-400 "placeholder=4></div></div><div class="space-y-8 mt-8"><div class=space-y-4><div class="flex items-center justify-between"><label for=showTimer class="text-sm text-gray-300">Show Timer</label><input id=showTimer type=checkbox class="toggle toggle-primary"></div><div class="flex items-center justify-between"><label for=showStudyRoom class="text-sm text-gray-300">Show Study Room</label><input id=showStudyRoom type=checkbox class="toggle toggle-primary"></div><div class="flex items-center justify-between"><label for=showTaskManager class="text-sm text-gray-300">Show Task Manager</label><input id=showTaskManager type=checkbox class="toggle toggle-primary"></div></div></div><div class="space-y-8 mt-8"><div class=space-y-4><div class="flex flex-col gap-2"><div class="flex flex-col lg:flex-row gap-2"><input type=url placeholder=https://www.youtube.com/@channelname class="flex-1 px-4 py-2 rounded-lg bg-black/50 border border-gray-600 focus:border-white/30 focus:ring-2 focus:ring-white/50 transition-colors duration-200 text-white placeholder-gray-400"><button class="btn btn-primary whitespace-nowrap">Save</button></div><div class="flex items-center mt-4"><input id=showInDashboard type=checkbox class="w-4 h-4 rounded border-gray-600 bg-black/50 focus:ring-2 focus:ring-white/50"><label for=showInDashboard class="ml-2 text-sm text-gray-300">Show my live stream in dashboard'),dt=p('<div class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"><div class="w-full max-w-2xl p-32">'),ut=p('<div class="text-sm text-gray-500 flex items-center gap-1"> pinned'),gt=p('<button class="btn btn-primary flex items-center gap-2"><span>Focus Mode'),ht=p('<div class="min-w-screen mb-12"><div class="flex justify-between items-center mb-6 px-4"><h2 class="text-2xl font-bold flex items-center gap-3"></h2></div><div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4">'),xe=p('<div class="flex justify-center items-center h-64 bg-black"><span class="loading loading-spinner loading-lg">'),pt=p("<div class=mt-4>"),ft=p(`<div class="mt-4 p-4 rounded-lg bg-gray-800 border border-gray-700"><span class=text-gray-300>You're not currently live on YouTube.`),mt=p('<div class="alert alert-error"><span>Error: '),bt=p('<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4">'),vt=p('<div class="flex justify-center gap-2 mt-6"><button class="btn btn-sm">Previous</button><button class="btn btn-sm">Next'),yt=p("<button>"),we=p("<div>"),xt=p('<div class="absolute inset-0 bg-black/50 flex items-center justify-center"><span class="text-white text-2xl">+<!> more');function kt(){const r=t=>{n({id:t,title:"Live Stream",thumbnail:`https://img.youtube.com/vi/${t}/mqdefault.jpg`})},[e,f]=C({theme:localStorage.getItem("theme")||"",cardsPerPage:localStorage.getItem("cardsPerPage")||"",youtubeUrl:localStorage.getItem("youtubeUrl")||"",showInDashboard:localStorage.getItem("showInDashboard")?localStorage.getItem("showInDashboard")==="true":!0,showTimer:localStorage.getItem("showTimer")?localStorage.getItem("showTimer")==="true":!0,showStudyRoom:localStorage.getItem("showStudyRoom")?localStorage.getItem("showStudyRoom")==="true":!0,showTaskManager:localStorage.getItem("showTaskManager")?localStorage.getItem("showTaskManager")==="true":!0}),d=(t,u)=>{localStorage.setItem(t,u),f(w=>({...w,[t]:u})),["showTimer","showStudyRoom","showTaskManager"].includes(t)&&setTimeout(()=>window.location.reload(),300)},[y,m]=C(e().cardsPerPage||4),{videos:k,loadLiveVideos:I}=st(),{isDark:P}=Re(),[v,a]=C({}),[x,A]=C(1),[U,N]=C(!1),[Y,b]=C(!1),[i,n]=C(null),[o,h]=C(!1);_e(async()=>{const t=e().youtubeUrl;if(t){h(!0);try{const u=await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${t}`);if(!u.ok){n(null);return}const w=await u.text();console.log("RSS Feed Response:",w);const c=new DOMParser().parseFromString(w,"text/xml"),E=Array.from(c.getElementsByTagName("entry"));console.log("All entries:",E);const $=E.find(S=>{const j=S.getElementsByTagName("yt:liveBroadcastContent")[0];return console.log("Entry:",S),console.log("Live broadcast element:",j),console.log("Live broadcast content:",j?.textContent),j?.textContent==="live"});if(console.log("Found live entry:",$),$){console.log("Processing live entry:",$);const S=$.getElementsByTagName("yt:videoId")[0]?.textContent,j=$.getElementsByTagName("title")[0]?.textContent,M=S?`https://img.youtube.com/vi/${S}/mqdefault.jpg`:"";console.log("Extracted video data:",{videoId:S,title:j,thumbnail:M}),n({id:S,title:j,thumbnail:M})}else n(null)}catch(u){console.error("Error checking live status:",u),n(null)}finally{h(!1)}}}),$e(()=>I(25));const T=(t,u,w=!1)=>{const g={...v()},c=w?`live_${t}`:t;u?g[c]=!0:delete g[c],a(g),Object.values(g).filter(Boolean).length===0&&N(!1)},Te=se(()=>(k().data||[]).slice((x()-1)*y(),x()*y())),G=se(()=>Math.ceil((k().data?.length||0)/y())),re=t=>{t>=1&&t<=G()&&A(t)},K=se(()=>Object.keys(v()).filter(t=>v()[t]).length);return s(F,{className:"min-h-screen flex flex-col justify-around items-center",get children(){return[s(F,{className:"min-w-screen  max-w-4xl mb-6",get children(){return[(()=>{var t=at(),u=t.firstChild,w=u.nextSibling,g=w.firstChild,c=g.firstChild;return l(u,(()=>{var E=_(()=>K()>0);return()=>E()&&(()=>{var $=ut(),S=$.firstChild;return l($,s(oe,{class:"w-5 h-5"}),S),l($,K,S),$})()})()),l(w,s(tt,{settings:e,onSettingsOpen:()=>b(!Y()),onVideoLinkSubmit:r}),g),l(w,(()=>{var E=_(()=>K()>0);return()=>E()&&(()=>{var $=gt();return $.$$click=()=>N(!0),$})()})(),g),g.$$click=()=>b(!Y()),l(g,s(De,{class:"w-5 h-5"}),c),t})(),_(()=>_(()=>K()>0)()&&(()=>{var t=ht(),u=t.firstChild,w=u.firstChild,g=u.nextSibling;return l(w,s(oe,{class:"w-7 h-7 text-purple-600"}),null),l(w,s(D,{animte:!0,children:"Pinned Streams"}),null),l(g,()=>k().data?.filter(c=>v()[c]).map(c=>s(q,{key:`regular_${c}`,id:c,isPinned:!0,onPinChange:E=>T(c,E),className:"aspect-video col-span-1 sm:col-span-1"})),null),l(g,(()=>{var c=_(()=>!!(i()&&v()[`live_${i().id}`]));return()=>c()&&s(q,{get key(){return`live_${i().id}`},get id(){return i().id},get title(){return i().title},get thumbnail(){return i().thumbnail},isLive:!0,isPinned:!0,onPinChange:E=>T(i().id,E,!0),className:"aspect-video col-span-1 sm:col-span-1"})})(),null),t})()),_(()=>_(()=>!!(e().showInDashboard&&e().youtubeUrl))()&&s(F,{className:"w-full p-4 pl-16 pr-16",get children(){return[s(D,{animate:!0,className:"px-8 text-2xl md:text-4xl lg:text-6xl font-serif font-stretch-50% opacity-80",get children(){return s(ye,{children:"Your Live Stream"})}}),_(()=>_(()=>!!o())()?xe():_(()=>!!i())()?(()=>{var t=pt();return l(t,s(q,{get id(){return i().id},get title(){return i().title},get thumbnail(){return i().thumbnail},isLive:!0,className:"w-full aspect-video",get isPinned(){return!!v()[`live_${i().id}`]},onPinChange:u=>T(i().id,u,!0)})),t})():ft())]}}))]}}),s(F,{className:"w-full p-4 pl-16 pr-16",get children(){return[s(D,{animate:!0,className:"px-8 text-2xl md:text-4xl lg:text-6xl font-serif font-stretch-50% opacity-80",get children(){return s(ye,{children:" Live Streams "})}}),_(()=>_(()=>!!k().loading)()?xe():_(()=>!!k().error)()?(()=>{var t=mt(),u=t.firstChild;return u.firstChild,l(u,()=>k().error,null),t})():[(()=>{var t=bt();return l(t,()=>Te().map(u=>s(q,{id:u,get isPinned(){return!!v()[u]},onPinChange:w=>T(u,w)}))),t})(),_(()=>_(()=>G()>1)()&&(()=>{var t=vt(),u=t.firstChild,w=u.nextSibling;return u.$$click=()=>re(x()-1),l(t,()=>Array.from({length:G()},(g,c)=>c+1).map(g=>(()=>{var c=yt();return c.$$click=()=>re(g),W(c,"key",g),l(c,g),L(()=>Q(c,`btn btn-sm ${x()===g?"btn-primary":""}`)),c})()),w),w.$$click=()=>re(x()+1),L(g=>{var c=x()===1,E=x()===G();return c!==g.e&&(u.disabled=g.e=c),E!==g.t&&(w.disabled=g.t=E),g},{e:void 0,t:void 0}),t})())])]}}),s(Z,{get when(){return U()},get children(){var t=ot(),u=t.firstChild,w=u.nextSibling;return l(w,()=>{const g=[...(k().data?.filter($=>v()[$])||[]).map($=>({id:$,isLive:!1})),...i()&&v()[`live_${i().id}`]?[{id:i().id,title:i().title,thumbnail:i().thumbnail,isLive:!0}]:[]],c=g.length;if(c===0)return null;const E=()=>{switch(c){case 1:return"grid-cols-1 grid-rows-1";case 2:return"grid-cols-2 grid-rows-1";case 3:return"grid-cols-2 grid-rows-2";case 4:return"grid-cols-2 grid-rows-2";default:return"grid-cols-2 grid-rows-2"}};return(()=>{var $=we();return l($,()=>g.map((S,j)=>(()=>{var M=we();return Q(M,`relative ${c===3&&j===0?"row-span-2":""}`),l(M,s(q,{get id(){return S.id},get title(){return S.title},get thumbnail(){return S.thumbnail},get isLive(){return S.isLive},isPinned:!0,onPinChange:R=>T(S.id,R,S.isLive),className:"w-full h-full"}),null),l(M,c>4&&j>=4&&(()=>{var R=xt(),O=R.firstChild,ie=O.firstChild,B=ie.nextSibling;return B.nextSibling,l(O,c-4,B),R})(),null),L(()=>W(M,"key",`focus-${S.isLive?"live":"regular"}-${S.id}`)),M})())),L(()=>Q($,`w-full h-full grid ${E()} gap-4 p-4`)),$})()}),t}}),s(Z,{get when(){return Y()},get children(){var t=dt(),u=t.firstChild;return t.$$click=()=>b(!1),u.$$click=w=>w.stopPropagation(),l(u,s(F,{className:"rounded-xl shadow-2xl overflow-hidden",get children(){var w=ct(),g=w.firstChild,c=g.firstChild,E=c.firstChild,$=g.nextSibling,S=$.firstChild,j=$.nextSibling,M=j.firstChild,R=M.firstChild,O=j.nextSibling,ie=O.firstChild,B=ie.firstChild,Ee=B.firstChild,ce=Ee.nextSibling,de=B.nextSibling,Le=de.firstChild,ue=Le.nextSibling,je=de.nextSibling,Ye=je.firstChild,ge=Ye.nextSibling,he=O.nextSibling,pe=he.firstChild,fe=pe.firstChild,ne=fe.firstChild,me=ne.firstChild,Me=ne.nextSibling,be=Me.firstChild;return l(g,s(D,{className:"text-3xl font-bold",children:"Settings"}),c),c.$$click=()=>b(!1),l(S,s(D,{as:"label",className:"block text-md font-medium m-4",children:"Theme"}),null),l(S,s(Ne,{saveSettings:d}),null),l(M,s(D,{as:"label",className:"block text-md font-medium m-4",children:"Cards"}),R),R.addEventListener("change",V=>{const le=V.target.value,z=parseInt(le);if(isNaN(z)||z<1){console.error(`Failed to parse value "${le}" to an integer.`);return}if(z>12){console.error(`Value "${le}" is greater than 12.`);return}d("cardsPerPage",z),m(z)}),ce.$$input=V=>d("showTimer",V.target.checked),ue.$$input=V=>d("showStudyRoom",V.target.checked),ge.$$input=V=>d("showTaskManager",V.target.checked),l(he,s(D,{className:"text-xl font-semibold mb-4",children:"Go Live"}),pe),l(fe,s(D,{as:"label",className:"block text-md font-medium",children:"YouTube Channel URL"}),ne),me.$$input=V=>d("youtubeUrl",V.target.value),be.$$input=V=>d("showInDashboard",V.target.checked),L(()=>W(E,"stroke",P()?"currentColor":"black")),L(()=>R.value=e().cardsPerPage||y()),L(()=>ce.checked=e().showTimer),L(()=>ue.checked=e().showStudyRoom),L(()=>ge.checked=e().showTaskManager),L(()=>me.value=e().youtubeUrl),L(()=>be.checked=e().showInDashboard),w}})),t}})]}})}te(["click","input"]);export{kt as default};
