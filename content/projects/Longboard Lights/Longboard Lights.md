# LUX Longboard Automation
- [GitHub Repo](https://github.com/Diamond42474/LUX-Longboard-Automation) 

# Overview
[LUX Longboard Automation](https://github.com/Diamond42474/LUX-Longboard-Automation) was my first introduction to C and my first introduction to microcontrollers. Over the summer of 2021, I was working at a summer camp in the mountains of California. There wasn't any cell service or anything for three months, so I did a lot of reading. One of those books was [AVR Programming](https://www.oreilly.com/library/view/make-avr-programming/9781449356484/) by Elliot Williams. That book taught me the fundamentals of how microcontrollers work and how registers can be written to and read from to interact with physical circuits. When I got back to college in the Fall I begin working on this project. 
The goal of the project was simple: use an accelerometer to control LED strips that ran along the bottom left and right side of my longboard. As I turned, the lights would react accordingly. I chose the [ATtiny85](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-2586-AVR-8-bit-Microcontroller-ATtiny25-ATtiny45-ATtiny85_Datasheet-Summary.pdf) in the 8-pin DIP configuration. Not really sure why I chose this one other than it was small and it was cheap. At the time, I was use to writing code in Java, so 8KB of programmable flash was pretty small. Fortunately, the thing I wanted to create was also pretty small. I put a snippet of code down below so you can take a look, but the flow is pretty simple: 
1. do a little startup sequence blinking between red and blue
2. read the ADC that's hooked up to the accelerometer
3. take the average ADC reading over 32 samples
4. scale it between red and blue depending on if this is the left or right side LED controller
5. write to the PWM pin for blue and red
6. repeat

Looking back on projects like these I think it might be fun to go through and re-write the code. At the time I of course knew very little about C programming and was relatively new to programming in general. 

# Code Snippet
```c
#include <avr/io.h>
#include <util/delay.h>
#include <avr/power.h>
#include "light_automation.h"
#include "pin_defines.h"
#include "settings.h"
void setup()
{
    // Clock
    clock_prescale_set(clock_div_1); //8MHz
    // PWM
    PWM_Config();
    // Pins
    DDRB = (1 << BLUE_PIN) | (1 << RED_PIN); //Set blue and red pins as output
    // Lights
    lightsSetup();
}
void startupSequence()
{
    for (uint8_t ie = 0; ie < 1; ie++)
    {
        for (uint8_t i = 255; i > 0; i--)
        {
            RED_LED = 255 - i;
            BLUE_LED = i;
            _delay_ms(4);
        }
    }
    RED_LED = 0;
    BLUE_LED = 255;
    _delay_ms(500);
    RED_LED = 255;
    BLUE_LED = 0;
    _delay_ms(500);
}
int main(void)
{
    setup();
    startupSequence();
    BLUE_LED = 255;
    while (1)
    {
        
        uint8_t *average = getAverageADC();
        uint8_t X = *(average + 0);
        uint8_t Y = *(average + 1);
        
        //RED_LED = 255 - ((getADC(X_Axis)-70) * 5);
        RED_LED = 255 - X;
        BLUE_LED = 255 - Y;

        if(Y<128){
            RED_LED = 0; // full brightness
            BLUE_LED = 255 - Y * 2;
        }else{
            BLUE_LED = 0;
            RED_LED = Y * 2;
        }
    }
    return 1;
}
```

# "Electrical Schematic"
![[Circuit Diagram.png]]