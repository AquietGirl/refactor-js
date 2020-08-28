function printFormat(data) {
  return "***********************\n" +
  "**** Customer Owes ****\n" +
  "***********************\n" +
  `name: ${data.customer}\n` +
    `amount: ${data.outstanding}\n` +
    `amount: ${data.dueDate.toLocaleDateString()}`;
}

function printOwing(invoice) {
  let outstanding = 0;
  
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  invoice.outstanding = outstanding;
  // record due date
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  return printFormat(invoice);
}

module.exports = {
  printOwing,
};
