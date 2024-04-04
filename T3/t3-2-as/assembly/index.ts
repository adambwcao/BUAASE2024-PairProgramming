export function mancalaOperator(flag: i32, status: i32[]): i32 {
  let maxNum: i32 = 0, maxStep: i32 = 0;
  let chess: i32[] = new Array<i32>(15).fill(4);
  if(flag == 1){
    for (let i: i32 = 0; i <= 5; ++i) {
      if(status[i] != 0) {
        for (let j: i32 = 1; j <= 14; ++j) {
          chess[j] = status[j-1];
        }
        let num: i32 = 0;
        chess[i+1]=0;
        for(let j: i32 = 0, posPut: i32 = i+2 ; j<status[i] ; ++j, posPut = posPut%13+1){ 
          if(j == status[i]-1) {
            if(1<=posPut && posPut<=6){
              if(chess[posPut] == 0 && chess[14-posPut]>0){
                chess[posPut]--;
                chess[7] += 1 + chess[14-posPut];
                chess[14-posPut] = 0; 
              }
            }
          }
          chess[posPut]++; 
        }

        for (let j: i32 = 1; j <= 7; ++j) {
          num += chess[j];
        }
        if (num > maxNum) {
          maxNum = num;
          maxStep = i;
        }
      }
    }
    return maxStep+11;
  } else{
    for (let i: i32 = 7; i <= 12; ++i) {
      if(status[i] != 0) {
        for (let j: i32 = 1; j <= 14; ++j) {
          chess[j] = status[j-1];
        }
        let num: i32 = 0;
        chess[i+1]=0;
        for(let j: i32 = 0, posPut: i32 = i+2 ; j<status[i] ; ++j, posPut = posPut%14+1){ 
          if(posPut==7) {
            j--;
            continue;
          }
          if(j == status[i]-1) {
            if(8<=posPut && posPut<=13){
              if(chess[posPut] == 0 && chess[14-posPut]>0){
                chess[posPut]--;
                chess[14] += 1 + chess[14-posPut];
                chess[14-posPut] = 0;
              }
            }
          }
          chess[posPut]++; 
        }
        for (let j: i32 = 8; j <= 14; ++j) {
          num += chess[j];
        }
        if (num > maxNum) {
          maxNum = num;
          maxStep = i;
        }
      }
    }
    return maxStep+14;
  }
  return 0; 
}
