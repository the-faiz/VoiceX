const notificationBar = document.getElementById('secnav');
notificationBar.style.display='none';
function toggle() {
    var icon = document.getElementById('icon');
    console.log("inside1");
    if (notificationBar.style.display==='none'){
        notificationBar.style.display = 'block';
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
        icon.classList.add('fa-1.7x');
    }
    else{
        notificationBar.style.display='none';
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
        icon.classList.remove('fa-1.7x');
    }
  }

//   <i class="fa-solid fa-xmark"></i>