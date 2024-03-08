npm install winston

npm install express

#die Anwendung mit dem Befehl ausführen:

LOG_LEVEL=INFO node app.js: Startet die Anwendung mit dem Log-Level INFO.
LOG_LEVEL=DEBUG node app.js: Startet die Anwendung mit dem Log-Level DEBUG.
LOG_LEVEL=ERROR node app.js: Startet die Anwendung mit dem Log-Level ERROR.
LOG_LEVEL=FATAL node app.js: Startet die Anwendung mit dem Log-Level FATAL.

in anderen bash folgende command ausführen um massage lesen:ZB:

curl http://localhost:3000/fatal
