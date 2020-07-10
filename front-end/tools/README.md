# Front End Tools

A simple list of (Sublime) plugins to speed up your workflow :boom:

## Sublime

### Settings

In sublime, hit `CMD + ,` to bring up your Preferences and add the following options if not already set:

```json
{
  "auto_complete": true,
  "draw_white_space": "all",
  "ensure_newline_at_eof_on_save": true,
  "find_selected_text": true,
  "folder_exclude_patterns":
  [
    ".svn",
    ".git",
    ".hg",
    "CVS",
    ".sass-cache",
    "bower_components",
    "node_modules"
  ],
  "rulers":
  [
    80,
    120
  ],
  "show_full_path": true,
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true
}
```

### Key Bindings

Go to `Preferences >> Key Bindings` and add this setting to your User mappings:

```json
[
  { "keys": ["super+v"], "command": "paste_and_indent" }
]
```
*This will ensure when you paste the indentation will base itself from the indentation where you paste the code :fire:*

### Packages

#### [EditorConfig](https://github.com/sindresorhus/editorconfig-sublime)
Sets sublime to coding standards for individual projects

#### [Twig](https://github.com/Anomareh/PHP-Twig.tmbundle)
Twig syntax and snippets

#### [SASS Syntax](https://github.com/P233/Syntax-highlighting-for-Sass)
As above

#### [SCSS Snippets](https://github.com/npostulart/SCSS-Snippets)
Handy autocomplete

#### [Sublime Git](https://github.com/kemayo/sublime-text-git)
Handy git features as Sublime commands

#### [Synced Sidebar](https://github.com/TheSpyder/SyncedSideBar)
It will change your life!

#### [Trailingspaces](https://github.com/SublimeText/TrailingSpaces)
Never ignore trailing spaces again.  (Kind of redundant with the afformentioned Sublime settings)

#### [Sublime CodeIntel](https://github.com/SublimeCodeIntel/SublimeCodeIntel)
When it works, this is seriously legit.  (Takes a bit of setup)


## VSCode

### Settings

Hit `CMD + SHIFT + P` to open the Command Pallet and type `Preferences: Open Settings (JSON)` and add the following settings if not set.

```json
{
  "prettier.singleQuote": true,
  "prettier.bracketSpacing": true,
  "editor.tabSize": 2,
  "files.trimTrailingWhitespace": true,
  "prettier.htmlWhitespaceSensitivity": "strict",
  "diffEditor.ignoreTrimWhitespace": false
}
```

### Plugins

#### [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
Great for debugging

#### [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
Adds syntax highlighting, commands, hover tips, and linting for Dockerfile and docker-compose files.

#### [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
Support for dotenv file syntax

#### [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
Supercharge the Git capabilities built into Visual Studio Code — Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more

#### [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
Material Design Icons for Visual Studio Code

#### [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
Code formatter using prettier

#### [Twig](https://marketplace.visualstudio.com/items?itemName=whatwedo.twig)
Code formatter using prettier
