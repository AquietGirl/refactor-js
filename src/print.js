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

function getNext30Day() {
  const today = new Date();
  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printOwing(invoice) {
  invoice.outstanding = getOutstandingByInvoice(invoice);

  // record due date
  invoice.dueDate = getNext30Day();

  return printFormat(invoice);
}

module.exports = {
  printOwing,
};
