import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{ae as g,a as l,w as y,ah as B,af as A,F as q,o as F,aj as b,b as R}from"./index-7iQxqR-J.js";import{V}from"./VAppBarNavIcon-ESKD41Jh.js";import"./VBtn-C94k85xh.js";document.getElementById("close").onmousedown=function(t){return t.preventDefault(),document.getElementById("info").style.display="none",!1};var C=3,k=20,D=5,N=1200,T=30,f=50,E=20,p=7,I=60;window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};var e,a,r,d,x,n={down:!1,button:1,x:0,y:0,px:0,py:0},h=function(t,i){this.x=t,this.y=i,this.px=t,this.py=i,this.vx=0,this.vy=0,this.pin_x=null,this.pin_y=null,this.constraints=[]};h.prototype.update=function(t){if(n.down){var i=this.x-n.x,s=this.y-n.y,o=Math.sqrt(i*i+s*s);n.button==1?o<k&&(this.px=this.x-(n.x-n.px)*1.8,this.py=this.y-(n.y-n.py)*1.8):o<D&&(this.constraints=[])}this.add_force(0,N),t*=t,nx=this.x+(this.x-this.px)*.99+this.vx/2*t,ny=this.y+(this.y-this.py)*.99+this.vy/2*t,this.px=this.x,this.py=this.y,this.x=nx,this.y=ny,this.vy=this.vx=0};h.prototype.draw=function(){if(this.constraints.length)for(var t=this.constraints.length;t--;)this.constraints[t].draw()};h.prototype.resolve_constraints=function(){if(this.pin_x!=null&&this.pin_y!=null){this.x=this.pin_x,this.y=this.pin_y;return}for(var t=this.constraints.length;t--;)this.constraints[t].resolve();this.x>d?this.x=2*d-this.x:1>this.x&&(this.x=2-this.x),this.y<1?this.y=2-this.y:this.y>x&&(this.y=2*x-this.y)};h.prototype.attach=function(t){this.constraints.push(new v(this,t))};h.prototype.remove_constraint=function(t){this.constraints.splice(this.constraints.indexOf(t),1)};h.prototype.add_force=function(t,i){this.vx+=t,this.vy+=i;var s=400;this.vx=~~(this.vx*s)/s,this.vy=~~(this.vy*s)/s};h.prototype.pin=function(t,i){this.pin_x=t,this.pin_y=i};var v=function(t,i){this.p1=t,this.p2=i,this.length=p};v.prototype.resolve=function(){var t=this.p1.x-this.p2.x,i=this.p1.y-this.p2.y,s=Math.sqrt(t*t+i*i),o=(this.length-s)/s;s>I&&this.p1.remove_constraint(this);var c=t*o*.5,u=i*o*.5;this.p1.x+=c,this.p1.y+=u,this.p2.x-=c,this.p2.y-=u};v.prototype.draw=function(){a.moveTo(this.p1.x,this.p1.y),a.lineTo(this.p2.x,this.p2.y)};var m=function(){this.points=[];for(var t=e.width/2-f*p/2,i=0;i<=T;i++)for(var s=0;s<=f;s++){var o=new h(t+s*p,E+i*p);s!=0&&o.attach(this.points[this.points.length-1]),i==0&&o.pin(o.x,o.y),i!=0&&o.attach(this.points[s+(i-1)*(f+1)]),this.points.push(o)}};m.prototype.update=function(){for(var t=C;t--;)for(var i=this.points.length;i--;)this.points[i].resolve_constraints();for(t=this.points.length;t--;)this.points[t].update(.016)};m.prototype.draw=function(){a.beginPath();for(var t=r.points.length;t--;)r.points[t].draw();a.stroke()};function w(){a.clearRect(0,0,e.width,e.height),r.update(),r.draw(),requestAnimFrame(w)}function $(){e.onmousedown=function(t){n.button=t.which,n.px=n.x,n.py=n.y;var i=e.getBoundingClientRect();n.x=t.clientX-i.left,n.y=t.clientY-i.top,n.down=!0,t.preventDefault()},e.onmouseup=function(t){n.down=!1,t.preventDefault()},e.onmousemove=function(t){n.px=n.x,n.py=n.y;var i=e.getBoundingClientRect();n.x=t.clientX-i.left,n.y=t.clientY-i.top,t.preventDefault()},e.oncontextmenu=function(t){t.preventDefault()},d=e.width-1,x=e.height-1,a.strokeStyle="#888",r=new m,w()}window.onload=function(){e=document.getElementById("c"),a=e.getContext("2d"),e.width=560,e.height=350,$()};const M={};function P(t,i,s,o,c,u){return F(),g(q,null,[l(B,{elevation:2},{prepend:y(()=>[l(V)]),default:y(()=>[l(b,null,{default:y(()=>i[0]||(i[0]=[R("Application Bar")])),_:1})]),_:1}),i[1]||(i[1]=A("canvas",{id:"c"},null,-1))],64)}const O=_(M,[["render",P]]);export{O as default};