const fs = require('fs');

let h=0;
let inc_days=0;
let dec_days=0;
let same_days=0;

fs.readFile('input.txt', function(err,data) {
    if(err) throw err;

    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

    for(let i of arr) {
        if (i < h)
        {
           dec_days++;
           console.log(i,' is less than ',h);
           h=i;
        } 
        else if (i > h)
        {
            inc_days++;
            console.log(i,' is greater than ',h);
            h=i;
        }
        else if (i == h)
        {
            same_days++;
            console.log(i, ' is equal to ',h)
            h=i;
        }
    }
    console.log('Days that decreased =',dec_days);
    console.log('Days that increased =',inc_days);
    console.log('Days that stayed the same =',same_days);
});

