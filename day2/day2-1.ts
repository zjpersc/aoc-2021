const fs = require('fs');

let depth=0;
let fwd=0;
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
            console.log('Move foward');
            fwd = fwd + +cmd_num;
       } 
       else if (command === 'up') 
       {
            console.log('Move up');
            depth = depth - +cmd_num;
            console.log(depth);
       }
       else if (command === 'down') 
       {
            console.log('Move down');
            depth = depth + +cmd_num;
            console.log(depth);
       }
    }
    answer = depth * fwd;
    console.log(answer);
});

