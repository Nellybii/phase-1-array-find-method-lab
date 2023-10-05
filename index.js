// code your solution here
const record = [
    { year: " 2020", result: "W"},
    { year: "2021", result: "N/A"},
    { year: "2022", result: "L"},
     {year: "2023", result: "S"},
  ]
  function superbowlWin(array){
    const win = array.find(record=>record.result == "W");
    if (win){
        return win.year
    }
    return undefined
}
