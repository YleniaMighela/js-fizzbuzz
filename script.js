// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// Creare ciclo che stampa numeri da 1 a 100

for(let i = 1; i <= 100; i++) {
    
 // ---SE sono multipli di 3 
    if (i % 3 === 0) {
            
    //  OUTPUT
    //stamperà Fizz
    console.log("Fizz");
    }



// ---SE sono multipli di 5 
 else if(i % 5 === 0) {
//     OUTPUT
//     stamperà Buzz
console.log("Buzz");

 }



// ---SE sono multipli sia di 3 che di 5 
else if(i % 3 === 0 && i % 5 === 0) {
//     OUTPUT
//     stamperà FizzBuzz
console.log("FizzBuzz");

}

// ---ALTRIMENTI SE non sono multipli
else {
    //     OUTPUT
//     stamperà il numero di quel punto di iterazione

 console.log(i);
 
}
    

}










