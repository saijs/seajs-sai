seajs-monitor
=============

A Sea.js plugin for catch javascript exceptions.


Usage
-----

```html
<!-- tiny seer script for monitor -->
<script src="path/to/seer.js"></script>
<script src="path/to/sea.js"></script>
<script src="path/to/seajs-monitor.js"></script>

<script defer>
seajs.use(['alipay/monitor/2.1.0/monitor'], function(monitor) {
  monitor.boot();
})
</script>
```
