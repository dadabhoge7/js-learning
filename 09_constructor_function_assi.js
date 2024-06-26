function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}

const yesBank = new Bank("YesBank", "Hadapsar", "YB0004789",321353);
console.log(`Bank Details is : ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode} `);
const sbiBank = new Bank("SBIBank", "Kharadi", "SBIN0452",57563);
console.log(`Bank Details is : ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode} `);
const mahBank = new Bank("MahaBank", "Yerwada", "MAH154682",88525);
console.log(`Bank Details is : ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode} `);
const axisBank = new Bank("AxisBank", "MahadevNagar", "AXI000478",321353);
console.log(`Bank Details is : ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode} `);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`SBI Bank Open time ${sbiBank.openTime} and its close time ${sbiBank.closeTime}`);
console.log(`Axis Bank Open time ${axisBank.openTime} and its close time ${axisBank.closeTime}`);

console.log(`Yes Bank Details is : Bank Name - ${yesBank.bankName}, Branch Code - ${yesBank.branchCode}, Open time ${yesBank.openTime} and close Time ${yesBank.closeTime} `);


