 
let sum = 0
let raw_array = [
    [
        null,
       {name:"favour",population:125000,tempreture:3.0,currency:"NG"},
       {name:"Hadiza",population:125000,tempreture:3.0,currency:"NG"},
       {name:"Inem",population:125000,tempreture:3.0,currency:"NG"},
   ],
   [
       {name:"favour",population:125000,tempreture:3.0,currency:"NG"},
       {name:"Hadiza",population:175000,tempreture:3.0,currency:"NG"},
       {name:"Inem",population:175000,tempreture:3.0,currency:"NG"},
       
   ],
   [
       {name:"favour",population:125000,tempreture:3.0,currency:"NG"},
       {name:"Hadiza",population:175000,tempreture:3.0,currency:"NG"},
       {name:"Inem",population:175000,tempreture:3.0,currency:"NG"},
   ],
   ];
   
   
  for(let i = 0; i < raw_array.length; i++){
    for(let j = 0; j < raw_array[i].length; j++){
        if(raw_array[i][j] != null){
            if(raw_array[i][j].tempreture <= 10.0){
                sum += raw_array[i][j].population
            }
            
        }
    }
    
  }
  console.log("The population is " + sum)