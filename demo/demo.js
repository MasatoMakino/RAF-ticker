(()=>{"use strict";var e,t={318:(e,t,i)=>{var r,s=i(34),n=i.n(s);!function(e){e.onBeforeTick="onBeforeTick",e.tick="tick",e.onAfterTick="onAfterTick"}(r||(r={}));class a{constructor(e,t){this.timestamp=e,this.delta=t}}class o{static initialize(){null==this._dispatcher&&(this._dispatcher=new(n()),o.onTick(performance.now()))}static reset(){this._dispatcher.removeAllListeners(),this._dispatcher=null,this._dispatcher=new(n()),o.onTick(performance.now())}static addListener(e,t){this._dispatcher.on(e,t)}static hasListener(e,t){return this._dispatcher.listeners(e).includes(t)}static removeListener(e,t){this._dispatcher.removeListener(e,t)}static emit(e,t){this._dispatcher.emit(e,t)}}o.on=o.addListener,o.addEventListener=o.addListener,o.hasEventListener=o.hasListener,o.off=o.removeListener,o.removeEventListener=o.removeListener,o.onTick=e=>{null==o._lastUpdateTimestamp&&(o._lastUpdateTimestamp=e);const t=e-o._lastUpdateTimestamp;o.emit(r.onBeforeTick,new a(e,t)),o.emit(r.tick,new a(e,t)),o.emit(r.onAfterTick,new a(e,t)),o._lastUpdateTimestamp=e,o._id=requestAnimationFrame(o.onTick)},o.initialize();class c{constructor(){Object.values(r).forEach((e=>{o.on(e,(t=>{l(e,t)}))}))}}const l=(e,t)=>{console.log(`${e} : ${t.delta}, ${t.timestamp}`)};window.onload=()=>{new c}}},i={};function r(e){var s=i[e];if(void 0!==s)return s.exports;var n=i[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,i,s,n)=>{if(!i){var a=1/0;for(d=0;d<e.length;d++){for(var[i,s,n]=e[d],o=!0,c=0;c<i.length;c++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](i[c])))?i.splice(c--,1):(o=!1,n<a&&(a=n));if(o){e.splice(d--,1);var l=s();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[i,s,n]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={577:0};r.O.j=t=>0===e[t];var t=(t,i)=>{var s,n,[a,o,c]=i,l=0;if(a.some((t=>0!==e[t]))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(c)var d=c(r)}for(t&&t(i);l<a.length;l++)n=a[l],r.o(e,n)&&e[n]&&e[n][0](),e[a[l]]=0;return r.O(d)},i=self.webpackChunkraf_ticker=self.webpackChunkraf_ticker||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var s=r.O(void 0,[736],(()=>r(318)));s=r.O(s)})();