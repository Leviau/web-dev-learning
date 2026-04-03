function maskEmail(email){
  let part1=email.slice(0,1);
  let part2='*'.repeat(email.indexOf('@')-2);
  let part3=email.slice(email.indexOf('@')-1);
  return part1+part2+part3;

}
let email='apple.pie@example.com';
console.log(maskEmail(email));