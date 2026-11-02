# The Structure, in AE Terms 
```
app/graphics/
├── page.tsx              ← the route: bio + the book
└── _book/                ← "_" means Next won't turn this folder into a URL
    ├── pages.ts          ← Project panel: your list of pages
    ├── FlyerPage.tsx     ← Precomp template: what ONE page looks like
    └── FlipBook.tsx      ← Main comp + timeline: arranges and animates pages
``` 
