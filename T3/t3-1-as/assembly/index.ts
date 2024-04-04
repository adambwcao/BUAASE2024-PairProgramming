export function mancalaBoard(flag: i32, seq: i32[], size: i32): i32[] {  
    let chess: i32[] = new Array<i32>(15).fill(4);
    let result: i32[] = new Array<i32>(15).fill(0);
    chess[7] = 0;
    chess[14] = 0; 
  
    let maxFreq1: i32 = 0;  
    let rightId: i32 = seq[0] / 10; // 第一轮应该行动的人
    for (let i: i32 = 0; i < size; ++i) {
      let opt: i32 = seq[i] % 10;  
      let id: i32 = seq[i] / 10; 
      let posGet: i32 = (id == 1) ? opt : opt+7;
      if(id != rightId) {
        for(let k: i32 = 1; k <=14; ++k){
          result[k-1] = chess[k];
        }
        if(flag == 1){
          result[14] = 200 + 2*chess[7] - 48;
        } else{
          result[14] = 200 + 48 - 2*chess[14];
        }
        return result;
      }
      rightId = change(rightId); // 交换回合
      let numGet = chess[posGet]; // 需要投出的棋子数
      chess[posGet] = 0;
      for(let j: i32 = 0, posPut: i32 = posGet+1 ; j<numGet ; ++j, posPut = posPut%14+1){ 
        // let posPut = (posGet + j) % 14 + 1;
        if((id==1 && posPut==14) || (id==2 && posPut==7)) {
          j--;
          continue;
        }
        if(j == numGet-1) {
          if((id==1 && posPut==7) || (id==2 && posPut==14)) {
            rightId = change(rightId);
          }
          if((id==1 && 1<=posPut && posPut<=6) || (id==2 && 8<=posPut && posPut<=13)){
            if(chess[posPut] == 0 && chess[14-posPut]>0){
              if(id == 1) {
                chess[posPut]--;
                chess[7] += 1 + chess[14-posPut];
                chess[14-posPut] = 0;
              }
              if(id == 2){
                chess[posPut]--;
                chess[14] += 1 + chess[14-posPut];
                chess[14-posPut] = 0;
              }
            }
          }
        }
        chess[posPut]++; // 播棋子
      }
    }
    if(chess[1]==0 && chess[2]==0 && chess[3]==0 && chess[4]==0 && chess[5]==0 && chess[6]==0) {
      for(let j: i32 = 8 ; j<=13 ; ++j) {
        chess[14] += chess[j];
        chess[j] = 0;
      }
      result[14] = 200 + chess[7] - chess[14];
    }
    else if(chess[8]==0 && chess[9]==0 && chess[10]==0 && chess[11]==0 && chess[12]==0 && chess[13]==0) {
      for(let j: i32 = 1 ; j<=6 ; ++j) {
        chess[7] += chess[j];
        chess[j] = 0;
      }
      result[14] = 200 + chess[7] - chess[14];
    }
    else {
      result[14] = rightId;
    }
    for(let k: i32 = 1; k <=14; ++k){
      result[k-1] = chess[k];
    }
    return result;
}

function change(idCheck: i32): i32{
  if(idCheck == 1) return 2;
  if(idCheck == 2) return 1;
  return 0;
}