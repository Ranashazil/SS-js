const mineArr =[]
// %DebugPrint(mineArr)

// Some special notes about Array in js

// 1- 2 types of aarray in JS one is continous and other is holey array 

// 2- 3 treeqe hain optimization k in js ma
//  one is SMI(small integer)
//  2nd is double (float,decimals, functgion) ..// continus b in 3 type k array hoskte hAIN or hopey b in 3 type k ho skte..
//  third is packed element ... (string)

//  3 - array k ander elements hote hn..

const arr = [1,2,3,4,5,6] // 4 - this is Packed SMI elements because is ma koi hole ni ha na space ha isma ham decimal ni kr skte add agar deciaml add kren ge to ye packed double element hoga ...this is defualt array


arr.push(2.5) // packed double elemts // agar hmko isko delete krenge to kia wapis se wo packed smi ban jayga ...nai wo kabhi b nai bnta compiler wapis se optimization ni kr skta... jo ek bar downgrade huwa jo dobara SE upgrade ni ho skta... mtlb jo ek bar push huwa wo higya doabra se wo delete ni higa
arr.push('q6') // packed elements

arr[9] = 12 // 9 position p 12 rkhdiya ha// this  is holey elements beacuse decimls string or space add in this 

console.log(arr);
console.log(arr.length);
console.log(arr[9]); // yahan p value undefined ati ha 

// last value wale scenario ma kafi trha se check kiya jata ha 
// 1- bound check 
// 2- hasOwnProperty(arr, 9) ... k koi property ha arr ma 9th position pr
// 3- hasOwnProperty(arr.prototype, 9) ... k kuch uski prototpye ma to ni inject krya huwa
// 4- hasOwnProperty(object.prototype, 9) .. js object se mil k bna ha to kahin is k protype ma to ni koi property inject krai...

// this is most expensive property because of holes....agar hole hoga to ye 4 step krne hi prege... isi liye array ma hole ni hone chahiye

// SMI > double > packedElements ... sab se highly optimized smi uske bad double or uske packed elemnts ha ye sab continous stack wala hain

// H_SMI > H_double > H_packedElements ... iska b ese hi seen ha ye bs hole k liye hote hain


// ****************Some examples****************//

const arrTwo = new Array(3) // k array 3 ha
// there are three holes... and it is holey_SMI_Elements

arrTwo[0] = '1' // holey elenments or holey packed elements
arrTwo[1] = '2' // holey elenments or holey packed elements
arrTwo[2] = '3' // holey elenments or holey packed elements

// instead of this we write exapmle as 

const arrThree = []
arrThree.push('1')// packed elements
arrThree.push('2')// packed elements
arrThree.push('3 ')// packed elements

const arrFour = [1,2,3,4,5]
arrFour.push(NaN)
arrFour.push(Infinity)// in dono ma se ek b add krdiya nan ya infinity to ye packed diuble bn jayga or phir ye change ni ho skta


// for , for of for each etc... these methods are highly recomendable...or browser ne apke banaye gye moethods se ziada cases k liye optimize kiya hota ha as compare to your optimization ap ne sirf 2 cases k liye kiya hoga 
