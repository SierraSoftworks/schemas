---
title: Road map
---

# Road map <Badge text="json-schema"/>
[Road map](https://github.com/SierraSoftworks/roadmap) is a standardized way of describing
a project or team road map in YAML, with tooling to convert that into a number of different
visualization formats.

## Version 1
The current version of road map's schema is available here.

```
https://schemas.sierrasoftworks.com/roadmap/v1/schema.json
```


#### Example

```yaml
# yaml-language-server: $schema=https://schemas.sierrasoftworks.com/roadmap/v1/schema.json
$schema: https://schemas.sierrasoftworks.com/roadmap/v1/schema.json
title: Example Road Map
description: |
    This is an example of what a road map might look like.

authors:
  - name: Benjamin Pannell
    email: contact@sierrasoftworks.com

timeline:
  - date: 2021-04-21
    title: Project Start
    description: This is when we will start working on the project, get the team ready!

milestones:
  - id: team
    title: Build the Team
    description: We don't yet have anyone, that's not gonna work...
    deliverables:
      - title: Team Lead
        state: TODO
        requirement: MUST
        description: This person needs to know enough about this domain to be able to run with the project.

      - title: Senior Engineer 1
      - title: Intern 1..50
        description: This should be cheaper than hiring a proper team (right?).

  - id: done
    title: Finish the Project
    description: We don't need other milestones, do we?
    dependencies:
      - team
    deliverables:
      - title: MVP
        description: Who needs a polished product? Let's just ship the MVP and call it done.
      - title: Marketing
      - title: VC Funding
      - title: Yacht
        reference: https://lmgtfy.app/?q=yacht&t=i
```