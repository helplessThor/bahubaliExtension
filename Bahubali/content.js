// console.log("Extension Open!!");

// if (document.getElementsByClassName("ui-btn ui-btn-normal ui-btn-primary pull-right hr-monaco-submit ui-btn-styled").clicked==true){

// 	var str = document.getElementsByClassName("congrats-heading")[0].innerText;
// 	console.log("Fetched String: "+str);
// }


// $( document ).ready(function() {
// 	$(".hr-monaco-submit").on('click', function(){
// 		var str = document.getElementsByClassName("congrats-heading")[0].innerText;
// 		console.log("Fetched String: "+str);
// 	})
// });


//chrome.runtime.getURL("path/to/file.mp3"));
// myAudio.play()

// document.addEventListener('DOMContentLoaded', function() {
// 	var audio = new Audio(chrome.runtime.getURL("C:/Users/KUNTAL/Documents/Extension/Jio Re Bahubali.mp3"));
// 	audio.play();
// });

//check for successful submission code every 500 ms
// setInterval(function() {
// 	var successMessage = document.querySelector('.congrats-heading')[0];
// 	if (successMessage){
// 		var audio = new Audio(chrome.runtime.getURL("C:/Users/KUNTAL/Documents/Extension/Jio Re Bahubali.mp3"));
// 		audio.play();
// 	}
// },500);




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