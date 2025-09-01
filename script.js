const sampleBills = {
  "9876543210": { name: "John Doe", amount: "₹500", due: "2025-09-10" },
  "9123456789": { name: "Jane Smith", amount: "₹750", due: "2025-09-15" },
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
      <p><strong>Due Date:</strong> ${bill.due}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color:red;">No bill found for this mobile number.</p>`;
  }
}
