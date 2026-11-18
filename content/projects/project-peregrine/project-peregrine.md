# Overview

Project Peregrine is an autonomous fixed-wing Unmanned Aerial Vehicle (UAV) that employs thrust vector control to achieve exceptional maneuverability within confined airspace, while harnessing the advantages inherent to fixed-wing aircraft. In the realm of modern military surveillance drones, a prevailing distinction exists between two predominant categories. The first category comprises slow, quadcopter-style devices noted for their agility in tight spaces but often characterized by their conspicuous noise output. The second category encompasses large, runway-dependent aircraft that necessitate specialized launching mechanisms and sensitive camera equipment to compensate for their operational distance from the target, essential for maintaining stealth.

To bridge the gap between these two distinct UAV types, Peregrine introduces a three-stage flight strategy. In the first stage, thrust vectoring technology, commonly employed in rocketry for vertical stabilization during takeoff at low speeds, facilitates runway-independent ascent, allowing the UAV to attain velocity and altitude. Stage two initiates once the UAV has achieved the desired altitude within the geographic range of its surveillance objective. During this phase, the UAV executes a controlled nosedive, reaching terminal velocity and closing the gap with the target area. Stage three seamlessly follows stage two, where the UAV disengages its propulsion, achieving complete silence. In this phase, the UAV relies on its wings to glide at low altitude over the target area, leaving no acoustic footprint.

![[Master Map.canvas|Master Map]]

# Mechanical Design
[[Hardware]]
*re-inserting images here soon*

# Electrical Design
Flux.ai was used to generate the PCB (Printed Circuit Board) design as it allowed for a easy cloud-based solution for electrical design.
## Electrical Components
- Raspberry Pi Pico W
	- ARM M0+ Dual Core Microcontroller
- MPU6050
	- 6-axis Accelerometer / Gyroscope
- BMP280
	- Barometric Pressure Sensor
- HMC5883L
	- 3-axis Magnetometer
- SSD1306 
	- OLED Display
- *various power regulation components*

# Software
[[AACS]]
[[C2 Server]]
## System Architecture Overview
This shows how the low-level flight system is connected to the web application that can be used to control the aircraft.
![[Software Architecture.canvas]]

