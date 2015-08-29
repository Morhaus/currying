function add(a,b){a=[].slice.call(arguments);b=add.bind.apply(add,[0].concat(a));b.valueOf=a.reduce.bind(a,function(c,d){return c+d});return b}

function test(a, b) {
  if (a == b) {
    console.log('OK');
  } else {
    console.log(a + ' != ' + b);
  }
}

test(add(1, 2), 3);
test(add(3)(4)(), 7);
test(add(3)(4)(5), 12);

var three = add(3);
var four = add(4);
test(three, 3);
test(four, 4);
test(three(5), 8);
test(three(6), 9);
test(three(four), 7);
test(three(four)(three(four)), 14);
