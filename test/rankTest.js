const rankTest = require("ava");
import { rating } from "../src/rank";

rankTest("foo", (t) => {
  t.pass();
});

rankTest("bar", async (t) => {
  const bar = Promise.resolve("bar");
  t.is(await bar, "bar");
});

const history = [
  {
    zone: "east-indies",
    profit: 5,
  },
  {
    zone: "west-indies",
    profit: 15,
  },
  {
    zone: "china",
    profit: -2,
  },
  {
    zone: "west-africa",
    profit: 7,
  },
];

const historyL = [
  {
    zone: "east-indies",
    profit: 5,
  },
  {
    zone: "west-indies",
    profit: 15,
  },
  {
    zone: "china",
    profit: -2,
  },
  {
    zone: "west-africa",
    profit: 7,
  },
  {
    zone: "east-indies",
    profit: 5,
  },
  {
    zone: "west-indies",
    profit: 15,
  },
  {
    zone: "china",
    profit: -2,
  },
  {
    zone: "west-africa",
    profit: 7,
  },
];

const historyXL = [
  {
    zone: "east-indies",
    profit: 5,
  },
  {
    zone: "west-indies",
    profit: 15,
  },
  {
    zone: "china",
    profit: -2,
  },
  {
    zone: "west-africa",
    profit: 7,
  },
  {
    zone: "east-indies",
    profit: 5,
  },
  {
    zone: "west-indies",
    profit: 15,
  },
  {
    zone: "china",
    profit: -2,
  },
  {
    zone: "west-africa",
    profit: 7,
  },
  {
    zone: "west-indies",
    profit: 15,
  },
  {
    zone: "china",
    profit: -2,
  },
  {
    zone: "west-africa",
    profit: 7,
  },
];

rankTest(
  "rankTest0.Voyage length is 10 and zone is west-indies. History length is 4",
  (t) => {
    //given
    const voyage = {
      zone: "west-indies",
      length: 10,
    };

    //when
    const result = rating(voyage, history);

    //then
    t.is("B", result);
  }
);

rankTest(
  "rankTest1.Voyage length is 5 and zone is west-indies. History length is 4",
  (t) => {
    //given
    const voyage = {
      zone: "east-indies",
      length: 5,
    };
    const history = [
      {
        zone: "east-indies",
        profit: 5,
      },
      {
        zone: "west-indies",
        profit: 15,
      },
      {
        zone: "china",
        profit: -2,
      },
      {
        zone: "west-africa",
        profit: 7,
      },
    ];

    //when
    const result = rating(voyage, history);

    //then
    t.is("B", result);
  }
);

rankTest(
  "rankTest2.Voyage length is 5 and zone is east-indies. History length is 4",
  (t) => {
    //given
    const voyage = {
      zone: "east-indies",
      length: 5,
    };
    const history = [
      {
        zone: "east-indies",
        profit: 5,
      },
      {
        zone: "west-indies",
        profit: 15,
      },
      {
        zone: "china",
        profit: -2,
      },
      {
        zone: "west-africa",
        profit: 7,
      },
    ];

    //when
    const result = rating(voyage, history);

    //then
    t.is("B", result);
  }
);

rankTest(
  "rankTest3.Voyage length is 2 and zone is china. History length is 8",
  (t) => {
    //given
    const voyage = {
      zone: "china",
      length: 2,
    };

    //when
    const result = rating(voyage, historyL);

    //then
    t.is("A", result);
  }
);
