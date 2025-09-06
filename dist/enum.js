"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Pending"] = 0] = "Pending";
    PaymentStatus[PaymentStatus["Paid"] = 1] = "Paid";
    PaymentStatus[PaymentStatus["Cancelled"] = 2] = "Cancelled";
})(PaymentStatus || (PaymentStatus = {}));
let payment = PaymentStatus.Pending;
console.log(payment); // 0
// enum PaymentStatus {
//     Pending = "PENDING",
//     Paid = "PAID",
//     Cancelled = "CANCELLED"
// }
// let payment: PaymentStatus = PaymentStatus.Pending;
// console.log(payment); // "PENDING"
