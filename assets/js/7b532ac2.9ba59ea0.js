"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[129],{9629:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=t(5893),i=t(1151);const r={sidebar_position:1,description:"Configure a Google Cloud project used by Enotify"},a="Creating Google Cloud Project",c={id:"self-host/configuring-gmail/creating-project",title:"Creating Google Cloud Project",description:"Configure a Google Cloud project used by Enotify",source:"@site/docs/self-host/configuring-gmail/creating-project.md",sourceDirName:"self-host/configuring-gmail",slug:"/self-host/configuring-gmail/creating-project",permalink:"/self-host/configuring-gmail/creating-project",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Configure a Google Cloud project used by Enotify"},sidebar:"selfHostGuide",previous:{title:"Configuring Gmail",permalink:"/category/configuring-gmail"},next:{title:"Setting up IAM service accounts",permalink:"/self-host/configuring-gmail/setting-up-iam"}},o={},d=[{value:"Enable Gmail API",id:"enable-gmail-api",level:2},{value:"Create credentials",id:"create-credentials",level:2},{value:"Save credentials",id:"save-credentials",level:2},{value:"Add test users",id:"add-test-users",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"creating-google-cloud-project",children:"Creating Google Cloud Project"}),"\n",(0,n.jsxs)(s.p,{children:["Firstly, head over to ",(0,n.jsx)(s.a,{href:"https://console.cloud.google.com/projectcreate",children:"Google Cloud Console > New Project"})," and ",(0,n.jsx)(s.strong,{children:"make sure you are logged into the google account you wish to create the Google Cloud Project on"}),"."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.p,{children:["Give your project a name, and optionally, a custom ID, then press ",(0,n.jsx)(s.strong,{children:"CREATE"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"img",src:t(1758).Z+"",width:"1903",height:"653"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.h2,{id:"enable-gmail-api",children:"Enable Gmail API"}),"\n",(0,n.jsxs)(s.p,{children:["In your newly created project, navigate to ",(0,n.jsx)(s.code,{children:"APIs & Services > Enabled APIs & Services"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"img",src:t(6986).Z+"",width:"1903",height:"653"})}),"\n",(0,n.jsxs)(s.p,{children:["Press the ",(0,n.jsx)(s.strong,{children:"+ ENABLE APIS AND SERVICES"})," button at the top of the page, then scroll down and select the ",(0,n.jsx)(s.code,{children:"Gmail API"})," panel listed under the ",(0,n.jsx)(s.code,{children:"Google Workspace"})," category."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"img",src:t(6162).Z+"",width:"1903",height:"206"}),"\r\n",(0,n.jsx)(s.img,{alt:"img",src:t(7229).Z+"",width:"1903",height:"541"})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.p,{children:["Once on the Gmail API page, press the ",(0,n.jsx)(s.strong,{children:"ENABLE"})," button to enable the Gmail API."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"img",src:t(2710).Z+"",width:"1903",height:"459"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.h2,{id:"create-credentials",children:"Create credentials"}),"\n",(0,n.jsxs)(s.p,{children:["After enabling the Gmail API, you must create credentials in order to interact with it. Press the ",(0,n.jsx)(s.strong,{children:"CREATE CREDENTIALS"})," button."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"img",src:t(4436).Z+"",width:"1903",height:"432"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.p,{children:["In the ",(0,n.jsx)(s.strong,{children:"Select an API"})," dropdown, ensure that ",(0,n.jsx)(s.strong,{children:"Gmail API"})," is selected. Select ",(0,n.jsx)(s.strong,{children:"User data"})," and press ",(0,n.jsx)(s.strong,{children:"NEXT"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"img",src:t(9830).Z+"",width:"1903",height:"879"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.p,{children:["Choose an ",(0,n.jsx)(s.strong,{children:"App name"}),", select an available ",(0,n.jsx)(s.strong,{children:"User support email"}),", add at least one email address under ",(0,n.jsx)(s.strong,{children:"Developer contact information"}),", and optionally, upload a logo. Once complete, press ",(0,n.jsx)(s.strong,{children:"SAVE AND CONTINUE"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"img",src:t(6378).Z+"",width:"1903",height:"1256"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.p,{children:["Next, you must add the scopes required in order for Enotify to function. First press ",(0,n.jsx)(s.strong,{children:"ADD OR REMOVE SCOPES"}),", then select ",(0,n.jsx)(s.code,{children:"https://www.googleapis.com/auth/userinfo.email"})," as well as ",(0,n.jsx)(s.code,{children:"https://www.googleapis.com/auth/gmail.readonly"}),". Once both are selected, press ",(0,n.jsx)(s.strong,{children:"UPDATE"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"img",src:t(2231).Z+"",width:"1903",height:"516"}),"\r\n",(0,n.jsx)(s.img,{alt:"img",src:t(2680).Z+"",width:"1903",height:"958"})]}),"\n",(0,n.jsxs)(s.p,{children:["Scroll down to the bottom of the ",(0,n.jsx)(s.em,{children:"Scopes"})," section and press ",(0,n.jsx)(s.strong,{children:"SAVE AND CONTINUE"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"img",src:t(1265).Z+"",width:"1903",height:"548"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.p,{children:["Next, you must setup your ",(0,n.jsx)(s.em,{children:"OAuth Client ID"}),". For ",(0,n.jsx)(s.strong,{children:"Application type"})," select ",(0,n.jsx)(s.strong,{children:"Web application"}),", and choose a name for your client ID."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"img",src:t(3079).Z+"",width:"1903",height:"502"})}),"\n",(0,n.jsxs)(s.p,{children:["Under ",(0,n.jsx)(s.em,{children:"Authorized JavaScript origins"}),", add the base URL that you will be hosting your instance of Enotify's website on. In this example, we are using ",(0,n.jsx)(s.code,{children:"https://example.com"})," as a base URL."]}),"\n",(0,n.jsxs)(s.p,{children:["Under ",(0,n.jsx)(s.em,{children:"Authorized redirect URIs"}),", add the base URL that you will be hosting your instance of Enotify's website on, followed by the ",(0,n.jsx)(s.code,{children:"/gmail/callback"})," route. In this example we are using ",(0,n.jsx)(s.code,{children:"https://example.com"})," as a base URL, therefore we add ",(0,n.jsx)(s.code,{children:"https://example.com/gmail/callback"})," as an ",(0,n.jsx)(s.em,{children:"Authorized redirect URI"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"img",src:t(2434).Z+"",width:"1903",height:"912"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.p,{children:["Scroll down to the bottom of the ",(0,n.jsx)(s.em,{children:"Create credentials"})," page, and press ",(0,n.jsx)(s.strong,{children:"DONE"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"img",src:t(4891).Z+"",width:"1903",height:"523"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.h2,{id:"save-credentials",children:"Save credentials"}),"\n",(0,n.jsxs)(s.p,{children:["Now that you have created your ",(0,n.jsx)(s.em,{children:"OAuth Client ID"}),", you must save the credentials for it. Navigate to the ",(0,n.jsx)(s.code,{children:"APIs & Services > Credentials"})," page, and press the pencil (edit) button next to your newly created OAuth client ID."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"img",src:t(586).Z+"",width:"1903",height:"572"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.p,{children:["Copy the ",(0,n.jsx)(s.strong,{children:"Client ID"}),", and ",(0,n.jsx)(s.strong,{children:"Client secret"})," on the right side of the screen, open the ",(0,n.jsx)(s.code,{children:".env"})," file in the cloned repository's files, and paste them as the ",(0,n.jsx)(s.code,{children:"gcloud_client_id"})," and ",(0,n.jsx)(s.code,{children:"gcloud_client_secret"})," environment variable values."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"img",src:t(8490).Z+"",width:"1903",height:"747"}),"\r\n",(0,n.jsx)(s.img,{alt:"img",src:t(885).Z+"",width:"676",height:"63"})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.h2,{id:"add-test-users",children:"Add test users"}),"\n",(0,n.jsx)(s.p,{children:"In order to use the Gmail API with Enotify before your Google Cloud project is verified, you must add yourself as a test user."}),"\n",(0,n.jsxs)(s.p,{children:["To add yourself as a test user navigate to ",(0,n.jsx)(s.code,{children:"APIs & Services > OAuth consent screen"})," and press the ",(0,n.jsx)(s.strong,{children:"+ ADD USERS"})," button below ",(0,n.jsx)(s.em,{children:"Test users"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"img",src:t(970).Z+"",width:"1903",height:"759"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.p,{children:["Enter the desired test user email address and press ",(0,n.jsx)(s.strong,{children:"SAVE"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"img",src:t(7286).Z+"",width:"1903",height:"451"})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},6986:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-1-953ebcd6d2356a8f2a66f0c461427aab.png"},1265:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-10-c3981cb538f3dcac543f16562c4331ec.png"},3079:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-11-4c3a262b8476915d43b4c20a873bc475.png"},2434:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-12-ad57cb961687337b4e7c9e022b72dd07.png"},4891:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-13-26ef1ec5c8e655bacf2d68320df8a48c.png"},586:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-14-45d3770b2b3b3f8a25348401c0172da1.png"},8490:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-15-fdb3779dd921c3da1b5e395222542478.png"},885:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-16-d07e2d459830e25f6cc5c97758aaf09b.png"},970:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-17-20f12620a1923eb3ad483829eb887a96.png"},7286:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-18-ed9ca0e10f253a849a89fd72ff52f157.png"},6162:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-2-05d5c5aec896a6ef59cd956807fc28d7.png"},7229:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-3-b3dcd0f367335caa09f22ed6c6290a0a.png"},2710:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-4-0d6a728d70da89fb6c68104cf7f201b6.png"},4436:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-5-e857e2d35e505cf44cc4ab648cea83f5.png"},9830:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-6-2c78ff80d92b10a8fc6b6baad078edb6.png"},6378:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-7-39a3e96d83c662a060795c86fe69502e.png"},2231:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-8-5172d88f2d491ff95e49ab3eb5200204.png"},2680:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-9-a03f1ef5be6aa3d03f674decad40080a.png"},1758:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-55bd9bab3918fcbf81a684fafd5feaea.png"},1151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>a});var n=t(7294);const i={},r=n.createContext(i);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);