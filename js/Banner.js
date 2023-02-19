AFRAME.registerComponent("info-banner", {
  init:function(){
    const bannerContainer = document.querySelector("#banner-container");
    const { selectedItemId } = placesContainer.getAttribute("tour")
  },
  update: function(){
    this.createCard()
  },
  createCard:function(){
    // Description
    const descriptionDict = [
      {
        description:"Spider-Man, comic-book character who was the original everyman superhero. In Spider-Man's first story, in Marvel Comics Amazing Fantasy, no. 15 (1962), American teenager Peter Parker, a poor sickly orphan, is bitten by a radioactive spider.",
        id:"spiderman",
        title:"Spiderman",
        url:"https://i.pinimg.com/736x/41/da/fa/41dafa9cf0dfab7a3afc1ccc768aafbe--amazing-spider-spider-man.jpg"
      },
      {
        description:"Superman is an ongoing American comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics #1 in June 1938.",
        id:"superman",
        title:"Superman",
        url:"https://3.bp.blogspot.com/-2YBgRjOMLos/WrLhHOiO-WI/AAAAAAAAKLk/GDl6idY2s9Q9lPEdv_qfpQth4p4ddyw-gCLcBGAs/s1600/Superman008D.JPG"
      },
      {
        description:"Character » Aquaman appears in 4272 issues. The son of an Atlantean queen and a lighthouse keeper from the town of Amnesty Bay, Arthur Curry would grow up to become the superhero Aquaman, and later take on his birthright as the King of Atlantis. He is a founding member of the Justice League and is among DC Comics' most recognized heroes.",
        id:"aquaman",
        title:"Aquaman",
        url:"https://th.bing.com/th/id/OIP.J5a5UuuxTtfYvyN86wNMrQHaF3?pid=ImgDet&rs=1"
      },
      {
        description:"The Flash is an ongoing American comic book series featuring the DC Comics superhero of the same name. Throughout its publication, the series has primarily focused on two characters who have worn the mantle of the Flash: Barry Allen, the second Flash (1959-1985, 2010-2020), and Wally West, the third Flash (1987-2006, 2007-2008, 2021-present).",
        id:"flash",
        title:"Flash",
        url:"https://th.bing.com/th/id/OIP.Gml4O3DCQj3b9WHDdq5eQwHaEo?pid=ImgDet&rs=1"
      },
    ]

    for(var item in descriptionDict){
      const posX = 0
      const posY = 0
      const posZ = -10
      const position = {x:posX,y:posY,z:posZ};

      // Banner Element
      const bannerEl = this.createBanner(position,item.id)
      
      // Description Element
      const descriptionEl = this.createDescription(position,item.description)
      bannerEl.appendChild(descriptionEl);

      // Image Element
      const imageEl = this.createImage(item.url);
      bannerEl.appendChild(imageEl);

      // Title Text Element
      const titleEl = this.createTitle(position, item);
      bannerEl.appendChild(titleEl);

      this.bannerContainer.appendChild(bannerEl);
    }
  },
  createBanner:function(position,id){
      const bannerEl = document.createElement("a-entity");
      bannerEl.setAttribute("id", id);
      bannerEl.setAttribute("visible", true);
      bannerEl.setAttribute("geometry", {
      primitive: "plane",
      width:20,
      height:30,
      });
      bannerEl.setAttribute("position", position);
      bannerEl.setAttribute("material", {
        color: "black",
        opacity:1
      });
      bannerEl.setAttribute("cursor-listener", {});
      return bannerEl;
  },
  createTitle:function(position,item){
      const titleElement = document.createElement("a-entity")
      titleElement.setAttribute("text", {
        value:item.title,
        color:"black", align:'center',
        width:80,
        font:"exo2bold"
      })
      const titlePos = position
      titlePos.y = -5
      titleElement.setAttribute("position",titlePos)
      titleElement.setAttribute("visible",true)
      return titleElement
  },
  createDescription:function(position,item){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 30,
      color: "#e65100",
      value: item.description
    });
    const elPosition = position;
    elPosition.y = -10;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;

  },
  createImage:function(item){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width:20,
      height:10
    });
    entityEl.setAttribute("material", { src: item.url });
    return entityEl;
  }
})