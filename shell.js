
const readline = require('readline');

/*
    Documentation:
        - NodeJS process management: https://nodejs.org/api/process.html
*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
        rl.on('line', this.readLine);
    }
    
    readLine(line){
        console.log('line is', line);
        this.waitCommand();
    }
}

module.exports = new Shell();