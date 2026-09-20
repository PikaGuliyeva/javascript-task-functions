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
