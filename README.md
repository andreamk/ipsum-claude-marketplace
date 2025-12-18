# ipsum-claude-marketplace

Claude marketplace plugins built for developer workflows.

## Installation

```bash
/plugin marketplace add andreamk/ipsum-claude-marketplace
```

## Plugins

| Plugin | Description | Skills |
|--------|-------------|--------|
| ipsum-example | Example plugin with a hello world skill | example-skill |
| ipsum-web-inspector | Extract real DOM content and styles from web pages | dom-reader, style-inspector |

## Structure

```
ipsum-claude-marketplace/
├── .claude-plugin/
│   └── marketplace.json
└── plugins/
    ├── ipsum-example/
    │   ├── .claude-plugin/
    │   │   └── plugin.json
    │   └── skills/
    │       └── example-skill/
    │           └── SKILL.md
    └── ipsum-web-inspector/
        ├── .claude-plugin/
        │   └── plugin.json
        ├── scripts/
        │   ├── package.json
        │   ├── read-dom.js
        │   └── style-inspector.js
        └── skills/
            ├── dom-reader/
            │   └── SKILL.md
            └── style-inspector/
                └── SKILL.md
```

## License

MIT
