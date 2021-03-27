---
title: Bender
---

# Bender <Badge text="open-api"/>
[Bender](https://bender.sierrasoftworks.com/api/v1/quote) is a web service designed to
serve you fresh Futurama quotes from your favourite characters. It doesn't serve
much of a practical purpose, but if it brightens up your day that's awesome.

Internally, we primarily use it as a quick test project for mocking out a new API or evaluating
a framework, since it does some basic HTTP requests and loads some basis data into memory. For
something more complex, we would consider looking to a project like
[Rex](https://github.com/SierraSoftworks/rex-rs), which has a more complex API and backend requirements.


We public Open API Specifications for all versions of Bender's API:

 - [`https://schemas.sierrasoftworks.com/bender/v1/api.yaml`](/bender/v1/api.yaml)