function printFormat(data) {
  return (
    "***********************\n" +
    "**** Customer Owes ****\n" +
    "***********************\n" +
    `name: ${data.customer}\n` +
    `amount: ${data.outstanding}\n` +
    `amount: ${data.dueDate.toLocaleDateString()}`
  );
}

function getOutstandingByInvoice(invoice) {
  return invoice.borderSpacing.reduce(
    (total, oldValue) => (total += oldValue.amount), 0
  );
}

function printOwing(invoice) {
  invoice.outstanding = getOutstandingByInvoice(invoice);

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
