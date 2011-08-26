Building
========

You will need to have Ruby installed and in your path in order to build this project.  
You will also need (sprockets)[http://getsprockets.org/]  A windows batch file (build.cmd)]
which invokes sprocketize is provided to simplify the process.  An alternative shell script
should be easy to produce from the batch file.

Steps
-----

build.cmd   --> this builds the concatenated JavaScript file and saves it under build/
build/index.hmtl    --> Template HTML with a reference to the freshlly built JavaScript and default theme CSS