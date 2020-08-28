const deliveryTest = require("ava");
import { deliveryDate } from "../src/delivery";

deliveryTest("deliveryDate1.AnOrder is MA and isRush", (t) => {
    //given
    const anOrder = {
        deliveryState: "MA"
    }
    const isRush = true;

    // when
    // const result = deliveryDate(anOrder, isRush)

    // then
    t.is(1, 1)
});
