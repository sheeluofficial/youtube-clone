function navbar() {
    return `  <div id="left-nav">
    <i class="gg-menu" id="menu"></i>
     <i id="home" class="fab fa-youtube" style=" background-color: whitesmoke; padding: 0px 0px; "></i>
     <h4 id="youtube-logo">YouTube<sup>in</sup></h4>
 </div>

 <div id="center-nav">
     <div id="search-box">

         <input type="text" placeholder="Search" id="search-bar">
         <i class="fas fa-search" style="user-select: auto;" id="search-icon"></i>
     </div>
     <div id="voice-icon">
         <i class="fas fa-microphone"></i>
     </div>
 </div>

 <div id="right-nav">
     <div> <i class="fas fa-video" class="right-icons" id="shorts"></i></div>
     <div> <i class="fas fa-grip-horizontal" style="user-select: auto;" class="right-icons" id="more-app"></i></div>
     <div>   
         <i class="far fa-bell" style="user-select: auto;" class="right-icons" id="notification"></i></div>
     <div>
         <i class="fas fa-user-circle" class="right-icons" id="user-profile"></i></div>
    
 
 </div>`
}

export default navbar