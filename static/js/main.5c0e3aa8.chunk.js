(this.webpackJsonpsardarchitect=this.webpackJsonpsardarchitect||[]).push([[0],{37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},63:function(e,t,i){"use strict";i.r(t);var a=i(0),r=i(1),n=i.n(r),o=i(14),s=i.n(o),c=i(4),l=(i(37),i(2)),d=(i(38),i(7)),u=i(26),h=i.n(u),p=(i(39),function(){var e=Object(r.useState)({x:0,y:0}),t=Object(d.a)(e,2),i=t[0],o=t[1],s=Object(r.useState)(!1),c=Object(d.a)(s,2),l=c[0],u=c[1],p=n.a.useState(!1),g=Object(d.a)(p,2),m=g[0],j=g[1],b=Object(r.useState)(!1),f=Object(d.a)(b,2),y=f[0],O=f[1];Object(r.useEffect)((function(){return v(),I(),function(){return x()}}),[]);var v=function(){document.addEventListener("mousemove",A),document.addEventListener("mouseenter",k),document.addEventListener("mouseleave",_),document.addEventListener("mousedown",w),document.addEventListener("mouseup",S)},x=function(){document.removeEventListener("mousemove",A),document.removeEventListener("mouseenter",k),document.removeEventListener("mouseleave",_),document.removeEventListener("mousedown",w),document.removeEventListener("mouseup",S)},A=function(e){o({x:e.clientX,y:e.clientY})},w=function(){u(!0)},S=function(){u(!1)},_=function(){O(!0)},k=function(){O(!1)},I=function(){document.querySelectorAll("a").forEach((function(e){e.addEventListener("mouseover",(function(){return j(!0)})),e.addEventListener("mouseout",(function(){return j(!1)}))}))},T=h()("cursor",{"cursor--clicked":l,"cursor--hidden":y,"cursor--link-hovered":m});return"undefined"!==typeof navigator&&function(){var e=navigator.userAgent;return/Android|Mobi/i.test(e)}()?null:Object(a.jsx)("div",{className:T,style:{left:"".concat(i.x,"px"),top:"".concat(i.y,"px")}})}),g=(i(40),function(){var e=Object(l.f)();return e.pathname.includes("cv")?Object(a.jsxs)("nav",{children:[Object(a.jsx)(c.b,{to:"/",children:"HOME"}),Object(a.jsx)(c.b,{to:"/blog",children:"BLOG"}),Object(a.jsx)("a",{href:"#contact",children:"CONTACT"})]}):e.pathname.includes("projects")?Object(a.jsxs)("nav",{children:[Object(a.jsx)(c.b,{to:"/",children:"HOME"}),Object(a.jsx)("a",{href:"#work",children:"OTHER WORK"}),Object(a.jsx)(c.b,{to:"/cv",children:"CV"}),Object(a.jsx)("a",{href:"#contact",children:"CONTACT"})]}):e.pathname.includes("blog")?Object(a.jsxs)("nav",{children:[Object(a.jsx)(c.b,{to:"/",children:"HOME"}),Object(a.jsx)(c.b,{to:"/cv",children:"CV"}),Object(a.jsx)("a",{href:"#contact",children:"CONTACT"})]}):Object(a.jsxs)("nav",{children:[Object(a.jsx)("a",{href:"#work",children:"WORK"}),Object(a.jsx)(c.b,{to:"/cv",children:"CV"}),Object(a.jsx)(c.b,{to:"/blog",children:"BLOG"}),Object(a.jsx)("a",{href:"#contact",children:"CONTACT"})]})}),m=(i(46),function(){return Object(a.jsxs)("footer",{id:"contact",children:[Object(a.jsx)("div",{className:"footer__bg"}),Object(a.jsxs)("div",{className:"contact__description",children:[Object(a.jsx)("p",{children:"I DO MY BEST WORK WITH OTHER COLLABORATORS, AND I AM ALWAYS LOOKING TO COLLABORATE WITH ARCHITECTS, DESIGNERS, AND THE AI COMMUNITY"}),Object(a.jsxs)("p",{children:["PLEASE FEEL FREE TO CHECK ME OUT ON ",Object(a.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/sardarchitect/",children:"LINKEDIN"}),", AND ",Object(a.jsx)("a",{target:"_blank",href:"https://www.instagram.com/sardarchitect/",children:"INSTAGRAM"}),", OR SIMPLY SEND ME AN ",Object(a.jsx)("a",{href:"mailto: sardarchitect@gmail.com",children:"EMAIL"})]})]}),Object(a.jsx)("div",{className:"copyright",children:Object(a.jsx)("p",{children:"DESIGNED BY ARVINDER SINGH - 2021"})})]})}),j=(i(47),function(){var e=Object(r.useState)(0),t=Object(d.a)(e,2),i=t[0],n=t[1],o=Object(r.useState)(!1),s=Object(d.a)(o,2),l=s[0],u=s[1],h=l?"about__description about__description__show":"about__description about__description__hide";return Object(r.useEffect)((function(){var e=setInterval((function(){n(2===i?0:i+1)}),1500);return function(){return clearInterval(e)}}),[i]),Object(a.jsxs)("div",{className:"about",children:[Object(a.jsxs)("div",{className:"about__intro",children:[Object(a.jsxs)("div",{className:"about__intro__title",children:[Object(a.jsx)("h1",{className:"title_text",children:"ARVINDER"}),Object(a.jsx)("h1",{className:"title_text",children:"SINGH"})]}),Object(a.jsx)("h2",{className:"about__intro__subtitle",children:["ART","ARCHITECTURE","TECHNOLOGY"][i]})]}),Object(a.jsxs)("div",{className:h,children:[Object(a.jsx)("p",{children:"TODO: RAISED IN AN ARTISTIC HOUSEHOLD, MY CHILDHOOD MEMORIES REVOLVE AROUND DESIGN AND CREATIVITY \u2014 MY FATHER\u2019S WOOD-SHOP, MY MOTHER\u2019S PAINTING STUDIO, AND MY CITY\u2019S UNIQUE ARCHITECTURAL DISPOSITION."}),Object(a.jsx)("p",{children:"THROUGHOUT MY EDUCATION, I REALIZED THAT THE ARCHITECT HOLDS A GREAT AGENCY IN SHAPING SOCIAL AND CULTURAL DYNAMICS. MY PASSION FOR PHILOSOPHY, WORLD-POLITICS, RHETORIC, AND ARCHITECTURAL PEDAGOGY CRITICALLY ENGAGES ME WITH THE WORK I PURSUE."}),Object(a.jsxs)("p",{children:["FIND MY \xa0",Object(a.jsx)(c.b,{to:"/cv",children:"FULL CV HERE"})]})]}),Object(a.jsx)("div",{className:"about__more",children:Object(a.jsx)("a",{onClick:function(){return u(!l)},children:l?"...SHOW LESS":"...SHOW MORE"})})]})}),b=(i(48),[{projectId:"1",title:"Disrupting Suburbia",year:"2019",text:["Studio: Brittany Utting","Site: Ann Arbor MI","American suburbanization has created an uneventful dystopia that lacks pedestrian anchorage, walk-ability, and social infrastructure. This car-dependent, eveloper-oriented sub-urbanization also creates spaces that economically disincentivizes lower-income housing, gives way to sprawl, and promotes longer commutes.","This project creates a disruption within the critiqued American suburbiaby introducing a society of \u201cDIY Makers\u201d similar to the type proposed by Adam Greenfield in Toward a New Political Economy of Matter. By providing tools for manufacturing within a spatial rule-set, this project predicts a new sub-urban typology for a community-based development.","This new form of urbanism stays cohesive and structured in form, yet becomes organic in behavior. The project speculates the introduction of markets, cafes, residential quarters, and employment opportunities, providing a re-densification of suburbia at a smaller scale."],images:["/project-gallery/disrupting-suburbia/0.png","/project-gallery/disrupting-suburbia/1.png","/project-gallery/disrupting-suburbia/10.jpg","/project-gallery/disrupting-suburbia/13.jpg","/project-gallery/disrupting-suburbia/20.jpg"],thumbnailSrc:"/thumbnail/14-300x153.jpg"},{projectId:"2",title:"The American Bazaar",year:"2020",text:["Student Show Award Finalists","Throughout history, the bazaar has been the backdrop for not only trade, commerce, and innovation, but also for politics, rhetoric, and exchange of ideas. This has rarely been the case with contemporary, capital-driven spatial typologies, like the American strip-mall.","Through introducing a bazaar typology in the American urban-condition, this project tries to advocate for a human-centric buyer-seller relationship, via an economy of scale. The introduction of a formal and informal theater provides a layer of anchorage to bring people in, providing a medium for the spread of ideas.","Formally, the vaulted ceiling-condition not only recalls the ancient typology of a bazaar, but also helps the visual distribution of spaces within the super structure. The periphery of the poch\xe8 supports service areas, whilethe core opens up for circulation and flexible programming."],images:["/project-gallery/the-american-bazaar/0.png","/project-gallery/the-american-bazaar/1.png","/project-gallery/the-american-bazaar/2.png","/project-gallery/the-american-bazaar/3.png","/project-gallery/the-american-bazaar/5.png","/project-gallery/the-american-bazaar/6.png","/project-gallery/the-american-bazaar/8.png","/project-gallery/the-american-bazaar/9.png"],thumbnailSrc:"/thumbnail/03212019_GIS_Pittsburgh-300x200.png"},{projectId:"3",title:"Fragmented Living",year:"2020",text:["Fragmented Living - A New Way', 'Studio: Brittany Utting Conventional residential complexes contain self-centered units that usually inhibit any kind of interaction with other neighboring units. Even if the architect provides social space(s), the intrinsic nature of being self-sustaining (bedrooms, bathrooms, kitchen, etc. all being in the same unit), gives room to creating a very individualistic lifestyle. These separate living environments create social bubbles within the life of the inhabitants, which may or may not be desirable. Moreover, this individual unit system is low kinetic: the dynamics prescribed by a localized architecture (in terms of proximity of programs), is lower than, let\u2019s say, alternative ways of living.","By challenging this conventional configuration of a solid-void relationship between the public and private space within each residential unit, an alternative way of living environment can be cultivated.","Through exploding and fragmenting the programs (i.e. by deliberately shifting the programs of one unit in relation to others), and re-organizing the configuration of these individual programs, the architecture can allow room for social interaction, that may have not been possible otherwise. For example, the architecture may lead to unusual interactions between categories of people who normally wouldn\u2019t be able to directly interact with one another in the conventional sense.","Furthermore, by creating social spaces that double as utilitarian (such as common kitchen spaces, public baths, open living rooms, etc.), this idea of bumping into another member of this micro-community can be furthered. As noted above, conventional housing units are low dynamic in nature. They are almost inflexible to the changing social environments within the community. By providing the residents modular structures that can be added (both vertically and horizontally), subtracted, and moved, space can be generated according to the inhabitant\u2019s needs.","The site-less nature of the project allows an exploration of a public/private solid-void relationship, through a formal aesthetic. By carving into these fantastical mountainous plinths, a more permanent public/private relationship can be designed, which differentiates itself from the extremely social dynamic life on the surface."],images:["/project-gallery/fragmented-living/1.png","/project-gallery/fragmented-living/2.png"],thumbnailSrc:"/thumbnail/Plans_Sections_Axons-3-200x300.png"},{projectId:"4",title:"Phantasmagoria",year:"2020",text:["Studio: Peter Halquist","Phantasmagoria(noun): a sequence of real or imaginary images likethose seen in a dream.Through the use of curated reflectionsoverlayed onto a 3D space, it is possibleto lose sense of reality and perception. What is physical and what is not? This flattening of space foregrounds our brain\u2019s(in)ability to capture reality as it is.Our brain tries to create its own realityto better understand the world around us. The creation of this phantasmogoria does just that.","Its by looking through thisvery small aperture that aworld, greater than what isexpected, is experienced.When the space gets activated through motion, it becomesa different reality. A realitywith its own laws that govern the characters who live withinit.'"],images:["/project-gallery/phantasmagoria/0.png","/project-gallery/phantasmagoria/1.jpg","/project-gallery/phantasmagoria/2.gif","/project-gallery/phantasmagoria/3.mp4"],thumbnailSrc:"/thumbnail/phantasmagoria.jpg"},{projectId:"5",title:"Farm-to-Rent",year:"2020",text:["Farm-to-Rent is designed, at its core, with community in mind.","This program encourages using the provided infrastructure as a means for residents to not only feed themselves, but also their neighbor, friend, family, or a stranger. As long as one is willing to cultivate their produce, and there are people willing to purchase, a strong and healthy relationship can be fostered. This effect is bolstered by the proximity to the Eastern Market, and two other grocery stores in the area. If business appears to be bustling at one of the places and not the other, renters will have the opportunity to connect with these groups and sell their produce at these locations. The greenhouse in particular is designed without barriers between each unit. This can lead to a number of encounters amongst the two occupants which can lead to new friendships, knowledge, and potentially a helping hand.","Given the uninhibited quality of the greenhouse, it can adapt to the desires of the inhabitants quite easily. Simple negotiations with one\u2019s neighbor regarding how much space they\u2019d each like to use can determine how the greenhouse will be best used. Additionally, the program aims to increase communication between two traditionally conflicting groups - the landlord and the renter. Given that the program relies on a deductible from the landlord, in exchange for produce, means that ongoing conversations will be had so that both parties are satisfied, motivated and happy!"],images:["/project-gallery/farm-to-rent/1.jpg","/project-gallery/farm-to-rent/2.jpg","/project-gallery/farm-to-rent/3.jpg","/project-gallery/farm-to-rent/4.jpg","/project-gallery/farm-to-rent/5.jpg","/project-gallery/farm-to-rent/6.jpg"],thumbnailSrc:"/thumbnail/farm_to_rent_submission_6-1024x663-1-e1564605849817-300x196.jpg"},{projectId:"6",title:"A Framework For Frameworks",year:"2020",text:["Studio: Gabriel Cuellar","Team: Arvinder Singh + Brendan Varilek","Site: Native American Reservations, New Mexico","Wallenberg Award Finalists The rights of the Native Americans have been constantly violated since the first encounter with European colonists. Today, Native reservations are exploited for their land and resources for capitalistic gains, virtually erasing their influence and footprint from this continent. Indigenous people living on reservations are disproportionately experiencing problems of poverty, connectivity, housing, education, and overall self-determination.","To address the socio-economic disparity and spatial issues within the Pueblos north of Albuquerque NM, this project aims to catalyze infrastructure development that creates the potential for new architectural configurations and urban dynamics. In pursuit of addressing the socio-economic disparity and spatial issues within the Pueblos north of Albuquerque, this project aims to catalyze infrastructure development that creates the potential for new architectural configurations and urban dynamics.","Through navigating within law, policies, economic incentives, and the cultural context, the project proposes to create a unified Pueblo body, the Middle Rio Grande Pueblo Initiative, that advocates for Indigenous priorities to the Bureau of Indian Affairs.  MRGPI works closely with lawyers, architects, and politicians to prioritize infrastructure development through budgetary allocations, and collective transformations. Simultaneously, the Initiative implements economically and environmentally sustainable spatial productions that all help create an inter-tribal economy. By doing so, the project speculates a decrease in heavy-dependency on the BIA, and an increase in tribal sovereignty"],images:["/project-gallery/framework-for-frameworks/0.png","/project-gallery/framework-for-frameworks/1.png","/project-gallery/framework-for-frameworks/2.png","/project-gallery/framework-for-frameworks/3.png","/project-gallery/framework-for-frameworks/4.png","/project-gallery/framework-for-frameworks/18.png","/project-gallery/framework-for-frameworks/19.png","/project-gallery/framework-for-frameworks/20.png","/project-gallery/framework-for-frameworks/21.png"],thumbnailSrc:"/thumbnail/Reservation_Urban1-300x199.png"},{projectId:"101",title:"Digital Objects",year:"2019",text:["These objects are made through digital fabrication. I used Grasshopper, 3D printing, ZUND cutter, laser cutter, robots, etc. to make em"],images:["/project-gallery/digital-objects/1.gif","/project-gallery/digital-objects/2.jpg","/project-gallery/digital-objects/3.png"],thumbnailSrc:"/thumbnail/20180118_125203-224x300.png"},{projectId:"104",title:"Stack-Pour",year:"2020",text:["Stack-pour is a..."],images:["/project-gallery/stack-pour/0.png","/project-gallery/stack-pour/1.png","/project-gallery/stack-pour/2.png","/project-gallery/stack-pour/3.png","/project-gallery/stack-pour/4.png","/project-gallery/stack-pour/5.png","/project-gallery/stack-pour/6.png","/project-gallery/stack-pour/7.png","/project-gallery/stack-pour/8.png","/project-gallery/stack-pour/9.png","/project-gallery/stack-pour/10.png"],thumbnailSrc:"/thumbnail/DSC_2643-e1562083831594-300x250.png"}]),f=[{projectId:"51",title:"Sketches",year:"2015",text:["These objects are made through digital fabrication. I used Grasshopper, 3D printing, ZUND cutter, laser cutter, robots, etc. to make em"],images:["/project-gallery/digital-objects/1.gif","/project-gallery/digital-objects/2.jpg","/project-gallery/digital-objects/3.png"],thumbnailSrc:"/thumbnail/20180118_125203-224x300.png"},{projectId:"52",title:"Sketches",year:"2015",text:["These objects are made through digital fabrication. I used Grasshopper, 3D printing, ZUND cutter, laser cutter, robots, etc. to make em"],images:["/project-gallery/digital-objects/1.gif","/project-gallery/digital-objects/2.jpg","/project-gallery/digital-objects/3.png"],thumbnailSrc:"/thumbnail/20180118_125203-224x300.png"},{projectId:"53",title:"Sketches",year:"2015",text:["These objects are made through digital fabrication. I used Grasshopper, 3D printing, ZUND cutter, laser cutter, robots, etc. to make em"],images:["/project-gallery/digital-objects/1.gif","/project-gallery/digital-objects/2.jpg","/project-gallery/digital-objects/3.png"],thumbnailSrc:"/thumbnail/20180118_125203-224x300.png"},{projectId:"54",title:"Sketches",year:"2015",text:["These objects are made through digital fabrication. I used Grasshopper, 3D printing, ZUND cutter, laser cutter, robots, etc. to make em"],images:["/project-gallery/digital-objects/1.gif","/project-gallery/digital-objects/2.jpg","/project-gallery/digital-objects/3.png"],thumbnailSrc:"/thumbnail/20180118_125203-224x300.png"}],y=[{projectId:"101",title:"Digital Objects",year:"2019",text:["These objects are made through digital fabrication. I used Grasshopper, 3D printing, ZUND cutter, laser cutter, robots, etc. to make em"],images:["/project-gallery/digital-objects/1.gif","/project-gallery/digital-objects/2.jpg","/project-gallery/digital-objects/3.png"],thumbnailSrc:"/thumbnail/20180118_125203-224x300.png"},{projectId:"102",title:"Dimensions v32",year:"2020",text:["Faculty Advisor: Christian UnverzagtTeam: Hannah Cane, Karun Chughasrani, Grace Hsu, Austin Kronig, Jordan Laurila, Nour Majzoub, Rinika Prince, Jenny Scarborough, Arvinder Singh.","Dimensions is an annual architecture publication run by students of Taubman College of Architecture - University of Michigan. The journal seeks to contribute to the critical discourse of architectural education by documenting the most compelling work produced by its students, faculty, fellows, and visiting lecturers."],images:["/project-gallery/dimensions-32/1.jpg","/project-gallery/dimensions-32/2.jpg","/project-gallery/dimensions-32/3.jpg"],thumbnailSrc:"/thumbnail/Dimensions-32-2.04-300x225.jpg"},{projectId:"103",title:"Robotic Picasso",year:"2020",text:["Robot Picasso"],images:["/project-gallery/robotic-picasso/0.jpg","/project-gallery/robotic-picasso/1.jpg","/project-gallery/robotic-picasso/1a.jpg","/project-gallery/robotic-picasso/2.jpg","/project-gallery/robotic-picasso/2a.jpg","/project-gallery/robotic-picasso/3.jpg","/project-gallery/robotic-picasso/3a.jpg"],thumbnailSrc:"/thumbnail/Picasso_1a-300x300.jpg"},{projectId:"104",title:"Stack-Pour",year:"2020",text:["Stack-pour is a..."],images:["/project-gallery/stack-pour/0.png","/project-gallery/stack-pour/1.png","/project-gallery/stack-pour/2.png","/project-gallery/stack-pour/3.png","/project-gallery/stack-pour/4.png","/project-gallery/stack-pour/5.png","/project-gallery/stack-pour/6.png","/project-gallery/stack-pour/7.png","/project-gallery/stack-pour/8.png","/project-gallery/stack-pour/9.png","/project-gallery/stack-pour/10.png"],thumbnailSrc:"/thumbnail/DSC_2643-e1562083831594-300x250.png"},{projectId:"105",title:"World's largest computer",year:"2020",text:["ji"],images:["https://picsum.photos/300?random=11","https://picsum.photos/300?random=12","https://picsum.photos/300?random=13"],thumbnailSrc:"/thumbnail/Dimensions-32-2.04-300x225.jpg"},{projectId:"106",title:"Web Design and stuff",year:"2020",text:["Digitally generated and fabricated.Software: Grasshopper, Rhino, PhotoshopFabrication Machines: CNC Router, KUKA Robot, Laser Cutters, Zund Cutter, Foam Cutter', Context-less Memorial This project explores howlight can aid in the visualand physical movement of nbodies within a spatial organization.The light on the ramp helpsilluminate the promanade. Theskylight reveals the names ofthe people who the memorialserves for. The slit wallserves as a wayfinder for theexits.The project also experimentswith color and texture."],images:["https://picsum.photos/300?random=14","https://picsum.photos/300?random=15","https://picsum.photos/300?random=16"],thumbnailSrc:"/thumbnail/Dimensions-32-2.04-300x225.jpg"}],O=function(e){var t="projects/"+e.id;return Object(a.jsx)(c.b,{to:"/"+t,children:Object(a.jsxs)("div",{className:"work__item",children:[Object(a.jsx)("img",{src:e.thumbnailSrc}),Object(a.jsxs)("p",{children:[" ",e.title]})]})})},v=function(){var e=Object(r.useState)(b),t=Object(d.a)(e,2),i=t[0],n=t[1];return Object(a.jsxs)("div",{className:"work",id:"work",children:[Object(a.jsx)("h1",{className:"title_text",children:"WORK"}),Object(a.jsxs)("div",{className:"work__category",children:[Object(a.jsx)("a",{onClick:function(){return n(b)},children:Object(a.jsx)("p",{className:i==b?"activeOption":"",children:"ARCHITECTURE"})}),Object(a.jsx)("a",{onClick:function(){return n(f)},children:Object(a.jsx)("p",{className:i==f?"activeOption":"",children:"ART"})}),Object(a.jsx)("a",{onClick:function(){return n(y)},children:Object(a.jsx)("p",{className:i==y?"activeOption":"",children:"TECHNOLOGY"})})]}),Object(a.jsx)("div",{className:"work__grid",children:i.map((function(e){return Object(a.jsx)(O,{id:e.projectId,title:e.title,year:e.year,thumbnailSrc:e.thumbnailSrc})}))})]})},x=(i(49),function(){var e=Object(l.g)().id,t=b.concat(f).concat(y).find((function(t){return t.projectId===e}));return console.log(t),Object(a.jsxs)("div",{className:"work__page",children:[Object(a.jsx)("h1",{children:t.title}),Object(a.jsx)("h2",{children:t.year}),Object(a.jsxs)("div",{className:"work__page__content",children:[Object(a.jsx)("div",{className:"work__text",children:t.text}),Object(a.jsx)("div",{className:"work__images",children:t.images.map((function(e){return Object(a.jsx)("img",{src:e,className:"temp_images"})}))})]}),Object(a.jsx)("div",{className:"work__page__other__work",children:Object(a.jsx)(v,{})})]})}),A=(i(50),function(e){var t=e.title,i=e.role,n=e.location,o=e.date,s=e.description,c=Object(r.useState)(!1),l=Object(d.a)(c,2),u=l[0],h=l[1];return Object(a.jsxs)("div",{className:"resume__item",onClick:function(){return h(!u)},children:[Object(a.jsx)("h3",{children:t}),Object(a.jsxs)("div",{className:"resume__item__inner",children:[Object(a.jsx)("p",{children:i}),Object(a.jsxs)("p",{children:[n," ",o?" | "+o:null]}),Object(a.jsx)("ul",{className:u?"resume__item__description resume__item__description__show":"resume__item__description resume__item__description__hidden",children:null==s?null:s.map((function(e){return Object(a.jsx)("li",{children:e})}))}),null==s?null:Object(a.jsx)("div",{className:"resume__item__description__toggle",children:Object(a.jsx)("a",{children:u?"...READ LESS":"...READ MORE"})})]})]})}),w=[{title:"Bachelor of Science, Architecture",role:"Taubman College - University of Michigan",location:"Ann Arbor MI",date:"2019"},{title:"Associate of Arts",role:"Grand Rapids Community College",location:"Grand Rapids MI",date:"2017"}],S=[{title:"Edge Design Associates, Inc.",role:"Architectural Designer",location:"Ann Arbor MI",date:"July 2019 - Dec 2020",description:["work","work","work"]},{title:"Dimensions v.32 - Annual Architectural Journal",role:"Co-Editor",location:"Ann Arbor MI",date:" Sep 2018 - Apr 2019",description:["Collaborated with a student-team to compile selected Taubman College student and faculty-work.","Facilitated resolution of manuscript queries related to text-editing, cover design, and layout.","Played a key role in keeping the production process on schedule by preparing for final prints."]},{title:"Hamilton Anderson Associates",role:"Spring Extern",location:"Detroit MI",date:"Mar 2019",description:["Investigated multiple design strategies for HAA 25th-Anniversary Book design and cover."]},{title:"ZGF Architects LLP",role:"Spring Extern",location:"Los Angeles CA",date:"Feb 2018",description:["Collaborated with interior design team for re-imagining rooms in Google\u2019s Playa Vista LA Office."]},{title:"Akoaki- Undergraduate Research Program",role:"Research Fellow",location:"Detroit MI",date:"Jun 2016 - Aug 2016",description:["ssisted Prof. Anya Sirota with preparing for the 10th Saint Etienne International Design Biennale.","Produced plans and elevations of plots and existing buildings after taking measured site surveys.","Managed layout and transcription of Akoaki\u2019s annual publication: The ONE Mile Zine 2."]},{title:"Orientation Team",role:"Student Orientation Ambassador",location:"Grand Rapids MI",date:"May 2016 - Jun 2017",description:["Assisted and coordinated with college staff to run incoming student orientations efficiently.","Actively led weekly orientations through presentations, campus-tours, and student enrollments.","Demonstrated strong communication skills and the ability to learn administrative systems quickly."]},{title:"Tutoring Center",role:"Peer Tutor (Math & English)",location:"Grand Rapids MI",date:"Jan 2016 - Jun 2017",description:["Received very positive feedback from students for using an organized approach to teaching a topic."]},{title:"Savvy Crafts Furniture Manufacturers",role:"Assistant Manager",location:"Chandigarh India",date:"2014 - 2015, 2018",description:[" Oversaw key interior design projects: Hotel Chail Palace (Chail), Hotel Holiday Home (Shimla) and Filmy Keeda Production House (Mumbai), through on-site production.","Managed material inventory and purchase, on-site labor efficiency, and client presentations.","Commended for producing quick, accurate CAD documents on-site for design alterations.","Supervised 40-50 personnel along with 2 foremen in a 13000 sq.ft.furniture manufacturing facility.","Produced in-shop CAD documents for efficient furniture production, prioritizing lowest wastage."]}],_=[{title:"International Students Organization GRCC",role:"President",location:"Grand Rapids MI",date:"Jan 2016 - Jun 2017"},{title:"Phi Theta Kappa Honors Society ",role:"Member",location:"Grand Rapids MI",date:"Jan 2016 - Jun 2017"},{title:"Business Fraternity Alpha Kappa Psi",role:"Professional Development Committee Member",location:"Miami FL",date:"2015"}],k=[{title:"Wallenberg Studio Thesis Award",role:"One of 3 Studio Finalists",date:"2019"},{title:"Wallenberg Studio Thesis Award",role:"One of 3 Studio Finalists",date:"2019"},{title:"Wallenberg Studio Thesis Award",role:"One of 3 Studio Finalists",date:"2019"}],I=[{title:"Visualization Tools",role:"Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Premiere, Adobe AfterEffects"},{title:"Architectural Tools",role:"Autodesk AutoCAD, Autodesk Revit, Rhino, Grasshopper, Unreal Engine 4, ArcGIS"},{title:"Web Dev Tools",role:"HTML, CSS, JavaScript, ReactJS, D3JS, NodeJS, ExpressJS, MongoDB, Mongoose"},{title:"Machine Learning Tools",role:"Python, Anaconda Environment, PyTorch, Numpy, Pandas"},{title:"Languages",role:"English, Hindi, Punjabi"}],T=function(){return Object(a.jsxs)("div",{className:"resume",id:"cv",children:[Object(a.jsx)("h1",{children:"CV"}),Object(a.jsxs)("p",{children:["Arvinder Singh is an architectural designer, with a specialization in Artificial Intelligence, and Medium Design. He graduated from the University of Michigan's Taubman College of Architecture (2019), and since then has been working at Edge Design Associates, Ann Arbor.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Arvinder focuses on................."]}),Object(a.jsxs)("div",{className:"resume__section",children:[Object(a.jsx)("h2",{children:" EDUCATION "}),w.map((function(e){return Object(a.jsx)(A,{title:e.title,role:e.role,location:e.location,date:e.date})}))]}),Object(a.jsxs)("div",{className:"resume__section",children:[Object(a.jsx)("h2",{children:" EXPERIENCE "}),S.map((function(e){return Object(a.jsx)(A,{title:e.title,role:e.role,location:e.location,date:e.date,description:e.description})}))]}),Object(a.jsxs)("div",{className:"resume__section__grid",children:[Object(a.jsxs)("div",{className:"resume__section",children:[Object(a.jsx)("h2",{children:" AFFILIATIONS "}),_.map((function(e){return Object(a.jsx)(A,{title:e.title,role:e.role,location:e.location,date:e.date})}))]}),Object(a.jsxs)("div",{className:"resume__section",children:[Object(a.jsx)("h2",{children:" AWARDS "}),k.map((function(e){return Object(a.jsx)(A,{title:e.title,role:e.role,date:e.date})}))]})]}),Object(a.jsxs)("div",{className:"resume__section",children:[Object(a.jsx)("h2",{children:" TOOLSET "}),Object(a.jsx)("div",{className:"resume__section__grid",children:I.map((function(e){return Object(a.jsx)(A,{title:e.title,role:e.role,location:e.location,date:e.date})}))})]})]})},E=(i(51),i(11)),N=function(){return Object(a.jsx)("div",{class:"blog",id:"blog",children:Object(a.jsx)("div",{className:"coming_soon",children:Object(a.jsxs)(E.Parallax,{pages:2,ref:function(e){return e},children:[Object(a.jsx)(E.ParallaxLayer,{offset:.3,speed:0,children:Object(a.jsx)("h1",{className:"coming_soon_0",children:" Blog "})}),Object(a.jsx)(E.ParallaxLayer,{offset:.5,speed:1,children:Object(a.jsx)("span",{className:"coming_soon_1",children:"Scroll down!"})})]})})})};var C=function(){return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)(j,{}),Object(a.jsx)(v,{})]})},D=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(p,{}),Object(a.jsx)(g,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:C}),Object(a.jsx)(l.a,{exact:!0,path:"/projects/:id",children:Object(a.jsx)(x,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/cv",children:Object(a.jsx)(T,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/blog",children:Object(a.jsx)(N,{})})]}),Object(a.jsx)(m,{})]})},R=i(28),M=i(29),L=i(31),H=i(30),P=function(e){Object(L.a)(i,e);var t=Object(H.a)(i);function i(){return Object(R.a)(this,i),t.apply(this,arguments)}return Object(M.a)(i,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),i}(r.Component),G=Object(l.h)(P);s.a.render(Object(a.jsx)(c.a,{children:Object(a.jsx)(G,{children:Object(a.jsx)(D,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.5c0e3aa8.chunk.js.map