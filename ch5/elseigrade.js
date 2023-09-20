const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('점수를 입력하세요. : ', function(score){
    if(score >= 91 && score <= 100){
        console.log('A학점');
    }
    else if(score >=81 && score <=90){3
        console.log('B학점')
    }
    else if(score >=71 && <=80){
        console.log('C학점')
    }
    else if(scre >= 61 && <=70){
        console.log('D학점')
    }
    else if(scre >= 0 && <=60){
        console.log('F학점')
    }
    else{
        console.log('범위를 벗어났습니다.')
    }
      rl.close();
    });