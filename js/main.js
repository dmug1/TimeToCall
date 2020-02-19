
function chama(){
    for (i in countriesList) {
        console.log(countriesList[i].countryName);
      }      
};

function lookForCountry(){
  var output = [];
  for (let i=0; i < countriesList.length ; i++){
    output.push(countriesList[i].countryName);
  }
  return output;
};

