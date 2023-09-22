// == ja === erinevus

let Height1 = 175;
let Height2 = "175";

    // == võrdleb muutuja väärtuseid. Kui muutuja andmetüübid on erinevad, teeb ta nende andmetüübi samasuguseks
    if(Height1 == Height2){
        console.log("True"); //See tagastab true, vaatamata sellele, et üks on number ja teine string
    } else {
        console.log("False");
    }

    // === võrdleb muutuja andmetüüpi ning ka muutuja väärtust. Ta ei muuda võrdlemise tegemiseks muutuja andmetüüpi
    if(Height1 === Height2){
        console.log("True");
    } else {
        console.log("False"); //See tagastab false, kuna üks on number ja teine string
    }

//Async/await
//Javascript on single-threaded programmeerimiskeel, s.t.