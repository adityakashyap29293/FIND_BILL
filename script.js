const sampleBills = {
  "8800392483": { name: "aditya", amount: "₹500", month: "march"},
  "9811397271": { name: "khush", amount: "₹750", month : "march"},
  "8860614053": { name: "naresh", amount: "₹100", month : "march"},
  "7290900267": { name: "JAI", amount: "₹455", month : "march"},
 };

function findBill() {
  const mobile = document.getElementById("mobile").value.trim();
  const resultDiv = document.getElementById("result");

  if (sampleBills[mobile]) {
    const bill = sampleBills[mobile];
    resultDiv.innerHTML = `
      <h3>Bill Details</h3>
      <p><strong>Name:</strong> ${bill.name}</p>
      <p><strong>Amount Due:</strong> ${bill.amount}</p>
      <p><strong>month:</strong> ${bill.due}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color:red;">No bill found for this mobile number.</p>`;
  }
}



