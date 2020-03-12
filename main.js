//Item generator

//Event listener for click on image
document.getElementById("clckbox").addEventListener("click", genItem);

//declaring global vars
let numBan = 0;
let numGreenShl = 0;
let numStar = 0;
let numGoldMush = 0;
let numbullBill = 0;

//declare function
function genItem() {
  //generate random number
  let ranNumb = Math.random(); // decimal 0-1
  console.log(ranNumb);

  //if statement for position, postition above 6
  if (document.getElementById("posNum").value <= 6) {
    if (ranNumb <= 0.45) {
      console.log("Banana");
      numBan++ 
      document.getElementById('Banana').innerHTML = numBan
      document.getElementById('results-text').innerHTML = 'Banana';
      document.getElementById('resultImg').src = 'images/banana.jpg';
    } else if (ranNumb <= 0.8) {
      console.log("Green shell");
      numGreenShl++
      document.getElementById('Green-shell').innerHTML = numGreenShl
      document.getElementById('results-text').innerHTML = 'Green Shell';
      document.getElementById('resultImg').src = 'images/greenshell.jpg';
    } else if (ranNumb <= 0.95) {
      console.log("star");
      numStar++
      document.getElementById('star').innerHTML = numStar
      document.getElementById('results-text').innerHTML = 'Star';
      document.getElementById('resultImg').src = 'images/star.jpg';
    } else if (ranNumb <= 0.99) {
      console.log("Golden mushroom");
      numGoldMush++
      document.getElementById('Golden-mushroom').innerHTML = numGoldMush
      document.getElementById('results-text').innerHTML = 'Golden Mushroom';
      document.getElementById('resultImg').src = 'images/Goldenmushroom.jpg';
    } else {
      console.log("Bullet bill");
      numbullBill++
      document.getElementById('Bullet-bill').innerHTML = numbullBill
      document.getElementById('results-text').innerHTML = 'Bullet Bill';
      document.getElementById('resultImg').src = 'images/Bulletbill.jpg';
    }
    // postion below 7 0.35 0.65 0.90 0.95
  } else {
    if (ranNumb <= 0.05) {
        console.log("Banana");
        numBan++ 
        document.getElementById('Banana').innerHTML = numBan
        document.getElementById('results-text').innerHTML = 'Banana';
        document.getElementById('resultImg').src = 'images/banana.jpg';
      } else if (ranNumb <= 0.10) {
        console.log("Green shell");
        numGreenShl++
        document.getElementById('Green-shell').innerHTML = numGreenShl;
        document.getElementById('results-text').innerHTML = 'Green Shell';
        document.getElementById('resultImg').src = 'images/greenshell.jpg';
      } else if (ranNumb <= 0.35) {
        console.log("star");
        numStar++
        document.getElementById('star').innerHTML = numStar
        document.getElementById('results-text').innerHTML = 'Star';
        document.getElementById('resultImg').src = 'images/star.jpg';
      } else if (ranNumb <= 0.70) {
        console.log("Golden mushroom");
        numGoldMush++
        document.getElementById('Golden-mushroom').innerHTML = numGoldMush;
        document.getElementById('results-text').innerHTML = 'Golden Mushroom';
        document.getElementById('resultImg').src = 'images/Goldenmushroom.jpg';
      } else {
        console.log("Bullet bill");
        numbullBill++
        document.getElementById('Bullet-bill').innerHTML = numbullBill;
        document.getElementById('results-text').innerHTML = 'Bullet Bill';
        document.getElementById('resultImg').src = 'images/Bulletbill.jpg';
      }
  }
}
