(this["webpackJsonpjayde-spa"]=this["webpackJsonpjayde-spa"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(23),i=a.n(s),r=a(1),o=a(4),l=a(2),d=a(3),j=a(36),p=a(25),b=a(15),h=a.p+"static/media/headstar10.fcbbe4c2.png",m=(a(73),a(41),a(102)),u=a.p+"static/media/pic1.26366610.jpg",O=a.p+"static/media/pic2.44c902bf.jpg",x=a.p+"static/media/pic3.53de3313.jpg",w=a.p+"static/media/pic4.a3c2de91.jpg",g=a.p+"static/media/pic5.c73ab99a.jpg",f=a.p+"static/media/pic6.9140d90a.jpg",v=a.p+"static/media/pic7.338ffe00.jpg",y=a.p+"static/media/pic8.bb33d266.jpg",k=a(6),F=function(){return Object(k.jsxs)(m.a,{fade:!0,children:[Object(k.jsx)(m.a.Item,{children:Object(k.jsx)("img",{className:"d-block w-100",src:u,alt:"First slide"})}),Object(k.jsx)(m.a.Item,{children:Object(k.jsx)("img",{className:"d-block w-100",src:O,alt:"Second slide"})}),Object(k.jsx)(m.a.Item,{children:Object(k.jsx)("img",{className:"d-block w-100",src:x,alt:"Second slide"})}),Object(k.jsx)(m.a.Item,{children:Object(k.jsx)("img",{className:"d-block w-100",src:w,alt:"Third slide"})}),Object(k.jsx)(m.a.Item,{children:Object(k.jsx)("img",{className:"d-block w-100",src:g,alt:"Third slide"})}),Object(k.jsx)(m.a.Item,{children:Object(k.jsx)("img",{className:"d-block w-100",src:f,alt:"Third slide"})}),Object(k.jsx)(m.a.Item,{children:Object(k.jsx)("img",{className:"d-block w-100",src:v,alt:"Third slide"})}),Object(k.jsx)(m.a.Item,{children:Object(k.jsx)("img",{className:"d-block w-100",src:y,alt:"Third slide"})})]})},S=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"HELLO"}),Object(k.jsx)(F,{})]})}}]),a}(n.Component),C=a.p+"static/media/eyeball.b62f76e1.png",N=(a.p,a.p+"static/media/ii3.324fc83f.png"),A=a.p+"static/media/ii2.36f14ff0.png",z=a.p+"static/media/ii1.7f307da2.png",I=a.p+"static/media/head.449bc456.png",M=a.p+"static/media/bgfill.321cace6.png",D=a.p+"static/media/crowpic10.a3187bc1.png",T=a.p+"static/media/foreground0.b36c48a4.png",B=a.p+"static/media/bricktexture0.3306dde5.png",E=function(){return Object(k.jsxs)(m.a,{fade:!0,children:[Object(k.jsx)(m.a.Item,{children:Object(k.jsx)("img",{className:"d-block w-100",src:C,alt:"First slide"})}),Object(k.jsx)(m.a.Item,{children:Object(k.jsx)("img",{className:"d-block w-100",src:I,alt:"Second slide"})}),Object(k.jsx)(m.a.Item,{children:Object(k.jsx)("img",{className:"d-block w-100",src:h,alt:"Second slide"})}),Object(k.jsx)(m.a.Item,{children:Object(k.jsx)("img",{className:"d-block w-100",src:N,alt:"Third slide"})})]})},L=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"ArtWorks"}),Object(k.jsx)("p",{children:"My name is Jayde Marie Bell and I create large scale murals, these are just some of my previous works:"}),Object(k.jsx)(E,{}),Object(k.jsx)("div",{className:"content"})]})}}]),a}(n.Component),W=a(12),H=a(22),J=a(58),R=a(55),q=a(56),G=a(30);var P=function(e){return Object(k.jsx)(R.a,{fluid:!0,children:Object(k.jsx)(q.a,{className:"justify-content-center",children:Object(k.jsx)(G.a,{md:8,children:e.children})})})},U=a(57),Y=a.n(U),K=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,c=t.name;n.setState(Object(W.a)({},c,a))},n.handleSubmit=function(e){e.preventDefault(),console.log(e.target),n.setState({disabled:!0}),Y.a.post("http://localhost:3030/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsx)(P,{children:Object(k.jsxs)(H.a,{onSubmit:this.handleSubmit,children:[Object(k.jsxs)(H.a.Group,{children:[Object(k.jsx)(H.a.Label,{htmlFor:"full-name",children:"Full Name"}),Object(k.jsx)(H.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(k.jsxs)(H.a.Group,{children:[Object(k.jsx)(H.a.Label,{htmlFor:"email",children:"Email"}),Object(k.jsx)(H.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})]}),Object(k.jsxs)(H.a.Group,{children:[Object(k.jsx)(H.a.Label,{htmlFor:"message",children:"Message"}),Object(k.jsx)(H.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})]}),Object(k.jsx)(J.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled,children:"Send"}),!0===this.state.emailSent&&Object(k.jsx)("p",{className:"d-inline success-msg",children:"Email Sent"}),!1===this.state.emailSent&&Object(k.jsx)("p",{className:"d-inline err-msg",children:"Email Not Sent"})]})})})}}]),a}(c.a.Component),Q=a(7),V=a(59),X={height:720},Z=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).sceneSetup=function(){var t=e.el.clientWidth,a=e.el.clientHeight;e.scene=new Q.m,e.camera=new Q.h(75,t/a,.1,1e3),e.camera.position.z=45,e.timeNow=Date.now(),e.controls=new V.a(e.camera,e.el),e.renderer=new Q.s,e.renderer.setSize(t,a),e.el.appendChild(e.renderer.domElement)},e.addCustomSceneObjects=function(){var t=(new Q.p).load(B);new Q.g({map:t});e.scene.background=t;var a=(new Q.p).load(M),n=new Q.i(45,45,4,4),c=(new Q.p).load(T),s=new Q.i(45,45,4,4),i=(new Q.p).load(D),r=new Q.i(45,45,4,4),o=(new Q.p).load(I),l=new Q.i(45,45,4,4),d=(new Q.p).load(h),j=new Q.i(45,45,4,4),p=new Q.g({map:a,depthTest:!1,transparent:!0}),b=new Q.g({map:c,depthTest:!1,transparent:!0}),m=new Q.g({map:i,depthTest:!1,transparent:!0}),u=new Q.g({map:o,depthTest:!1,transparent:!0}),O=new Q.g({map:d,depthTest:!1,transparent:!0});e.pln1=new Q.f(n,p),e.pln2=new Q.f(s,b),e.pln3=new Q.f(r,m),e.pln4=new Q.f(l,u),e.pln5=new Q.f(j,O),e.pln1.position.z=-5.3,e.pln2.position.z=-3.2,e.pln3.position.z=-1.1,e.pln4.position.z=-19.2,e.pln4.position.x=-59.2,e.pln5.position.z=-27.1,e.pln5.position.x=65.1,Array(5).fill().forEach(e.addstar),Array(5).fill().forEach(e.addstar2),e.scene.add(e.pln1),e.scene.add(e.pln2),e.scene.add(e.pln3),e.scene.add(e.pln4),e.scene.add(e.pln5)},e.addstar=function(){var t=(new Q.p).load(C),a=Q.e.randFloatSpread(60),n=new Q.k({size:a,map:t,depthTest:!1,transparent:!0});n.opacity=0;for(var c=new Q.a,s=[],i=0;i<500;i++){var r=2e3*Math.random()-1e3,o=2e3*Math.random()-1e3,l=2e3*Math.random()-1e3;s.push(r,o,l)}c.setAttribute("position",new Q.c(s,3)),e.star=new Q.j(c,n),e.scene.add(e.star)},e.addstar2=function(){var t=(new Q.p).load(N),a=Q.e.randFloatSpread(60),n=new Q.k({size:a,map:t,depthTest:!1,transparent:!0});n.opacity=0;for(var c=new Q.a,s=[],i=0;i<500;i++){var r=2e3*Math.random()-1e3,o=2e3*Math.random()-1e3,l=2e3*Math.random()-1e3;s.push(r,o,l)}c.setAttribute("position",new Q.c(s,3)),e.star=new Q.j(c,n),e.scene.add(e.star)},e.addstar3=function(){var t=(new Q.p).load(A),a=Q.e.randFloatSpread(60),n=new Q.k({size:a,map:t,depthTest:!1,transparent:!0});n.opacity=0;for(var c=new Q.a,s=[],i=0;i<500;i++){var r=2e3*Math.random()-250,o=2e3*Math.random()-250,l=2e3*Math.random()-250;s.push(r,o,l)}c.setAttribute("position",new Q.c(s,3)),e.star=new Q.j(c,n),e.scene.add(e.star)},e.addstar4=function(){var t=(new Q.p).load(z),a=Q.e.randFloatSpread(60),n=new Q.k({size:a,map:t,depthTest:!1,transparent:!0});n.opacity=0;for(var c=new Q.a,s=[],i=0;i<500;i++){var r=2e3*Math.random()-1e3,o=2e3*Math.random()-1e3,l=2e3*Math.random()-1e3;s.push(r,o,l)}c.setAttribute("position",new Q.c(s,3)),e.star=new Q.j(c,n),e.scene.add(e.star)},e.startAnimationLoop=function(){var t=e.timeNow,a=Math.abs(9e-6*(Date.now()-t));a>.1&&(e.pln1.position.z+=.0125,e.pln2.position.z+=.025,e.pln3.position.z+=.05,e.pln1.material.opacity-=5e-4,e.pln2.material.opacity-=.001,e.pln3.material.opacity-=.0015),e.camera.lookAt(e.scene.position);for(var n=0;n<e.scene.children.length;n++){var c=e.scene.children[n];c instanceof Q.j&&(c.rotation.y=a*(n<4?n+1:-(n+1)),c.material.opacity<=.9&&(c.material.opacity+=.001))}e.renderer.render(e.scene,e.camera),e.requestID=window.requestAnimationFrame(e.startAnimationLoop)},e.handleWindowResize=function(){var t=e.el.clientWidth,a=e.el.clientHeight;e.renderer.setSize(t,a),e.camera.aspect=t/a,e.camera.updateProjectionMatrix()},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.sceneSetup(),this.addCustomSceneObjects(),this.startAnimationLoop(),window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize),window.cancelAnimationFrame(this.requestID),this.controls.dispose()}},{key:"render",value:function(){var e=this;return Object(k.jsx)("div",{style:X,ref:function(t){return e.el=t}})}}]),a}(n.Component),$=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e={padding:10,margin:10,backgroundColor:this.props.bgcolor,color:this.props.color,display:"inline-block",fontFamily:"monospace",fontSize:32,textAlign:"center"};return Object(k.jsx)("div",{style:e,children:this.props.children})}}]),a}(c.a.Component),_=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(k.jsx)(p.a,{children:Object(k.jsxs)("div",{children:[Object(k.jsxs)("h1",{children:[Object(k.jsx)($,{bgcolor:"#805D93",color:"#333",children:"J"}),Object(k.jsx)($,{bgcolor:"#805D93",color:"#333",children:"A"}),Object(k.jsx)($,{bgcolor:"#805D93",color:"#333",children:"Y"}),Object(k.jsx)($,{bgcolor:"#805D93",color:"#333",children:"D"}),Object(k.jsx)($,{bgcolor:"#805D93",color:"#333",children:"E"}),Object(k.jsx)($,{bgcolor:"#F49FBC",color:"#333",children:"M"}),Object(k.jsx)($,{bgcolor:"#F49FBC",color:"#333",children:"A"}),Object(k.jsx)($,{bgcolor:"#F49FBC",color:"#333",children:"R"}),Object(k.jsx)($,{bgcolor:"#F49FBC",color:"#333",children:"I"}),Object(k.jsx)($,{bgcolor:"#F49FBC",color:"#333",children:"E"}),Object(k.jsx)($,{bgcolor:"#FFD3BA",color:"#333",children:"B"}),Object(k.jsx)($,{bgcolor:"#FFD3BA",color:"#333",children:"E"}),Object(k.jsx)($,{bgcolor:"#FFD3BA",color:"#333",children:"L"}),Object(k.jsx)($,{bgcolor:"#FFD3BA",color:"#333",children:"L"}),Object(k.jsx)($,{bgcolor:"#FFD3BA",color:"#333",children:"."}),Object(k.jsx)(j.SocialIcon,{bgColor:"#805D93",url:"https://www.facebook.com/jayde.m.bell"}),Object(k.jsx)(j.SocialIcon,{bgColor:"#F49FBC",url:"https://www.flickr.com/people/64792734@N04/"})]}),Object(k.jsxs)("ul",{className:"header",children:[Object(k.jsx)("li",{children:Object(k.jsx)(p.b,{to:"/",children:"Home"})}),Object(k.jsx)("li",{children:Object(k.jsx)(p.b,{to:"/artworks",children:"Artworks"})}),Object(k.jsx)("li",{children:Object(k.jsx)(p.b,{to:"/contact",children:"Contact"})}),Object(k.jsx)("li",{children:Object(k.jsx)(p.b,{to:"/threetest",children:"ThreeTest"})})]}),Object(k.jsxs)("div",{className:"content",children:[Object(k.jsx)(b.a,{exact:!0,path:"/",component:S}),Object(k.jsx)(b.a,{path:"/artworks",component:L}),Object(k.jsx)(b.a,{path:"/contact",component:K}),Object(k.jsx)(b.a,{path:"/threetest",component:Z})]})]})})}}]),a}(n.Component);a(99);i.a.render(Object(k.jsx)(_,{}),document.getElementById("root"))},41:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.30119823.chunk.js.map