@echo off
setlocal

set "PORT=4173"
set "URL=http://localhost:%PORT%"

cd /d "%~dp0"

echo ================================================
echo   Palworld Settings Editor Launcher
echo ================================================
echo.
echo Serving folder: %CD%
echo URL: %URL%
echo.

echo Checking for Python...
where python >nul 2>&1
if %ERRORLEVEL%==0 goto run_python

where py >nul 2>&1
if %ERRORLEVEL%==0 goto run_py

echo [ERROR] Python was not found on this PC.
echo Install Python 3 from https://www.python.org/downloads/
echo Then run this launcher again.
echo.
pause
exit /b 1

:run_python
start "" %URL%
python -m http.server %PORT%
goto done

:run_py
start "" %URL%
py -m http.server %PORT%

goto done

:done
echo.
echo Server stopped.
pause
