# MMM-Remote-Refresh
This is an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror). It allows remote refresh of every connected client.

## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/asward/MMM-Announcements.git`. A new folder will appear navigate into it.

## Using the module
To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
    {
        module: "MMM-Remote-Refresh"
    }
]
````
Refresh the clients by visiting http://your-mirror-host/refresh. All connected clients will reload/refresh. 


The MIT License (MIT)
=====================

Copyright © 2016 PtrBld

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**