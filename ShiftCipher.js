let number = 2; //Numerical value to take
let str = 'I love to code!'; //String trial
let finalMsg = []; //Empty list

str = str.toLowerCase()
for (let i=0; i <str.length; i++){
  let chcode = str.charCodeAt(i);
  if (chcode<=122 && chcode>=97){
	let new_ch_code = chcode+number;
    finalMsg.push(String.fromCharCode(new_ch_code));
  }else{
    finalMsg.push(String.fromCharCode(chcode));
  }
  finalMsgg = finalMsg.join('');
}

console.log(finalMsgg.toUpperCase());
