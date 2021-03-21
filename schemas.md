# Introduction
We use a range of different schema formats to describe our software. These include the
following:

## [JSONSchema][jsonschema]
JSONSchema is a schema language, written in JSON, which allows you to validate
the structure of JSON (and JSON-like) documents. We use it primarily for config
files.

::: tip
You will be able to identify JSONSchema schemas by the `.schema.json` filename
suffix we use.
:::

## [Open API Specification][oas3]
The Open API specification has evolved out of Swagger and is a standardized means
by which one can describe a REST API. We use it to document the public API surface
for services we host.

::: tip
You will usually be able to identify Open API specification files because we name
them `api.yaml`.
:::

## [XML Schema Definitions][xmlschema]
XML Schema (also known as XSD) is a schema language, written in XML, which allows you
to validate XML documents against a series of rules. It has largely been superseded
by [JSONSchema][jsonschema], however we have a few older tools which still take advantage
of it.

[jsonschema]: https://json-schema.org
[oas3]: https://swagger.io/specification/
[xmlschema]: https://en.wikipedia.org/wiki/XML_Schema_(W3C)