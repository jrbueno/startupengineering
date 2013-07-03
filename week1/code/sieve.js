var numbers = [];

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
      numbers.push(x);
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

prime(600);
console.log(numbers.toString());
