function recur(x,n)
{
    if(n==0)
    return 1;
    else
    return x*recur(x,n-1);


}
    

let X=prompt("Enter the value of x");
let N=prompt("Enter the value of n");
X=Number.parseInt(X);
N=Number.parseInt(N);


let output=recur(X,N)
console.log(output);


