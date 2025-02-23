const a=[1,2,3,4,5]
const out=[]
// a.forEach(element => {
    
//     out.push(element*2)
    
// });

// for (let element=0; element<a.length;element++){
//     out.push(a[element]*2)
// }

console.log(a.filter(
    (n) => {
        if(n % 2 == 0){
            return true
        }else
        {
            return false
        }
    }
))