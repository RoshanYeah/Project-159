AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this. createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "aquaman",
        title: "Aquaman",
        url: "./assets/aquaman-comic.jpg",
      },
      {
        id: "flash",
        title: "Flash",
        url: "./assets/flash-comic.jpg",
      },

      {
        id: "spiderman",
        title: "Spiderman",
        url: "./assets/spiderman-comic.jpg",
      },
      {
        id: "superman",
        title: "Superman",
        url: "./assets/superman-comic.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      var borderEl = this.createBorder(position,item.id)
      // Thumbnail Element
      var thumbnailEl = this.createThumbnail(item)
      borderEl.appendChild(thumbnailEl)
      // Title Text Element
      var titleEl = this.createTitle(position,item)
      borderEl.appendChild(titleEl)

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position,id){
    var borderElement = document.createElement("a-entity")

    borderElement.setAttribute("id", id)
    borderElement.setAttribute("visible", true)
    borderElement.setAttribute("geometry", {
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10
    })
    borderElement.setAttribute("position", position)
    borderElement.setAttribute("material", {color:"red",opacity:1})
    
    return borderElement
  },
  createThumbnail: function(item){
    var thumbnailElement = document.createElement("a-entity")

    thumbnailElement.setAttribute("visible", true)
    thumbnailElement.setAttribute("geometry", {
      primitive:"circle",
      radius:9
    })
    thumbnailElement.setAttribute("material",{src:item.url})

    return thumbnailElement
  },
  createTitle: function(position,item){
    var titleElement = document.createElement("a-entity")

    titleElement.setAttribute("text", {value:item.title, color:"black", align:'center', width:90, font:"exo2bold"})
    var titlePos = position
    titlePos.y = -20
    titleElement.setAttribute("position",titlePos)
    titleElement.setAttribute("visible",true)

    return titleElement
  },

  
});