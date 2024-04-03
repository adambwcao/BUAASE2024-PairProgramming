export function bocchiShutUp(flag: i32, seq: i32[], size: i32): i32 {  
  let freq1: i32[] = new Array<i32>(7).fill(0); 
  let freq2: i32[] = new Array<i32>(7).fill(0);  
  let maxFreq1: i32 = 0;  
  let maxFreq2: i32 = 0;  
  let maxNum1: i32 = 0;  
  let maxNum2: i32 = 0;  
  let count1: i32 = 0;  
  let count2: i32 = 0;  
  for (let i: i32 = 0; i < size; ++i) {  
    let num: i32 = seq[i];  
    let tens: i32 = num / 10;  
    if (flag === 1 && tens === 1) {  
      freq1[num % 10]++; 
    } else if (flag === 2 && tens === 2) {  
      freq2[num % 10]++;
    }  
  }  
  for (let i: i32 = 0; i < 6; ++i) {  
    if (flag === 1) {  
      if (freq1[i] > maxFreq1) {  
        maxFreq1 = freq1[i];  
        maxNum1 = i + 10; 
        count1 = 1;  
      } else if (freq1[i] === maxFreq1) {  
        count1++;  
      }  
    } else if (flag === 2) {  
      if (freq2[i] > maxFreq2) {  
        maxFreq2 = freq2[i];  
        maxNum2 = i + 20;
        count2 = 1;  
      } else if (freq2[i] === maxFreq2) {  
        count2++;  
      }  
    }  
  }  
  if (flag === 1) {  
    return count1 === 1 ? maxNum1 : 10;  
  } else {  
    return count2 === 1 ? maxNum2 : 10;  
  }  
}