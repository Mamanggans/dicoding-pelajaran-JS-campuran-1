let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + "."); \];llsaomsa asmo 

/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
Coklat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/


//cara untuk nambahin variabel pada sebuah array pake push 

const myArray = ["Coklat", 42.5, 22, true, "Programming"];

myArray.push('JavaScript');
console.log(myArray);

/* output
[ 'Coklat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

// kalo untuk ngeluarin variabel atau elemen akhir dari sebuah array adalah 

const myArray = ["Orange", 42.5, 22, true, "Programming"];

myArray.pop();
console.log(myArray);

/* output
[ Orange, 42.5, 22, true ]
*/

// nah kalo di awal pake shift (untuk masukin) unshift (untuk ngeluarin)
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);

/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

//kalo delete sesuai yang kita mau yah pake delete tapi ini kaga ngapus elemen nya yak cuman data nya 
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray[1];
console.log(myArray);

/* output
[ 'coklat', <1 empty item>, 22, true, 'Programming' ]
*/
// nah kalo mau bersih ama alemen elemen nya 

const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Menhapus dari index 2 sebanyak 1 elemen kalo mau 2 yah tinggal (2,2)
console.log(myArray);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/