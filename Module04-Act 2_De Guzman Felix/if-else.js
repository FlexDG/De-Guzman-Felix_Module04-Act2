let valueA = +prompt("Enter First Value");
 
  let valueB = +prompt("Enter Second Value");
 if (!/^[0-9]+$/.test(valueA&&valueB)) {
     alert("Not values, try again and refresh!")
 
    }else if (valueA > valueB){
      alert("Val A is higher than Val B");
  }else if(valueA < valueB){
      alert("Val B is higher than Val A");
    }else{
  (valueA == valueB)
      alert("Val A and Val B are both equal");
 
}