$(document).ready(function () {

// you must create and add to a list 
var groceryList = [];
var groceryListFinal = [];
var groceryListComparator = [];
function listIngredients(pname, quantity, units){
  this.pname = pname;
  this.quantity = quantity;
  this.units = units;
  if (units=undefined){
    units=="count";
  };
};
// Here is a jason string of recipes
  recipes = [
    {
      "name": "Eggs Benedict",
      "serves": 1,
      "ingredients": [["english muffins",2],["eggs",4],["butter",6,"tbsp"],["vinegar",1,"tbsp"],["canadian bacon",2],["lemon",1]],
      "instructions":"combine all that and make it good"
    },
    {
      "name": "Mushroom Omelette",
      "serves": 1,
      "ingredients": [["eggs",3],["shredded cheddar cheese",5,"oz"],["olive oil",2,"tbsp"],["mushrooms",12, "oz"]],
      "instructions":"mushrooms on a pan and bla bla bla"
    },
    {
      "name": "Grilled Cheese Sandwich",
      "serves": 2,
      "ingredients": [["bread",4],["butter",2,"tbsp"]],
      "instructions":"I can't hold your hand, make it yourself."
    },
    {
      "name": "pancakes",
      "serves": 12,
      "ingredients": [["butter",4,"tbsp"],["flour",8,"cps"],["maple syrup",1,"gal"]],
      "instructions":"make them flapjacks, fry fry fry and pour all the syrup on it."
    },
    {
      "name":"gummi bears",
      "serves": 1,
      "ingredients": [["gummi bears",30], ["butter",50,"tbsp"]],
      "instrutions":"eat the gummi bears."
    }
  ]
  for (var i in recipes){
    for (var x in recipes[i].ingredients){
      var singleIngredientArray = [];
      singleIngredientArray.push(recipes[i].ingredients[x]);
      for (var r in singleIngredientArray){
      var lister = new listIngredients(singleIngredientArray[r][0], singleIngredientArray[r][1], singleIngredientArray[r][2]);
        groceryListComparator.push(lister);
      }; 
    };
  };
console.log(groceryListComparator);
console.log(lister);


for (var b in groceryListComparator){
  var temp=true;
  if (groceryListFinal.length == 0) {
    var temp=false;
    console.log("juimmying cricket");
    groceryListFinal.push(groceryListComparator[b]);//pushes first object
  } else{
    for (var y in groceryListFinal){
      var name1 = groceryListFinal[y].pname;
      var name2 = groceryListComparator[b].pname;
      if (name1 == name2){
        var temp = false;
        function addIt(value1, value2){
          var total = value1 + value2;
          groceryListFinal[y].quantity = total;
        };
        addIt(groceryListComparator[b].quantity, groceryListFinal[y].quantity)
      }else {};//CANNOT PUSH AT THIS LEVEL BECAUSE YOU WILL PUSH FOR EVERY y in Final
    };//CANNOT PUSH AT THIS LEVEL BECAUSE YOU WILL PUSH FOR EVERY y in Final
  };
  if (temp) {
    groceryListFinal.push(groceryListComparator[b]);
  } else{};
};
for (var c in groceryListFinal){
console.log(groceryListFinal[c]);
};

});

//empty array, none of the objects were pushed into the array
// for (var x in groceryListObjects){
//   console.log(groceryListObjects[x]);
// };
// // what is passed into textnode? that would be a standalone ingredient, then a quantity, then a unit.
// // create a list of divs and each div contains three paragraphs(for sake of the model)
// // you really can't write this part until you figure out how to pass in the values of the ingredients.
// var ully = document.getElementById("population");
// //loop the createDomList for every ingredient
// function createDomList(){
//   var node=document.createElement("LI");
//   // var textnode=document.createTextNode(thenewskinny.typing);
//   var textnode=document.createTextNode(WHATEVER IS PASSED FROM THE OBJECT);
//   node.appendChild(textnode);
//   ully.appendChild(node);
// var containerElement=document.createElement('div');
// containerElement.setAttribute('class', 'container');
// var paragraphCreate = document.createElement('p');
// paragraphCreate.setAttribute('id','theContent');
// var contentsText = createTextNode(VARIABLE);//the ingredient, quantity and unit all pass into here.
// paragraphCreate.appendChild(contentsText);
// containerElement.appendChild(paragraphCreate);
// };