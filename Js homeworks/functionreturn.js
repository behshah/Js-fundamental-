var beer_cost = 6.75;
var burgur_cost = 5.00;
var pop_cost = 3.00;

var account_blacalce = 15.75;

// Checking the account balance function
function checkBalance(amt){
if (account_blacalce - amt >= 0 ) {
    return true;
}else {
    console.log('INSUFICIENT FUNDS')
    return false;
 }
}

//Drink beer
function drink_beer(){
    if (checkBalance(beer_cost)){
    account_blacalce = account_blacalce - beer_cost;
    console.log( 'ENJOY YOUR  BEER')
    }
    console.log('\tBalance :', account_blacalce.toFixed(2));
}
// Eat burger
function eat_burgur (){ 
    if (checkBalance(burgur_cost)){
    account_blacalce = account_blacalce - beer_cost;
    console.log( 'ENJOY YOUR  BURGUR')
    }
    account_blacalce = account_blacalce - burgur_cost;
    console.log('\tBalance :', account_blacalce.toFixed(2));
}
// Drink pop
function drink_pop (){
    if (checkBalance(pop_cost)){
    account_blacalce = account_blacalce - beer_cost;
    console.log( 'ENJOY YOUR  POP')
    }
    account_blacalce = account_blacalce - pop_cost;
    console.log('\tBalance :', account_blacalce.toFixed(2));
}

// Visit carnaval , Drink and eat

function visitCarnaval (mList){
    for(var i =0 , num = mList.length ; i<num ; i++ ) {
        // mList[i]();
        mList[i].call();
    }
}

visitCarnaval ([ eat_burgur,drink_beer, eat_burgur, drink_beer]);
// }
// visitCarnaval(mealList)


