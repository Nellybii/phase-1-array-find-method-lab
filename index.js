// code your solution here
const record = [
    { year: " 2020", result: "W"},
    { year: "2021", result: "N/A"},
    { year: "2022", result: "L"},
     {year: "2023", result: "S"},
  ]
  function superbowlWin(array){
    for(let item of array){
        if(item.result === "W"){
            return item.year;
        }
    }
}
