const fs = require('fs');

let depth=0;
let fwd=0;
let aim=0;
let answer=0;
let cmd_num=0;

fs.readFile('\day2\\input.txt', function(err,data) {
    if(err) throw err;

    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

    for(let i of arr) {
       var string = i;
       var cmds = string.split(" ", 2);
       var command = cmds[0];
       var cmd_num = cmds[1];
       if (command === 'forward')
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
       }
    }
    answer = depth * fwd;
    console.log(answer);
});

