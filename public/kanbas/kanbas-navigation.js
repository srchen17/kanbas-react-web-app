function KanbasNavigationBar() {
    return `
  <div class="wd-kanbas-nav">
  <ul class="list-group">
      <li class="list-group-item">
          <img src="../../images/neu-motto-icon.png"
          height="50px"/>

      </li>
      <li class="list-group-item">
          <a href="account-navigation.html">
              <span class = "fa-stack fa-1x">
                  <i class="fa-regular fa-circle fa-stack-2x" style="color:white"></i>
                  <i class="fas fa-user fa-stack-1x"  style="color:lightgray"></i>
                  </span>
              <br>
              Account</a>
      </li>
      <li class="list-group-item">
          <a href="#">
              <i class="fa-solid fa-gauge fa-2x" style="color:rgb(198, 13, 13)"></i>
              <br>
              Dashboard</a>
      </li>
      <li class="list-group-item">
          <a href="course-navigation.html">
              <i class="fa-solid fa-book fa-2x" style="color:rgb(198, 13, 13)"></i>
              <br>
              Courses</a>
      </li>
      <li class="list-group-item">
          <a href="#">
              <i class="fa-regular fa-calendar fa-2x" style="color:rgb(198, 13, 13)"></i>
              <br>
              Calendar</a>
      </li>
      <li class="list-group-item">
          <a href="#">
              <i class="fa-solid fa-inbox fa-2x" style="color:rgb(198, 13, 13)"></i>
              <br>
              Inbox</a>
      </li>
      <li class="list-group-item">
          <a href="#">
              <i class="fa-regular fa-clock fa-2x" style="color:rgb(198, 13, 13)"></i>
              <br>
              History</a>
      </li>
      <li class="list-group-item">
          <a href="#">
              <i class="fa-solid fa-computer fa-2x" style="color:rgb(198, 13, 13)"></i>
              <br>
              Studio</a>
      </li>
      <li class="list-group-item">
          <a href="#">
              <i class="fa-solid fa-right-from-bracket fa-2x" style="color:rgb(198, 13, 13)"></i>
              <br>
              Commons</a>
      </li>
      <li class="list-group-item">
          <a href="#">
              <i class="fa-solid fa-question fa-2x" style="color:rgb(198, 13, 13)"></i>
              <br>
              Help</a>
      </li>
  </ul>
  <div class="wd-kanbas-nav-bg"></div>
</div>
  `;
  }
  
  export default KanbasNavigationBar;