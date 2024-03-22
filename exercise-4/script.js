
let word1 = ["wheat", "books", "sunflowers", "hair", "oranges", "bagels", "lies", "yellow hair-clips", "dream"];
let word2 = ["NYC ", "fire", "east river", "snow", "mountains", "love", "gold", "diamonds", "starlight"];
let word3 = ["dances", "cries", "laughs", "runs", "catches a breathe", "screams", "faints", "shines", "blows up"];
let word4 = ["moonbeams'", "her joyous spirit", "energy", "her passion", "her love", "her hate", "her emotions", "her vitality", "her beauty"];
let word5 = ["grace'", "pizza", "coffee", "glitter", "nachos", "varsity caps", "kittens", "burritos", "bacon"];

let span1 = document.getElementById('word1');
let span2 = document.getElementById('word2');
let span3 = document.getElementById('word3');
let span4 = document.getElementById('word4');
let span5 = document.getElementById('word5');

let randomDream = Math.floor(Math.random() * word1.length);
let randomStarlight = Math.floor(Math.random() * word2.length);
let randomDances = Math.floor(Math.random() * word3.length);
let randomMoon = Math.floor(Math.random() * word4.length);
let randomGrace = Math.floor(Math.random() * word5.length);

span1.innerHTML = " " + word1[randomDream] + " ";

span2.innerHTML = " " + word2[randomStarlight]  + " ";

span3.innerHTML = " " + word3[randomDances]  + " ";

span4.innerHTML = " " + word4[randomMoon]  + " ";

span5.innerHTML = " " + word5[randomGrace]  + " ";

