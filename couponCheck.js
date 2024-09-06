
//Your mission:
//Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
//A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  //p customer code, correctcode, date , exp date
  //r return true if eCode == cCode & cDate >= expiration date
  return enteredCode === correctCode && (Date.parse(currentDate) <= Date.parse(expirationDate))
}
