AFRAME.registerComponent("cursor-listener", {
      schema: {
        selectedItemId: { default: "", type: "string" },
      },
      init: function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
      },
      update:function(){
        const fadeBackGroundEl = document.querySelector("#fadeBackground");

        c = fadeBackGroundEl.children
        if(c.length>0){
          var i;
          for(i=0;i<=c.length;i++){
            fadeBackGroundEl.removeChild(c[i])
          }
        }else{
          this.handleMouseClick()
        }
      },
      handleMouseEnterEvents: function () {
        // Mouse Enter Events
        this.el.addEventListener("mouseenter", (e) => {
            const id = this.el.getAttribute("id");
            const placesId = [
                "aquaman", 
                "flash", 
                "spiderman", 
                "superman"
            ];
            if (placesId.includes(id)) {
              const placeContainer = document.querySelector("#places-container");
              placeContainer.setAttribute("cursor-listener", {
                selectedItemId: id,
              });
              this.el.setAttribute("material", {color: "#1565c0"});
            }
        });
      },
      handleMouseLeaveEvents: function () {
        // Mouse Leave Events
        this.el.addEventListener("mouseleave", (e) => {
          const {selectedItemId} = this.data;
          if(selectedItemId){
            const el = document.querySelector(`#${selectedItemId}`);
            const id = el.getAttribute('id')
            if(id == selectedItemId){
              el.setAttribute("material",{color:"red"})
            }
          }
        })
        
      },
      handleMouseClick:function(){
        this.el.addEventListener("click", (e)=>{
          const {selectedItemId} = this.data;
          const fadeBackGroundEl = document.querySelector("#fadeBackground");
          const titleEl = document.querySelector("#app-title");
          const cursorEl = document.querySelector("#camera-cursor");
          if(selectedItemId){
            fadeBackGroundEl.setAttribute("visible", true);
            fadeBackGroundEl.setAttribute("info-banner",{
              itemId: selectedItemId,
            });
            titleEl.setAttribute("visible", false);
            cursorEl.setAttribute("position",{x:0,y:0,z:-1});
            cursorEl.setAttribute("geometry",{
              radiusInner:0.03,
              radiusOuter:0.04,
            });
          }else{
            fadeBackGroundEl.setAttribute("visible", false)
            titleEl.setAttribute("visible",true)
            cursorEl.setAttribute("position",{x:0,y:0,z:-3})
            cursorEl.setAttribute("geometry",{
              radiusInner:0.08,
              radiusOuter:0.12,
            })
          }
        })
      }
})