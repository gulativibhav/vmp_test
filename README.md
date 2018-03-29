**Usage**:
```bash
node requestor.js <number of URLs> <state>
```

Here:
**number of URLs**: Number of URLs that you want to hit at once
**state**: Can have two values, either,
> random : the given **number of URLs** will be random every time you run the script, *or*,
> constant : the given **number of URLs** will be constant every time you run the script. That means, if **30** is set as the **number of URLs**, then first 30 from the list will be chosen without randomising

**example**:
```bash
node requestor.js 30 random
```
Here 30 URLs will be randomly selected from the list