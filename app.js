const games=[
  {name:'苗片大摸底！',note:'',color:'#f7c86b',url:'https://fjungcinoti2001r-web.github.io/xiemiaomovie-quiz/'},
  {name:'测测你是谢苗宇宙里的谁？',note:'',color:'#f5a98c',url:'https://fjungcinoti2001r-web.github.io/xiemiao-quiz2026/'},
  {name:'合成大苗哥',note:'正常版，合到苗哥为通关',color:'#9ed59a',url:'https://fjungcinoti2001r-web.github.io/hechengdamiaoge/'},
  {name:'合成大苗哥',note:'雷霆版，合到苗哥为通关，不是真爱粉慎点！！！',color:'#f18b8b',url:'https://fjungcinoti2001r-web.github.io/hechengleitingdamiaoge/'},
  {name:'开心苗苗乐',note:'目前20w分视为通关',color:'#f2d36b',url:'https://fjungcinoti2001r-web.github.io/kaixinmiaomiaole/'},
  {name:'苗哥2048',note:'合到2048为通过',color:'#93cde6',url:'https://fjungcinoti2001r-web.github.io/miaoge2048/'},
  {name:'FLAPPY FURIOUS',note:'',color:'#b6a3df',url:'https://fjungcinoti2001r-web.github.io/flappyfurious/'},
  {name:'奇迹苗哥',note:'暂未上线',color:'#c9c9c9',url:''}
];
document.querySelector('#enterBtn').addEventListener('click',()=>{document.querySelector('#introScreen').style.display='none';document.querySelector('.page-shell').classList.add('visible')});
let current='all';
const grid=document.querySelector('#gameGrid');
function render(){const q=document.querySelector('#search').value.trim().toLowerCase();const list=games.filter(g=>g.name.toLowerCase().includes(q));grid.innerHTML=list.length?list.map(g=>`<article class="game-card ${g.url?'':'disabled-card'}" data-url="${g.url}"><div class="cover" style="background:${g.color}">${g.name}</div><div class="card-body"><div><h2>${g.name}</h2><div class="meta">${g.note||'网页游戏'} </div></div><button class="play" aria-label="打开${g.name}" ${g.url?'':'disabled'}>${g.url?'▶':'—'}</button></div></article>`).join(''):'<div class="empty">没有找到这个游戏，换个关键词试试吧～</div>'}
document.querySelectorAll('.tabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');current=btn.dataset.filter;render()}));
document.querySelector('#search').addEventListener('input',render);
grid.addEventListener('click',e=>{const card=e.target.closest('.game-card');if(!card)return;const url=card.dataset.url;if(url)window.open(url,'_blank');});
render();
