let theme = localStorage.getItem('theme');

if(theme == null){
  setTheme('light');
} else {
  setTheme(theme);
}


let themeBtns = document.getElementsByClassName('theme-btn');

for (var i=0; themeBtns.length > i; i++){
  themeBtns[i].addEventListener('click', function(){
    let mode = this.dataset.mode
    setTheme(mode);
  })
}

function setTheme (mode) {
  if(mode == 'light'){
    document.getElementById('theme-style').href = 'default.css'
    document.getElementById('light-mode').style.display = "none";
    document.getElementById('blue-mode').style.display = "initial";
  } 
  if(mode == 'blue'){
    document.getElementById('theme-style').href = 'blue.css'
    document.getElementById('blue-mode').style.display = "none";
    document.getElementById('light-mode').style.display = "initial";
  }

  localStorage.setItem('theme', mode);
}