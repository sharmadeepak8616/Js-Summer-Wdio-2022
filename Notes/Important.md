To run all testcases:
    1. Open terminal in visual-studio
    2. Run command:
            npx wdio
        OR
            npx wdio wdio.conf.js

To run a particular test file:
    1. Open terminal in visual-studio
    2. Run command:
        npx wdio run ./wdio.conf.js --spec ./relative/file/path
    PS: This will run all it-blocks (testscases) in the file.

    eg:
        npx wdio run ./wdio.conf.js --spec ./test/specs/Class2/Basics.js 

To run a particular testcase with a testfile:
    1. Open terminal in visual-studio
    2. Add only with the respective testcase (or it-block)
    3. Run command:
        npx wdio run ./wdio.conf.js --spec ./relative/file/path
    
    PS: This will run it-blocks (testscases) with only-keyword in the file.