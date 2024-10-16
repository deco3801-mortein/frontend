<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./Logo.png" alt="Project logo"></a>
</p>

<h3 align="center">VibeGrow</h3>

---

<p > This is the guidance of how to rebuild our project.</p>

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

## 🙉 Getting Started <a name = "getting_started"></a>

### ✨Prerequisites

1. **Device Setup**:
   - Assemble the monitoring device with required sensors and ESP32 microcontroller.
   - Ensure proper connection and calibration of all components.

2. **Server Setup**:
   - Configure the backend server to receive and process data from the device via WiFi.
   - Set up the database for storing plant and user information.

3. **Web Application - Running the Code**:
   - Clone or download the frontend repository to your local machine. 
   - Authenticate with npm registry (link for help: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
   - Ensure your token is stored in your environment variables with the name NPM_AUTH
   - Get an API key for perenual.com so you can access the plant guide information and store it in VITE_API_KEY in environment variables
   - Run npm install in the terminal
   - Run npm run build
   - The created dist file can then be deployed using any web hosting service (such as AWS Amplify)
   - You will need to give the hosting service your Perenual API key

4. **Accessing Our Deployed Web Application**:
   - Go to https://vibegrow.pro to see our deployed website using AWS Amplify


## 🐜 Built Using <a name = "built_using"></a>

- **Frontend** - React, Vite, AWS Amplify, Perenual Plant API
- **Backend** - AWS IoT Core MQTT Broker, an RDS Database
- **Embedded Develpoment** - ESP32 microcontroller (Arduino Uno ESP32), Capacitive Soil Moisture Sensor,

## ✍️ Authors <a name = "authors"></a>

- ✨**Amelia Caddie** - Frontend Development
- ✨**Denzel Strauss** - Backend Development
- ✨**Dominic Pincus** - Embedded Develpoment
- ✨**Michael Jones** - Embedded Develpoment
- ✨**Mingkun Li** - UI design & Frontend Development
- ✨**William Sawyer** - Backend Development

