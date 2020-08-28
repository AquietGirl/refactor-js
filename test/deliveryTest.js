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
