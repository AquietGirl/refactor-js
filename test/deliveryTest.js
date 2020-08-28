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

deliveryTest("deliveryDate4.AnOrder is NH and isRush", (t) => {
    //given
    anOrder.deliveryState = "NH";
    const isRush = true;

    // when
    const result = deliveryDate(anOrder, isRush)

    // then
    t.is(result, 3)
});

deliveryTest("deliveryDate5.AnOrder is ME and isRush", (t) => {
    //given
    anOrder.deliveryState = "ME";
    const isRush = true;

    // when
    const result = deliveryDate(anOrder, isRush)

    // then
    t.is(result, 4)
});

deliveryTest("deliveryDate6.AnOrder is MA and isNotRush", (t) => {
    //given
    anOrder.deliveryState = "MA";
    const isRush = false;

    // when
    const result = deliveryDate(anOrder, isRush)

    // then
    t.is(result, 4)
});

deliveryTest("deliveryDate7.AnOrder is CT and isNotRush", (t) => {
    //given
    anOrder.deliveryState = "CT";
    const isRush = false;

    // when
    const result = deliveryDate(anOrder, isRush)

    // then
    t.is(result, 4)
});

deliveryTest("deliveryDate8.AnOrder is NY and isNotRush", (t) => {
    //given
    anOrder.deliveryState = "NY";
    const isRush = false;

    // when
    const result = deliveryDate(anOrder, isRush)

    // then
    t.is(result, 4)
});

deliveryTest("deliveryDate9.AnOrder is NH and isNotRush", (t) => {
    //given
    anOrder.deliveryState = "NH";
    const isRush = false;

    // when
    const result = deliveryDate(anOrder, isRush)

    // then
    t.is(result, 5)
});

deliveryTest("deliveryDate10.AnOrder is ME and isNotRush", (t) => {
    //given
    anOrder.deliveryState = "ME";
    const isRush = false;

    // when
    const result = deliveryDate(anOrder, isRush)

    // then
    t.is(result, 5)
});