const $=s=>document.querySelector(s),track=(n,d)=>{try{if(window.gtag&&CFG.GA_ID)gtag('event',n,d||{})}catch(e){}};
/* info + routes */
$('#join').insertAdjacentHTML('beforebegin',
sec('about','What is AI Futures?','AI Futures brings together students, academia, researchers, professionals, businesses and technology enthusiasts to explore artificial intelligence through learning, competition, collaboration and practical innovation.',`<div class="gl">${kv([['Dates',V(CFG.DATES)],['Venue',V(CFG.VENUE)],['Host',CFG.COLLEGE],['Theme','Youth. Innovation. Opportunity.']])}</div>`)+
sec('programme','The summit programme','Six planned parts. Dates and details are to be announced until confirmed.',`<div class="grid">${PROG.map(p=>pn(p[0],p[1],st,p[2],p[3])).join('')}</div>`)+
sec('hackathon','The intercollegiate AI hackathon','The flagship challenge: teams from different colleges build practical solutions with AI.',`<div class="gl">${kv([['What it is','An innovation challenge where students solve real problems using AI.'],['Who can take part','Students from any discipline. Advanced programming is not required. Final eligibility: '+TBA+'.'],['How it works','Team-based problem solving on real-world problem statements, with AI-powered solutions.'],['Mentorship and evaluation','Subject to confirmation.'],['Registration','Not open yet.'],['Problem statements',TBA]])}<a class="lnk" href="#join" data-r="students">Explore the Hackathon</a></div>`)+
sec('competitions','Four student competitions','Alongside the hackathon. Rules and eligibility will be published once finalised.',`<div class="grid">${CP.map((c,i)=>`<article class="gl"><div class="sh sh${i+1}" aria-hidden="true"></div><h3>${c[0]}</h3><p>${c[1]}</p><details><summary>Rules and status</summary>${kv([['Rules',TBA],['Eligibility',TBA],['Registration','Not open yet'],['Announcements',TBA]])}</details><a class="lnk" href="#join" data-r="students">Register interest</a></article>`).join('')}</div><p><a class="lnk" href="#join" data-r="students">Explore All Competitions</a></p>`)+
sec('learning','Learning and knowledge','Three sessions for a broader audience.',`<div class="grid">${pn('Student–Business Workshop','Practical AI for everyday operations, business automation and productivity, and small and medium businesses. Instructor and curriculum: '+TBA+'.',st)}${pn('Open AI Session','Researchers, professionals, professors and students discuss AI developments, responsible AI and emerging opportunities. Open to everyone interested in AI, subject to final arrangements.',st)}<article class="gl"><h3>International Virtual Speaker Session</h3><p>An international perspective, delivered virtually.</p>${kv([['Speaker',TBA],['Country',TBA],['Organisation',TBA],['Designation',TBA],['Topic',TBA],['Date and time',TBA],['Format','Virtual, details '+TBA.toLowerCase()]])}</article></div>`)+
sec('who','Who should participate?','Choose the route that fits you.',`<div class="grid">${WHO.map(w=>pn(w[0],w[1],'','Choose this route',w[2])).join('')}</div>`)+
sec('partner','Partner with AI Futures','Sponsorship, technology partnerships, workshops, mentorship, speaker participation, demonstrations and industry engagement. No packages or audience figures are published.',`<div class="gl"><a class="lnk" href="#join" data-r="partner">Discuss a partnership</a></div>`)+
sec('news','More to be unveiled','Upcoming announcements. Nothing here is confirmed.',`<div class="grid">${['Special sessions','Industry interactions','Technology demonstrations','Additional activities','Guest appearances','Other summit experiences'].map(c=>pn(c,'',st)).join('')}${CFG.NEWS.map(n=>pn(n.t,n.d||'')).join('')}</div>`));
const nl=[...document.querySelectorAll('nav span a')],nio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)nl.forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+e.target.id))}),{rootMargin:'-40% 0px -50% 0px'});['about','programme','hackathon','competitions','join'].forEach(i=>nio.observe($('#'+i)));

let route='students';
function setRoute(r,scroll){route=r;const c=CFG.ROUTES[r];$('#rh').textContent=c.h;$('#rp').textContent=c.p;$('#sb').textContent=c.b;$('#ol').textContent=c.o;$('#el').textContent=c.e;$('#ml').style.display=c.m?'':'none';
$('#area').innerHTML='';c.a.forEach(x=>{const o=document.createElement('option');o.textContent=x;$('#area').append(o)});
document.querySelectorAll('.tabs .lnk').forEach(b=>b.setAttribute('aria-pressed',b.dataset.r==r));if(scroll)track('audience_path',{route:r})}
setRoute('students');
document.querySelectorAll('[data-r]').forEach(a=>a.addEventListener('click',()=>{setRoute(a.dataset.r,true);track(a.dataset.r+'_cta_click')}));
/* text layers */
const sc=$('#scroll'),T=[];
function mk(h,p,l,r,tag){const d=document.createElement('div');d.className='t'+(r?' r':'');d.innerHTML=(l?'<small><span></span></small>':'')+'<'+tag+'><span></span></'+tag+'><p></p>';if(l)d.querySelector('small span').textContent=l;d.querySelector(tag+' span').textContent=h;d.querySelector('p').textContent=p;sc.appendChild(d);return d}
const op=mk(CFG.OPENING.h,CFG.OPENING.p,'',0,'h1');op.classList.add('on','r');op.insertAdjacentHTML('beforeend','<p style="margin-top:12px"><a class="lnk s" href="#programme">Explore the programme</a></p>');CFG.CHAPTERS.forEach(c=>T.push(mk(c.h,c.p,c.l,c.r,'h2')));
const ticks=[...document.querySelectorAll('#prog i')];
const cv=$('#gl');let g2=null;try{g2=cv.getContext('webgl')||cv.getContext('experimental-webgl')}catch(e){}
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(!g2||!window.THREE){document.body.classList.add('nogl');T.forEach(t=>t.classList.add('on'));$('#final').classList.add('on')}
else{
const PORT=innerWidth<innerHeight,MOB=innerWidth<800,INK=0x171717,IV=0xF4F0E7,RED=0xB7FF35;
const R=new THREE.WebGLRenderer({canvas:cv,antialias:!MOB});R.setPixelRatio(Math.min(devicePixelRatio,MOB?1.5:2));R.shadowMap.enabled=true;R.shadowMap.type=THREE.PCFSoftShadowMap;
R.clippingPlanes=[new THREE.Plane(new THREE.Vector3(0,1,0),0)];
const S=new THREE.Scene();S.background=new THREE.Color(IV);S.fog=new THREE.Fog(IV,70,MOB?230:330);
const cam=new THREE.PerspectiveCamera(44,1,.5,900);
S.add(new THREE.HemisphereLight(0xF4F0E7,0x8a8478,.95));
const sun=new THREE.DirectionalLight(0xfff8ec,.95);sun.castShadow=true;const sz=MOB?1024:2048;sun.shadow.mapSize.set(sz,sz);
Object.assign(sun.shadow.camera,{left:-80,right:80,top:80,bottom:-80,near:1,far:300});sun.shadow.bias=-.0006;S.add(sun,sun.target);
const L=c=>new THREE.MeshLambertMaterial({color:c}),mInk=L(INK),mIv=L(IV),mRed=L(RED),mSw=L(0xE6DFCD),mB=new THREE.MeshBasicMaterial({color:RED});
function CT(k){const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d');
if(k==0){x.fillStyle='#EFE9DB';x.fillRect(0,0,64,64);x.fillStyle='#171717';x.fillRect(0,14,64,26);x.fillStyle='#EFE9DB';for(let i=0;i<4;i++)x.fillRect(i*16+7,14,2,26);x.fillStyle='rgba(23,23,23,.22)';x.fillRect(0,56,64,8)}
else{x.fillStyle='#2B2B2B';x.fillRect(0,0,64,64);x.strokeStyle='rgba(244,240,231,.4)';x.lineWidth=2;x.strokeRect(1,1,62,62);x.beginPath();x.moveTo(32,0);x.lineTo(32,64);x.stroke();x.fillStyle='rgba(244,240,231,.12)';x.beginPath();x.moveTo(4,4);x.lineTo(28,4);x.lineTo(4,40);x.fill()}
const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=4;return t}
const W=[0,1].map(k=>new THREE.MeshLambertMaterial({map:CT(k)}));
const sh=o=>{o.castShadow=o.receiveShadow=true;return o},at=(o,x,y,z)=>{o.position.set(x,y,z);return o};
function uvs(g,rx,ry){if(rx){const u=g.attributes.uv;for(let i=0;i<u.count;i++)u.setXY(i,u.getX(i)*rx,u.getY(i)*ry)}}
function B(w,h,d,m,rx,ry){const g=new THREE.BoxGeometry(w,h,d);g.translate(0,h/2,0);uvs(g,rx,ry);return sh(new THREE.Mesh(g,m))}
function C(rt,rb,h,seg,m,ry){const g=new THREE.CylinderGeometry(rt,rb,h,seg);g.translate(0,h/2,0);uvs(g,Math.max(2,Math.round(rb*2.4)),ry||Math.round(h/3.6));return sh(new THREE.Mesh(g,m))}
function Tor(r,t,m,sy){const o=sh(new THREE.Mesh(new THREE.TorusGeometry(r,t,6,28),m));o.rotation.x=Math.PI/2;return o}
let seed=7;const rnd=()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
function roof(g,w,h){for(let i=0,n=1+(rnd()*2|0);i<n;i++)g.add(at(B(1+rnd()*1.6,.8+rnd()*1.4,1+rnd()*1.6,mInk),(rnd()-.5)*w*.4,h,(rnd()-.5)*w*.4));
if(rnd()<.6){const d=sh(new THREE.Mesh(new THREE.SphereGeometry(1.3,12,6,0,6.283,0,1.4),mIv));d.position.set(w*.2,h+.9,w*.1);d.rotation.x=-.6;g.add(d,at(B(.14,.9,.14,mInk),w*.2,h,w*.1))}}
function bld(kind,w,h,s){const g=new THREE.Group();let H=h;
if(kind==0){let y=0;[.5,.3,.2].forEach((f,i)=>{const r=w/2*(1-.26*i),th=h*f;g.add(at(C(r*.88,r,th,8,i%2?W[1]:W[0]),0,y,0));y+=th;g.add(at(C(r+.5,r+.5,.5,8,mInk),0,y,0));y+=.5});
g.add(at(sh(new THREE.Mesh(new THREE.ConeGeometry(.35,h*.2,6),mRed)),0,y+h*.1,0));H=y+h*.2;roof(g,w*.4,y)}
else if(kind==1){g.add(C(w*.4,w*.5,h,14,W[1]));[.3,.62,.9].forEach((f,i)=>g.add(at(Tor(w*.58,i==1?.18:.4,i==1?mRed:(i?mInk:mIv)),0,h*f,0)));g.add(at(C(w*.55,w*.5,1.2,14,mInk),0,h,0));H=h+1.2;roof(g,w*.5,h+1.2)}
else if(kind==2){const a=h*.62;g.add(B(w,a,w*.8,W[0],Math.max(2,Math.round(w/3)),Math.round(a/3.6)));g.add(at(B(w*1.35,h*.38,w*.8,W[1],Math.round(w/2.4),Math.round(h*.38/3.4)),s*w*.3,a,0));
g.add(at(B(.7,a,.7,mInk),s*w*.6,0,0));for(let i=0;i<4;i++)g.add(at(B(.18,a,1.1,mInk),-w/2+i*w/3,0,w*.45));g.add(at(B(w*.9,.5,w*.7,mRed),s*w*.3,h+.01,0));roof(g,w,h+.5)}
else if(kind==3){const bh=6;g.add(C(w/2,w/2,bh,16,W[0]));const d=sh(new THREE.Mesh(new THREE.SphereGeometry(w/2,24,10,0,6.283,0,1.571),mIv));d.position.y=bh;g.add(d);
g.add(at(Tor(w/2,.22,mInk),0,bh,0));g.add(at(Tor(w/2*.8,.1,mRed),0,bh+w/2*.55,0));for(let i=0;i<3;i++){const r=sh(new THREE.Mesh(new THREE.TorusGeometry(w/2*.96,.07,4,28,Math.PI),mInk));r.rotation.y=i*1.05;r.position.y=bh;g.add(r)}
g.add(at(B(.14,3,.14,mInk),0,bh+w/2,0));g.add(at(B(w*.5,2.4,.1,mB),0,2.2,w*.5+.05));H=bh+w/2+3}
else{const q=w/2;for(const x of[-q,q])for(const z of[-q,q])g.add(at(B(.5,h,.5,mInk),x,0,z));[.33,.66,1].forEach(f=>{g.add(at(B(w,.4,.4,mInk),0,h*f-.4,q));g.add(at(B(w,.4,.4,mInk),0,h*f-.4,-q))});
g.add(at(B(w*.7,h*.45,w*.7,W[0],Math.round(w/4),Math.round(h*.45/3.6)),0,0,0));g.add(at(B(w*1.7,.5,.5,mInk),w*.3,h,0));g.add(at(B(.12,2.2,.12,mRed),w*.9,h-2.2,0));g.add(at(B(.8,.8,.8,mRed),w*.9,h-3,0));H=h+.5}
return{g,h:H}}
/* district plan */
const bl=[],city=new THREE.Group();S.add(city);const XS=MOB?[-36,-14,14,36]:[-58,-36,-14,14,36,58],plin=new THREE.Group();city.add(plin);
for(let k=2;k>=-7;k--){if(k==-3||k==-4)continue;const cz=k*22;for(const cx of XS){
const p=B(17.6,.35,17.6,mSw);p.position.set(cx,0,cz);p.castShadow=false;plin.add(p);const far=Math.abs(cx)>30,s=cx>0?-1:1;
const set=k>=0?[3,0,1,3]:k>=-2?[4,2,4,2]:[0,1,2,1];
for(const[lx,lz]of[[-4.2,-4.2],[4.2,-4.2],[-4.2,4.2],[4.2,4.2]]){let kind=set[(lx>0?1:0)+(lz>0?2:0)];if(far&&kind==3)kind=1;
let h=kind==3?6:kind==4?(16+rnd()*10):(20+rnd()*(far?48:26))+(k==-2||k==-5?12:0);const w=6.4+rnd()*.8;
const o=bld(kind,w,h,s);o.g.position.set(cx+lx,0,cz+lz);city.add(o.g);bl.push({g:o.g,h:o.h+4,t0:.03+Math.hypot(cx,cz-20)/260*.27,dur:.05+h/45*.04})}}}
/* final structure: tilted obelisk with ring */
const fin=new THREE.Group();fin.add(C(7,9,52,6,mInk,1));fin.add(at(Tor(11,.5,mRed),0,38,0));fin.add(at(Tor(12.5,.35,mIv),0,22,0));fin.add(at(B(5,6,.5,mRed),0,14,8.3));fin.add(at(B(4.2,5.2,.7,mInk),0,14,8.35));fin.position.set(0,0,-152);city.add(fin);bl.push({g:fin,h:58,t0:.2,dur:.14});
const far=new THREE.Group(),IM=new THREE.InstancedMesh(new THREE.CylinderGeometry(.5,.7,1,6),mInk,MOB?110:240),mx=new THREE.Matrix4();
for(let i=0;i<IM.count;i++){let x,z;do{x=(rnd()-.5)*620;z=60-rnd()*430}while(Math.abs(x)<110&&z>-190);const h=30+rnd()*105,w=8+rnd()*14;mx.compose(new THREE.Vector3(x,h/2,z),new THREE.Quaternion(),new THREE.Vector3(w,h,w));IM.setMatrixAt(i,mx)}far.add(IM);S.add(far);
const gr=new THREE.Mesh(new THREE.PlaneGeometry(2400,2400),mIv);gr.rotation.x=-Math.PI/2;gr.receiveShadow=true;S.add(gr);
function RT(av){const c=document.createElement('canvas');c.width=64;c.height=128;const x=c.getContext('2d');x.fillStyle='#D8D1BF';x.fillRect(0,0,64,128);x.fillStyle='#171717';if(av){x.fillRect(30,12,4,40);x.fillRect(30,76,4,40)}x.fillRect(0,0,3,128);x.fillRect(61,0,3,128);const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;return t}
const roads=new THREE.Group();S.add(roads);
function road(w,l,x,z,rot,av){const t=RT(av);t.repeat.set(1,l/14);const m=new THREE.Mesh(new THREE.PlaneGeometry(w,l),new THREE.MeshLambertMaterial({map:t,polygonOffset:true,polygonOffsetFactor:-1}));m.rotation.x=-Math.PI/2;m.rotation.z=rot||0;m.position.set(x,.04,z);m.receiveShadow=true;roads.add(m);return m}
const ave=road(12,240,0,-45,0,true);for(const x of[-25,25,-47,47,-69,69])road(6,240,x,-45,0,false);
const cs=[];for(let k=2;k>=-8;k--){if(k==-3||k==-4)continue;cs.push(road(6,160,0,k*22+11,Math.PI/2,false).position.z)}
const det=new THREE.Group();S.add(det);
const gp=[];for(const x of[-6,6,-22,-28,22,28])gp.push(x,.1,70,x,.1,-170);for(const z of cs)gp.push(-110,.1,z-3,110,.1,z-3,-110,.1,z+3,110,.1,z+3);
const gg=new THREE.BufferGeometry();gg.setAttribute('position',new THREE.Float32BufferAttribute(gp,3));const gm=new THREE.LineBasicMaterial({color:INK,transparent:true,opacity:0}),grid=new THREE.LineSegments(gg,gm);S.add(grid);
function lamp(x,z){const g=new THREE.Group();g.add(B(.25,6.5,.25,mInk));g.add(at(Tor(.5,.1,mRed),-Math.sign(x)*.7,6.5,0));g.position.set(x,.35,z);det.add(g)}
function tree(x,z){const g=new THREE.Group();g.add(B(.3,2.2,.3,mInk));const c=sh(new THREE.Mesh(new THREE.ConeGeometry(1.1,3.4,6),mInk));c.position.y=3.6;g.add(c);g.position.set(x,.35,z);det.add(g)}
for(let z=30;z>-56;z-=14){lamp(6.4,z);lamp(-6.4,z-7);tree(6.6,z-7);tree(-6.6,z)}
/* plaza */
const plz=new THREE.Group();S.add(plz);const pc=document.createElement('canvas');pc.width=pc.height=64;const px=pc.getContext('2d');px.fillStyle='#E6DFCD';px.fillRect(0,0,64,64);px.strokeStyle='#171717';px.lineWidth=2;px.strokeRect(0,0,64,64);
const pt=new THREE.CanvasTexture(pc);pt.wrapS=pt.wrapT=THREE.RepeatWrapping;pt.repeat.set(30,22);
const pv=new THREE.Mesh(new THREE.PlaneGeometry(120,44),new THREE.MeshLambertMaterial({map:pt,polygonOffset:true,polygonOffsetFactor:-3}));pv.rotation.x=-Math.PI/2;pv.position.set(0,.08,-77);pv.receiveShadow=true;plz.add(pv);
for(let i=0;i<4;i++){const c=sh(new THREE.Mesh(new THREE.CylinderGeometry(9-i*1.8,9.2-i*1.8,.4,40),i%2?mIv:mInk));c.position.set(0,.3+i*.4,-77);plz.add(c)}
plz.add(at(C(.8,1.6,20,8,mInk,1),0,2,-77));for(const y of[8,14,20])plz.add(at(Tor(2.4-(y-8)*.08,.18,y==14?mRed:mIv),0,y,-77));
for(let i=0;i<14;i++){const a=i/14*Math.PI*2;plz.add(at(B(2.6,.5,.8,i%3?mIv:mRed),Math.cos(a)*14,0,-77+Math.sin(a)*14)).rotation.y=-a;
const s2=at(B(.3,2,.3,mInk),Math.cos(a)*17,0,-77+Math.sin(a)*17);plz.add(s2)}
plz.add(at(B(14,5,.5,mInk),0,3,-100),at(B(13,4,.1,mB),0,3.5,-99.7));
/* ramp, skybridges, terminal */
const rb=new THREE.Group();S.add(rb);const rp=B(5,.6,25.2,mInk);rp.position.set(0,7,-107.5);rp.rotation.x=Math.atan(14/21);rb.add(rp);
rb.add(at(B(5,.6,26,mInk),0,13.7,-131));for(const z of[-122,-130,-138])rb.add(at(C(.4,.5,13.7,8,mInk,1),0,0,z));
for(const[z,y]of[[-11,27],[-33,21]]){const t=sh(new THREE.Mesh(new THREE.CylinderGeometry(.9,.9,15,10),mInk));t.rotation.z=Math.PI/2;t.position.set(0,y,z);rb.add(t,at(B(14,.25,.4,mIv),0,y+.2,z+.8))}
const term=at(C(.5,.6,1.6,8,mInk,1),3,13.9,-143);rb.add(term);const scr=new THREE.Mesh(new THREE.CircleGeometry(.4,16),mB);scr.position.set(3,15.9,-143);scr.rotation.x=-1.2;rb.add(scr);
const ring=new THREE.Mesh(new THREE.RingGeometry(1.6,1.8,40),mB);ring.rotation.x=-Math.PI/2;S.add(ring);
/* mascot: hovering explorer, built from lathed and spherical forms */
const M=new THREE.Group(),sp=(r,m,sx,sy,sz,x,y,z)=>{const o=sh(new THREE.Mesh(new THREE.SphereGeometry(r,20,14),m));o.scale.set(sx,sy,sz);o.position.set(x,y,z);return o};
M.add(sp(.78,mInk,1,1.2,.92,0,1.55,0));M.add(at(Tor(.8,.09,mIv),0,1.25,0));M.add(sp(.17,mB,1,1,1,0,1.75,.7));
const head=new THREE.Group();head.position.y=2.75;head.add(sp(.66,mInk,1.12,.92,1.02,0,0,0));head.add(sp(.52,mIv,1,.55,.45,0,.04,.46));
const eL=sp(.09,mB,1,1.5,.4,-.2,.06,.7),eR=sp(.09,mB,1,1.5,.4,.2,.06,.7);head.add(eL,eR);
for(const s of[-1,1]){const e=Tor(.2,.06,mIv);e.rotation.set(0,Math.PI/2,0);e.position.set(s*.74,0,0);head.add(e)}
const fn=sh(new THREE.Mesh(new THREE.ConeGeometry(.14,.7,4),mRed));fn.position.set(0,.72,-.2);fn.rotation.x=-.4;fn.scale.z=.4;head.add(fn);M.add(head);
const legs=[-1,1].map(s=>{const g=new THREE.Group();g.position.set(s*.34,.8,0);g.add(at(sh(new THREE.Mesh(new THREE.CylinderGeometry(.1,.16,.72,10),mInk)),0,-.36,0));g.add(sp(.24,mIv,1,.5,1.7,0,-.72,.12));M.add(g);return g});
const arms=[-1,1].map(s=>{const g=new THREE.Group();g.position.set(s*.9,2.0,0);g.add(sp(.15,mRed,1,1,1,0,0,0));g.add(at(sh(new THREE.Mesh(new THREE.CylinderGeometry(.07,.1,.75,10),mInk)),0,-.4,0));g.add(sp(.16,mIv,1,1,1,0,-.85,0));M.add(g);return g});
M.scale.setScalar(1.2);S.add(M);
const path=new THREE.CatmullRomCurve3([[0,0,30],[0,0,-20],[0,0,-77],[0,0,-97],[0,7,-107.5],[0,14,-118],[0,14,-142]].map(a=>new THREE.Vector3(...a)),false,'centripetal'),PL=path.getLength();
const ss=(a,b,x)=>{x=Math.min(1,Math.max(0,(x-a)/(b-a)));return x*x*(3-2*x)},cl=(x,a,b)=>Math.min(b,Math.max(a,x));
function ik(K,p,sm){if(p<=K[0][0])return K[0].slice(1);for(let i=0;i<K.length-1;i++){const a=K[i],b=K[i+1];if(p<=b[0]){let t=cl((p-a[0])/(b[0]-a[0]),0,1);if(sm)t=t*t*(3-2*t);return a.slice(1).map((v,j)=>v+(b[j+1]-v)*t)}}return K[K.length-1].slice(1)}
const UK=[[0,0],[.06,0],[.14,.04],[.32,.2],[.52,.45],[.6,.607],[.68,.607],[.84,.864],[.93,1],[1,1]];
const CK=[[0,9,4.5,20,3],[.14,7,4.5,15,3],[.32,3,2.8,9,2.5],[.5,-4,3.6,9,2.8],[.6,0,12,30,3],[.72,16,20,26,6],[.8,28,30,36,8],[.88,9,5,13,3],[.95,0,2.3,7,2.6],[1,0,1.8,5,2.6]];
gsap.registerPlugin(ScrollTrigger);const st={p:0};
gsap.to(st,{p:1,ease:'none',scrollTrigger:{trigger:sc,start:'top top',end:'bottom bottom',scrub:RM?true:.8}});
let cc=-1,sd=0,P=0,pu=0,ph=0,amp=0,last=performance.now(),cp=new THREE.Vector3(10,6,58),cl2=new THREE.Vector3(0,3,25),mc=-1,part=false;
function resize(){R.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.fov=innerWidth<innerHeight?62:44;cam.updateProjectionMatrix()}addEventListener('resize',resize);resize();
const vis=new Set(),io=new IntersectionObserver(es=>{es.forEach(e=>e.isIntersecting?vis.add(e.target):vis.delete(e.target));part=vis.size>0},{rootMargin:'0px 0px -35% 0px'});document.querySelectorAll('.pg').forEach(s=>io.observe(s));
const qp=new THREE.Vector3(),tg=new THREE.Vector3();
function loop(now){requestAnimationFrame(loop);const dt=Math.min(.05,(now-last)/1000);last=now;const t=now/1000;
P+=(st.p-P)*(RM?1:1-Math.exp(-dt*6));
const rr=ss(.03,.09,P);gm.opacity=ss(0,.025,P)*(1-rr)*.55;roads.children.forEach(m=>m.scale.x=Math.max(.001,rr));
plin.visible=rr>.6;plin.position.y=-.4*(1-ss(.05,.1,P));
det.position.y=-8*(1-ss(.12,.2,P));det.visible=P>.12;plz.position.y=-30*(1-ss(.14,.26,P));plz.visible=P>.14;rb.position.y=-30*(1-ss(.16,.28,P));rb.visible=P>.16;far.position.y=-130*(1-ss(.18,.4,P));far.visible=P>.18;
for(const b of bl){const r=cl((P-b.t0)/b.dur,0,1),e=1-Math.pow(1-r,3);b.g.visible=r>0;b.g.position.y=-b.h*(1-e)}
const u=ik(UK,P,false)[0],p0=path.getPointAt(u),tn=path.getTangentAt(Math.min(.999,u)),spd=Math.abs(u-pu)*PL/Math.max(dt,.001);pu=u;amp+=(cl(spd/4,0,1)-amp)*.15;ph+=spd*dt*1.9;
M.position.copy(p0);M.rotation.y=Math.atan2(tn.x,tn.z)+(1-amp)*Math.sin(t*.6)*.3+(P>.9?0:0);
const sw=Math.sin(ph)*.7*amp;legs[0].rotation.x=sw;legs[1].rotation.x=-sw;arms[0].rotation.x=-sw*.9;arms[1].rotation.x=sw*.9;
M.position.y+=Math.abs(Math.sin(ph))*.12*amp+(1-amp)*Math.sin(t*2)*.05;
head.rotation.y=(1-amp)*Math.sin(t*.8)*.55;head.rotation.x=P>.88?-.2:(P>.5&&P<.66&&amp<.3?.12*Math.sin(t*2):0);arms[1].rotation.z=(P>.52&&P<.66&&amp<.3)?-1.6+Math.sin(t*5)*.25:0;
eL.scale.y=eR.scale.y=(t%4<.12)?.2:1.5;
const scan=P>.9;ring.visible=P<.06||scan;if(P<.06){const q=(t*.8)%1;ring.position.set(0,.1,30);ring.scale.setScalar(.5+q*6)}else if(scan){const q=(t*1.3)%1;ring.position.set(0,14.1,-146);ring.scale.setScalar(.5+q*1.6)}scr.visible=!scan||(t*6%2<1.4);
const[ox,oy,oz,ly]=ik(CK,P,true),k=1;tg.set(M.position.x+(PORT?cl(ox,-2.5,2.5):ox),M.position.y+oy*(PORT?1.2:1),M.position.z+oz*(PORT?1.3:1));
const f=RM?1:1-Math.exp(-dt*3.2);cp.lerp(tg,f);sd+=((PORT?0:(cc<0||CFG.CHAPTERS[cc].r?3.5:-3.5))-sd)*.04;qp.set(M.position.x+sd,M.position.y+ly-(PORT?2.2:0),M.position.z-5);cl2.lerp(qp,f);cam.position.copy(cp);cam.lookAt(cl2);
sun.position.set(M.position.x+40,M.position.y+70,M.position.z+25);sun.target.position.copy(M.position);R.render(S,cam);
const rg=CFG.RANGES;let c=-1;for(let i=0;i<6;i++)if(P>=rg[i]&&P<rg[i+1])c=i;if(P>=1)c=5;
cc=c;op.classList.toggle('on',P<rg[0]&&!part);T.forEach((el,i)=>el.classList.toggle('on',i==c&&P<.955&&!part));ticks.forEach((tk,i)=>tk.classList.toggle('on',i==c));
$('#final').classList.toggle('on',P>=.955&&!part);if(c>mc){mc=c;track('chapter_progress',{chapter:c+1,mobile:MOB})}}
requestAnimationFrame(loop)}
$('#replay').onclick=e=>{e.preventDefault();scrollTo({top:0,behavior:RM?'auto':'smooth'})};
/* form */
const F=$('#f'),stt=$('#status');let started=false;
F.addEventListener('input',()=>{if(!started){started=true;track('form_start',{route})}});
F.addEventListener('submit',async e=>{e.preventDefault();let ok=true;const d=Object.fromEntries(new FormData(F));d.route=route;
[['name',d.name.trim().length>1,'Enter your name.'],['org',d.org.trim().length>1,'Enter this field.'],['email',/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email),'Enter a valid email.']].forEach(([n,v,m])=>{const el=F.elements[n];el.setAttribute('aria-invalid',!v);el.nextElementSibling.textContent=v?'':m;if(!v)ok=false});
if(!ok){stt.textContent='Fix the highlighted fields and send again.';return}
if(CFG.FORM_ENDPOINT){try{const r=await fetch(CFG.FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)});if(r.ok){stt.textContent='Your message was sent.';F.reset();track('form_submit_success',{route});return}stt.textContent='The form service returned an error ('+r.status+'). Try again or email us.'}catch(x){stt.textContent='Could not reach the form service. Try again or email us.'}return}
if(CFG.CONTACT_EMAIL){location.href='mailto:'+CFG.CONTACT_EMAIL+'?subject='+encodeURIComponent('AI Futures ('+route+'): '+d.area)+'&body='+encodeURIComponent((d.msg||'')+'\n\n'+d.name+', '+d.org+'\n'+d.email);stt.textContent='Your email app should open with this filled in. Nothing is sent until you send it there.'}
else stt.textContent='This form is not connected yet. Set FORM_ENDPOINT or CONTACT_EMAIL in CFG.'});
