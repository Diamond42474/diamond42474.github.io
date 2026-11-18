# Functional Requirements
- *Flight Data*
	- Flight stage
	- Full system health status
		- Operational
		- Minor error
		- Fatal error
- *Network Status*
	- View Network Connection Status
		- Connected
		- Not Connected
	- View time since last network packet was received 
		- Example 20ms
- *Peripheral Data*
	- Note:
		- Health status will be broken down into:
			- Operational
			- Disconnected
			- Faulty
	- View Accelorometer Data
		- Health status
		- Activation state
		- x,y,z
	- View Gyroscope Data
		- Health status
		- Activation state
		- x,y,z
	- View Barometric Pressure Data
		- Health status
		- Activation state
		- altitude
	- View Magnetometer Data 
		- Health status
		- Activation state
		- heading
	- View Ultrasonic Sensor Data
		- Health status
		- Activation state
		- distance in mm
- *Actuator Data*
	- View Motor data x4
		- Health status
		- Power percentage
	- View servo data x4
		- Health status
		- Angle
- *System Data*
	- System needs to be capable of uniquely identifying connection
	- System needs to be capable of verifying firmware version

# Transferred Data
This contains information pertaining to what data is actually transmitted and received to and from the UAV over the wireless connection.

---
Estimated Total Unique Messages: 46
## Received Data (from the UAV)
### *logging*
- debug
- info
- error
- fatal
### *peripheral* 
managed by [[AACS#Sensor Control Interface]]
- accelorometer:
	- x
	- y
	- z
	- status : operational, faulty, disconnected
	- activation state: activated, deactivated
- gyroscope:
	- x
	- y
	- z
	- status : operational, faulty, disconnected
	- activation state: activated, deactivated
- altimeter
	- altitude
	- status : operational, faulty, disconnected
	- activation state: activated, deactivated
- magnetometer
	- heading
	- status : operational, faulty, disconnected
	- activation state: activated, deactivated
- ultrasonic
	- distance
	- status : operational, faulty, disconnected
	- activation state: activated, deactivated
### *actuator* 
managed by [[AACS#Actuator Control Interface]]
- motor 1
	- status : operational, faulty, disconnected
	- power percent
- motor 2
	- status : operational, faulty, disconnected
	- power percent
- motor 3
	- status : operational, faulty, disconnected
	- power percent
- motor 4
	- status : operational, faulty, disconnected
	- power percent
- servo 1
	- status : operational, faulty, disconnected
	- angle
- servo 2
	- status : operational, faulty, disconnected
	- angle
- servo 3
	- status : operational, faulty, disconnected
	- angle
- servo 4
	- status : operational, faulty, disconnected
	- angle
### *flight data* 
managed by [[AACS#Master Control Interface]]

- flight stage
- overall system health
- ready to enter launch stage
- ready to enter target acquisition stage 
- ready to enter stealth surveillance stage
- ready to enter vehicle extraction stage
- ready to enter landing stage

## Transmitted Data (to the UAV)

# UI Design
![[C2 User Interface Design.canvas|C2 User Interface Design]]

# System Architecture
![[C2 System Architecture.canvas|C2 System Architecture]]