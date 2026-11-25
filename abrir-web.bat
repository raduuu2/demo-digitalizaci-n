@echo off
rem Abre la web desde un servidor local para que funcionen los videos de YouTube.
rem (Si se abre index.html con doble clic, YouTube muestra el "Error 153".)
cd /d "%~dp0"
start "" http://localhost:8000/index.html
py -m http.server 8000 || python -m http.server 8000
