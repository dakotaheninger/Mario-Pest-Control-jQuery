//CHANGE TOTAL GOOMBA COUNT************
//*************************************
//*************************************

var goombaTotal = 12;
var newGoombaTotal = 0;
var goombaValue = 0;

var showGoombaCapt = function () {

    $("#total-goomba").html(newGoombaTotal);
};
var changeGoombaCapt = function () {
    newGoombaTotal = goombaTotal + goombavalue;
    showGoombaCapt();

};


var checkIfGoombaNumber = function () {
    goombaValue = parseInt($("#goomba-input").val());
    if (!goombaValue) {
        newGoombaTotal = 12;
        $("#total-goomba").html(newGoombaTotal);

    } else {
        changeGoombaCapt();
    }
};


$("#goomba-input").on("keyup", checkIfGoombaNumber);
$("#goomba-input").on("mouseup", checkIfGoombaNumber);


//CHANGE TOTAL GOOMBA AMOUNT***********
//*************************************
//*************************************
var goombaCoins = 0;
var absoluteGoombaCoins = 60;
var changeGoombaAmount = function () {
    goombaCoins = (newGoombaTotal * 5) + " COINS";
    absoluteGoombaCoins = (newGoombaTotal * 5);
    $("#total-goomba-money").html(goombaCoins);
};

$("#goomba-input").on("keyup", changeGoombaAmount);
$("#goomba-input").on("mouseup", changeGoombaAmount);


//CHANGE TOTAL BOB-OMB COUNT***********
//*************************************
//*************************************
var bobOmbTotal = 8;
var newBobOmbTotal = 0;
var bobOmbValue = 0;

var showBobOmbCapt = function () {
    $("#total-bob-omb").html(newBobOmbTotal);
};
var changeBobOmbCapt = function () {
    newBobOmbTotal = bobOmbTotal + bobOmbvalue;
    showBobOmbCapt();

};


var checkIfBobOmbNumber = function () {
    bobOmbValue = parseInt(document.getElementById("bob-omb-input").value);
    if (!bobOmbValue) {
        newBobOmbTotal = 8;
       $("#total-bob-omb").html(newBobOmbTotal);

    } else {
        changeBobOmbCapt();
    }
};


$("#bob-omb-input").on("keyup", checkIfBobOmbNumber);
$("#bob-omb-input").on("mouseup", checkIfBobOmbNumber);


//CHANGE TOTAL BOB-OMB AMOUNT**********
//*************************************
//*************************************
var bobOmbCoins = 0;
var absoluteBobOmbCoins = 56;
var changeBobOmbAmount = function () {
    bobOmbCoins = (newBobOmbTotal * 7) + " COINS";
    absoluteBobOmbCoins = (newBobOmbTotal * 7);
    $("#total-bob-omb-money").html(bobOmbCoins);
};

$("#bob-omb-input").on("keyup", changeBobOmbAmount);
$("#bob-omb-input").on("mouseup", changeBobOmbAmount);


//CHANGE TOTAL CHEEP-CHEEP COUNT*******
//*************************************
//*************************************
var cheepCheepTotal = 5;
var newCheepCheepTotal = 0;
var cheepCheepValue = 0

var showCheepCheepCapt = function () {

    $("#total-cheep-cheep").html(newCheepCheepTotal);
};
var changeCheepCheepCapt = function () {
    newCheepCheepTotal = cheepCheepTotal + cheepCheepvalue;
    showCheepCheepCapt();

};


var checkIfCheepCheepNumber = function () {
    cheepCheepValue = parseInt(document.getElementById("cheep-cheep-input").value);

    if (!cheepCheepValue) {
        newCheepCheepTotal = 5
        $("#total-cheep-cheep").html(newCheepCheepTotal);

    } else {
        changeCheepCheepCapt();
    }
};


$("#cheep-cheep-input").on("keyup", checkIfCheepCheepNumber);
$("#cheep-cheep-input").on("mouseup", checkIfCheepCheepNumber);


//CHANGE TOTAL CHEEP-CHEEP AMOUNT******
//*************************************
//*************************************
var cheepCheepCoins = 0;
var absoluteCheepCheepCoins = 55;
var changeCheepCheepAmount = function () {
    cheepCheepCoins = (newCheepCheepTotal * 11) + " COINS";
    absoluteCheepCheepCoins = (newCheepCheepTotal * 11);
    $("#total-cheep-cheep-money").html(cheepCheepCoins);
};

$("#cheep-cheep-input").on("keyup", changeCheepCheepAmount);
$("#cheep-cheep-input").on("mouseup", changeCheepCheepAmount);


//CHANGE ABSOLUTE TOTAL AMOUNT*********
//*************************************
//*************************************
var completeTotal = 0;
var changeAbsoluteTotal = function () {
    completeTotal = (absoluteGoombaCoins + absoluteBobOmbCoins + absoluteCheepCheepCoins);
    $("#absolute-total").html(completeTotal + " COINS");
};

$("#goomba-input").on("keyup", changeAbsoluteTotal);
$("#bob-omb-input").on("keyup", changeAbsoluteTotal);
$("#cheep-cheep-input").on("keyup", changeAbsoluteTotal);
$("#goomba-input").on("mouseup", changeAbsoluteTotal);
$("#bob-omb-input").on("mouseup", changeAbsoluteTotal);
$("#cheep-cheep-input").on("mouseup", changeAbsoluteTotal);


//MAKE GOOMBA PICTURE SMOOSH***********
//*************************************
//*************************************
var goombaSmoosh = function () {
    $("#goomba-capt").html("<img class=\"goomba-align\" alt=\"Goomba\" src=\"images/solo%20goomba.png\" height=\"50\" width=\"300\">");
};

var goombaUnSmoosh = function () {
    $("#goomba-capt").html("<img class=\"goomba-align\" alt=\"Goomba\" src=\"images/solo%20goomba.png\" height=\"200\">");
};
$("#goomba-input").on("keydown", goombaSmoosh);
$("#goomba-input").on("keyup", goombaUnSmoosh);
$("#goomba-input").on("mousedown", goombaSmoosh);
$("#goomba-input").on("mouseup", goombaUnSmoosh);


//MAKE BOB-OMB PICTURE EXPLODE*********
//*************************************
//*************************************
var bobOmbSmoosh = function () {
    $("#bob-omb-capt").html("<img  class=\"bob-omb-align\" alt=\"Explosion\" src=\"images/explosion.png\" height=\"200\">");
};

var bobOmbUnSmoosh = function () {
    $("#bob-omb-capt").html("<img class=\"bob-omb-align\" alt=\"Bob-omb\" src=\"images/solo%20bob-omb.png\" height=\"200\">");
};
$("#bob-omb-input").on("keydown", bobOmbSmoosh);
$("#bob-omb-input").on("keyup", bobOmbUnSmoosh);
$("#bob-omb-input").on("mousedown", bobOmbSmoosh);
$("#bob-omb-input").on("mouseup", bobOmbUnSmoosh);


//MAKE CHEEP-CHEEP PICTURE SMOOSH******
//*************************************
//*************************************

var cheepCheepSmoosh = function () {
    $("#cheep-cheep-capt").html("<img class=\"cheep-cheep-align\" alt=\"Cheep-cheep\" src=\"images/solo%20cheep-cheep.png\" height=\"50\" width=\"300\">");
};

var cheepCheepUnSmoosh = function () {
    $("#cheep-cheep-capt").html("<img class=\"cheep-cheep-align\" alt=\"Cheep-cheep\" src=\"images/solo%20cheep-cheep.png\" height=\"200\">");
};
$("#cheep-cheep-input").on("keydown", cheepCheepSmoosh);
$("#cheep-cheep-input").on("keyup", cheepCheepUnSmoosh);
$("#cheep-cheep-input").on("mousedown", cheepCheepSmoosh);
$("#cheep-cheep-input").on("mouseup", cheepCheepUnSmoosh);
