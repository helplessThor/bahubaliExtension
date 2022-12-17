

function bahubali(){
    let runButton = document.querySelectorAll('button, .ui-btn')[5];
    console.log(runButton);
    runButton.addEventListener('click', () => {
        setTimeout(
            function() 
            {
              //do something special
              var successMessage = document.getElementsByClassName('congrats-heading')[0];
              console.log(successMessage);
              if (successMessage){
                  alert('Congratulations Bahubali');
                  let url = chrome.runtime.getURL('bahubali.mp3');
                  console.log(url)
              
                  let a = new Audio(url)
                  a.play();
              }
            }, 8000);
    });
}

window.addEventListener('load', ()=>{
    setTimeout(
        function() 
        {
            bahubali();
        }, 1000);
});
