# Overzicht verplichte en optionele elementen voor de basisorder Rijk

## Gegevens op hoofdniveau

|      | Gegevensnaam                | Verplicht  | Voorbeeldvulling      | Opmerkingen |
|------|-----------------------------|------------|-----------------------|----|
|  1.1 | Inkoopordernummer           | Ja         | 1122334455            |  |
|  1.2 | Orderdatum                  | Ja         | 2022-11-07            |  |
|  1.3 | Orderomschrijving           | Nee        | Order voorbeeld 1     | Wordt gevuld indien aanwezig |
|  1.4 | Valuta                      | Ja         | EUR                   |  |
|  1.5 | Contractnummer / referentie | Nee        | 410023124             | Wordt gevuld indien aanwezig |
|  1.6 | Offertereferentie           | Nee        | 310001201             | Wordt gevuld indien aanwezig |

## Gegevens klantpartij

|      | Gegevensnaam                | Verplicht  | Voorbeeldvulling      | Opmerkingen |
|------|-----------------------------|------------|-----------------------|----|
|  2.1 | Naam                        | Ja         | Logius                |  |
|  2.2 | OIN                         | Ja         | 00000004003214345001  |  |
|  2.3 | Adres                       | Nee        | Postbus 96810         | Straat en huisnummer dienen te worden samengevoegd in XML |
|  2.4 | Postcode                    | Nee        | 2509 JE               |  |
|  2.5 | Plaats                      | Nee        | Den Haag              |  |
|  2.6 | Land                        | Ja         | NL                    | Tweeletterige landcode |
|  2.7 | Contactpersoon              | Ja         | jan@rijksoverheid.nl  | E-mailadres contactpersoon |
|  2.8 | Postadres - Adres           | Nee        | Princenhof 1          | Gevuld indien afwijkend van adres Klantpartij |
|  2.9 | Postadres - Postcode        | Nee        | 2844 NG               | Gevuld indien afwijkend van adres Klantpartij |
| 2.10 | Postadres - Plaats          | Nee        | Den Haag              | Gevuld indien afwijkend van adres Klantpartij |
| 2.11 | Postadres - Land            | Ja         | NL                    | Tweeletterige landcode |

## Gegevens leverancierpartij

|      | Gegevensnaam                | Verplicht  | Voorbeeldvulling      | Opmerkingen |
|------|-----------------------------|------------|-----------------------|----|
|  3.1 | Naam                        | Ja         | Leverancier B.V.      |  |
|  3.2 | Identificatie               | Ja         | 60451258              | Standaard KvK nummer, optioneel vestigingsnummer of BTW  |
|  3.3 | Adres                       | Nee        | Appelhof 1            | Straat en huisnummer dienen te worden samengevoegd in XML |
|  3.4 | Postcode                    | Nee        | 4321 AA               |  |
|  3.5 | Plaats                      | Nee        | Den Haag              |  |
|  3.6 | Land                        | Ja         | NL                    | Tweeletterige landcode |
|  3.7 | Contactpersoon              | Nee        | henk@leverancierbv.nl |  |

## Aflevergegevens (optioneel)

|      | Gegevensnaam                | Verplicht&nbsp;<sup>[1](#f1)</sup> | Voorbeeldvulling      | Opmerkingen |
|------|-----------------------------|------------|-----------------------|----|
|  4.1 | Naam                        | Nee        | Ministerie ABC, locatie X |  |
|  4.2 | Adres                       | Ja&nbsp;<sup>[1](#f1)</sup> | Buitenhof 16a | Gevuld indien afwijkend van factuuradres Klantpartij; straat en huisnummer dienen te worden samengevoegd in XML |
|  4.3 | Postcode                    | Nee        | 4321 KL               |  |
|  4.4 | Plaats                      | Nee        | Den Haag              |  |
|  4.5 | Land                        | Ja&nbsp;<sup>[1](#f1)</sup> | NL | Tweeletterige landcode |
|  4.6 | Gewenste leverdatum         | Nee        | 2022-11-14            |  |

## Totalen (optioneel)

|      | Gegevensnaam                | Verplicht&nbsp;<sup>[1](#f1)</sup> | Voorbeeldvulling      | Opmerkingen |
|------|-----------------------------|------------|-----------------------|----|
|  5.1 | Onderbedrag inclusief BTW   | Nee        | 242.00                |  |
|  5.2 | Onderbedrag exclusief BTW   | Nee        | 200.00                |  |
|  5.3 | Regeltotaal exclusief BTW   | Ja&nbsp;<sup>[1](#f1)</sup> | 200.00 | Regeltotaal exclusief BTW, kortingen en toeslagen |
|  5.4 | Totaal BTW                  | Nee        | 42.00                 |  |

## Orderregels

|      | Gegevensnaam                | Verplicht  | Voorbeeldvulling      | Opmerkingen |
|------|-----------------------------|------------|-----------------------|----|
|  6.1 | Orderregelnummer            | Ja         | 1                     |  |
|  6.2 | Orderregelomschrijving      | Nee        | Kantoorinrichting     |  |
|  6.3 | Aantal                      | Ja         | 5                     |  |
|  6.4 | Artikelnaam                 | Ja         | Verstelbaar bureau    |  |
|  6.5 | Stuksprijs                  | Ja         | 200.00                | Exclusief BTW |
|  6.6 | BTW percentage              | Nee        | 21                    | Dit kan de waarde 0, 9 of 21 zijn |
|  6.6 | Factuurregelbedrag          | Ja         | 1000.00               | Exclusief BTW |

<sup><a name="f1"><dfn>1</dfn></a>: De verplichtingen in deze kolom gelden alleen als het optionele gegevensblok is opgenomen in het bericht.</sup>
