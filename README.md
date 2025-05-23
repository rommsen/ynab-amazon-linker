 YNAB Amazon-Linker

This browser extension enhances your YNAB (You Need A Budget) experience by turning Amazon order numbers in transaction memos into clickable links. These links take you directly to the corresponding Amazon order detail page.

## Example
If your memo contains:
```
Amazon ... 456-67876-5667
```
The extension will convert it into:
```
Amazon ... 🔗 Order
```

## Supported Order Formats
- `123-12345-12345` (standard Amazon order)
- `D01-5215569-4002249` (Kindle and digital orders)

## Installation (Chrome)
1. Open `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the extension folder

## Installation (Firefox)
1. Install [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) via npm:
   ```bash
   npm install -g web-ext
   ```
2. In your extension folder, run:
   ```bash
   web-ext run
   ```
3. This opens a new Firefox window with your extension temporarily loaded.

## License
MIT
