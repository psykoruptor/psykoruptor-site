@echo off

echo.
echo === Adding changes ===
git add .

echo.
echo === Creating commit ===
git commit -m "%~1"

echo.
echo === Pushing to GitHub ===
git push

echo.
echo === Done! ===
pause