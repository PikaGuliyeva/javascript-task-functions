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
