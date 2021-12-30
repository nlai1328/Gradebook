export default function calculatedivisors(a,listofdivisors){
    var n = 1 
    while (n <= a){
        if (a % n === 0){
            listofdivisors.push(n)
            n++
        }
        else{
            n++
        }

    }
    return listofdivisors
}