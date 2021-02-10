var beer_cost = 6.75;
var burgur_cost = 5.00;
var pop_cost = 3.00;

var account_blacalce = 15.75;
//Drink beer
function drink_beer(){
    account_blacalce = account_blacalce - beer_cost;
    console.log(account_blacalce);
}
// Eat burger
function Eat_burgur (){ 
    account_blacalce = account_blacalce - burgur_cost;
    console.log(account_blacalce);
    }
 // Drink pop
function Drink_pop (){
 account_blacalce = account_blacalce - pop_cost;
 console.log(account_blacalce);
}

drink_beer();
Eat_burgur();
Drink_pop();