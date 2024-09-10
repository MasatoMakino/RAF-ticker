(()=>{"use strict";var t,e={491:(t,e,i)=>{var s,a=i(486);class r{constructor(t,e){this.timestamp=t,this.delta=e}}class n{static initialize(){null==this._dispatcher&&(this._dispatcher=new a.b),this.start()}static reset(){this._dispatcher.removeAllListeners(),this.stop(),this.start()}static start(){s._id||(this._lastUpdateTimestamp=void 0,s.onTick(performance.now()))}static stop(){cancelAnimationFrame(s._id),this._id=void 0,this._lastUpdateTimestamp=void 0}static addListener(t,e){this._dispatcher.on(t,e)}static hasListener(t,e){return this._dispatcher.listeners(t).includes(e)}static removeListener(t,e){this._dispatcher.removeListener(t,e)}static emit(t,e){this._dispatcher.emit(t,e)}static emitTickEvent(t){null==s._lastUpdateTimestamp&&(s._lastUpdateTimestamp=t);const e=t-s._lastUpdateTimestamp;this._dispatcher.emit("onBeforeTick",new r(t,e)),this._dispatcher.emit("tick",new r(t,e)),this._dispatcher.emit("onAfterTick",new r(t,e)),s._lastUpdateTimestamp=t}}s=n,n.on=s.addListener,n.off=s.removeListener,n.onTick=t=>{s.emitTickEvent(t),s._id=requestAnimationFrame(s.onTick)},n.initialize();class o{constructor(){["onBeforeTick","tick","onAfterTick"].forEach((t=>{n.on(t,(e=>{c(t,e)}))}))}}const c=(t,e)=>{console.log(`${t} : ${e.delta}, ${e.timestamp}`)};window.onload=()=>{new o}}},i={};function s(t){var a=i[t];if(void 0!==a)return a.exports;var r=i[t]={exports:{}};return e[t](r,r.exports,s),r.exports}s.m=e,t=[],s.O=(e,i,a,r)=>{if(!i){var n=1/0;for(d=0;d<t.length;d++){for(var[i,a,r]=t[d],o=!0,c=0;c<i.length;c++)(!1&r||n>=r)&&Object.keys(s.O).every((t=>s.O[t](i[c])))?i.splice(c--,1):(o=!1,r<n&&(n=r));if(o){t.splice(d--,1);var p=a();void 0!==p&&(e=p)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[i,a,r]},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={594:0};s.O.j=e=>0===t[e];var e=(e,i)=>{var a,r,[n,o,c]=i,p=0;if(n.some((e=>0!==t[e]))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(c)var d=c(s)}for(e&&e(i);p<n.length;p++)r=n[p],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(d)},i=self.webpackChunk_masatomakino_raf_ticker=self.webpackChunk_masatomakino_raf_ticker||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var a=s.O(void 0,[121],(()=>s(491)));a=s.O(a)})();