(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{143:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return f}));var r=n(1),a=n.n(r),c=n(4),i=n(35),o=n(68),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),l=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),d=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),u=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){var i,o,s,l,d,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>3&&void 0!==u[3]?u[3]:"recent",o=u.length>4&&void 0!==u[4]&&u[4],s=!1,l={slot:0,confirmations:0,err:null},d=0,e.next=7,new Promise(function(){var e=Object(c.a)(a.a.mark((function e(u,b){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{d=r.onSignature(t,(function(e,t){s=!0,l={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(l)):(console.log("Resolved via websocket",e),u(l))}),i)}catch(p){s=!0,console.error("WS error in setup",t,p)}case 2:if(s||!o){e.next=8;break}return Object(c.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,l=n&&n.value[0],s||(l?l.err?(console.log("REST error for",t,l),s=!0,b(l.err)):l.confirmations?(console.log("REST confirmation for",t,l),s=!0,u(l)):console.log("REST no confirmations for",t,l):console.log("REST null result for",t,l)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,h(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return l=e.sent,r._signatureSubscriptions[d]&&r.removeSignatureListener(d),s=!0,console.log("Returning status",l),e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(t,n,r,a){var c=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:c,programId:l,data:e.from([])})},p=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){var c,o,l,d,u,b,p,j,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,c);case 3:return o=e.sent,l=new i.a(o,s,c),d={id:n,connection:r,program:l},e.next=8,l.account.candyMachine.fetch(n);case 8:return u=e.sent,b=u.data.itemsAvailable.toNumber(),p=u.itemsRedeemed.toNumber(),j=b-p,m=u.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:b,itemsRedeemed:p,itemsRemaining:j,goLiveDate:m}),e.abrupt("return",{candyMachine:d,itemsAvailable:b,itemsRedeemed:p,itemsRemaining:j,goLiveDate:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer(),e.from("edition")],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],l);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){var s,l,u,p,g,f,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,x(r,s.publicKey);case 3:return l=e.sent,u=t.connection,p=t.program,e.next=7,m(s.publicKey);case 7:return g=e.sent,e.next=10,j(s.publicKey);case 10:return f=e.sent,e.next=13,u.getMinimumBalanceForRentExemption(o.a.span);case 13:return h=e.sent,e.next=16,p.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:c,mint:s.publicKey,metadata:g,masterEdition:f,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:d,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:h,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),b(l,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,l,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},h=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},377:function(e,t,n){},378:function(e,t,n){},402:function(e,t){},404:function(e,t){},420:function(e,t){},421:function(e,t){},450:function(e,t){},505:function(e,t){},507:function(e,t){},521:function(e,t){},525:function(e,t){},527:function(e,t){},537:function(e,t){},539:function(e,t){},566:function(e,t){},568:function(e,t){},573:function(e,t){},575:function(e,t){},581:function(e,t){},583:function(e,t){},595:function(e,t){},598:function(e,t){},609:function(e,t){},610:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(32),i=n.n(c),o=(n(377),n(378),n(641)),s=n(644),l=n(642),d=n(645),u=n(647),b=n(166),p=n.n(b),j=n(612),m=n(646),x=n(8),g=Object(o.a)((function(e){return{appbar:{backgroundColor:"#fed229",opacity:1,borderTop:0,borderLeft:0,borderRight:0,borderColor:"#000000"},appbarContainer:{paddingLeft:0,paddingRight:0},divFlex:{flexGrow:1},link:{margin:e.spacing(1,1.5),flexGrow:1,fontWeight:"500"},logo:{padding:e.spacing(2,0,1),justifyContent:"center"}}})),f=function(){var e=g();return Object(x.jsx)(l.a,{elevation:1,variant:"outlined",position:"sticky",className:e.appbar,children:Object(x.jsx)(s.a,{maxWidth:"md",className:e.appbarContainer,children:Object(x.jsxs)(d.a,{display:"flex",flexDirection:"row",children:[Object(x.jsx)(m.a,{href:"https://foreverdao.org",className:e.logo,children:Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAqCAYAAAD75qYVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFBRDFEMDk4QkQyQzExRUNBNDkyQUM2NDkyRjU2N0JGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFBRDFEMDk5QkQyQzExRUNBNDkyQUM2NDkyRjU2N0JGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUFEMUQwOTZCRDJDMTFFQ0E0OTJBQzY0OTJGNTY3QkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUFEMUQwOTdCRDJDMTFFQ0E0OTJBQzY0OTJGNTY3QkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5hXiSeAAARgElEQVR42uxb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",alt:"Godroll Logo"})}),Object(x.jsxs)(j.a,{variant:"h6",component:"div",className:e.divFlex,children:[Object(x.jsx)(m.a,{variant:"subtitle1",underline:"none",color:"textPrimary",href:"#",className:e.link,children:"CHARITY"}),Object(x.jsx)(m.a,{variant:"subtitle1",color:"textPrimary",href:"https://shapes.foreverdao.org",className:e.link,children:"SHAPES"}),Object(x.jsx)(m.a,{variant:"subtitle1",underline:"none",color:"textPrimary",href:"#",className:e.link,children:"COINS"})]}),Object(x.jsx)(m.a,{href:"https://twitter.com/foreverdao_",children:Object(x.jsx)(u.a,{size:"large","aria-label":"show more",color:"primary",children:Object(x.jsx)(p.a,{})})})]})})})},h=n(56),O=n(648),v=Object(o.a)((function(e){var t;return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},heroContent:{padding:e.spacing(4,0,4)},heroText:{fontWeight:900},divFlex:{flexGrow:1},link:{margin:e.spacing(1,1.5),flexGrow:1},logo:{padding:e.spacing(2,0,1),justifyContent:"center"},footer:(t={borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},Object(h.a)(t,e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)}),Object(h.a)(t,"fontWeight",200),t)}})),y=function(){var e=v();return Object(x.jsxs)(s.a,{maxWidth:"sm",component:"main",className:e.heroContent,children:[Object(x.jsxs)(s.a,{maxWidth:"sm",component:"main",className:e.heroContent,children:[Object(x.jsx)(j.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,className:e.heroText,children:"ForeverShapes"}),Object(x.jsx)(j.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"KEY TO DIMESIONAL EXPERIENCES WHICH FUND THE CHARITY."}),Object(x.jsx)(j.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"YOU WERE THE ONES WHO EXISTED FIRST."})]}),Object(x.jsxs)(O.a,{container:!0,spacing:1,children:[Object(x.jsxs)(O.a,{item:!0,xs:6,sm:3,children:[Object(x.jsx)(j.a,{variant:"h6",align:"center",color:"textPrimary",component:"p",children:"5000"}),Object(x.jsx)(j.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"SHAPES"})]}),Object(x.jsxs)(O.a,{item:!0,xs:6,sm:3,children:[Object(x.jsx)(j.a,{variant:"h6",align:"center",color:"textPrimary",component:"p",children:"1 SOL"}),Object(x.jsx)(j.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"MINT"})]}),Object(x.jsxs)(O.a,{item:!0,xs:6,sm:3,children:[Object(x.jsx)(j.a,{variant:"h6",align:"center",color:"textPrimary",component:"p",children:"60"}),Object(x.jsx)(j.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"FPS"})]}),Object(x.jsxs)(O.a,{item:!0,xs:6,sm:3,children:[Object(x.jsx)(j.a,{variant:"h6",align:"center",color:"textPrimary",component:"p",children:"10 SEC"}),Object(x.jsx)(j.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"LOOPS"})]})]})]})},A=n(9),S=n(10),C=n(22),R=n(23),w=n(649),k=n(650),T=n(141),E=n.n(T),I=n.p+"static/media/3094.3748ff8d.mp4",M=n.p+"static/media/726.dca27e3c.mp4",B=(n.p,n.p+"static/media/1743.2f60f76e.mp4"),N=(n.p,n.p+"static/media/4470.945ed914.mp4"),P=(n.p,Object(o.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column",backgroundColor:"#fafafa",paddingBottom:e.spacing(0)},cardTitle:{paddingBottom:e.spacing(1)},cardBlack:{height:"100%",display:"flex",flexDirection:"column",backgroundColor:"#000000"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1,paddingBottom:e.spacing(2)},whiteFont:{color:"#ffffff"},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},chipWhite:{margin:e.spacing(0,1,0,0),backgroundColor:"#ffffff",color:"#000000"},chipRed:{margin:e.spacing(0,1,0,0),backgroundColor:"#EA3323",color:"#000000"},chipYellow:{margin:e.spacing(0,1,0,0),backgroundColor:"#FFBB25",color:"#000000"}}}))),D=function(e){Object(C.a)(n,e);var t=Object(R.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"player-wrapper",children:Object(x.jsx)(E.a,{className:"react-player",url:I,width:"100%",height:"100%",playing:!0,loop:"true",muted:!0})})}}]),n}(a.a.Component);function G(){var e,t=P();return Object(x.jsx)(s.a,{maxWidth:"md",component:"main",className:t.heroContent,children:Object(x.jsxs)(O.a,{container:!0,spacing:4,children:[Object(x.jsx)(O.a,{item:!0,xs:12,sm:6,md:6,children:Object(x.jsxs)(w.a,{variant:"outlined",className:t.card,children:[Object(x.jsx)(D,{}),Object(x.jsxs)(k.a,{className:t.cardContent,children:[Object(x.jsx)(j.a,{className:t.cardTitle,variant:"h6",align:"center",color:"textPrimary",component:"p",children:"SHAPE #3094"}),Object(x.jsx)(j.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Wireframe Cuboid Lines Mini"})]})]})}),Object(x.jsx)(O.a,{item:!0,xs:12,sm:6,md:6,children:Object(x.jsxs)(w.a,{variant:"outlined",className:t.card,children:[Object(x.jsx)(E.a,{className:"react-player",url:M,width:"100%",height:"100%",playing:!0,loop:"true",muted:!0}),Object(x.jsxs)(k.a,{className:t.cardContent,children:[Object(x.jsx)(j.a,{className:t.cardTitle,variant:"h6",align:"center",color:"textPrimary",component:"p",children:"SHAPE #726"}),Object(x.jsx)(j.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Wireframe Cuboid Random Regular"})]})]})}),Object(x.jsx)(O.a,{item:!0,xs:12,sm:6,md:6,children:Object(x.jsxs)(w.a,{variant:"outlined",className:t.card,children:[Object(x.jsx)(E.a,{className:"react-player",url:B,width:"100%",height:"100%",playing:!0,loop:"true",muted:!0}),Object(x.jsxs)(k.a,{className:t.cardContent,children:[Object(x.jsx)(j.a,{className:t.cardTitle,variant:"h6",align:"center",color:"textPrimary",component:"p",children:"SHAPE #1743"}),Object(x.jsx)(j.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Classic Cone Random Mega"})]})]})}),Object(x.jsx)(O.a,{item:!0,xs:12,sm:6,md:6,children:Object(x.jsxs)(w.a,{variant:"outlined",className:t.cardBlack,children:[Object(x.jsx)(E.a,{className:"react-player",url:N,width:"100%",height:"100%",playing:!0,loop:"true",muted:!0}),Object(x.jsxs)(k.a,{className:t.cardContent,children:[Object(x.jsx)(j.a,(e={className:t.cardTitle,variant:"h6",align:"center",color:"textPrimary",component:"p"},Object(h.a)(e,"className",t.whiteFont),Object(h.a)(e,"children","SHAPE #4470"),e)),Object(x.jsx)(j.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",className:t.whiteFont,children:"Classic Cuboid Random Mega"})]})]})})]})})}var L=n(655);function Z(){return Object(x.jsx)(j.a,{variant:"body2",color:"textSecondary",align:"center",children:"Forever Together \u2728"})}var U,W,Y,F,K=Object(o.a)((function(e){var t;return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},appbar:{backgroundColor:"#fed229",opacity:1,borderTop:0,borderLeft:0,borderRight:0},divFlex:{flexGrow:1},link:{margin:e.spacing(1,1.5),flexGrow:1},logo:{padding:e.spacing(2,0,1),justifyContent:"center"},footer:(t={borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},Object(h.a)(t,e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)}),Object(h.a)(t,"fontWeight",200),t)}})),Q=function(){var e=K();return Object(x.jsxs)(s.a,{maxWidth:"md",component:"footer",className:e.footer,children:[Object(x.jsxs)(O.a,{container:!0,spacing:4,justifyContent:"space-evenly",children:[Object(x.jsxs)(O.a,{item:!0,xs:4,sm:4,children:[Object(x.jsx)(j.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,children:"ForeverDAO"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(m.a,{href:"#",variant:"subtitle1",color:"textSecondary",children:"Treasury"})}),Object(x.jsx)("li",{children:Object(x.jsx)(m.a,{href:"#",variant:"subtitle1",color:"textSecondary",children:"Discord"})}),Object(x.jsx)("li",{children:Object(x.jsx)(m.a,{href:"https://twitter.com/ForeverDAO_",variant:"subtitle1",color:"textSecondary",children:"Twitter"})})]})]}),Object(x.jsxs)(O.a,{item:!0,xs:4,sm:4,children:[Object(x.jsx)(j.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,children:"Projects"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(m.a,{href:"https://foreverdao.org",variant:"subtitle1",color:"textSecondary",children:"Charity"})}),Object(x.jsx)("li",{children:Object(x.jsx)(m.a,{href:"https://shapes.foreverdao.org",variant:"subtitle1",color:"textSecondary",children:"Shapes"})}),Object(x.jsx)("li",{children:Object(x.jsx)(m.a,{href:"https://foreverdao.org",variant:"subtitle1",color:"textSecondary",children:"Coins"})})]})]}),Object(x.jsxs)(O.a,{item:!0,xs:4,sm:4,children:[Object(x.jsx)(j.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,children:"Resources"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(m.a,{href:"https://solana.com",variant:"subtitle1",color:"textSecondary",children:"Solana"})}),Object(x.jsx)("li",{children:Object(x.jsx)(m.a,{href:"https://www.metaplex.com",variant:"subtitle1",color:"textSecondary",children:"Metaplex"})}),Object(x.jsx)("li",{children:Object(x.jsx)(m.a,{href:"https://p5js.org",variant:"subtitle1",color:"textSecondary",children:"P5JS"})})]})]})]}),Object(x.jsx)(L.a,{mt:5,children:Object(x.jsx)(Z,{})})]})},X=n(15),H=n(1),V=n.n(H),z=n(4),J=n(16),q=n(142),_=n(144),$=n(336),ee=n(651),te=n(653),ne=n(657),re=n(656),ae=n(17),ce=n(54),ie=n(187),oe=n(143),se=Object(_.a)(ie.a)(U||(U=Object(q.a)([""]))),le=_.a.span(W||(W=Object(q.a)([""]))),de=_.a.div(Y||(Y=Object(q.a)([""]))),ue=Object(_.a)(ee.a)(F||(F=Object(q.a)([""]))),be=function(e){var t=e.days,n=e.hours,r=e.minutes,a=e.seconds;e.completed;return Object(x.jsxs)(le,{children:[n+24*(t||0)," hours, ",r," minutes, ",a," seconds"]})},pe=function(e){var t=Object(r.useState)(),n=Object(J.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(!1),o=Object(J.a)(i,2),l=o[0],d=o[1],u=Object(r.useState)(!1),b=Object(J.a)(u,2),p=b[0],m=b[1],g=Object(r.useState)(!1),f=Object(J.a)(g,2),h=f[0],v=f[1],y=Object(r.useState)(0),A=Object(J.a)(y,2),S=(A[0],A[1]),C=Object(r.useState)(0),R=Object(J.a)(C,2),w=(R[0],R[1]),k=Object(r.useState)(0),T=Object(J.a)(k,2),E=T[0],I=T[1],M=Object(r.useState)({open:!1,message:"",severity:void 0}),B=Object(J.a)(M,2),N=B[0],P=B[1],D=Object(r.useState)(new Date(e.startDate)),G=Object(J.a)(D,2),L=G[0],Z=G[1],U=Object(ce.c)(),W=Object(r.useState)(),Y=Object(J.a)(W,2),F=Y[0],K=Y[1],Q=function(){Object(z.a)(V.a.mark((function t(){var n,r,a,c,i,o;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(U){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(oe.b)(U,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,a=n.goLiveDate,c=n.itemsAvailable,i=n.itemsRemaining,o=n.itemsRedeemed,S(c),I(i),w(o),m(0===i),Z(a),K(r);case 16:case"end":return t.stop()}}),t)})))()},H=function(){var t=Object(z.a)(V.a.mark((function t(){var n,r,a,i;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,v(!0),!U||!(null===F||void 0===F?void 0:F.program)){t.next=10;break}return t.next=5,Object(oe.c)(F,e.config,U.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(oe.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?P({open:!0,message:"Mint failed! Please try again!",severity:"error"}):P({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",m(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),P({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!U){t.next=23;break}return t.next=21,e.connection.getBalance(U.publicKey);case 21:i=t.sent,c(i/ae.LAMPORTS_PER_SOL);case 23:return v(!1),Q(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(z.a)(V.a.mark((function t(){var n;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!U){t.next=5;break}return t.next=3,e.connection.getBalance(U.publicKey);case 3:n=t.sent,c(n/ae.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[U,e.connection]),Object(r.useEffect)(Q,[U,e.candyMachineId,e.connection]),Object(x.jsxs)("main",{children:[Object(x.jsx)(s.a,{maxWidth:"sm",component:"main",children:Object(x.jsxs)(O.a,{container:!0,spacing:1,children:[Object(x.jsxs)(O.a,{item:!0,xs:4,sm:4,children:[Object(x.jsx)(j.a,{variant:"h6",align:"center",color:"textPrimary",component:"p",children:U&&Object(x.jsxs)("div",{children:[" ",Object(oe.d)(U.publicKey.toBase58()||"")]})}),Object(x.jsx)(j.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:U&&"WALLET"})]}),Object(x.jsxs)(O.a,{item:!0,xs:4,sm:4,children:[Object(x.jsx)(j.a,{variant:"h6",align:"center",color:"textPrimary",component:"p",children:U&&Object(x.jsxs)("div",{children:[(a||0).toLocaleString()," SOL"]})}),Object(x.jsx)(j.a,{align:"center",color:"textSecondary",component:"p",children:U&&"BALANCE"})]}),Object(x.jsxs)(O.a,{item:!0,xs:4,sm:4,children:[Object(x.jsx)(j.a,{variant:"h6",align:"center",color:"textPrimary",component:"p",children:U&&Object(x.jsx)("div",{children:E})}),Object(x.jsx)(j.a,{align:"center",color:"textSecondary",component:"p",children:U&&"SHAPES"})]})]})}),Object(x.jsx)(de,{children:U?Object(x.jsx)(ue,{disabled:p||h||!l,onClick:H,variant:"contained",children:p?"SOLD OUT":l?h?Object(x.jsx)(te.a,{}):"MINT":Object(x.jsx)($.a,{date:L,onMount:function(e){return e.completed&&d(!0)},onComplete:function(){return d(!0)},renderer:be})}):Object(x.jsx)(se,{children:"Connect Wallet"})}),Object(x.jsx)(ne.a,{open:N.open,autoHideDuration:6e3,onClose:function(){return P(Object(X.a)(Object(X.a)({},N),{},{open:!1}))},children:Object(x.jsx)(re.a,{onClose:function(){return P(Object(X.a)(Object(X.a)({},N),{},{open:!1}))},severity:N.severity,children:N.message})})]})},je=n(35),me=n(124),xe=n(654),ge=n(359),fe=Object(ge.a)(Object(h.a)({props:{MuiButtonBase:{disableRipple:!0}},overrides:{MuiCssBaseline:{"@global":{"@font-face":["Inter"]}}},palette:{primary:{main:"#000000"},secondary:{main:"#707a83",fontWeight:"200"},background:{default:"#ffffff"}}},"overrides",{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}},MuiDialogTitle:{root:{color:"#000",backgroundColor:"#ffffff!important",borderBottom:"1px solid rgba(0, 0, 0, 0.12)!important"}},MuiList:{root:{color:"#ffffff!important",backgroundColor:"#ffffff!important"}}})),he=new je.d.PublicKey("HDiWmKajwPgMwfq5qpqHL6BKK4uqdMSSXRUEXCeVTsvr"),Oe=new je.d.PublicKey("6RVLPLkurRvC1pAFchxUJjEPJCPGhYdeyLWoS6AEtUBW"),ve=new je.d.PublicKey("G6GFMojehJVwYfpN7QxVndFiM83ByiSpUX6krBRArqDx"),ye="mainnet-beta",Ae=new je.d.Connection("https://api.mainnet-beta.solana.com"),Se=parseInt("1607040720",10),Ce=Object(o.a)((function(e){return{container:{textAlign:"center",padding:e.spacing(0,0,0)}}})),Re=function(){var e=Ce(),t=Object(r.useMemo)((function(){return Object(ae.clusterApiUrl)(ye)}),[]),n=Object(r.useMemo)((function(){return[Object(me.a)(),Object(me.b)(),Object(me.c)(),Object(me.e)({network:ye}),Object(me.d)({network:ye})]}),[]);return Object(x.jsxs)(xe.a,{theme:fe,children:[Object(x.jsx)(f,{}),Object(x.jsx)(y,{}),Object(x.jsx)(s.a,{maxWidth:"xs",component:"main",className:e.container,children:Object(x.jsx)(ce.a,{endpoint:t,children:Object(x.jsx)(ce.b,{wallets:n,autoConnect:!0,children:Object(x.jsx)(ie.b,{children:Object(x.jsx)(pe,{candyMachineId:ve,config:Oe,connection:Ae,startDate:Se,treasury:he,txTimeout:3e4})})})})}),Object(x.jsx)(G,{}),Object(x.jsx)(Q,{})]})},we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,659)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(Re,{})}),document.getElementById("root")),we()}},[[610,1,2]]]);
//# sourceMappingURL=main.b4a7e349.chunk.js.map