# Peregrine Constellation
- GitHub
	- [Peregrine Constellation](https://github.com/Diamond42474/peregrine-constellation)
	- [Pico Constellation](https://github.com/Diamond42474/pico-constellation)

# What Is It?
TLDR; basically APRS but every node is a repeater.
NTLDR; Peregrine Constellation is a custom [MANET](https://en.wikipedia.org/wiki/Wireless_ad_hoc_network) protocol built to run over narrowband audio frequencies. This allows the device to be plugged into virtually any radio and turn it into a network node. 

Instead of needing a special radio (typically expensive), you just plug this thing into your 20-year-old hand-held and you're up and running. Plug another unit into your mobile station and now you have a functioning network. 

# Blog
- [[2026-08-23]] **Sync or Sink**
- [[2026-08-16]] **Ground Work**

# Pico vs Peregrine Constellation
[Peregrine Constellation](https://github.com/Diamond42474/peregrine-constellation)
is the core network stack. Containing all network functionality above the hardware layer. With a simple BSP layer that's implemented by the end device, PC becomes completely hardware agnostic, making development simple and cross-platform compatible. It also is just really clean and easily lets us run unit tests and other things.

[Pico Constellation](https://github.com/Diamond42474/pico-constellation)
as you might have already guessed, Pico Constellation contains the application logic along with the hardware layer. This code compiles specifically for the Pico2W. Using the wireless interface on the pico, we can host a webpage that allows an end user to interact with the network through their mobile device. 

# Hardware
The cool thing about this device (Pico Constellation) is that all that it needs from a radio is audio output, input, and push-to-talk control. This makes it "compatible" with basically every amateur radio on the market. 

![[Pasted image 20260725230935.png]]
> Now.. I don't claim to be an electrical engineer. In fact, I've been learning KiCad by doing this project. I'm sure I'm doing a million things wrong and violating all sorts of rules but it works for prototyping and that's all I need for now. 

One of the main goals with this project was to first make it *Open Source*, and secondly to not make it reliant on any one chip or manufacturer. 
In earlier designs I used a DAC and then switched to a [signal generator](https://www.analog.com/media/en/technical-documentation/data-sheets/ad9833.pdf). After learning more about signal filtering I realized I could just PWM this thing with a low-pass filter and call it a day. This makes it so a minimally viable node can be made with nothing more than a microcontroller, a couple of resistors, capacitors, and a single transistor.

# Why *This* Over *That*?
TLDR; you do whatever works for you, but here's why I've been building this:
1. I simply thought building a communications protocol is *cool*
2. *Legacy Infrastructure*. Amateur radio has been around for quite a while with repeaters available basically anywhere in the US and in Europe. Unfortunately, most of these repeaters are only built for voice. PC however operates over voice channels which means it can use legacy infrastructure as the backbone without having to change anything.
3. *It's cheap*. APRS-capable radios are like $60 on the low end, and if you're looking at APRS radios, you probably already have a normal one. This circuit is like $10 of components (at prototype quantities) and boom you have something you can send texts with.
4. *Hardware agnostic*. I'm just starting to try out Meshtastic, but I'm not totally onboard with the idea that EVERY node is running the same radio chip from a SINGLE manufacturer. 
5. *Open-Source*. APRS is neat and all over, but it's basically stale as far as development goes. I wanted something with the ability to adapt and meet user's needs like Meshtastic's eco system, but fully open-source (Meshtastic users have no control over the PHY layer). 