const rankTest = require('ava');
import {rating} from '../src/rank'

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('rankTest1.Voyage length is 10 and zone is west-indies. History length is 4', t => {
  //given
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];

  //when
  const result = rating(voyage, history);

  //then
  t.is("B", result)
})

rankTest('rankTest1.Voyage length is 5 and zone is west-indies. History length is 4', t => {
  //given
  const voyage = {
    zone: 'east-indies',
    length: 5,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];

  //when
  const result = rating(voyage, history);

  //then
  t.is("B", result)
})