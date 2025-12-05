$("#submit").click(function(){
    let l = $("#length").val();
    let b = $("#breadth").val();
    let varea = l * b;  // The vaastu area
    
    let rem = varea%8;  // The vaastu remainder
    
    let aya = "";
    if(rem == 0)
        rem = 8;
    
    if(rem == 1) 
        aya = "Dhwajaya";
    else if(rem == 2)
        aya = "Dhoomaya";
    else if(rem == 3)
        aya = "Simhaya";
    else if(rem == 4)
        aya = "Swanaya";
    else if(rem == 5)
        aya = "Vrushabhaya";
    else if(rem == 6)
        aya = "Kakaya";
    else if(rem == 7)
        aya = "Gajaya";
    else if(rem == 8)
        aya = "Kshayaya";
    
    // If aya == "" then give the output as invalid information
    
    let dhana = (varea*8)%12;
    
    if(dhana == 0)
        dhana = 12;
    
    let runa = (varea*3)%8;
    
    if(runa == 0)
        runa = 8;
    
    let ayushya = (varea*9)%120;
    
    if(ayushya == 0)
        ayushya = 120;
    
    let vara = (varea*9)%7;
    
    if(vara == 0)
        vara = 7;
    
    let varaGoodBad = "";
    
    if (vara == 2 || vara > 3 && vara < 7)
        varaGoodBad = "Good";
    else
        varaGoodBad = "Bad";
    
    let tithi = (varea*8)%30;
    
    if(tithi == 0)
        tithi = 30;
    
    let tithiGoodBad = "";
    
    if(tithi > 1 && tithi < 4 || tithi > 4 && tithi < 10 || tithi == 0)
        tithiGoodBad = "Good";
    else
        tithiGoodBad = "Bad";
    
    let n = (varea*8)%27;   // Nakshatra
    
    if(n == 0)
        n = 27;
    
    let nGoodBad = "";
    
    if(n > 3 && n < 6 || n == 8 || n > 11 && n <16 || n == 17 || n == 21 || n > 22 && n < 25 || n > 25 && n < 28)
        nGoodBad = "Good";
    else
        nGoodBad = "Bad";
    
    yoga = (varea*4)%27;
    
    if(yoga == 0) 
        yoga = 27;
    
    let yogaGoodBad = "";
    
    if(yoga == 1 || yoga > 8 && yoga < 11 || yoga == 13 || yoga == 15 || yoga == 17 || yoga == 19 || yoga == 27)
        yogaGoodBad = "Bad";
    else
        yogaGoodBad = "Good";
    
    let karna = (varea*5)%11;
    
    if(karna == 0)
        karna = 11;
    
    let karnaGoodBad = "";
    
    if (karna > 0 && karna < 6)
        karnaGoodBad = "Good";
    else
        karnaGoodBad = "Bad";
    
    amsha = (varea*6)%9;
    
    if(amsha == 0)
        amsha = 9;
    
    let amshaGoodBad = "";
    
    if(amsha > 1 && amsha < 4 || amsha == 9)
        amshaGoodBad = "Good";
    else
        amshaGoodBad = "Bad";
    
    let dikpala = ayushya%8;
    
    if(dikpala == 0)
        dikpala = 8;
    
    let deity = "";
    let dikpalaGoodBad = "";
    
    if(dikpala == 1){
        deity = "Indra";
        dikpalaGoodBad = "Good";
    }
    else if(dikpala == 2){
        deity = "Agni";
        dikpalaGoodBad = "Bad";
    }
    else if(dikpala == 3){
        deity = "Yama";
        dikpalaGoodBad = "Bad";
    }
    else if(dikpala == 4){
        deity = "Nairutya";
        dikpalaGoodBad = "Bad";
    }
    else if(dikpala == 5){
        deity = "Varuna";
        dikpalaGoodBad = "Good";
    }
    else if(dikpala == 6){
        deity = "Vayavya";
        dikpalaGoodBad = "Bad";
    }
    else if(dikpala == 7){
        deity = "Kubera";
        dikpalaGoodBad = "Good";
    }
    else if(dikpala == 8){
        deity = "Eshanya";
        dikpalaGoodBad = "Good";
    }
    
    let x = ayushya%4;
    let avastheGoodBad = "";
    let avasthe = "";
    
    if(x == 1){
        avasthe = "Balya";
        avastheGoodBad = "Bad";
    }
    else if(x == 2){
        avasthe = "Youvana";
        avastheGoodBad = "Bad";
    }
    else if(x == 3){
        avasthe = "Kaumarya";
        avastheGoodBad = "Good";
    }
    else if(x == 0){
        avasthe = "Vardhakya";
        avastheGoodBad = "Good";
    }
    
    let g = (dikpala*8)%3;
    let guna = "";
    
    if(g == 1)
        guna = "Satva";
    else if(g == 2)
        guna = "Raj";
    else if(g == 3)
        guna = "Tama";
    
    $(".right").html(
        `<p>The vaastu area is ${varea}. (${l} X ${b})</p> 
        <p>The aaya of the area is <b style = "color: rgb(251, 133, 0);">${aya}</b>. </p>
        
        <table style = "margin-top: 15px; border: white 2px solid; padding: 10px;">
            <tr>
                <td style = "padding: 12px;">Dhana</td>
                <td style = "padding-left: 12px;"> ${dhana}</td>
            </tr>
            <tr>
                <td style = "padding: 12px;">Runa</td>
                <td style = "padding-left: 12px;">${runa}</td>
            </tr>
            <tr>
                <td style = "padding: 12px;">Ayushya</td>
                <td style = "padding-left: 12px;">${ayushya}</td>
            </tr>
            <tr>
                <td style = "padding: 12px;">Vaara</td>
                <td style = "padding-left: 12px;">${vara} [${varaGoodBad}]</td>
            </tr>
            <tr>
                <td style = "padding: 12px;">Tithi</td>
                <td style = "padding-left: 12px;">${tithi} [${tithiGoodBad}]</td>
            </tr>
            <tr>
                <td style = "padding: 12px;">Nakshatra</td>
                <td style = "padding-left: 12px;">${n} [${nGoodBad}]</td>
            </tr>
            <tr>
                <td style = "padding: 12px;">Yoga</td>
                <td style = "padding-left: 12px;">${yoga} [${yogaGoodBad}]</td>
            </tr>
            <tr>
                <td style = "padding: 12px;">Karna</td>
                <td style = "padding-left: 12px;">${karna} [${karnaGoodBad}]</td>
            </tr>
            <tr>
                <td style = "padding: 12px;">Amsha</td>
                <td style = "padding-left: 12px;">${amsha} [${amshaGoodBad}]</td>
            </tr>
            <tr>
                <td style = "padding: 12px;">Dikpala</td>
                <td style = "padding-left: 12px;">${dikpala} [${deity} : ${dikpalaGoodBad}]</td>
            </tr>
            <tr>
                <td style = "padding: 12px;">Avasthe</td>
                <td style = "padding-left: 12px;">${avasthe} [${avastheGoodBad}]</td>
            </tr>
            <tr>
                <td style = "padding: 12px;">Guna</td>
                <td style = "padding-left: 12px;">${guna}</td>
            </tr>
        </table>
        
        `
    );

})    



