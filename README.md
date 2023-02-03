# Connected Led with Raspberry Pi

Interact via web interface to led matrix with Raspberry Pi and MicroPython

## Hardware

- Raspberry Pi Pico
- 16x16 RGB LED Matrix
- Wires
- Breadboard
- Leds

## Software

- MicroPython
- NodeJS

## Setup

### Raspberry Pi Pico

- Connect the Raspberry Pi Pico to your computer
- Install MicroPython
- Copy the code from `/main.py` to the Raspberry Pi Pico

### NodeJS

- Install NodeJS
- Install dependencies with `npm install`
- Run the server with `npm run start`

## Frontend

- Modify socket.io url in `/public/index.html` to your server url

## Usage

- Open the web interface in your browser
- Select your color via the color picker
- Click on the led matrix to turn on the led

## License

This project has no license. You can do whatever you want with it.
