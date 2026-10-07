# fisi-portfolio zuhause wieder aufbauen

Stand: **07.10.2026**. Dieser Nachbau gehört zum gemeinsamen PC-Snapshot `pc-2026-10-07`. Den exakten veröffentlichten Commit und den zu holenden Branch nennt `playbooks/rebuild/manifest.json`. Ein normales `git pull main` kann einen anderen Stand liefern.

## Voraussetzungen und Spezifikation

Statisches HTML/CSS/JS; Python 3 für lokalen HTTP-Server.

Versionen aus Manifesten, Toolchain-Dateien und Lockfiles verwenden. Der Quell-PC hat Windows 11 Pro Build 26100, Intel i5-6500 (4 Kerne), 31,9 GiB RAM und eine RTX 2060. Das sind gemessene Quellwerte, keine belegten Mindestanforderungen. Die Infrastruktur ist pro Projekt einzurichten; Ports aus mehreren Projekten können kollidieren, daher zunächst einzeln starten.

## Quellcode und lokale Arbeiten

Grundlage vor diesem Checkpoint: `d2588bb937947f07974125e93b5e3b8fc831ef89`. In diesem Checkpoint gesichert: **0 zuvor lokale geänderte/neue Dateien**. Der Checkpoint enthält Arbeitsstände, die erst nach den folgenden Prüfungen als betriebsbereit gelten. Historische Angaben in REPOSITORY_STATUS.md beschreiben den früheren Audit-Snapshot und ersetzen die Abnahme dieses Checkpoints nicht.

## Einrichtung

Ab dem Repository-Root; Verzeichniswechsel und VM-Vorgaben beachten. Bestehende `.env`-Dateien erhalten und fehlende Werte gezielt ergänzen.

```text
Keine Paketinstallation nötig.
```

Vorhandene Konfigurationsvorlagen: keine Standard-.env-Vorlage gefunden; README und Projektkonfiguration prüfen.

Benannte Variablen aus den Vorlagen (ohne Werte): keine aus .env-Vorlagen extrahiert.

## Start und Prüfung

```text
python -m http.server 8000 --bind 127.0.0.1
```

```text
Browser: Startseite, Navigation und lokale Assets prüfen.
```

Erfolg bedeutet: benötigte Werkzeuge verfügbar, Lockfiles unverändert installiert, Tests/Build erfolgreich, Dienste erreichbar und ein lokaler Funktionscheck bestanden. Fehlende Zugänge oder nicht ausgeführte Integrationstests als **offen** protokollieren. Keine produktiven Daten durch Seeds ersetzen.

## Daten und Wiederherstellung

Versionierte Assets kommen aus Git. Eigene unversionierte Bilder, Hosting-/Domain-Konfiguration und Kontaktformular-Zugänge separat sichern. Ein HTTP-Server stellt nur statische Inhalte bereit.

Erst auf einer getrennten Testkopie wiederherstellen und fachlich prüfen. Ein Clone rekonstruiert Quellcode; Datenbankinhalte, Browserdaten, VM-Festplatten und Passwortspeicher kommen aus getrennten Sicherungen. Eine bereits vorhandene Sicherung dieser Daten wurde durch diesen Checkpoint nicht nachgewiesen.

## Versionierte Abhängigkeiten

SHA-256 der gesicherten Lock-/Requirements-Dateien:

| Datei | SHA-256 |
|---|---|
| Keine Standard-Lockdatei gefunden | Versionsstand über Git-Commit; zusätzliche Laufzeitabhängigkeiten aus README prüfen |

## Vertiefende vorhandene Anleitungen

- [REPOSITORY_STATUS.md](REPOSITORY_STATUS.md)
