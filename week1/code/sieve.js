//https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
//

var results = [];

var prime = function(n)
{
  var sieve = [];
  for(var i = 2; i <= n; i++)
    sieve.push(true);
  //console.log(sieve.length);

  var x = 2;

  while(x <= n){
    if(sieve[x] === true)
    {
      //console.log(x);
      results.push(x);
      var j = x;
      while(j <= n)
      {
        sieve[j] = false;
        j += x;
      };
    };
    x++;
  };
};

prime(545);
console.log(results.toString());
console.log(results.length);

var fs = require('fs');
var out = 'primenumbers.txt';

fs.writeFileSync(out, results.toString() + "\n");
console.log(__filename);
