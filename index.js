// To get intellisense working with protos in js https://stackoverflow.com/questions/64565836/how-to-setup-vscode-intellisense-for-protobuf-generated-javascript-files
const Schema = require('./build/gen/v3/bar_pb.js');

// console.log(BarProtos);

const bar1 = new Schema.Bar();
console.log(bar1);
bar1.setName("Jackie's Spot");
bar1.setCapacity(50);
// bar1.setAddress(
//   new Schema.Address().setStreetName('GoogleStr').setZipCode(10009)
// );
bar1.setPlusCode('PLEX+12');
// console.log(bar1.getCapacity());
console.log(bar1);

if (bar1.hasAddress()) {
  console.log('We have oneof Address');
}

if (bar1.hasPlusCode()) {
  console.log('We have oneof PlusCode');
}
