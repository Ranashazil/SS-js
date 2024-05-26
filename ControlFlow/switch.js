
const month = "march"

switch (month) { //  switch ma hm ek key lete hn or us key se multiple values find krte hain
    case 1:
        console.log("januray");
        break;
    case 2:
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break; // jab b kahin koi case match hogya to us k neeche sara code execute hojata ha except default value is liye hm break use krte hain ta k control flow ko break kiya ja ske is liye is chez ko rokne k liye break lagate hain ta k jitna value chahiye utni hi mile ye ha kmal break ka
    case "april":
        console.log("april");
        break; // jab b kahin koi case match hogya to us k neeche sara code execute hojata ha except default value is liye hm break use krte hain ta k control flow ko break kiya ja ske 
    case 5:
        console.log("may");
        break;

    default:
        console.log("case match");
        break;
}