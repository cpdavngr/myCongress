// include the module 
var govTrack = require('govtrack-node');
 
// list current members of Congress 
govTrack.findRole({ current: true }, function(err, res) {
  if (!err) {
    // res contains JSON data response 
  }
});
 
govTrack.findPerson({ gender: 'male', lastname: 'smith' }, function(err, res) {
  if (!err) {
    // res contains JSON data response 
  }
});
