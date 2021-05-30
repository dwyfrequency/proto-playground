const BarProtos = require('./build/gen/v3/bar_pb.js');

// console.log(BarProtos);

const bar1 = new BarProtos.Bar();
console.log(bar1);
bar1.setCapacity(50);
console.log(bar1.getCapacity());
