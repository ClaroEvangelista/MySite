// Detects button pressed
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detects keyboard key pressed
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/drumKitSounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/drumKitSounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/drumKitSounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/drumKitSounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/drumKitSounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/drumKitSounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickbass = new Audio("sounds/drumKitSounds/kick-bass.mp3");
      kickbass.play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var validLettersArray = ["w", "a", "s", "d", "j", "k", "l"];

  if (validLettersArray.includes(currentKey)) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  } else {
    console.log(currentKey + " from buttonAnimation");
  }
}
  // The below using Switch also works!
  // switch (currentKey) {
  //   case "w":
  //   case "a":
  //   case "s":
  //   case "d":
  //   case "j":
  //   case "k":
  //   case "l":
  //     var activeButton = document.querySelector("." + currentKey);
  //     activeButton.classList.add("pressed");
  //     setTimeout(function() {
  //       activeButton.classList.remove("pressed");
  //     }, 100);
  //     break;
  //   default:
  //     console.log(currentKey + " from buttonAnimation");
