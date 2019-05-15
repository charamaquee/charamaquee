


function giveNegative(){
  var negative = ["selfish" , "stubborn" , "arrogant" , "unintelligent" , "dishonest", "inappropriate" , "manipulative" , "absentminded" , "depressive" , "anxious"];

  
  var randomNItem = negative[Math.floor(Math.random()*negative.length)];
  console.log("Ran my bitchin function yo");

  document.getElementById('outputNegative').innerHTML = randomNItem;

return randomNItem;
}

function givePositive(){
  var positive = ["kind" , "caring" , "intelligent" , "confident" , "tactful", "funny" , "charismatic" , "realistic" , "happy" , "laid back"];

  
  var randomPItem = positive[Math.floor(Math.random()*positive.length)];
  console.log("Ran my bitchin function yo");

  document.getElementById('outputPositive').innerHTML = randomPItem;

return randomPItem;
}

function giveNeutral(){
  var neutral = ["silly" , "bubbly" , "sophisticated" , "mature" , "immature", "competitive" , "sarcastic" , "sensitive" , "loud" , "shy"];

  
  var randomNeItem = neutral[Math.floor(Math.random()*neutral.length)];
  console.log("Ran my bitchin function yo");

  document.getElementById('outputNeutral').innerHTML = randomNeItem;

return randomNeItem;
}

function giveColor(){
  var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

  document.getElementById('outputColor').innerHTML = randomColor;

  document.getElementById('hex').style.backgroundColor= randomColor;

return randomColor;
}


function giveAesthetic(){
  var aesthetic = ["gothic" , "doll" , "cosmic" , "nerd" , "ocean", "sky" , "arthoe" , "plants" , "witch" , "punk"];

  
  var randomAesthetic = aesthetic[Math.floor(Math.random()*aesthetic.length)];
  console.log("Ran my bitchin function yo");

  document.getElementById('outputAesthetic').innerHTML = randomAesthetic;

return randomAesthetic;
}







function giveGender(){
  var gender = ["female" , "male"];

  
  var randomGender = gender[Math.floor(Math.random()*gender.length)];
  console.log("Ran my bitchin function yo");

  document.getElementById('outputGender').innerHTML = randomGender;

return randomGender;
}

function giveAge(){
  var age = ["toddler" , "child" , "preteen" , "young teen" , "older teen", "young adult" , "adult" , "middle aged" , "senior" , "super old"];

  
  var randomAge = age[Math.floor(Math.random()*age.length)];
  console.log("Ran my bitchin function yo");

  document.getElementById('outputAge').innerHTML = randomAge;

return randomAge;
}

function giveSpecies(){
  var species = ["human" , "mermaid" , "vampire" , "werewolf" , "deity", "kemonomimi" , "human" , "human" , "human" , "human"];

  
  var randomSpecies = species[Math.floor(Math.random()*species.length)];
  console.log("Ran my bitchin function yo");

  document.getElementById('outputSpecies').innerHTML = randomSpecies;

return randomSpecies;
}
function giveHeight(){
  var height = ["tall" , "very tall" , "average" , "short" , "very short", "extremely tall" , "extremely short"];

  
  var randomHeight = height[Math.floor(Math.random()*height.length)];
  console.log("Ran my bitchin function yo");

  document.getElementById('outputHeight').innerHTML = randomHeight;

return randomHeight;
}

function giveBuild(){
  var build = ["extremely skinny" , "very skinny" , "skinny" , "average" , "muscular", "very muscular" , "slightly chubby" , "chubby" , "very chubby" , "curvy"];

  
  var randomBuild = build[Math.floor(Math.random()*build.length)];
  console.log("Ran my bitchin function yo");

  document.getElementById('outputBuild').innerHTML = randomBuild;

return randomBuild;
}

function giveObj(){
  var obj = ["flower" , "leaf" , "cloud" , "bird" , "star", "sun" , "moon" , "planet" , "fish" , "tree", "cat", "bunny", "frog", "candy", "fruit", "cookie", "berry", "clock", "crystal"];

  
  var randomObj = obj[Math.floor(Math.random()*obj.length)];
  console.log("Ran my bitchin function yo");

  document.getElementById('outputObj').innerHTML = randomObj;

//return randomObj;
}







function giveGirlName(){
  var firstSyl = ["mar", "mam", "merc", "per","pet","viv", "petr", "pix","row","sor","sol", "sun","ver", "len", "lav","lor","els","fin", "flav","gl","hal", "hon","cin","jes","kel", "ket", "glyn","fl","en", "dov", "dw", "elec", "elect" ,"ad", "amor", "andr", "arc", "av", "ayl", "beth", "bryon", "br", "cal", "cat", "circ", "cir", "cres", "ol", "av", "sol", "soph", "char", "am", "ros" , "gal" , "ocean" , "atom" , "flor", "astr" , "ev" , "an" , "lil" , "min" , "bir" , "angel", "roch" , "mol"];

  var secondSyl = ["a" , "e" , "i" , "o" , "y",];

  var thirdSyl = ["etta","ore","via", "avia" ,"id","ona","ecca", "d", "alda", "elle", "ille" , "ette" , "ele" , "alie" , "elie", "ylie", "ily", "nelle" , "nnie", "nella", "relle", "rella", "nry", "erie", "ryn", "lila"];


  var randomFirstSyl = firstSyl[Math.floor(Math.random()*firstSyl.length)];
  //console.log("Ran my bitchin function yo");

  
  var randomThirdSyl = thirdSyl[Math.floor(Math.random()*thirdSyl.length)];
  // console.log("Ran my bitchin function yo");

  var firstThirdSylChar = randomThirdSyl.charAt();
  var randomSecondSyl = "";
  console.log(firstThirdSylChar);

  if( firstThirdSylChar != "e" && firstThirdSylChar != "a" && firstThirdSylChar != "i" && firstThirdSylChar != "o" && firstThirdSylChar != "u" && firstThirdSylChar != "y"){
    console.log(firstThirdSylChar);
    randomSecondSyl = secondSyl[Math.floor(Math.random()*secondSyl.length)];
    console.log("There wasnt a vowel");
  }

  document.getElementById('outputGirlName').innerHTML = randomFirstSyl + randomSecondSyl + randomThirdSyl;

}

function giveBoyName(){
  var firstSyl = ["abn", "adl", "ambr", "am", "atl", "aurel", "azr", "cas", "casp", "clem", "const", "cyp", "cypr", "edm", "ed", "ever","fin", "flin","isid", "jer","jol","ken", "kof","lean", "leand","lin", "luth", "lyn", "mac", "mar", "mer", "merc", "nil", "oct","quen", "quin", "rob", "rom", "ros", "slat", "stel", "thor", "tob", "tor", "wil", "wint", "wol", "wolf","zen", "zeph"];



  var thirdSyl = ["ose", "ai" , "er", "ias", "ole", "us", "on" , "ius" , "an", "iel", "ael", "ar", "ian","ent","ion", "ond","is", "est", "old"];


  var randomFirstSyl = firstSyl[Math.floor(Math.random()*firstSyl.length)];
  //console.log("Ran my bitchin function yo");

  
  var randomThirdSyl = thirdSyl[Math.floor(Math.random()*thirdSyl.length)];
  // console.log("Ran my bitchin function yo");

  var firstThirdSylChar = randomThirdSyl.charAt();
  var randomSecondSyl = "";
  console.log(firstThirdSylChar);

 

  document.getElementById('outputBoyName').innerHTML = randomFirstSyl + randomThirdSyl;

}









