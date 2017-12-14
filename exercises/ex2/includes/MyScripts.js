function blocks() {

  
    var blockArr = document.getElementById("blocks");
    blockArr.lastChild.innerHTML = "";
    blockArr.lastChild.removeEventListener('click',blocks);
    blockArr.lastChild.addEventListener('click',white_star);

    /*//////////////////create  blocks////////////////*/
    var newBlocks = document.createElement("p");
    newBlocks.style.backgroundColor = getRandomColor();
	var plus = document.createElement('img');
	plus.src = "images/white_plus.png";
    newBlocks.appendChild(plus);
    newBlocks.addEventListener('click', blocks);

  /*//////////////////Add blocks to end////////////////*/
    blockArr.appendChild(newBlocks);
}
/*//////////////////Add starting blocks////////////////*/
function AddBlocks(){
    var init = function () {
        for(var i = 0 ; i < 26 ; ++i) {
            this.blocks();
        }
    };
    init();
}
/*//////////////////Make random color for blocks////////////////*/
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
/*//////////////////Add white star to the blocks on click////////////////*/
function white_star() {
    if(this.childElementCount === 0) {
        var white_star = document.createElement('img');
        white_star.src = "images/white_star.png";
        this.appendChild(white_star);

    } else {
        this.removeChild(this.lastChild);
    }
}


