import{a as e,l as t,n,r}from"./theme-CDw1W7NG.js";var i=10,a=10,o=[-3,-2,-1,1,2,3,4,-4];function s(e){let t=c(e.difficulty),{rng:n}=e,r=0,s=0,l=!1,u=e=>{r+=1;let i=t>=.5,a=i?20:10,s=i?2:1,c=i?4:3,u=i?`math.addition.within-20`:`math.addition.within-10`,d=n.int(s,a-s),f=n.int(s,a-d),p=d+f,m=new Set([p]),h=n.shuffle(o);for(let e of h){if(m.size>=c)break;let t=p+e;t>=1&&t<=a+2&&m.add(t)}for(;m.size<c;)m.add(n.int(1,a+2));return l=!1,{id:r,a:d,b:f,answer:p,options:n.shuffle(Array.from(m)),objectiveId:u,difficulty:t,issuedAtMs:Math.max(0,e)}},d=u(0);return{difficulty:t,current:()=>d,nextQuestion(e){return d=u(e),d},submitAnswer(e,t){if(l)return null;l=!0;let n=e===d.answer,r=Math.max(0,Math.round(t-d.issuedAtMs)),o=0;return n?(o=i+Math.min(s*2,a),s+=1):s=0,{question:d,selected:e,correct:n,pointsDelta:o,responseMs:r,learningEvent:{objectiveId:d.objectiveId,correct:n,difficulty:d.difficulty,responseMs:r}}}}}function c(e){return Number.isFinite(e)?Math.min(1,Math.max(0,e)):.5}function l(e){return e.toLowerCase().startsWith(`en`)?{scoreLabel:`Score`,timeLabel:`Time`,streakLabel:`Streak`,pausedTitle:`Paused`,pausedHint:`Resume to keep playing`,finishedTitle:`Time is up!`,accuracyLabel:`Accuracy`,good:[`Great!`,`Awesome!`,`Nice!`,`Super!`],wasText:`It was`,answerLabel:`Answer`}:{scoreLabel:`Puntos`,timeLabel:`Tiempo`,streakLabel:`Racha`,pausedTitle:`En pausa`,pausedHint:`Reanuda para seguir jugando`,finishedTitle:`¡Tiempo terminado!`,accuracyLabel:`Precisión`,good:[`¡Muy bien!`,`¡Genial!`,`¡Excelente!`,`¡Súper!`],wasText:`Era`,answerLabel:`Respuesta`}}function u(e){return[{bg:e.primaryContainer,edge:e.primary},{bg:e.secondaryContainer,edge:e.secondary},{bg:e.teal,edge:`#0f766e`},{bg:`#d97706`,edge:e.gold}]}function d(e,t){let n=e=>t?e:`none`;return`
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
.qs-opt { position: relative; min-height: 76px; border-radius: 22px; border: 2px solid var(--edge);
  border-bottom-width: 6px; background: var(--bg); color: #fff; font: inherit; font-size: 32px;
  font-weight: 700; cursor: pointer; touch-action: manipulation;
  transition: ${n(`transform 120ms ease, opacity 160ms ease`)}; }
.qs-opt:focus-visible { outline: 4px solid ${e.secondary}; outline-offset: 3px; }
.qs-opt:disabled { cursor: default; }
.qs-opt[data-state='dim'] { opacity: 0.4; }
.qs-opt[data-state='ok'] { --bg: ${e.success}; --edge: #15803d; animation: ${n(`qs-pop 360ms cubic-bezier(0.34, 1.56, 0.64, 1)`)}; }
.qs-opt[data-state='bad'] { --bg: ${e.error}; --edge: #7f0a0a; }
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
`}var f=`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c.5 3.2-1.6 5-3.2 6.7C7.3 10.3 6 12 6 14.5A6 6 0 0 0 18 14.5c0-2.6-1.3-4.6-2.6-6 .1 1.6-.6 2.8-1.8 3.3.6-3.5-.5-7.2-1.6-9.8Z"/></svg>`;function p(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.textContent=n),r}function m(e,t){e.classList.remove(t),e.offsetWidth,e.classList.add(t)}function h(e){let{root:t,locale:r,reducedMotion:i,showStats:a,signal:o,onAnswer:s}=e,c=l(r),h=n(t),g=u(h),_=p(`style`);_.textContent=d(h,!i);let v=p(`div`,`qs-root`),y=p(`div`,`qs-top`),b=p(`span`,`qs-chip`);b.innerHTML=f;let x=p(`span`,`qs-chip-num`);b.append(p(`span`,void 0,c.streakLabel),x),y.append(b);let S=p(`span`,`qs-chip-num`),C=p(`span`,`qs-chip-num`);if(a){let e=p(`div`,`qs-stats`),t=p(`span`,`qs-chip`);t.append(p(`span`,void 0,c.timeLabel),S);let n=p(`span`,`qs-chip`);n.append(p(`span`,void 0,c.scoreLabel),C),e.append(t,n),y.append(e)}let w=p(`div`,`qs-card`),T=p(`div`,`qs-eq`);T.setAttribute(`role`,`heading`),T.setAttribute(`aria-level`,`2`);let E=p(`span`,`qs-a`),D=p(`span`,`qs-b`),O=p(`span`,`qs-slot`,`?`);T.append(p(`span`),E,p(`span`,`qs-op`,`+`),D,p(`span`,`qs-rule`),O);let k=p(`p`,`qs-msg`);k.setAttribute(`aria-live`,`polite`),k.style.margin=`0`,w.append(T,k);let A=p(`div`,`qs-grid`),j=p(`div`,`qs-overlay`),M=p(`strong`),N=p(`span`);j.append(M,N),v.append(y,w,A,j),t.replaceChildren(_,v);let P=-1,F,I=[],L=0;return A.addEventListener(`click`,e=>{let t=e.target?.closest(`button[data-option]`);if(!t||t.disabled)return;let n=Number(t.dataset.option);Number.isFinite(n)&&s(n)},{signal:o}),window.addEventListener(`keydown`,e=>{let t=Number(e.key)-1,n=I[t];n!==void 0&&s(n)},{signal:o}),{render(e){let{question:t,feedback:n,score:r}=e;if(x.textContent=`x${r.streak}`,b.dataset.hot=String(r.streak>=3),a&&(S.textContent=`${Math.ceil(e.timer.remainingMs/1e3)}s`,C.textContent=String(r.points)),I=t.options,P!==t.id){P=t.id,E.textContent=String(t.a),D.textContent=String(t.b),T.setAttribute(`aria-label`,`${t.a} + ${t.b} = ?`),m(T,`qs-new`);let e=t.options.map((e,t)=>{let n=g[t%g.length]??g[0],r=p(`button`,`qs-opt`);r.type=`button`,r.dataset.option=String(e),r.style.setProperty(`--bg`,n.bg),r.style.setProperty(`--edge`,n.edge),r.setAttribute(`aria-label`,`${c.answerLabel} ${e}`);let i=p(`span`,`qs-key`,String(t+1));return i.setAttribute(`aria-hidden`,`true`),r.append(i,String(e)),r});A.replaceChildren(...e)}if(n!==F){if(F=n,n){let e=n.correct?`ok`:`bad`;O.textContent=String(t.answer),O.dataset.state=e,w.dataset.state=e,k.dataset.state=e,k.textContent=n.correct?`${c.good[L++%c.good.length]} +${n.pointsDelta}`:`${c.wasText} ${t.answer}`}else O.textContent=`?`,delete O.dataset.state,delete w.dataset.state,delete k.dataset.state,k.textContent=``}let i=e.lifecycle!==`running`||n!==void 0;for(let e of Array.from(A.children)){let r=e,a=Number(r.dataset.option);r.disabled=i,n?a===t.answer?r.dataset.state=`ok`:a===n.selected?r.dataset.state=`bad`:r.dataset.state=`dim`:delete r.dataset.state}if(a&&e.lifecycle===`paused`)j.style.display=`flex`,M.textContent=c.pausedTitle,N.textContent=c.pausedHint;else if(a&&e.lifecycle===`finished`){j.style.display=`flex`,M.textContent=c.finishedTitle;let e=Math.round((r.accuracy??0)*100);N.textContent=`${c.scoreLabel}: ${r.points} · ${c.accuracyLabel}: ${e}%`}else j.style.display=`none`},destroy(){t.replaceChildren()}}}var g=450,_=r(n=>{let r,i,a,o=e=>{r&&i&&i.render({lifecycle:e.getState(),timer:e.timer.snapshot(),score:e.score.snapshot(),question:r.current(),feedback:a})};return{durationMs:t,renderer:()=>e(),onInit(e){r=s({difficulty:e.session.difficulty,rng:e.rng}),i=h({root:e.surface,locale:e.session.locale,reducedMotion:e.settings.reducedMotion,showStats:!n.platformHud,signal:e.signal,onAnswer(t){if(!r||e.getState()!==`running`||a)return;let n=r.submitAnswer(t,e.timer.snapshot().elapsedMs);n&&(e.addScore(n.pointsDelta,{correct:n.correct,countable:!0}),e.recordLearning(n.learningEvent),a={selected:n.selected,correct:n.correct,pointsDelta:n.pointsDelta},o(e),e.scheduler.after(g,()=>{r&&e.getState()===`running`&&(a=void 0,r.nextQuestion(e.timer.snapshot().elapsedMs),o(e))}))}})},onStart(e){o(e)},onRender(e){o(e)},onPause(e){o(e)},onResume(e){o(e)},onFinish(e,t){o(t)},onDestroy(){i?.destroy(),i=void 0,r=void 0}}});export{_ as default};