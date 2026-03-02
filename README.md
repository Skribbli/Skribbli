# Palworld Settings Editor

A local web app for editing `PalWorldSettings.ini` with a clean UI.

## Features

- Editable server profile fields (name, passwords, ports, and RCON toggle).
- Visual controls for gameplay settings:
  - sliders for rates
  - dropdowns for enums/booleans
  - number and text inputs where appropriate
- Search bar to quickly find specific settings.
- Load an existing `.ini` file and auto-fill the editor.
- Export/download an updated `PalWorldSettings.ini`.

## How to launch locally on your PC

This is a **static app** (HTML/CSS/JS), so there is no build step.

### Option A (easiest): Double-click launcher (Windows)

1. In this folder, double-click `start-editor.bat`.
2. Your browser should open automatically at:
   - `http://localhost:4173`
3. Keep the terminal window open while using the app.
4. When done, press `Ctrl + C` in that window to stop the server.

### Option B: Python local server (manual)

1. Install Python 3 if you don't already have it.
2. Open **Command Prompt** or **PowerShell**.
3. `cd` into the folder containing `index.html`.
4. Run:

```bash
python -m http.server 4173
```

If `python` doesn't work on your PC, try:

```bash
py -m http.server 4173
```

5. Open your browser to:

- `http://localhost:4173`

### Option C: VS Code Live Server

1. Open this folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` → **Open with Live Server**.

## Using it with your Palworld server settings

1. Click **Load INI file**.
2. Select your existing `PalWorldSettings.ini`.
   - Typical Windows dedicated-server location:
     - `PalServer\Pal\Saved\Config\WindowsServer\PalWorldSettings.ini`
3. Adjust settings in the UI.
4. Click **Download updated INI** (or copy from **Generated Output**).
5. Replace your server's `PalWorldSettings.ini` with the new one.
6. Restart your Palworld server.

## Troubleshooting

- If `start-editor.bat` says Python is missing, install Python 3 and run again.
- If you open `index.html` directly and file loading/downloading behaves oddly, use a local server (Option A/B/C above).
- If port `4173` is in use, change the port in `start-editor.bat` (`set "PORT=4173"`) or run manually on a different port, e.g.:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.
