# Loading Screen Gold: A Tip in 200 Characters

A single loading-screen tip for stressed developers and AI coding agents,
written by a tiny program that emits exactly one line of text.

## The tip

> Tip: your agent isn't stuck. It's reading your code the way you read
> error messages - skimming, panicking, hoping the answer is at the bottom.

142 characters. One line. It speaks to both people in the room at build
time: the tired developer staring at the spinner, and the agent doing the
staring back. The joke turns on a shared habit — nobody reads error
messages properly, human or model — and lands with a punchline instead of
a platitude.

## How it works

`main.ts` writes the tip to `$MAKEFUN_OUTPUT_DIR/entry.txt` (defaulting
to `/output/entry.txt`). No network, no dependencies, no secrets. The
output is deterministic: every run writes the same 142 characters.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see `LICENSE`.
