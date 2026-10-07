# FISI-Portfolio

Deutsch-/englischsprachiges Portfolio mit Projektbeispielen und Bewerbungsunterlagen.

## Lokal ansehen

Kein npm-, Framework- oder Build-Schritt erforderlich. Im Repository einen HTTP-Server starten, beispielsweise mit Python 3:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Dann `http://127.0.0.1:8000/` öffnen. Mit Ctrl+C beenden. Für den lokalen Server müssen die Dateien weder verschoben noch gebaut werden.

## Struktur und Pflege

`index.html`/`index-en.html`, Projektseiten für ITM-Dashboard, PaarKurs, Studio02, Train-App und Vereinswebsite; `landingpage.css`, kleine JavaScript-Helfer sowie Lebenslauf-/Zeugnis-PDFs.

Inhalte direkt in den jeweiligen HTML-/CSS-/JavaScript-Dateien bearbeiten. Vor Veröffentlichung Navigation, Bilder, mobile Darstellung und PDF-Downloads prüfen. Bei statischem Hosting das Repository-Verzeichnis als Webroot verwenden.

Für den geprüften Codebestand liegt keine automatisierte Anwendungstestsuite vor. Persönliche Angaben, Geschäftsangaben und rechtliche Seitentexte sind nur mit inhaltlicher Bestätigung zu aktualisieren; diese technische Prüfung hat sie nicht neu bestätigt.

## Bestandsprüfung

Code-/Dokumentationsabgleich, geprüfter Commit, CI-Zuordnung, Branch-Abweichungen und Dependency-Befunde vom **07.10.2026**: [REPOSITORY_STATUS.md](REPOSITORY_STATUS.md).
