![[Mission Control.canvas|Mission Control]]
# Variables
## Static Variables
```
mission_t : current_mission
enum : uav_state
queue : mission_queue
```

## Variable Definitions
### mission_t
```
struct

bool : completed
int : status
void * : data
void * : setup_func
void * : core_func
void * : teardown_func
```
### uav_state
```
enum


```
### queue
# Handle Command
*mission_control_handle_command*

