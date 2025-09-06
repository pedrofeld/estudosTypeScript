enum PaymentStatus {
    Pending,
    Paid,
    Cancelled
}

let payment: PaymentStatus = PaymentStatus.Pending;

console.log(payment); // 0

// enum PaymentStatus {
//     Pending = "PENDING",
//     Paid = "PAID",
//     Cancelled = "CANCELLED"
// }

// let payment: PaymentStatus = PaymentStatus.Pending;

// console.log(payment); // "PENDING"