let rectangles = document.querySelectorAll(".rectangle");

let palette = ["#B7C2AD", "#B0D1E8", "#F9D09F", "#FDD8E9", "#D2BDDB"];

for (let rectangle of rectangles) {
    let randomColorIndex = Math.floor(Math.random() * palette.length);
    rectangle.style.backgroundColor = palette[randomColorIndex];
}

let randomColor = Math.floor(Math.random() * palette.length);
 



rectangle[1].style.backgroundColor= palette[randomColor];
rectangle[2].style.backgroundColor= palette[randomColor];
rectangle[3].style.backgroundColor= palette[randomColor];
rectangle[4].style.backgroundColor= palette[randomColor];
rectangle[5].style.backgroundColor= palette[randomColor];
rectangle[6].style.backgroundColor= palette[randomColor];
rectangle[7].style.backgroundColor= palette[randomColor];
rectangle[8].style.backgroundColor= palette[randomColor];
rectangle[9].style.backgroundColor= palette[randomColor];
rectangle[10].style.backgroundColor= palette[randomColor];
rectangle[11].style.backgroundColor= palette[randomColor];
rectangle[12].style.backgroundColor= palette[randomColor];