1. Create a new repo in github (Winter-Wdio-2023)
    Send collaborator request to Ahsan or I (based on Lab session)
        Ahsan's email:  ahsan@technosoftacademy.io
        Deepak's email: deepak@technosoftacademy.io
2. In terminal/GitBash: Clone the new repo in local
3. In terminal/GitBash: Go in to the new repo in local
4. In terminal/GitBash: Create new branch
5. In terminal/GitBash: Checkout on the new-branch
6. In terminal/GitBash: Create node project
    Command: npm init –y
7. In terminal/GitBash: Install WebDriver-IO cli
    Command: npm install @wdio/cli
8. In terminal/GitBash: Set up wdio config file
    Command: npx wdio config
    ? A project named "winter-wdio-2023" was detected at "/Users/deepaksharma/Documents/git/Winter-Wdio-2023", 
    correct? Yes
    ? Where should your tests be launched? local - for e2e testing of web and mobile applications
    ? Where is your automation backend located? On my local machine
    ? Which framework do you want to use? Mocha (https://mochajs.org/)
    ? Do you want to use a compiler? No!
    ? Do you want WebdriverIO to autogenerate some test files? No
    ? Which reporter do you want to use? spec
    ? Do you want to add a plugin to your test setup? wait-for
    ? Do you want to add a service to your test setup? chromedriver
    ? What is the base url? https://www.facebook.com
    ? Do you want me to run `npm install` Yes
9. In terminal/GitBash: Install chai
    Command: npm install chai
10. In terminal/GitBash: Install moment
    Command: npm install moment
11. Open the project in Visual Studio
12. In Visual Studio: Create .gitignore file
13. In Visual Studio: add node_modules/ in .gitignore-file
14. In Visual Studio: Save .gitignore file
15. In Visual Studio: Go to wdio.conf.js
16. In Visual Studio: Edit specs section as below:
    specs: [
        './test/specs/Class1/sampleRun.js'
    ],
17. In project folder: Create folder (name: test)
18. In above created folder(test): Create specs (name: specs)
19. In above created folder (specs): Create .js file (name: sampleRun.js)
20. In above create file (sampleRun.js): Add below code
    const { describe, it } = require("mocha");

    describe('Launch Page', () => {
        it('Verify we can launch a page', async () => {
            await browser.url('https://www.amazon.com');
            await browser.pause(10000);
        })
    })
21. Run the testcase, using command:
    npx wdio wdio.conf.js



Install NodeJS:
	1. Go to url -> https://nodejs.org/en/download/
	2. Depending upon operating System -> select operating system
	3. Click the downloaded executable
	4. Complete the installation process
	5. Open terminal
	6. Verify node and npm is installed.
		node -v
		npm -v