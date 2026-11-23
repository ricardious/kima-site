import{a as e,l as t,n,r}from"./theme-Dt9Wl5qW.js";var i=10,a=[-3,-2,-1,1,2,3,4,-4];function o(e){let t=s(e.difficulty),{rng:n}=e,r=0,o=!1,c=e=>{r+=1;let i=t>=.5,s=i?20:10,c=i?2:1,l=i?4:3,u=i?`math.addition.within-20`:`math.addition.within-10`,d=n.int(c,s-c),f=n.int(c,s-d),p=d+f,m=new Set([p]),h=n.shuffle(a);for(let e of h){if(m.size>=l)break;let t=p+e;t>=1&&t<=s+2&&m.add(t)}for(;m.size<l;)m.add(n.int(1,s+2));return o=!1,{id:r,a:d,b:f,answer:p,options:n.shuffle(Array.from(m)),objectiveId:u,difficulty:t,issuedAtMs:Math.max(0,e)}},l=c(0);return{difficulty:t,current:()=>l,nextQuestion(e){return l=c(e),l},submitAnswer(e,t){if(o)return null;o=!0;let n=e===l.answer,r=Math.max(0,Math.round(t-l.issuedAtMs));return{question:l,selected:e,correct:n,pointsDelta:n?i:0,responseMs:r,learningEvent:{objectiveId:l.objectiveId,correct:n,difficulty:l.difficulty,responseMs:r}}}}}function s(e){return Number.isFinite(e)?Math.min(1,Math.max(0,e)):.5}function c(e){return e.toLowerCase().startsWith(`en`)?{scoreLabel:`Score`,timeLabel:`Time`,streakLabel:`Streak`,pausedTitle:`Paused`,pausedHint:`Resume to keep playing`,finishedTitle:`Time is up!`,accuracyLabel:`Accuracy`,good:[`Great!`,`Awesome!`,`Nice!`,`Super!`],wasText:`It was`,answerLabel:`Answer`}:{scoreLabel:`Puntos`,timeLabel:`Tiempo`,streakLabel:`Racha`,pausedTitle:`En pausa`,pausedHint:`Reanuda para seguir jugando`,finishedTitle:`¡Tiempo terminado!`,accuracyLabel:`Precisión`,good:[`¡Muy bien!`,`¡Genial!`,`¡Excelente!`,`¡Súper!`],wasText:`Era`,answerLabel:`Respuesta`}}function l(e){return[{bg:e.primaryContainer,edge:e.primary},{bg:e.secondaryContainer,edge:e.secondary},{bg:e.teal,edge:`#0f766e`},{bg:`#d97706`,edge:e.gold}]}function u(e,t){let n=e=>t?e:`none`;return`
.qs-root { position: relative; display: flex; flex-direction: column; gap: 14px;
  width: 100%; height: 100%; min-height: 340px; box-sizing: border-box;
  font-family: ${e.fontDisplay}; color: ${e.onSurface}; user-select: none;
  -webkit-tap-highlight-color: transparent; }
.qs-root *, .qs-root *::before, .qs-root *::after { box-sizing: border-box; }
.qs-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 40px; }
.qs-chip { display: inline-flex; align-items: center; gap: 6px; height: 40px; padding: 0 14px;
  border-radius: 999px; border: 2px solid ${e.outlineVariant}; border-bottom-width: 4px;
  background: ${e.surfaceLowest}; font-weight: 700; font-size: 16px; color: ${e.onSurfaceVariant};
  transition: ${n(`transform 160ms ease`)}; }
.qs-chip svg { width: 20px; height: 20px; }
.qs-chip[data-hot='true'] { background: ${e.goldContainer}; border-color: ${e.gold}; color: ${e.onGoldContainer}; }
.qs-chip-num { font-variant-numeric: tabular-nums; min-width: 2ch; text-align: right; }
.qs-stats { display: flex; gap: 8px; }
.qs-card { position: relative; flex: 1; display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 14px; padding: 24px 12px; border-radius: 28px;
  background: ${e.surfaceLowest}; border: 2px solid ${e.outlineVariant}; border-bottom-width: 6px; }
.qs-card { container-type: inline-size; }
.qs-eq { display: grid; grid-template-columns: auto auto; column-gap: 0.18em; row-gap: 0.06em;
  justify-items: end; align-items: center; font-size: clamp(48px, 30cqw, 104px);
  font-weight: 700; line-height: 1.05; font-variant-numeric: tabular-nums; }
.qs-rule { grid-column: 1 / -1; justify-self: stretch; height: 0.08em; margin: 0.06em 0;
  border-radius: 999px; background: ${e.onSurface}; }
.qs-a { color: ${e.primaryContainer}; }
.qs-b { color: ${e.secondaryContainer}; }
.qs-op { color: ${e.onSurfaceVariant}; font-size: 0.75em; }
.qs-slot { grid-column: 1 / -1; justify-self: end; display: inline-grid; place-items: center;
  min-width: 1.9em; height: 1.2em; padding: 0 0.12em; border-radius: 0.22em;
  border: 4px dashed ${e.outlineVariant}; color: ${e.outline}; }
.qs-slot[data-state='ok'] { border-style: solid; border-color: ${e.success}; background: ${e.success}; color: #fff;
  animation: ${n(`qs-pop 360ms cubic-bezier(0.34, 1.56, 0.64, 1)`)}; }
.qs-slot[data-state='bad'] { border-style: solid; border-color: ${e.success}; background: ${e.successContainer};
  color: ${e.onSuccessContainer}; }
.qs-card[data-state='bad'] { animation: ${n(`qs-shake 380ms ease`)}; }
.qs-new { animation: ${n(`qs-in 260ms ease-out`)}; }
.qs-msg { min-height: 30px; font-size: 22px; font-weight: 700; text-align: center; }
.qs-msg[data-state='ok'] { color: ${e.success}; animation: ${n(`qs-rise 300ms ease-out`)}; }
.qs-msg[data-state='bad'] { color: ${e.error}; animation: ${n(`qs-rise 300ms ease-out`)}; }
.qs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.qs-opt { position: relative; min-height: 76px; border-radius: 22px; border: 2px solid var(--state-edge, var(--edge));
  border-bottom-width: 6px; background: var(--state-bg, var(--bg)); color: #fff; font: inherit; font-size: 32px;
  font-weight: 700; cursor: pointer; touch-action: manipulation;
  transition: ${n(`transform 120ms ease, opacity 160ms ease`)}; }
.qs-opt:focus-visible { outline: 4px solid ${e.secondary}; outline-offset: 3px; }
.qs-opt:disabled { cursor: default; }
.qs-opt[data-state='dim'] { opacity: 0.4; }
.qs-opt[data-state='ok'] { --state-bg: ${e.success}; --state-edge: #15803d; animation: ${n(`qs-pop 360ms cubic-bezier(0.34, 1.56, 0.64, 1)`)}; }
.qs-opt[data-state='bad'] { --state-bg: ${e.error}; --state-edge: #7f0a0a; }
.qs-key { position: absolute; top: 8px; left: 10px; display: none; width: 22px; height: 22px;
  border-radius: 999px; background: rgba(255, 255, 255, 0.25); font-size: 13px; line-height: 22px; }
@media (hover: hover) and (pointer: fine) {
  .qs-opt:not(:disabled):hover { transform: translateY(-2px); }
  .qs-key { display: block; }
}
.qs-opt:not(:disabled):active { transform: translateY(3px); }
.qs-overlay { position: absolute; inset: 0; display: none; flex-direction: column; align-items: center;
  justify-content: center; gap: 8px; padding: 24px; border-radius: 28px; text-align: center;
  background: rgba(38, 23, 28, 0.8); color: #fff; }
.qs-overlay strong { font-size: 30px; }
.qs-overlay span { font-family: ${e.fontBody}; font-size: 17px; opacity: 0.92; }
@keyframes qs-pop { from { transform: scale(0.8); } to { transform: scale(1); } }
@keyframes qs-in { from { opacity: 0; transform: scale(0.92); } }
@keyframes qs-rise { from { opacity: 0; transform: translateY(8px); } }
@keyframes qs-shake { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-10px); }
  40% { transform: translateX(9px); } 60% { transform: translateX(-6px); } 80% { transform: translateX(4px); } }
`}var d=`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c.5 3.2-1.6 5-3.2 6.7C7.3 10.3 6 12 6 14.5A6 6 0 0 0 18 14.5c0-2.6-1.3-4.6-2.6-6 .1 1.6-.6 2.8-1.8 3.3.6-3.5-.5-7.2-1.6-9.8Z"/></svg>`;function f(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}function p(e,t){e.classList.remove(t),e.offsetWidth,e.classList.add(t)}function m(e){let{root:t,locale:r,reducedMotion:i,showStats:a,signal:o,onAnswer:s}=e,m=c(r),h=n(t),g=l(h),_=f(`style`);_.textContent=u(h,!i);let v=f(`div`,`qs-root`),y=f(`div`,`qs-top`),b=f(`span`,`qs-chip`);b.innerHTML=d;let x=f(`span`,`qs-chip-num`);b.append(f(`span`,void 0,m.streakLabel),x),y.append(b);let S=f(`span`,`qs-chip-num`),C=f(`span`,`qs-chip-num`);if(a){let e=f(`div`,`qs-stats`),t=f(`span`,`qs-chip`);t.append(f(`span`,void 0,m.timeLabel),S);let n=f(`span`,`qs-chip`);n.append(f(`span`,void 0,m.scoreLabel),C),e.append(t,n),y.append(e)}let w=f(`div`,`qs-card`),T=f(`div`,`qs-eq`);T.setAttribute(`role`,`heading`),T.setAttribute(`aria-level`,`2`);let E=f(`span`,`qs-a`),D=f(`span`,`qs-b`),O=f(`span`,`qs-slot`,`?`);T.append(f(`span`),E,f(`span`,`qs-op`,`+`),D,f(`span`,`qs-rule`),O);let k=f(`p`,`qs-msg`);k.setAttribute(`aria-live`,`polite`),k.style.margin=`0`,w.append(T,k);let A=f(`div`,`qs-grid`),j=f(`div`,`qs-overlay`),M=f(`strong`),N=f(`span`);j.append(M,N),v.append(y,w,A,j),t.replaceChildren(_,v);let P=``,F,I=[],L=0;return A.addEventListener(`click`,e=>{let t=e.target?.closest(`button[data-option]`);if(!t||t.disabled)return;let n=Number(t.dataset.option);Number.isFinite(n)&&s(n)},{signal:o}),window.addEventListener(`keydown`,e=>{let t=Number(e.key)-1,n=I[t];n!==void 0&&s(n)},{signal:o}),{render(e){let{question:t,feedback:n,score:r}=e;x.textContent=`x${r.streak}`,b.dataset.hot=String(r.streak>=3),a&&(S.textContent=`${Math.ceil(e.timer.remainingMs/1e3)}s`,C.textContent=String(r.points)),I=t.options;let i=`${t.id}:${t.options.join(`,`)}`;if(P!==i){let e=P.startsWith(`${t.id}:`);P=i,E.textContent=String(t.a),D.textContent=String(t.b),T.setAttribute(`aria-label`,`${t.a} + ${t.b} = ?`),e||p(T,`qs-new`);let n=t.options.map((e,t)=>{let n=g[t%g.length]??g[0],r=f(`button`,`qs-opt`);r.type=`button`,r.dataset.option=String(e),r.style.setProperty(`--bg`,n.bg),r.style.setProperty(`--edge`,n.edge),r.setAttribute(`aria-label`,`${m.answerLabel} ${e}`);let i=f(`span`,`qs-key`,String(t+1));return i.setAttribute(`aria-hidden`,`true`),r.append(i,String(e)),r});A.replaceChildren(...n)}if(n!==F){if(F=n,n){let e=n.correct?`ok`:`bad`;O.textContent=String(t.answer),O.dataset.state=e,w.dataset.state=e,k.dataset.state=e,k.textContent=n.correct?`${m.good[L++%m.good.length]} +${n.pointsDelta}`:`${m.wasText} ${t.answer}`}else O.textContent=`?`,delete O.dataset.state,delete w.dataset.state,delete k.dataset.state,k.textContent=``}let o=e.lifecycle!==`running`||n!==void 0;for(let r of Array.from(A.children)){let i=r,a=Number(i.dataset.option),s=e.removed?.includes(a)??!1;i.disabled=o||s,n?a===t.answer?i.dataset.state=`ok`:a===n.selected?i.dataset.state=`bad`:i.dataset.state=`dim`:s?i.dataset.state=`dim`:delete i.dataset.state}if(a&&e.lifecycle===`paused`)j.style.display=`flex`,M.textContent=m.pausedTitle,N.textContent=m.pausedHint;else if(a&&e.lifecycle===`finished`){j.style.display=`flex`,M.textContent=m.finishedTitle;let e=Math.round((r.accuracy??0)*100);N.textContent=`${m.scoreLabel}: ${r.points} · ${m.accuracyLabel}: ${e}%`}else j.style.display=`none`},destroy(){t.replaceChildren()}}}var h=450;function g(e){for(let t of[3,-3,4,-4,5,-5,6,7,8]){let n=e.answer+t;if(n>=0&&!e.options.includes(n))return n}return e.answer+10}var _=r(n=>{let r,i,a,s={questionId:-1,values:[]},c=0,l=e=>{let t=r?.current();if(t)return e.timer.snapshot().elapsedMs>=c?t:{...t,options:[...t.options,g(t)]}},u=e=>s.questionId===e.id?s.values:[],d=e=>{let t=l(e);t&&i&&i.render({lifecycle:e.getState(),timer:e.timer.snapshot(),score:e.score.snapshot(),question:t,removed:u(t),feedback:a})};return{durationMs:t,renderer:()=>e(),onInit(e){r=o({difficulty:e.session.difficulty,rng:e.rng}),i=m({root:e.surface,locale:e.session.locale,reducedMotion:e.settings.reducedMotion,showStats:!n.platformHud,signal:e.signal,onAnswer(t){if(!r||e.getState()!==`running`||a||u(r.current()).includes(t))return;let n=r.submitAnswer(t,e.timer.snapshot().elapsedMs);if(!n)return;let i=e.score.snapshot().points,o=e.addScore(n.pointsDelta,{correct:n.correct,countable:!0,responseMs:n.responseMs}).points;e.recordLearning(n.learningEvent),a={selected:n.selected,correct:n.correct,pointsDelta:o-i},d(e),e.scheduler.after(h,()=>{r&&e.getState()===`running`&&(a=void 0,r.nextQuestion(e.timer.snapshot().elapsedMs),d(e))})}})},onStart(e){d(e)},onRender(e){d(e)},onPause(e){d(e)},onResume(e){d(e)},onFinish(e,t){d(t)},onEffect(e,t){let n=l(t);if(!n||a)return!1;if(e.kind===`eliminate-option`){let e=u(n),r=n.options.filter(t=>t!==n.answer&&!e.includes(t));return r.length<2?!1:(s={questionId:n.id,values:[...e,r[t.rng.int(0,r.length-1)]]},d(t),!0)}return e.kind===`extra-option`&&(c=t.timer.snapshot().elapsedMs+e.durationMs,d(t),!0)},onDestroy(){i?.destroy(),i=void 0,r=void 0}}});export{_ as default};