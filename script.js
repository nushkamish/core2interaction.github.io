
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function updateCircleColors() {
    var circles = document.querySelectorAll('.circle');
    var colors = ['#FF1B1C', '#FFD20A', '#33658A']; 
    shuffleArray(colors); 
    circles.forEach(function(circle, index) {
        circle.style.backgroundColor = colors[index];
    });
}

updateCircleColors(); 
setInterval(updateCircleColors, 1000); 
