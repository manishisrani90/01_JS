const accountID = 14324;
let accountemail = "manishisrani9@gmail.com"
var accountpassword = " 1234567890";    
accountCity = "indore";

// accountID = 142224;                                                         //constant ko fix kar diya fir dubara change krne ko bolege to nhi karega error dega

accountemail = "    manishisrani11@outlook.pco   "
accountpassword = " 1234590";
accountCity = "indore city";

// console.log(accountID);
// console.log(accountemail);                   instead of usoing this stuff you can use console.table() to print the data in table format
// console.log (accountpassword);
// console.log(accountCity);       javascript me bina variable ka naam diye bhi as a variable use kr liya but you have to state with variable keyword like let or const
console.table([accountID, accountemail, accountpassword, accountCity]);
// agar tum javascript me variable ka sirf naam dekar chor dete ho aur usme kuch value nhi assign karte ho aur fir aage jaakar usse console.log se call karte ho to wo undefined print karega