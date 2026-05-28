@echo off
cd /d "%~dp0"
echo Celltrion Dashboard sunucusu baslatiliyor...
echo Tarayicinizda su adresi acin: http://localhost:8080/dashboard.html
echo Durdurmak icin bu pencereyi kapatin.
echo.

:: Python 3 ile dene
python -m http.server 8080 2>nul
if %errorlevel% neq 0 (
    py -m http.server 8080 2>nul
)
if %errorlevel% neq 0 (
    python3 -m http.server 8080 2>nul
)
if %errorlevel% neq 0 (
    echo Python bulunamadi, Node.js ile deneniyor...
    npx serve -p 8080 -s . 2>nul
)
if %errorlevel% neq 0 (
    echo Sunucu baslatılamadi. Manuel olarak calistirin:
    echo   python -m http.server 8080
    pause
)
pause
