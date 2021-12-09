const fs = require('fs');

let pos0=0;
let pos1=0;
let pos2=0;
let pos3=0;
let pos4=0;
let pos5=0;
let pos6=0;
let pos7=0;
let pos8=0;
let pos9=0;
let pos10=0;
let pos11=0;
let answer=0;
let lines=0;

fs.readFile('\day3\\input.txt', function(err,data) {
    if(err) throw err;

    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

    for(let i of arr) {
       lines++; 
       var string = i;
       var diag = string.split("",12);
       var strpos0 = diag[0];
       var strpos1 = diag[1];
       var strpos2 = diag[2];
       var strpos3 = diag[3];
       var strpos4 = diag[4];
       var strpos5 = diag[5];
       var strpos6 = diag[6];
       var strpos7 = diag[7];
       var strpos8 = diag[8];
       var strpos9 = diag[9];
       var strpos10 = diag[10];
       var strpos11 = diag[11];
       if (strpos0 === '1') {pos0++;}
       if (strpos1 === '1') {pos1++;}
       if (strpos2 === '1') {pos2++;}
       if (strpos3 === '1') {pos3++;}
       if (strpos4 === '1') {pos4++;}
       if (strpos5 === '1') {pos5++;}
       if (strpos6 === '1') {pos6++;}
       if (strpos7 === '1') {pos7++;}
       if (strpos8 === '1') {pos8++;}
       if (strpos9 === '1') {pos9++;}
       if (strpos10 === '1') {pos10++;}
       if (strpos11 === '1') {pos11++;}

/*        if (command === 'forward')
       {
            console.log('Aim currently is', aim);
            console.log('Depth currently is', depth);
            depth = (aim * +cmd_num) + +depth;
            console.log('Depth is now', depth);
            console.log('Forward positon currently is', fwd);
            fwd = fwd + +cmd_num;
            console.log('Forward positon now is', fwd);
       } 
       else if (command === 'up') 
       {
            console.log('Aim up');
            console.log('Aim currently is', aim);
            aim = aim - +cmd_num;
            console.log('Aim is now', aim);
       }
       else if (command === 'down') 
       {
            console.log('Aim down');
            console.log('Aim currently is', aim);
            aim = aim + +cmd_num;
            console.log('Aim is now', aim);
       } */
       console.log(strpos0,'-',strpos1,'-',strpos2,'-',strpos3,'-',strpos4,'-',strpos5,'-',strpos6,'-',strpos7,'-',strpos8,'-',strpos9,'-',strpos10,'-',strpos11);
    } 
    //answer = depth * fwd;
    //console.log(answer);
    console.log(pos0,'-',pos1,'-',pos2,'-',pos3,'-',pos4,'-',pos5,'-',pos6,'-',pos7,'-',pos8,'-',pos9,'-',pos10,'-',pos11);
    console.log(lines);
});

