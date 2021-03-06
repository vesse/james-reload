# James-reload
Browser reload plugin for [James.js](https://github.com/leonidas/james.js)

__Basic configuration__
```javascript
var reloadService = require('james-reload');
var reload = reloadService({
  srcPort: 80,
  proxyPort: 9002
});
```
Reads content from port __80__ and proxies it to port __9002__ with the client side script appended

---
<a name="reloadService" />
## reloadService(config)
Returns a function [reload](#reload) for sending a signal when client should reload content
####config (Object)
* srcPort: (Number)
    * Port to read from
    * Default: __9001__
* proxyPort: (Number)
    * Proxy where the content is proxied
    * Default: __9002__
* keepReconnecting (Boolean)
    * Try reconnection if proxy request fails
    * Default: __true__
* reloadAfterReconnect
    * Reload client location when websocket connection disconnects and connects again
    * Default: __true__
* debug
    * console.log errors and info messages
    * Default: __false__

# reload(config)
signals client script to reload content
####config (Object)
* stylesheetsOnly: (Boolean)
    * Tell client script to only reload stylesheet files if set to true
    * Default: __false__
