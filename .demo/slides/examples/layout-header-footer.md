---
name: "Marc Duiker | marcduiker.dev"
session: "Xebia XKE 2025"
header: "<div style='display: flex;justify-content: flex-end;align-items:center;width: 100%;height: 100%;'><img src='.demo/slides/examples/demotime-logo.svg' alt='Logo' width='100px' height='100px'></div>"
footer: "<span>{{name}}</span> <span> {{session}}</span>"
---

# Add headers and footers

## This can be done on a global level

Via the settings:

- `demoTime.slideHeaderTemplate`
- `demoTime.slideFooterTemplate`

## Or on a per-slide level

Via the slide front matter:

```
name: "Marc Duiker | marcduiker.dev"
session: "Xebia XKE 2025"
header: "<div style='display: flex;justify-content: flex-end;align-items:center;width: 100%;height: 100%;'><img src='.demo/slides/examples/demotime-logo.svg' alt='Logo' width='100px' height='100px'></div>"
footer: "<span>{{name}}</span> <span> {{session}}</span>"
```