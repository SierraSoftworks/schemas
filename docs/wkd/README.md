---
title: Web Comic Downloader
---

# Web Comic Downloader <Badge text="xml-schema"/>
[Web Comic Downloader](https://sierrasoftworks.com/projects/wkd/) is a tool used to download
your favourite web comics for offline viewing. It allows you to create your own definition
files and includes a detailed schema to help you write them correctly.

```
https://schemas.sierrasoftworks.com/wkd/WebComicDefinition.xsd
```

#### Example
```xml
<?xml version="1.0" encoding="utf-8" ?>
<Comic xmlns="http://www.sierrasoftworks.com/WebComicDownloader">
  <Details>
    <Name Value="Sequential Art"/>
    <Author Value="Jolly Jack"/>
    <Address Value="http://www.collectedcurios.com/sequentialart.php"/>
    <FirstComicAddress Value="http://www.collectedcurios.com/sequentialart.php?s=1"/>
  </Details>
  <XPath>
    <Image Value="//img[@id=&#34;strip&#34;]/@src"/>
    <Next Value="//a[img/@title=&#34;Forward one&#34;]/@href"/>
    <Previous Value="//a[img/@title=&#34;Back one&#34;]/@href"/>
  </XPath>
  <Advanced>
    <FileNaming Pattern="%Index% - %ImageName%"/>
  </Advanced>
</Comic>
```
