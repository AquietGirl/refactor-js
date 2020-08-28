const deliveryTest = require("ava");
import { deliveryDate } from "../src/delivery";

const anOrder = {
    deliveryState: "",
    placedOn: {
        plusDays: (days) => days
    }
}

deliveryTest("deliveryDate1.AnOrder is MA and isRush", (t) => {
    //given
    anOrder.deliveryState = "MA";
    const isRush = true;

    // when
    const result = deliveryDate(anOrder, isRush)

    // then
    t.is(result, 2)
});

deliveryTest("deliveryDate2.AnOrder is CT and isRush", (t) => {
    //given
    anOrder.deliveryState = "CT";
    const isRush = true;

    // when
    const result = deliveryDate(anOrder, isRush)

    // then
    t.is(result, 2)
});

deliveryTest("deliveryDate3.AnOrder is NY and isRush", (t) => {
    //given
    anOrder.deliveryState = "NY";
    const isRush = true;

    // when
    const result = deliveryDate(anOrder, isRush)

    // then
    t.is(result, 3)
});