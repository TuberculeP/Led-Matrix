# TO PUT IN Raspberry Pico
import machine as m
import network
import urequests
import math
from neopixel import Neopixel
from time import sleep

#NETWORK
ssid = 'Guillaume Tell'
password = 'DalSchim'
ip = '192.168.64.213'
port = 3000
route = '/api/grid'
url = "http://"+ip+":"+str(port)+route

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect(ssid, password)
print('Connected to network : '+ssid+' with local ip '+wlan.ifconfig()[0])

#CONNECTION VISUAL
pinConnection = m.Pin(16, m.Pin.OUT)
pinConnection.value(0)

pinTrying = m.Pin(15, m.Pin.OUT)
pinTrying.value(1)

#PIXELS
white = (255,255,255)
black = (0,0,0)

pixels = Neopixel(256, 0, 28, "GRB")
pixels.fill(black)
sleep(1)
pixels.show()

#BRIGHTNESS
potardOUT = m.Pin(27, m.Pin.OUT)
potardOUT.value(1)

potardIN = m.ADC(m.Pin(26, m.Pin.IN))




try:
    while True:
        try:
            response = urequests.get(url)
            pixels.brightness(math.floor((potardIN.read_u16() / 66635) * 100))
            pinConnection.value(1)
            pinTrying.value(0)
            ledArray = response.json()
            for i in range(256):
                pixels.set_pixel(i, ledArray[i])
            sleep(0.5)
            pixels.show()
            sleep(0.2)
        except:
            pinConnection.value(0)
            pinTrying.value(1)
            print('No response from '+url)
            sleep(1)
except KeyboardInterrupt:
    pinConnection.value(0)

