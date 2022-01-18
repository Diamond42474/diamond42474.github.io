const coffeeFlavors = ["vanilla","caramel","toasted marshmellow","peppermint","almond","hazlenut","coconut","lavander","almaretto","maple","apple","chai","elephant chai","dark chocolate","white chocolate","caramel","pumpkin"];
const stampedeFlavors = ["apple","blueberry","blueraspberry","blood orange","cherry","cranberry","coconut","grapefruit","green apple","kiwi","lemon","lime","lavander","mango","melon","pineapple","rose","raspberry","strawberry","tangerine","watermelon"];

function makeLatte(){
    document.getElementById("id_type").innerHTML = "Latte";
    numOfFlavors = Math.floor(Math.random() * 3) + 1;
    flavors = ["","",""];
    i = 0;
    while(i<numOfFlavors){
        flavors[i] = coffeeFlavors[Math.floor(Math.random() * coffeeFlavors.length)];
        i++;
    }
    document.getElementById("id_flavor1").innerHTML = flavors[0];
    document.getElementById("id_flavor2").innerHTML = flavors[1];
    document.getElementById("id_flavor3").innerHTML = flavors[2];
}
function makeFresh(){
    numOfFlavors = Math.floor(Math.random() * 3) + 1;
    flavors = ["","",""];
    i = 0;
    while(i<numOfFlavors){
        flavors[i] = stampedeFlavors[Math.floor(Math.random() * stampedeFlavors.length)];
        i++;
    }
    document.getElementById("id_flavor1").innerHTML = flavors[0];
    document.getElementById("id_flavor2").innerHTML = flavors[1];
    document.getElementById("id_flavor3").innerHTML = flavors[2];;
}
function makeLemonade(){
    document.getElementById("id_type").innerHTML = "Lemonade";
    makeFresh();
}
function makeStampede(){
    document.getElementById("id_type").innerHTML = "Stampede";
    makeFresh();
}
function makeTea(){
    document.getElementById("id_type").innerHTML = "Tea";
    makeFresh();
}