
const readline = require('readline');

/*
    Documentation:
        - NodeJS process management: https://nodejs.org/api/process.html
*/

///
/// readline
///

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

///
/// Functions
///

function call(of, fun){
    return () => {
        of[fun].apply(of, arguments);
    };
}


///
/// Shell
///

class Shell {
    
    
    ///
    /// Working directory
    ///
    getWorkingDirectory(){
        return process.cwd();
    }
    
    ///
    /// Bash
    ///
    
    waitCommand(){
        console.log(this.getWorkingDirectory()+' > ');

        this.readLine.test = true;

        rl.on('line', call(this, 'readLine'));
    }
    
    readLine(line){
        console.log('line is', line);
        this.waitCommand();
    }
}

module.exports = new Shell();