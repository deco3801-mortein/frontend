<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./src/assets/img/Logo.png" alt="Project logo"></a>
</p>

<h3 align="center">VibeGrow</h3>

---

<p > Guide to rebuild our project.</p>

## 🌺 Table of Contents

- [About](#about)
- [Our Features](#our_features)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Authors](#authors)

## 🍀 About <a name = "about"></a>

Access our web application here: https://vibegrow.pro/ 

Welcome to VibeGrow! Our innovative project combines hardware and software to revolutionize plant care. At its core is a small device attached to the base of a plant, capable of producing vibrations at frequencies used for insect communication. This device is wirelessly operated through a user-friendly web interface.
Beyond pest control, VibeGrow monitors crucial plant health metrics (soil moisture, temperature, and light exposure), allowing users to care for their plants remotely. Our web application also features comprehensive plant and pest search functionality, providing users with easy access to vital gardening information.

## 🌷 Our Features<a name = "our_features"></a>

- 💫 **Customized Homepage**: Displays all user plants with names and icons for quick identification.
- 💫 **Real-Time Plant Health Monitoring:** Three progress bars (temperature, light exposure, soil moisture) provide at-a-glance health status.
- 💫 **Detailed Garden Guidance:** Separate search functionalities for plants and pests, offering cultivation tips and pest control advice.
  - Pest information gathered from [The Royal Horticultural Society](https://www.rhs.org.uk/biodiversity) and [GrowVeg](https://www.growveg.com.au/pests/australia-and-nz/).
  - Plant information retrieved from the [Perenual Plant API](https://perenual.com/docs/api).

## 🙉 Getting Started <a name = "getting_started"></a>
All code for this project can be found [here](https://github.com/deco3801-mortein).

### ✨Rebuilding the the Web Application
   - Clone or download the [frontend repository](https://github.com/deco3801-mortein/frontend) to your local machine. 
   - Open the project folder using your preferred code editor
   - Add the following environment variables to your environment (these will give you access to our sdk package and the Perenual API for the plant guide):

      ```NPM_AUTH=<your personal access token>```

      ```VITE_API_KEY=<your perenual plant API key>```

     - To get the NPM_AUTH token:
       - Contact us to for access to install our package
       - Authenticate with npm registry using a personal access token (link for help: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
     - To get the VITE_API_KEY: 
       - Create an account and ask for a key from [perenual.com](https://perenual.com/docs/api).
   - In your terminal, navigate to the cloned or downloaded frontend repository folder and run the following commands:
     - ```npm install```
     - ```npm run build```
   - The created dist file can then be deployed using any web hosting service (such as AWS Amplify)
   - You will need to give the hosting service your Perenual API key

- **Accessing Our Deployed Web Application**:
   - Go to https://vibegrow.pro to see our deployed website using AWS Amplify


## 🐜 Built Using <a name = "built_using"></a>

React, Vite, AWS Amplify, Perenual Plant API

