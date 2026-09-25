// function calculateOrderTotal(price, promoCode) {
//     if (promoCode === "SAVE20") {
//         let qiymet = price * 0.8 + 0.18;
//         return qiymet;
//     } else if (promoCode === "FLAT10") {
//         let qiymet = price - 10 + 0.18;
//         return qiymet;
//     }else {
//         return "endirim tetbiq olunmur" + (price + 0.18);
//     }
// }
// console.log(calculateOrderTotal(100, "SAVE20"));
// console.log(calculateOrderTotal(50, "FLAT10"));


// function registerUser(fullName, age)  {
//     if (age < 18) {
//         return "Qeydiyyat üçün yaşınız minimum 18 olmalıdır."
//     } else {
//         let temizAd = fullName.trim();
//         return `Xoş gəldiniz, ${temizAd}! Qeydiyyat uğurla tamamlandı.`;
//     }
// };
// console.log(registerUser(" Kamran Əliyev ", 20));
// console.log(registerUser("Aysel Həsənova", 16));



// function calculateTaxiFare(distanceKm) {
//     let kmPrice = 1.5;
//     let netPrice = distanceKm * kmPrice;
//     if (netPrice < 3) {
//         return "Ödəniləcək məbləğ: 3 AZN (Minimum gediş haqqı)";
//     } else {
//         return "Ödəniləcək məbləğ: " + netPrice + " AZN";
//     }
// }
// console.log(calculateTaxiFare(1));
// console.log(calculateTaxiFare(5));


// Arrow functions - Tasks

// Task 1
// const  celsiusToFahrenheit = celcius => (celcius * 1.8 + 32);

// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(25));

// Task 2
// const calculateFuelConsumption = (distanceKm, fuelLiters) => fuelLiters / distanceKm * 100;

// console.log(calculateFuelConsumption(500, 40));

// Task 3
// const getTotalWithDelivery = orderAmount =>
//     orderAmount >= 50 ? `Catdirilma pulsuzdur. (0 Azn)` :  `Catdirilma 5 Azn edir. (5 Azn)`;

// console.log(getTotalWithDelivery(60));
// console.log(getTotalWithDelivery(30));

// Task 4
// const getGrade = (score) => 
//     score >= 90 ? "Ela":
//     score >= 70 ? "Yaxsi" :
//     score >= 50 ? "Kafi" : "Kesildiniz!";

// console.log(getGrade(95));
// console.log(getGrade(75));
// console.log(getGrade(40));


//  CALLBACK FUNCTIONS TASKS

// Task 1
// function showSuccess(pizzaName) {
//     console.log(`${pizzaName} Pizzaniz hazirdir, nuw olsun!`);
// }
// function showError(needMoney) {
//     console.log(`Catiwmayan mebleg: ${needMoney} Azn, Balansiniz catmir!`);
// }
// 
// function buyPizza(pizzaName, price, myMoney, onSuccess, onError) {
//     if (myMoney >= price) {
//         onSuccess(pizzaName);
//     } else {
//         onError(price - myMoney);
//     }
// }
// 
// buyPizza("Marqarita", 8, 4, showSuccess, showError);
// buyPizza("Meksika", 15, 20, showSuccess, showError);

// Task 2
// function sendEmail() {
//     console.log("✉️ Xoş gəldiniz məktubu göndərildi!");
// }
// 
// function registerUser(userName, callback) {
//     console.log(`👤 ${userName} sisteme elave olundu!`);
//     callback();
// }
// registerUser("Pika", sendEmail);

// Task 3
// function onSuccess(finalprice) {
//     console.log(`✅ Kupon tətbiq edildi! Yekun qiymət: ${finalprice} Azn`);
// }
// function onError (msg) {
//     console.log(`❌ Xəta: ${msg}`)
// }
// 
// function applyCoupon(code, totalPrice, onSuccess, onError) {
//     if (code === "KOD10") {
//         onSuccess(totalPrice - 10);
//     }else {
//         onError("kecersiz kupon kodu!");
//     }
// }
// 
// applyCoupon("KOD10",80, onSuccess, onError);
// applyCoupon("KOD 20", 70, onSuccess, onError);

// Task 4
// function onWin(heroName, damage) {
//     console.log(`⚔️ ${heroName} qalib gəldi! Canavardan ${damage} xal üstün oldu!`)
// }
// function onLose(heroName, damage) {
//     console.log(`💀 ${heroName} uduzdu! Canavardan ${damage} xal geridə qaldı!`)
// }
// function onDraw(){
//     console.log(`🛡️ Güclər bərabərdir! Döyüş bərabərə bitdi.`)
// }
// 
// function attackMonster (heroName, heroPower, monsterPower, onWin, onLose, onDraw) {
//     if (heroPower > monsterPower) {
//         onWin(heroName, heroPower - monsterPower)
//     }else if (heroPower < monsterPower) {
//         onLose(heroName, monsterPower - heroPower)
//     }else {
//         onDraw()
//     }
// }
// 
// attackMonster ("Spider-man", 220, 100, onWin, onLose, onDraw );
// attackMonster ("Bat-man", 200, 300, onWin, onLose, onDraw);
// attackMonster ("Hulk", 300, 300, onWin, onLose, onDraw);