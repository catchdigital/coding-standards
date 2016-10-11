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

