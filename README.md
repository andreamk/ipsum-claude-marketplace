# ipsum-claude-marketplace

Claude marketplace plugins built for developer workflows.

## Installation

```bash
/plugin marketplace add andreamk/ipsum-claude-marketplace
```

## Plugins

| Plugin | Description | Skills |
|--------|-------------|--------|
| hermes-tweet | Native Hermes Agent X/Twitter plugin for read-first Xquik workflows and approval-gated actions | hermes-tweet |
| ipsum-example | Example plugin with a hello world skill | example-skill |
| ipsum-web-inspector | Extract real DOM content and styles from web pages | dom-reader, style-inspector |

## Structure

```
ipsum-claude-marketplace/
├── .claude-plugin/
│   └── marketplace.json
└── plugins/
    ├── hermes-tweet/
    │   ├── .claude-plugin/
    │   │   └── plugin.json
    │   └── skills/
    │       └── hermes-tweet/
    │           └── SKILL.md
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

Xquik is an independent third-party service. Not affiliated with X Corp. "Twitter" and "X" are trademarks of X Corp.
