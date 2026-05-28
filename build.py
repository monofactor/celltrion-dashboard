#!/usr/bin/env python3
"""
Celltrion Dashboard Build Script
Inlines all JSX files and fonts into a single self-contained HTML file.

Usage: python3 build.py
Output: dashboard.html (in the same folder)
"""
import base64, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
TEMPLATE = os.path.join(HERE, "template.html")
OUTPUT = os.path.join(HERE, "dashboard.html")
JSX_FILES = ["logo.jsx", "data.jsx", "components.jsx", "pages.jsx", "app.jsx"]
FONTS = {
    "fonts/Geist_wght_.woff2": ['url("fonts/Geist_wght_.woff2") format("woff2-variations"),\n         url("fonts/Geist_wght_.woff2") format("woff2")'],
    "fonts/Geist-Italic_wght_.woff2": ['url("fonts/Geist-Italic_wght_.woff2") format("woff2-variations"),\n         url("fonts/Geist-Italic_wght_.woff2") format("woff2")'],
}

def main():
    with open(TEMPLATE, "r", encoding="utf-8") as f:
        html = f.read()

    # Inline fonts as data URIs
    for path, refs in FONTS.items():
        full = os.path.join(HERE, path)
        with open(full, "rb") as f:
            b64 = base64.b64encode(f.read()).decode("ascii")
        for ref in refs:
            html = html.replace(
                ref,
                f'url(data:font/woff2;base64,{b64}) format("woff2-variations"), url(data:font/woff2;base64,{b64}) format("woff2")'
            )

    # Strip integrity / crossorigin attributes (cause issues on file://)
    html = re.sub(r'\s+integrity="[^"]*"', '', html)
    html = re.sub(r'\s+crossorigin="[^"]*"', '', html)

    # Inline JSX files
    inlined = []
    for name in JSX_FILES:
        full = os.path.join(HERE, name)
        with open(full, "r", encoding="utf-8") as f:
            content = f.read()
        inlined.append(f'<script type="text/babel">\n// === {name} ===\n{content}\n</script>')

    # Remove external script src lines
    for name in JSX_FILES:
        html = html.replace(f'<script type="text/babel" src="{name}"></script>', '')

    # Inject inlined scripts before </body>
    html = html.replace("</body>", "\n".join(inlined) + "\n</body>")

    with open(OUTPUT, "w", encoding="utf-8") as f:
        f.write(html)

    size_kb = os.path.getsize(OUTPUT) / 1024
    print(f"Built: {OUTPUT} ({size_kb:.1f} KB)")

    # Syntax balance check for data.jsx
    with open(os.path.join(HERE, "data.jsx"), "r", encoding="utf-8") as f:
        src = f.read()
    depth = {"paren": 0, "brace": 0, "bracket": 0}
    in_str = None
    i = 0
    while i < len(src):
        c, n = src[i], src[i+1] if i+1 < len(src) else ""
        if c == "\n":
            i += 1; continue
        if in_str:
            if c == "\\":
                i += 2; continue
            if c == in_str:
                in_str = None
            i += 1; continue
        if c == "/" and n == "/":
            while i < len(src) and src[i] != "\n":
                i += 1
            continue
        if c in '"\'`':
            in_str = c
            i += 1; continue
        if c == "(": depth["paren"] += 1
        elif c == ")": depth["paren"] -= 1
        elif c == "{": depth["brace"] += 1
        elif c == "}": depth["brace"] -= 1
        elif c == "[": depth["bracket"] += 1
        elif c == "]": depth["bracket"] -= 1
        i += 1
    print(f"data.jsx syntax balance: {depth}")
    if any(v != 0 for v in depth.values()):
        print("WARNING: data.jsx has unbalanced brackets!")
        sys.exit(1)

if __name__ == "__main__":
    main()
