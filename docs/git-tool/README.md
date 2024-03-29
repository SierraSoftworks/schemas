---
title: Git-Tool
---

# Git-Tool <Badge text="json-schema"/>
[Git-Tool](https://git-tool.sierrasoftworks.com) is a command line tool which keeps
your git repositories organized and makes the process of opening a repo to work in
consistent across all of your devices.

## Configuration
Git-Tool's config file allows you to control how it behaves on your computer.

```
https://schemas.sierrasoftworks.com/git-tool/v2/config.schema.json
```

#### Example
```yaml
# yaml-language-server: $schema=https://schemas.sierrasoftworks.com/git-tool/v2/config.schema.json
$schema: https://schemas.sierrasoftworks.com/git-tool/v2/config.schema.json
directory: /home/bpannell/dev
services:
  - name: gh
    website: "https://github.com/{{ .Repo.FullName }}"
    gitUrl: "git@github.com:{{ .Repo.FullName }}.git"
    pattern: "*/*"
    api:
      kind: GitHub/v3
      endpoint: https://api.github.com
apps:
  - name: shell
    command: pwsh
  - name: code
    command: code
    args:
      - .
aliases:
  gt: gh:SierraSoftworks/git-tool

features:
  open_new_repo_in_default_app: true
  telemetry: true
```

## Registry Templates
Git-Tool maintains a registry of common applications and services which allow you
to quickly add them to your config.

```
https://schemas.sierrasoftworks.com/git-tool/v2/template.schema.json
```

#### Example
```yaml
# yaml-language-server: $schema=https://schemas.sierrasoftworks.com/git-tool/v2/template.schema.json
$schema: https://schemas.sierrasoftworks.com/git-tool/v2/template.schema.json
name: Demo
description: This is an example of how to create a config template
version: 1.0.0
configs:
  # Your config should include either a service (like this)...
  - platform: any
    service:
      name: gh
      website: "https://github.com/{{ .Repo.FullName }}"
      gitUrl: "git@github.com:{{ .Repo.FullName }}.git"
      pattern: "*/*"
      api: github.com

  # Or an app (like this) but usually not both.
  - platform: windows
    app:
      name: shell
      command: powershell.exe

  # You can also add platform specific versions of each app
  - platform: linux
    app:
      name: shell
      command: pwsh
```
