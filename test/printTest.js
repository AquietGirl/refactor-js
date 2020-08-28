const printTest = require("ava");
import { printOwing } from "../src/print";

const invoice = {
  customer: "Alisa",
  borderSpacing: [
    {
      id: "1",
      amount: 10,
    },
    {
      id: "2",
      amount: 20,
    },
    {
      id: "3",
      amount: 30,
    },
  ],
};

printTest("printTest1.Alisa has three owes and amounts are 60", (t) => {
  //given
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  const expect =
    "***********************\n" +
    "**** Customer Owes ****\n" +
    "***********************\n" + 
    'name: Alisa\n' + 
    'amount: 60\n' +
    `amount: ${invoice.dueDate.toLocaleDateString()}`;

  //when
  const result = printOwing(invoice);

  //then
  t.is(result, expect)
});
