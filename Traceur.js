<script src = "http://google.github.io/traceur-compiler/bin/traceur.js"></script>
<script>
    traceur.options.experimental = true;
</script>
<script type = 'module'>
    class Calc{
        consturctor(){
            console.log('Calc constructor');
        }
        add(a,b){
            return a + b;
        }
    }
    var c = new Calc();
    console.log(c.add(4,5));
</script>


//Node.js
var traceur = require('traceur')
var fs = require('fs')
var contents = fs.readFileSync('es6-file.js').toString();
var result = traceur.compile(contents,{
    filename:'es6-file.js',
    sourceMap:true,
    modules:'commonjs'
});
if(result.error)
    throw result.error;
fs.writeFileSync('out.js',result.js);
fs.writeFileSync('out.js,map',result.sourceMap);
