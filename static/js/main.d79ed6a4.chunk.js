(this.webpackJsonpchampen=this.webpackJsonpchampen||[]).push([[0],{241:function(t){t.exports=JSON.parse('{"background":{"color":{"value":"#000000"},"position":"50% 50%","repeat":"no-repeat","size":"cover"},"fullScreen":{"enable":true,"zIndex":1},"interactivity":{"events":{"onClick":{"mode":"push"},"onHover":{"mode":"repulse"}},"modes":{"bubble":{"distance":400,"duration":2,"opacity":0.8,"size":40},"grab":{"distance":400}}},"particles":{"color":{"value":"#00586c"},"links":{"color":{"value":"#ffffff"},"distance":150,"opacity":0.4},"move":{"attract":{"rotate":{"x":600,"y":1200}},"enable":true,"path":{},"outModes":{"default":"destroy","bottom":"destroy","left":"destroy","right":"destroy","top":"destroy"},"speed":5},"number":{"density":{"enable":true},"value":0},"opacity":{"animation":{"speed":3,"minimumValue":0.1}},"size":{"value":{"min":0.1,"max":20},"animation":{"enable":true,"sync":true,"destroy":"max","minimumValue":0.1,"startValue":"min"}}},"emitters":{"autoPlay":true,"life":{},"rate":{"quantity":2,"delay":0.1},"size":{"mode":"percent","height":0,"width":100},"direction":"top","position":{"x":50,"y":100}}}')},252:function(t,e,n){},428:function(t,e,n){},441:function(t,e){},450:function(t,e){},468:function(t,e){},470:function(t,e){},486:function(t,e){},487:function(t,e){},546:function(t,e){},548:function(t,e){},580:function(t,e){},582:function(t,e){},583:function(t,e){},588:function(t,e){},590:function(t,e){},596:function(t,e){},598:function(t,e){},611:function(t,e){},623:function(t,e){},626:function(t,e){},631:function(t,e){},639:function(t,e){},716:function(t,e,n){"use strict";n.r(e);var a=n(29),i=n.n(a),o=n(238),s=n.n(o),u=(n(252),n(28)),c=n.n(u),p=n(239),r=n(9),l=n(10),y=n(91),b=n(16),m=n(15),d=n(240),f=n.n(d),h=n.p+"static/media/logo.8e041d9c.svg",v=(n(428),n(241)),x=n(129),j=n.n(x),w=[{constant:!0,inputs:[],name:"initialized",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isActive",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"initialTokens",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokensAvailable",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"RATE",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"goalReached",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"initialize",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"destroy",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"START",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"DAYS",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"raisedAmount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"buyTokens",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"CAP",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_tokenAddr",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"BoughtTokens",type:"event"}],O=n(0),k=n(245),g=n(24),M=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={account:""},a.Buyxoxo=a.Buyxoxo.bind(Object(y.a)(a)),a}return Object(l.a)(n,[{key:"componentWillMount",value:function(){this.loadBlockchainData()}},{key:"loadBlockchainData",value:function(){var t=Object(p.a)(c.a.mark((function t(){var e,n,a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new j.a(j.a.givenProvider||"http://localhost:8545"),t.next=3,e.eth.net.getNetworkType();case 3:return t.sent,n=window.ethereum,t.next=7,n.enable();case 7:return t.sent,t.next=10,e.eth.getAccounts();case 10:a=t.sent,this.setState({account:a[0]}),i=new e.eth.Contract(w,"0x59ebb321D1920ed6c5468ecF4AA16389393564Bb"),this.setState({xoxoido:i});case 14:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"Buyxoxo",value:function(){this.state.xoxoido.methods.buyTokens().send({from:this.state.account,value:this.amount.value*Math.pow(10,18)})}},{key:"render",value:function(){var t=this;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(f.a,{options:v}),Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)("img",{src:h,className:"App-logo",alt:"logo"}),Object(g.jsx)("p",{children:Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.Buyxoxo()},children:[Object(g.jsx)("input",{ref:function(e){t.amount=e},type:"text",id:"value",placeholder:"Testnet BNB Amount",required:!0}),Object(g.jsx)("input",{classname:"get-xoxo",type:"submit",value:"GET"})]})}),Object(g.jsx)("p",{children:"GET XOXO TOKEN NOW! 1 BNB = 3000 XOXO"}),Object(g.jsx)(O.b.Provider,{value:{color:"#2E9BB3",size:"3em",className:"react-icons"},children:Object(g.jsx)("div",{style:{flexDirection:"row"},children:Object(g.jsx)("a",{href:"https://t.me/CPFinance",target:"_blank",children:Object(g.jsx)(k.a,{})})})})]})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[716,1,2]]]);
//# sourceMappingURL=main.d79ed6a4.chunk.js.map