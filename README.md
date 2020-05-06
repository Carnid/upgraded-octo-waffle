# upgraded-octo-waffle
dnd character interfaces

Getting Started (Windows)
Preparing your environment

- Install Nodejs LTS (Latest Stable Version): https://nodejs.org/en/download/
  - Use default settings. Make sure you check the box asking to `Automatically install the necessary tools`
  - Once installed, open a new terminal window (Windows + R and type `cmd`)
  - run `npm install npm`
  - run `npm install -g @vue/cli`
- Download Visual Studio Code: https://code.visualstudio.com/docs/?dv=win
  - Install the Vetur extension
- Download github for desktop: https://desktop.github.com/
  - Clone this repository
  - Open the folder where you cloned this repository with Visual Studio

Running the characters app
- Open a new terminal window
- Navigate to dnd/characters
- Run command `npm install` (First time only)
  - All should install smoothly. Low vulnerabilities are normal. 
  - You only need to run this command the first time. You may have to run it from time to time later on, but don't worry about it.
  - Stop here if it doesn't work and open a ticket in github: https://github.com/Carnid/upgraded-octo-waffle/issues?q=is%3Aissue
- Run command `npm run serve`
- Navigate to localhost:8080 in your favorite browser (hopefully an up to date Firefox)