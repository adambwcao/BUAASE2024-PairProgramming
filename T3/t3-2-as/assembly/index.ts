export function mancalaOperator(flag: i32, status: i32[]): i32 {
  let maxNum: i32 = 0, maxStep: i32 = 0;
  let chess: i32[] = new Array<i32>(15).fill(4); // init
  if(flag == 1){
    for (let i: i32 = 5; i >= 0; --i) {
      if(status[i] != 0) {
        return  i+11;
      }
    }
  } else{
    for (let i: i32 = 12; i >= 7; --i) {
      if(status[i] != 0) {
        return i+14;
      }
    }
  }
  return 0; 
}
