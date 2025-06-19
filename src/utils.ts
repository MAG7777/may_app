// function memoize(fibonachi){
//     const chech = {};
  
//     return function(n){
//       if(n in chech){
//         return chech[n]
//       }else{
//         const res = fibonachi(n);
//         chech[n] = res;
//         return res;
//       }
  
//     }
  
//   }


/// with typescript
function memoize(fn: (n: number) => number): (n: number) => number {
    const cache: Record<number, number> = {};
    return function (n: number): number {
      if (n in cache) {
        return cache[n];
      } else {
        const res = fn(n);
        cache[n] = res;
        return res;
      }
    };
  }
  
  function fibonachi(n:number):number{
    if(n<=1) return n;
    return fibonachi(n-1) + fibonachi(n-2)
  
  }
  
  const memoizedFibonachi = memoize(fibonachi)
  
  console.log(memoizedFibonachi(10))
  console.log(memoizedFibonachi(10))