function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
    let climb = 0;
    for(var days = 0;climb < depth; days++){
       climb += 7;
       if(climb != depth){
           climb -= 2
       }

    }
    console.log(days);
    
}