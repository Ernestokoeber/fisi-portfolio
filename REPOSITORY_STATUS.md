# Repository-Status – fisi-portfolio

**Bestandsprüfung: 07.10.2026**

Grundlage: GitHub-Standardbranch `main`, Commit [`559e9b7eb7ec`](https://github.com/Ernestokoeber/fisi-portfolio/commit/559e9b7eb7ec4257d6a388d83bb5cd45a278f37d). Die Angaben beziehen sich auf diesen Snapshot; sie bestätigen keinen aktuellen Live-Betrieb.

## Implementierter Stand

Statisches deutsch-/englischsprachiges FISI-Portfolio mit Projektseiten, CSS/JavaScript und PDF-Anlagen; kein Buildsystem.

## Dokumentationsabgleich und offene Punkte

- Fehlende README mit Dateistruktur und lokalem HTTP-Server ergänzt.
- Veröffentlichte Lebenslauf-/Zeugnis-PDFs manuell auf inhaltliche Aktualität prüfen; persönliche Angaben wurden nicht erfunden oder geändert.
- Ein erfolgreicher Pages-Lauf belegt Veröffentlichung, keine fachliche Prüfung der Portfolio-Inhalte.

## Verifikation

- Quelltext, Paket-/Lockdateien, vorhandene Einstiegsbefehle und GitHub-Metadaten geprüft. Keine vollständige Anwendungssuite lokal neu ausgeführt.

Jüngster gefundener Workflow: [pages build and deployment](https://github.com/Ernestokoeber/fisi-portfolio/actions/runs/24836298622), `completed` / `success`, Branch `main`, Commit `559e9b7eb7ec`, gestartet 2026-04-23. Dieser Lauf gehört zum geprüften Codecommit.

| Workflow am geprüften Head | Ergebnis |
|---|---|
| [pages build and deployment](https://github.com/Ernestokoeber/fisi-portfolio/actions/runs/24836298622) | `success` |

## Branch-Abgleich

Bei den erfolgreich verglichenen Branches wurden keine zusätzlichen Ahead-Commits gegenüber dem Standardbranch gefunden.

## Dependency-Prüfung

Registry-Versionen wurden am Prüftag direkt von npm, PyPI und crates.io abgefragt. „Neueste Version“ ist eine Verfügbarkeitsangabe, keine automatische Upgradeempfehlung. Mindestversionen zeigen **nicht** den tatsächlich installierten Stand. Paket-/Lockfiles wurden nicht aktualisiert.

### Python-/Rust-Pins

Versionierte `requirements*.txt`, `uv.lock` und `Cargo.lock` wurden gegen die [OSV-Datenbank](https://osv.dev/) abgeglichen. Ergebnisse umfassen gegebenenfalls auch Wartungs-/Unmaintained-Hinweise. Aliasse wie GHSA/PYSEC/RUSTSEC können dasselbe Problem beschreiben. Ohne Lockfile/Mindestversions-Auflösung ist keine vollständige transitive Prüfung möglich.

Für die aus diesem Repository abgefragten festen Python-/Rust-Versionen wurden keine OSV-Treffer gemeldet, oder es lagen keine festen Versionen zum Abgleich vor. Dies bestätigt keine vollständige Sicherheitsprüfung einer tatsächlich installierten Umgebung.

Keine npm-/Python-/Cargo-Abhängigkeitsdeklarationen im geprüften Repository gefunden. Statische/CDN-Abhängigkeiten und externe Dienste sind damit nicht als versioniert oder überprüft bestätigt.

## Umfang und Grenzen

Geprüft wurden alle eigenen GitHub-Repositories aus der paginierten Owner-Liste, jeweils der Standardbranch; andere Branches wurden auf Git-Abweichungen verglichen, nicht vollständig erneut als Anwendungen getestet. Betriebszustände externer Provider, personenbezogene Inhalte, Vertrags-/Datenschutztexte und rechtliche Regelkataloge sind nicht fachlich neu abgenommen. Bei der Bestandsprüfung wurden keine Produktivdeployments, Live-Zahlungen, Posts, Mails oder kostenpflichtigen KI-Jobs manuell gestartet. Die Dokumentations-PRs können vorhandene automatische CI- und Vorschau-Deployments auslösen; deren Ergebnisse sind separat vom geprüften Code-Snapshot zu bewerten.

Quellen: Repository-Dateien am oben verlinkten Commit, [GitHub Actions](https://github.com/Ernestokoeber/fisi-portfolio/actions), Paketregistries und [OSV](https://osv.dev/). Bei erneuter Prüfung Snapshot, Tests, CI-Zuordnung und Audits gemeinsam aktualisieren.
