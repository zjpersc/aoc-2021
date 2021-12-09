const fs = require('fs');

let a = 0;
let b = 0;
let c = 0;
let curr_win = 0;
let prev_win = 0;
let inc_win = 0;
let dec_win = 0;
let same_win = 0;

fs.readFile('input.txt', function(err,data) {
    if(err) throw err;

    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

    for(let i of arr) {
        if (a==0)
        {
            a=i;
        } 
        else if (b==0)
        {
            b=i;
        } 
        else if (c==0)
        {
            c=i;
            prev_win= +a + +b + +c;            
        }
        else
        {
            c=i;
            curr_win= +a + +b + +c;
            if (curr_win < prev_win)
            {
               dec_win++;
               console.log(curr_win,' is less than ',prev_win);
               prev_win=curr_win;
               a=b;
               b=c;
            } 
            else if (curr_win > prev_win)
            {
                inc_win++;
                console.log(curr_win,' is greater than ',prev_win);
                prev_win=curr_win;
                a=b;
                b=c;
            }
            else if (curr_win == prev_win)
            {
                same_win++;
                console.log(curr_win, ' is equal to ',prev_win);
                prev_win=curr_win;
                a=b;
                b=c;
            }
        }
    }
    console.log(a);
    console.log(b);
    console.log(c);
    console.log('Windows that decreased =',dec_win);
    console.log('Windows that increased =',inc_win);
    console.log('Windows that stayed the same =',same_win);
});