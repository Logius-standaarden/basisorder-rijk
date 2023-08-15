# Logboek van wijzigingen voor de basisorder Rijk

> _Het format van dit wijzigingbestand is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/) en maakt gebruik van [Semantic Versioning](https://semver.org/spec/v2.0.0.html)_.

> _Inhoudelijke wijzigingen van de basisorder Rijk worden voorafgegaan door (BOR)._

## [v0.9.1] - 2023-08-15

### Added

- (BOR) [Schematron](./schematron/basisorder-rijk-ohnl-1.9.sch) voor validatie OHNL 1.9 order (ORDER ONLY) toegevoegd → 13 nieuwe validatieregels toegevoegd (v0.7.0 - 1e werkversie).

### Changed

- Naamgeving oorspronkelijke schematron gewijzigd naar [basisorder-rijk-peppol_bis_3.sch](./schematron/basisorder-rijk-peppol-bis-3.sch) (v0.7.0 → v0.7.1) vanwege extra schematron OHNL-1.9.

## [v0.9.0] - 2023-06-12

### Added

- Dit logboek van wijzigingen ([CHANGELOG.md](./CHANGELOG.md)) toegevoegd volgens het format van [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/).

### Changed

- (BOR) Container `doc:Order/cac:OrderLine/cac:LineItem/cac:Delivery` is Out of Scope → Geen leveringsinformatie op regelniveau.
- Prefix `ep` uit de repositorynaam gehaald.
- Logboek van wijzigingen voor schematron samengevoegd met deze [CHANGELOG.md](./CHANGELOG.md).
- Cosmetische aanpassingen van de document-koptekst.


## [v0.8.2] - 2023-05-12

### Added

- (BOR) [Schematron](./schematron/basisorder-rijk.sch) voor validatie Peppol BIS 3 order (ORDER ONLY) toegevoegd (v0.7.0) → 9 nieuwe validatieregels.
- Logboek van wijzigingen voor schematron toegevoegd.
- Eerste gereviewde werkversie van de nieuwe publicatievorm voor de <em>Handreiking basisOrder Rijk</em>, gebaseerd op de eerdere niet-publiekelijke werkversie van maart 2022 (v0.8.1).


## Oudere versies zonder wijzingenlogs

* **[v0.8.1] - 2023-04-03**
* **[v0.8.0] - 2022-12-06**
* **[V0.7.0] - 2022-11-18**
* **[V0.6.0] - 2022-11-08**
* **[V0.1.0] - 2022-09-28**