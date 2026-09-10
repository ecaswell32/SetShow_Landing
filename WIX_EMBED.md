# Wix Studio Embed Instructions

Follow these steps to embed the SetShow landing page directly into your Wix Studio website.

---

## 1. Locate the Bundle File

The single-file bundle is located at:
[`dist/index.html`](dist/index.html)

*(Absolute path: `/Users/ethancaswell/Documents/Antigravity/SetShow/SetShow Landing/dist/index.html`)*

---

## 2. Embedding Steps

1. Open your **Wix Studio** site editor.
2. Select the page or container where the landing page should appear.
3. Click **+ Add Elements** in the left navigation sidebar.
4. Choose **Embed & Social** > **Embed Code** > **Embed HTML** (or Custom Element).
5. Click **Enter Code** on the embed block.
6. Open [`dist/index.html`](dist/index.html) in your text editor, copy everything (`Cmd + A`, `Cmd + C`).
7. Paste into the Wix HTML code input box and click **Update** / **Apply**.
8. Set the element dimensions to full width (`100%` or `100vw`) and appropriate height to match your desired layout.

---

## 3. Re-building After Code Changes

Whenever you modify any React component or Tailwind style in `src/`:
```bash
cd "/Users/ethancaswell/Documents/Antigravity/SetShow/SetShow Landing"
npm run build
```
This updates `dist/index.html` with your latest changes. Then re-copy the contents into Wix Studio.
