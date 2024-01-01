let dan = {
    kisa: true,
    suncano: true,
    oblacno: true,
    temperature: [-6,-1,-4,-2,10,22,25,28,30,33,27], //
        
    tropski: function (){
        let tropskiDan = true;
        this.temperature.forEach(t=>{
            if(t<24){
                tropskiDan = false;
            }
        });
        return tropskiDan;
    },

    neuobicajena: function (kisa,suncano,oblacno){
        let neuobicajenDan = false;
        this.temperature.forEach(t=>{
            if(t<-5 && kisa==true || t>25 && oblacno == true || kisa == true && oblacno == true && suncano == true){
                neuobicajenDan = true;
                console.log(neuobicajenDan);
            }
        });
        return neuobicajenDan;
    }

};

console.log(dan.tropski());
dan.neuobicajena(false,false,false);



