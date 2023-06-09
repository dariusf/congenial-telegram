import { EditorView, basicSetup } from "codemirror";
// import { EditorView } from "codemirror";
import { keymap, drawSelection } from "@codemirror/view";
import { markdown } from "@codemirror/lang-markdown";
// import { javascript } from "@codemirror/lang-javascript";
import { vim, Vim } from "@replit/codemirror-vim";
import { acceptCompletion } from "@codemirror/autocomplete";
import { toggleFold, foldedRanges } from "@codemirror/language";
// import { toggleFold } from "@codemirror/commands";

// let editor =
new EditorView({
  doc: `# asd
asd
## asd
aasd
### asd
hahah
# sdk
asd
## asdkl
kalsjld
### asldj
kljhygyuguyd`,
  extensions: [
    vim(),
    // keymap.of([{ key: "Ctrl-S", run: () => console.log("hi") }]),
    basicSetup,
    // drawSelection(),
    markdown(),
    EditorView.atomicRanges.of((v) => foldedRanges(v.state)),
    // keymap.of([{ key: "Tab", run: acceptCompletion }]),
    keymap.of([{ key: "Tab", run: toggleFold }]),
    keymap.of([
      {
        key: "Alt-v", // only in insert mode
        run: (view) => {
          console.log("hi");
          toggleFold(view);
          // enableVim = !enableVim
          // updateView()
          return true;
        },
      },
    ]),
  ],
  parent: document.body,
});

window.Vim = Vim;

Vim.defineAction("forwardsearch", (view) => {
  const { state, dispatch } = view;
  console.log(view);

  console.log("normal mode");
});
Vim.mapCommand("za", "action", "forwardsearch");

// Vim.defineAction("togglefold", toggleFold);
// Vim.mapCommand("Tab", "action", "togglefold");
