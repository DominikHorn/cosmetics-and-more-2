import React from "react";
import { route } from "../routing";
import PrivacyIcon from "@material-ui/icons/Lock";
import { lime, grey, lightGreen } from "@material-ui/core/colors";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from "@material-ui/core";

@route({
  displayName: "Impressum & Datenschutz",
  path: "/impressum",
  icon: <PrivacyIcon />,
  lightTheme: {
    palette: {
      primary: lightGreen,
      secondary: lime,
    },
  },
  darkTheme: {
    palette: {
      primary: lime,
      secondary: grey,
    },
  },
  prio: 5,
})
export class ImpressumPage extends React.PureComponent {
  render() {
    return <ImpressumContent />;
  }
}

const useStyles = makeStyles({
  table: {
    maxWidth: "700px",
  },
});

const rows: { title: string; content: React.ReactElement }[] = [
  {
    title: "Anbieter und Kontakt",
    content: (
      <>
        <Typography variant="body1">Cosmetics and More</Typography>
        <Typography variant="body1">Pretzfelder Straße 15</Typography>
        <Typography variant="body1">81249 München</Typography>
        <Typography variant="body1">
          {"E-Mail: "}
          <a href="mailto:cosmetics_and_more@me.com">
            cosmetics_and_more@me.com
          </a>
        </Typography>
        <Typography variant="body1">
          {"Telefon: "}
          <a href="tel:+49 89 99757034">+49 89 99757034</a>
        </Typography>
      </>
    ),
  },
  {
    title: "Register und Registernummer",
    content: (
      <>
        <Typography variant="body1">Handelsregister</Typography>
        <Typography variant="body1">
          Geführt bei: Registergericht München
        </Typography>
        <Typography variant="body1">Betriebsnummer: 7066690</Typography>
      </>
    ),
  },
  {
    title: "Kammer",
    content: (
      <>
        <Typography variant="body1">
          Handwerkskammer für München und Oberbayern
        </Typography>
        <Typography variant="body1">Max-Joseph-Straße 4</Typography>
        <Typography variant="body1">80333 München</Typography>
        <Typography variant="body1">
          {"Website: "}
          <a href="https://www.hwk-muenchen.de/" target="_blank">
            https://www.hwk-muenchen.de/
          </a>
        </Typography>
      </>
    ),
  },
  {
    title: "Bildnachweise",
    content: (
      <>
        <Typography variant="body1">
          Bild zu "Haarentfernung mit Warmwachs" von Shiny Diamond von Pexels
        </Typography>
      </>
    ),
  },
];
const ImpressumContent = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <Typography variant="h2">Impressum</Typography>
      <TableContainer>
        <Table
          className={classes.table}
          style={{ margin: "0 auto" }}
          aria-label="Kontakt und Impressum"
        >
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.title}>
                <TableCell component="th" scope="row" colSpan={2}>
                  <Typography variant="h3">{row.title}</Typography>
                </TableCell>
                <TableCell align="center">{row.content}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h2" style={{ marginTop: theme.spacing(4) }}>
        Datenschutzerklärung
      </Typography>
      <Typography variant="subtitle1">Stand: 6. Dezember 2021</Typography>
      <div
        style={{
          textAlign: "left",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h2>Inhaltsübersicht</h2>
        <ul>
          <li>
            <a href="#m3">Verantwortlicher</a>
          </li>
          <li>
            <a href="#mOverview">Übersicht der Verarbeitungen</a>
          </li>
          <li>
            <a href="#m13">Maßgebliche Rechtsgrundlagen</a>
          </li>
          <li>
            <a href="#m27">Sicherheitsmaßnahmen</a>
          </li>
          <li>
            <a href="#m25">
              Übermittlung und Offenbarung von personenbezogenen Daten
            </a>
          </li>
          <li>
            <a href="#m24">Datenverarbeitung in Drittländern</a>
          </li>
          <li>
            <a href="#m317">Kommerzielle und geschäftliche Leistungen</a>
          </li>
          <li>
            <a href="#m326">Zahlungsdienstleister</a>
          </li>
          <li>
            <a href="#m225">
              Bereitstellung des Onlineangebotes und Webhosting
            </a>
          </li>
          <li>
            <a href="#m391">Kommunikation via Messenger</a>
          </li>
          <li>
            <a href="#m12">Löschung von Daten</a>
          </li>
          <li>
            <a href="#m15">
              Änderung und Aktualisierung der Datenschutzerklärung
            </a>
          </li>
          <li>
            <a href="#m10">Rechte der betroffenen Personen</a>
          </li>
          <li>
            <a href="#m42">Begriffsdefinitionen</a>
          </li>
        </ul>
        <h2 id="m3">Verantwortlicher</h2>
        <p>
          Katarzyna Thurand
          <br />
          Pretzfelder Straße 15
          <br />
          81249 München
        </p>
        <p>
          <strong>E-Mail-Adresse:</strong>
          <a href="mailto:cosmetics_and_more@me.com">
            cosmetics_and_more@me.com
          </a>
        </p>
        <p>
          <strong>Impressum:</strong>
          <a href="https://cosmetics-and-more.de/impressum" target="_blank">
            https://cosmetics-and-more.de/impressum
          </a>
        </p>
        <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
        <p>
          Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und
          die Zwecke ihrer Verarbeitung zusammen und verweist auf die
          betroffenen Personen.
        </p>
        <h3>Arten der verarbeiteten Daten</h3>
        <ul>
          <li>Bestandsdaten (z.B. Namen, Adressen).</li>
          <li>Inhaltsdaten (z.B. Eingaben in Onlineformularen).</li>
          <li>Kontaktdaten (z.B. E-Mail, Telefonnummern).</li>
          <li>
            Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
          </li>
          <li>
            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
            Zugriffszeiten).
          </li>
          <li>
            Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit, Kundenkategorie).
          </li>
          <li>
            Zahlungsdaten (z.B. Bankverbindungen, Rechnungen, Zahlungshistorie).
          </li>
        </ul>
        <h3>Kategorien betroffener Personen</h3>
        <ul>
          <li>Geschäfts- und Vertragspartner.</li>
          <li>Interessenten.</li>
          <li>Kommunikationspartner.</li>
          <li>Kunden.</li>
          <li>Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
        </ul>
        <h3>Zwecke der Verarbeitung</h3>
        <ul>
          <li>Büro- und Organisationsverfahren.</li>
          <li>Content Delivery Network (CDN).</li>
          <li>Direktmarketing (z.B. per E-Mail oder postalisch).</li>
          <li>Kontaktanfragen und Kommunikation.</li>
          <li>Erbringung vertragliche Leistungen und Kundenservice.</li>
          <li>Verwaltung und Beantwortung von Anfragen.</li>
        </ul>
        <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
        <p>
          Im Folgenden teilen wir die Rechtsgrundlagen der
          Datenschutzgrundverordnung (DSGVO), auf deren Basis wir die
          personenbezogenen Daten verarbeiten, mit. Bitte beachten Sie, dass
          zusätzlich zu den Regelungen der DSGVO die nationalen
          Datenschutzvorgaben in Ihrem bzw. unserem Wohn- und Sitzland gelten
          können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
          maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung
          mit.
        </p>
        <ul>
          <li>
            <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO)</strong> -
            Die betroffene Person hat ihre Einwilligung in die Verarbeitung der
            sie betreffenden personenbezogenen Daten für einen spezifischen
            Zweck oder mehrere bestimmte Zwecke gegeben.
          </li>
          <li>
            <strong>
              Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
              lit. b. DSGVO)
            </strong>
            - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
            Vertragspartei die betroffene Person ist, oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
            betroffenen Person erfolgen.
          </li>
          <li>
            <strong>
              Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO)
            </strong>
            - Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung
            erforderlich, der der Verantwortliche unterliegt.
          </li>
          <li>
            <strong>
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)
            </strong>
            - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
            Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
            Interessen oder Grundrechte und Grundfreiheiten der betroffenen
            Person, die den Schutz personenbezogener Daten erfordern,
            überwiegen.
          </li>
        </ul>
        <p>
          <strong>Nationale Datenschutzregelungen in Deutschland</strong>:
          Zusätzlich zu den Datenschutzregelungen der
          Datenschutz-Grundverordnung gelten nationale Regelungen zum
          Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum
          Schutz vor Missbrauch personenbezogener Daten bei der
          Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
          insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf
          Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer
          Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke
          und zur Übermittlung sowie automatisierten Entscheidungsfindung im
          Einzelfall einschließlich Profiling. Des Weiteren regelt es die
          Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses (§ 26
          BDSG), insbesondere im Hinblick auf die Begründung, Durchführung oder
          Beendigung von Beschäftigungsverhältnissen sowie die Einwilligung von
          Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen
          Bundesländer zur Anwendung gelangen.
        </p>
        <h2 id="m27">Sicherheitsmaßnahmen</h2>
        <p>
          Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
          Berücksichtigung des Stands der Technik, der Implementierungskosten
          und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung
          sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des
          Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen
          geeignete technische und organisatorische Maßnahmen, um ein dem Risiko
          angemessenes Schutzniveau zu gewährleisten.
        </p>
        <p>
          Zu den Maßnahmen gehören insbesondere die Sicherung der
          Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
          Kontrolle des physischen und elektronischen Zugangs zu den Daten als
          auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der
          Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir
          Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten,
          die Löschung von Daten und Reaktionen auf die Gefährdung der Daten
          gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener
          Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software
          sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch
          Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
        </p>
        <p>
          <strong>SSL-Verschlüsselung (https)</strong>: Um Ihre via unser
          Online-Angebot übermittelten Daten zu schützen, nutzen wir eine
          SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen
          an dem Präfix https:// in der Adresszeile Ihres Browsers.
        </p>
        <h2 id="m25">
          Übermittlung und Offenbarung von personenbezogenen Daten
        </h2>
        <p>
          Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es
          vor, dass die Daten an andere Stellen, Unternehmen, rechtlich
          selbstständige Organisationseinheiten oder Personen übermittelt oder
          sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten
          können z.B. Zahlungsinstitute im Rahmen von Zahlungsvorgängen, mit
          IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und
          Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen
          Fall beachten wir die gesetzlichen Vorgaben und schließen insbesondere
          entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten
          dienen, mit den Empfängern Ihrer Daten ab.
        </p>
        <h2 id="m24">Datenverarbeitung in Drittländern</h2>
        <p>
          Sofern wir Daten in einem Drittland (d.h., außerhalb der Europäischen
          Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder
          die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter
          oder der Offenlegung bzw. Übermittlung von Daten an andere Personen,
          Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit
          den gesetzlichen Vorgaben.
        </p>
        <p>
          Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder
          gesetzlich erforderlicher Übermittlung verarbeiten oder lassen wir die
          Daten nur in Drittländern mit einem anerkannten Datenschutzniveau,
          vertraglichen Verpflichtung durch sogenannte Standardschutzklauseln
          der EU-Kommission, beim Vorliegen von Zertifizierungen oder
          verbindlicher internen Datenschutzvorschriften verarbeiten (Art. 44
          bis 49 DSGVO, Informationsseite der EU-Kommission:
          <a
            href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
            target="_blank"
          >
            https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de
          </a>
          ).
        </p>
        <h2 id="m317">Kommerzielle und geschäftliche Leistungen</h2>
        <p>
          Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z.B.
          Kunden und Interessenten (zusammenfassend bezeichnet als
          "Vertragspartner") im Rahmen von vertraglichen und vergleichbaren
          Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Rahmen
          der Kommunikation mit den Vertragspartnern (oder vorvertraglich),
          z.B., um Anfragen zu beantworten.
        </p>
        <p>
          Diese Daten verarbeiten wir zur Erfüllung unserer vertraglichen
          Pflichten, zur Sicherung unserer Rechte und zu Zwecken der mit diesen
          Angaben einhergehenden Verwaltungsaufgaben sowie der unternehmerischen
          Organisation. Die Daten der Vertragspartner geben wir im Rahmen des
          geltenden Rechts nur insoweit an Dritte weiter, als dies zu den
          vorgenannten Zwecken oder zur Erfüllung gesetzlicher Pflichten
          erforderlich ist oder mit Einwilligung der betroffenen Personen
          erfolgt (z.B. an beteiligte Telekommunikations-, Transport- und
          sonstige Hilfsdienste sowie Subunternehmer, Banken, Steuer- und
          Rechtsberater, Zahlungsdienstleister oder Steuerbehörden). Über
          weitere Verarbeitungsformen, z.B. zu Zwecken des Marketings, werden
          die Vertragspartner im Rahmen dieser Datenschutzerklärung informiert.
        </p>
        <p>
          Welche Daten für die vorgenannten Zwecke erforderlich sind, teilen wir
          den Vertragspartnern vor oder im Rahmen der Datenerhebung, z.B. in
          Onlineformularen, durch besondere Kennzeichnung (z.B. Farben) bzw.
          Symbole (z.B. Sternchen o.ä.), oder persönlich mit.
        </p>
        <p>
          Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und
          vergleichbarer Pflichten, d.h., grundsätzlich nach Ablauf von 4
          Jahren, es sei denn, dass die Daten in einem Kundenkonto gespeichert
          werden, z.B., solange sie aus gesetzlichen Gründen der Archivierung
          aufbewahrt werden müssen (z.B. für Steuerzwecke im Regelfall 10
          Jahre). Daten, die uns im Rahmen eines Auftrags durch den
          Vertragspartner offengelegt wurden, löschen wir entsprechend den
          Vorgaben des Auftrags, grundsätzlich nach Ende des Auftrags.
        </p>
        <p>
          Soweit wir zur Erbringung unserer Leistungen Drittanbieter oder
          Plattformen einsetzen, gelten im Verhältnis zwischen den Nutzern und
          den Anbietern die Geschäftsbedingungen und Datenschutzhinweise der
          jeweiligen Drittanbieter oder Plattformen.
        </p>
        <p>
          <strong>Handwerkliche Leistungen</strong>: Wir verarbeiten die Daten
          unserer Kunden sowie Auftraggeber (nachfolgend einheitlich als
          "Kunden" bezeichnet), um ihnen die Auswahl, den Erwerb bzw. die
          Beauftragung der gewählten Leistungen oder Werke sowie verbundener
          Tätigkeiten als auch deren Bezahlung und Zustellung bzw. Ausführung
          oder Erbringung zu ermöglichen.
        </p>
        <p>
          Die erforderlichen Angaben sind als solche im Rahmen des Auftrags-,
          Bestell- bzw. vergleichbaren Vertragsschlusses gekennzeichnet und
          umfassen die zur Auslieferung und Abrechnung benötigten Angaben sowie
          Kontaktinformationen, um etwaige Rücksprachen halten zu können.
        </p>
        <ul>
          <li>
            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen,
            Adressen), Zahlungsdaten (z.B. Bankverbindungen, Rechnungen,
            Zahlungshistorie), Kontaktdaten (z.B. E-Mail, Telefonnummern),
            Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit, Kundenkategorie).
          </li>
          <li>
            <strong>Betroffene Personen:</strong> Interessenten, Geschäfts- und
            Vertragspartner.
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong> Erbringung vertragliche
            Leistungen und Kundenservice, Kontaktanfragen und Kommunikation,
            Büro- und Organisationsverfahren, Verwaltung und Beantwortung von
            Anfragen.
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
            vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO),
            Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO),
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
          </li>
        </ul>
        <h2 id="m326">Zahlungsdienstleister</h2>
        <p>
          Im Rahmen von Vertrags- und sonstigen Rechtsbeziehungen, aufgrund
          gesetzlicher Pflichten oder sonst auf Grundlage unserer berechtigten
          Interessen bieten wir den betroffenen Personen effiziente und sichere
          Zahlungsmöglichkeiten an und setzen hierzu neben Banken und
          Kreditinstituten weitere Zahlungsdienstleister ein (zusammenfassend
          "Zahlungsdienstleister").
        </p>
        <p>
          Zu den durch die Zahlungsdienstleister verarbeiteten Daten gehören
          Bestandsdaten, wie z.B. der Name und die Adresse, Bankdaten, wie z.B.
          Kontonummern oder Kreditkartennummern, Passwörter, TANs und Prüfsummen
          sowie die Vertrags-, Summen- und empfängerbezogenen Angaben. Die
          Angaben sind erforderlich, um die Transaktionen durchzuführen. Die
          eingegebenen Daten werden jedoch nur durch die Zahlungsdienstleister
          verarbeitet und bei diesen gespeichert. D.h., wir erhalten keine
          konto- oder kreditkartenbezogenen Informationen, sondern lediglich
          Informationen mit Bestätigung oder Negativbeauskunftung der Zahlung.
          Unter Umständen werden die Daten seitens der Zahlungsdienstleister an
          Wirtschaftsauskunfteien übermittelt. Diese Übermittlung bezweckt die
          Identitäts- und Bonitätsprüfung. Hierzu verweisen wir auf die AGB und
          die Datenschutzhinweise der Zahlungsdienstleister.
        </p>
        <p>
          Für die Zahlungsgeschäfte gelten die Geschäftsbedingungen und die
          Datenschutzhinweise der jeweiligen Zahlungsdienstleister, welche
          innerhalb der jeweiligen Webseiten bzw. Transaktionsapplikationen
          abrufbar sind. Wir verweisen auf diese ebenfalls zwecks weiterer
          Informationen und Geltendmachung von Widerrufs-, Auskunfts- und
          anderen Betroffenenrechten.
        </p>
        <ul>
          <li>
            <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen,
            Adressen), Zahlungsdaten (z.B. Bankverbindungen, Rechnungen,
            Zahlungshistorie), Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit,
            Kundenkategorie), Nutzungsdaten (z.B. besuchte Webseiten, Interesse
            an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
            Geräte-Informationen, IP-Adressen), Kontaktdaten (z.B. E-Mail,
            Telefonnummern).
          </li>
          <li>
            <strong>Betroffene Personen:</strong> Kunden, Interessenten.
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong> Erbringung vertragliche
            Leistungen und Kundenservice.
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
            vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO),
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
          </li>
        </ul>
        <p>
          <strong>Eingesetzte Dienste und Diensteanbieter:</strong>
        </p>
        <ul>
          <li>
            <strong>American Express:</strong> Zahlungsdienstleistungen;
            Dienstanbieter: American Express Europe S.A., Theodor-Heuss-Allee
            112, 60486 Frankfurt am Main, Deutschland; Website:
            <a href="https://www.americanexpress.com/de" target="_blank">
              https://www.americanexpress.com/de
            </a>
            ; Datenschutzerklärung:
            <a
              href="https://www.americanexpress.com/de/legal/online-datenschutzerklarung.html"
              target="_blank"
            >
              https://www.americanexpress.com/de/legal/online-datenschutzerklarung.html
            </a>
            .
          </li>
          <li>
            <strong>Apple Pay:</strong> Zahlungsdienstleistungen;
            Dienstanbieter: Apple Inc., Infinite Loop, Cupertino, CA 95014, USA;
            Website:
            <a href="https://www.apple.com/de/apple-pay/" target="_blank">
              https://www.apple.com/de/apple-pay/
            </a>
            ; Datenschutzerklärung:
            <a
              href="https://www.apple.com/legal/privacy/de-ww/"
              target="_blank"
            >
              https://www.apple.com/legal/privacy/de-ww/
            </a>
            .
          </li>
          <li>
            <strong>Google Pay:</strong> Zahlungsdienstleistungen;
            Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street,
            Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600 Amphitheatre
            Parkway, Mountain View, CA 94043, USA; Website:
            <a href="https://pay.google.com/intl/de_de/about/" target="_blank">
              https://pay.google.com/intl/de_de/about/
            </a>
            ; Datenschutzerklärung:
            <a href="https://policies.google.com/privacy" target="_blank">
              https://policies.google.com/privacy
            </a>
            .
          </li>
          <li>
            <strong>Mastercard:</strong> Zahlungsdienstleistungen;
            Dienstanbieter: Mastercard Europe SA, Chaussée de Tervuren 198A,
            B-1410 Waterloo, Belgien; Website:
            <a href="https://www.mastercard.de/de-de.html" target="_blank">
              https://www.mastercard.de/de-de.html
            </a>
            ; Datenschutzerklärung:
            <a
              href="https://www.mastercard.de/de-de/datenschutz.html"
              target="_blank"
            >
              https://www.mastercard.de/de-de/datenschutz.html
            </a>
            .
          </li>
          <li>
            <strong>Visa:</strong> Zahlungsdienstleistungen; Dienstanbieter:
            Visa Europe Services Inc., Zweigniederlassung London, 1 Sheldon
            Square, London W2 6TT, GB; Website:
            <a href="https://www.visa.de" target="_blank">
              https://www.visa.de
            </a>
            ; Datenschutzerklärung:
            <a
              href="https://www.visa.de/nutzungsbedingungen/visa-privacy-center.html"
              target="_blank"
            >
              https://www.visa.de/nutzungsbedingungen/visa-privacy-center.html
            </a>
            .
          </li>
          <li>
            <strong>Union Pay: </strong>Union Pay International Ltd., 5F,
            Building B, No. 6 Dongfang Road, Poly Plaza, Pudong 200120, Shanghai
            P.R. China, für die Zahlungsmarken „CUP” und „Union Pay”
          </li>
          <li>
            <strong>Diners Club: </strong> Diners Club International Ltd., 2500
            Lake Cook Road, Riverwoods, IL 60016, USA, für die Zahlungsmarken
            “Diners”, “Diners Club” und “Discover”; Datenschutzerklärung:
            <a href="https://www.dinersclub.com/privacy-policy" target="_blank">
              https://www.dinersclub.com/privacy-policy
            </a>
          </li>
          <li>
            <strong>JCB: </strong>JCB International Co., Ltd., 5-1-22, Minami
            Aoyama, Minato-Ku, Tokio, Japan, für die Zahlungsmarke „JCB“.
            <a href="http://www.jcbeurope.eu/privacy/" target="_blank">
              http://www.jcbeurope.eu/privacy/
            </a>
          </li>
        </ul>
        <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2>
        <p>
          Um unser Onlineangebot sicher und effizient bereitstellen zu können,
          nehmen wir die Leistungen von einem oder mehreren Webhosting-Anbietern
          in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern)
          das Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir
          Infrastruktur- und Plattformdienstleistungen, Rechenkapazität,
          Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und
          technische Wartungsleistungen in Anspruch nehmen.
        </p>
        <p>
          Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten
          Daten können alle die Nutzer unseres Onlineangebotes betreffenden
          Angaben gehören, die im Rahmen der Nutzung und der Kommunikation
          anfallen. Hierzu gehören regelmäßig die IP-Adresse, die notwendig ist,
          um die Inhalte von Onlineangeboten an Browser ausliefern zu können,
          und alle innerhalb unseres Onlineangebotes oder von Webseiten
          getätigten Eingaben.
        </p>
        <p>
          <strong>E-Mail-Versand und -Hosting</strong>: Die von uns in Anspruch
          genommenen Webhosting-Leistungen umfassen ebenfalls den Versand, den
          Empfang sowie die Speicherung von E-Mails. Zu diesen Zwecken werden
          die Adressen der Empfänger sowie Absender als auch weitere
          Informationen betreffend den E-Mailversand (z.B. die beteiligten
          Provider) sowie die Inhalte der jeweiligen E-Mails verarbeitet. Die
          vorgenannten Daten können ferner zu Zwecken der Erkennung von SPAM
          verarbeitet werden. Wir bitten darum, zu beachten, dass E-Mails im
          Internet grundsätzlich nicht verschlüsselt versendet werden. Im
          Regelfall werden E-Mails zwar auf dem Transportweg verschlüsselt, aber
          (sofern kein sogenanntes Ende-zu-Ende-Verschlüsselungsverfahren
          eingesetzt wird) nicht auf den Servern, von denen sie abgesendet und
          empfangen werden. Wir können daher für den Übertragungsweg der E-Mails
          zwischen dem Absender und dem Empfang auf unserem Server keine
          Verantwortung übernehmen.
        </p>
        <p>
          <strong>Erhebung von Zugriffsdaten und Logfiles</strong>: Wir selbst
          (bzw. unser Webhostinganbieter) erheben Daten zu jedem Zugriff auf den
          Server (sogenannte Serverlogfiles). Zu den Serverlogfiles können die
          Adresse und Name der abgerufenen Webseiten und Dateien, Datum und
          Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über
          erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des
          Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall
          IP-Adressen und der anfragende Provider gehören.
        </p>
        <p>
          Die Serverlogfiles können zum einen zu Zwecken der Sicherheit
          eingesetzt werden, z.B., um eine Überlastung der Server zu vermeiden
          (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten
          DDoS-Attacken) und zum anderen, um die Auslastung der Server und ihre
          Stabilität sicherzustellen.
        </p>
        <p>
          <strong>Content-Delivery-Network</strong>: Wir setzen ein
          "Content-Delivery-Network" (CDN) ein. Ein CDN ist ein Dienst, mit
          dessen Hilfe Inhalte eines Onlineangebotes, insbesondere große
          Mediendateien, wie Grafiken oder Programm-Skripte, mit Hilfe regional
          verteilter und über das Internet verbundener Server schneller und
          sicherer ausgeliefert werden können.
        </p>
        <p>Firebase (Google)</p>
        <ul>
          <li>
            <strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z.B.
            Eingaben in Onlineformularen), Nutzungsdaten (z.B. besuchte
            Webseiten, Interesse an Inhalten, Zugriffszeiten),
            Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
          </li>
          <li>
            <strong>Betroffene Personen:</strong> Nutzer (z.B.
            Webseitenbesucher, Nutzer von Onlinediensten).
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong> Content Delivery Network
            (CDN).
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
            Abs. 1 S. 1 lit. f. DSGVO).
          </li>
        </ul>
        <h2 id="m391">Kommunikation via Messenger</h2>
        <p>
          Wir setzen zu Zwecken der Kommunikation Messenger ein und bitten daher
          darum, die nachfolgenden Hinweise zur Funktionsfähigkeit der
          Messenger, zur Verschlüsselung, zur Nutzung der Metadaten der
          Kommunikation und zu Ihren Widerspruchsmöglichkeiten zu beachten.
        </p>
        <p>
          Sie können uns auch auf alternativen Wegen, z.B. via Telefon oder
          E-Mail, kontaktieren. Bitte nutzen Sie die Ihnen mitgeteilten
          Kontaktmöglichkeiten oder die innerhalb unseres Onlineangebotes
          angegebenen Kontaktmöglichkeiten.
        </p>
        <p>
          Im Fall einer Ende-zu-Ende-Verschlüsselung von Inhalten (d.h., der
          Inhalt Ihrer Nachricht und Anhänge) weisen wir darauf hin, dass die
          Kommunikationsinhalte (d.h., der Inhalt der Nachricht und angehängte
          Bilder) von Ende zu Ende verschlüsselt werden. Das bedeutet, dass der
          Inhalt der Nachrichten nicht einsehbar ist, nicht einmal durch die
          Messenger-Anbieter selbst. Sie sollten immer eine aktuelle Version der
          Messenger mit aktivierter Verschlüsselung nutzen, damit die
          Verschlüsselung der Nachrichteninhalte sichergestellt ist.
        </p>
        <p>
          Wir weisen unsere Kommunikationspartner jedoch zusätzlich darauf hin,
          dass die Anbieter der Messenger zwar nicht den Inhalt einsehen, aber
          in Erfahrung bringen können, dass und wann Kommunikationspartner mit
          uns kommunizieren sowie technische Informationen zum verwendeten Gerät
          der Kommunikationspartner und je nach Einstellungen ihres Gerätes auch
          Standortinformationen (sogenannte Metadaten) verarbeitet werden.
        </p>
        <p>
          <strong>Hinweise zu Rechtsgrundlagen: </strong> Sofern wir
          Kommunikationspartner vor der Kommunikation mit ihnen via Messenger um
          eine Erlaubnis bitten, ist die Rechtsgrundlage unserer Verarbeitung
          ihrer Daten deren Einwilligung. Im Übrigen, falls wir nicht um eine
          Einwilligung bitten und sie z.B. von sich aus Kontakt mit uns
          aufnehmen, nutzen wir Messenger im Verhältnis zu unseren
          Vertragspartnern sowie im Rahmen der Vertragsanbahnung als eine
          vertragliche Maßnahme und im Fall anderer Interessenten und
          Kommunikationspartner auf Grundlage unserer berechtigten Interessen an
          einer schnellen und effizienten Kommunikation und Erfüllung der
          Bedürfnisse unser Kommunikationspartner an der Kommunikation via
          Messenger. Ferner weisen wir Sie darauf hin, dass wir die uns
          mitgeteilten Kontaktdaten ohne Ihre Einwilligung nicht erstmalig an
          die Messenger übermitteln.
        </p>
        <p>
          <strong>Widerruf, Widerspruch und Löschung:</strong> Sie können
          jederzeit eine erteilte Einwilligung widerrufen und der Kommunikation
          mit uns via Messenger jederzeit widersprechen. Im Fall der
          Kommunikation via Messenger löschen wir die Nachrichten entsprechend
          unseren generellen Löschrichtlinien (d.h. z.B., wie oben beschrieben,
          nach Ende vertraglicher Beziehungen, im Kontext von
          Archivierungsvorgaben etc.) und sonst, sobald wir davon ausgehen
          können, etwaige Auskünfte der Kommunikationspartner beantwortet zu
          haben, wenn kein Rückbezug auf eine vorhergehende Konversation zu
          erwarten ist und der Löschung keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>
        <p>
          <strong>
            Vorbehalt des Verweises auf andere Kommunikationswege:
          </strong>
          Zum Abschluss möchten wir darauf hinweisen, dass wir uns aus Gründen
          Ihrer Sicherheit vorbehalten, Anfragen über Messenger nicht zu
          beantworten. Das ist der Fall, wenn z.B. Vertragsinterna besonderer
          Geheimhaltung bedürfen oder eine Antwort über Messenger den formellen
          Ansprüchen nicht genügt. In solchen Fällen verweisen wir Sie auf
          adäquatere Kommunikationswege.
        </p>
        <p>
          <strong>WhatsApp: </strong>
          <a
            href="https://www.whatsapp.com/legal/privacy-policy-eea"
            target="_blank"
          >
            https://www.whatsapp.com/legal/privacy-policy-eea
          </a>
        </p>
        <ul>
          <li>
            <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z.B. E-Mail,
            Telefonnummern), Nutzungsdaten (z.B. besuchte Webseiten, Interesse
            an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
            Geräte-Informationen, IP-Adressen).
          </li>
          <li>
            <strong>Betroffene Personen:</strong> Kommunikationspartner.
          </li>
          <li>
            <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
            Kommunikation, Direktmarketing (z.B. per E-Mail oder postalisch).
          </li>
          <li>
            <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1
            lit. a. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f.
            DSGVO).
          </li>
        </ul>
        <h2 id="m12">Löschung von Daten</h2>
        <p>
          Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen
          Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten
          Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen
          (z.B., wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder
          sie für den Zweck nicht erforderlich sind).
        </p>
        <p>
          Sofern die Daten nicht gelöscht werden, weil sie für andere und
          gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung
          auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht
          für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus
          handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder
          deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von
          Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen
          oder juristischen Person erforderlich ist.
        </p>
        <p>
          Weitere Hinweise zu der Löschung von personenbezogenen Daten können
          ferner im Rahmen der einzelnen Datenschutzhinweise dieser
          Datenschutzerklärung erfolgen.
        </p>
        <h2 id="m15">Änderung und Aktualisierung der Datenschutzerklärung</h2>
        <p>
          Wir bitten Sie, sich regelmäßig über den Inhalt unserer
          Datenschutzerklärung zu informieren. Wir passen die
          Datenschutzerklärung an, sobald die Änderungen der von uns
          durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
          informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung
          Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle
          Benachrichtigung erforderlich wird.
        </p>
        <p>
          Sofern wir in dieser Datenschutzerklärung Adressen und
          Kontaktinformationen von Unternehmen und Organisationen angeben,
          bitten wir zu beachten, dass die Adressen sich über die Zeit ändern
          können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
        </p>
        <h2 id="m10">Rechte der betroffenen Personen</h2>
        <p>
          Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die
          sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
        </p>
        <ul>
          <li>
            <strong>
              Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus
              Ihrer besonderen Situation ergeben, jederzeit gegen die
              Verarbeitung der Sie betreffenden personenbezogenen Daten, die
              aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
              Widerspruch einzulegen; dies gilt auch für ein auf diese
              Bestimmungen gestütztes Profiling. Werden die Sie betreffenden
              personenbezogenen Daten verarbeitet, um Direktwerbung zu
              betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die
              Verarbeitung der Sie betreffenden personenbezogenen Daten zum
              Zwecke derartiger Werbung einzulegen; dies gilt auch für das
              Profiling, soweit es mit solcher Direktwerbung in Verbindung
              steht.
            </strong>
          </li>
          <li>
            <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das
            Recht, erteilte Einwilligungen jederzeit zu widerrufen.
          </li>
          <li>
            <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine
            Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet
            werden und auf Auskunft über diese Daten sowie auf weitere
            Informationen und Kopie der Daten entsprechend den gesetzlichen
            Vorgaben.
          </li>
          <li>
            <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den
            gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie
            betreffenden Daten oder die Berichtigung der Sie betreffenden
            unrichtigen Daten zu verlangen.
          </li>
          <li>
            <strong>
              Recht auf Löschung und Einschränkung der Verarbeitung:
            </strong>
            Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
            verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden,
            bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine
            Einschränkung der Verarbeitung der Daten zu verlangen.
          </li>
          <li>
            <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das
            Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach
            Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen
            und maschinenlesbaren Format zu erhalten oder deren Übermittlung an
            einen anderen Verantwortlichen zu fordern.
          </li>
          <li>
            <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben ferner
            nach Maßgabe der gesetzlichen Vorgaben das Recht, bei einer
            Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres
            gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des
            mutmaßlichen Verstoßes Beschwerde einzulegen, wenn Sie der Ansicht
            sind, dass die Verarbeitung der Sie betreffenden personenbezogenen
            Daten gegen die DSGVO verstößt.
          </li>
        </ul>
        <h2 id="m42">Begriffsdefinitionen</h2>
        <p>
          In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
          Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe
          sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die
          gesetzlichen Definitionen sind verbindlich. Die nachfolgenden
          Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die
          Begriffe sind alphabetisch sortiert.
        </p>
        <ul>
          <li>
            <strong>Content Delivery Network (CDN):</strong> Ein "Content
            Delivery Network" (CDN) ist ein Dienst, mit dessen Hilfe Inhalte
            eines Onlineangebotes, insbesondere große Mediendateien, wie
            Grafiken oder Programm-Skripte mit Hilfe regional verteilter und
            über das Internet verbundener Server, schneller und sicherer
            ausgeliefert werden können.
          </li>
          <li>
            <strong>Personenbezogene Daten:</strong> "Personenbezogene Daten“
            sind alle Informationen, die sich auf eine identifizierte oder
            identifizierbare natürliche Person (im Folgenden "betroffene
            Person“) beziehen; als identifizierbar wird eine natürliche Person
            angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung
            zu einer Kennung wie einem Namen, zu einer Kennnummer, zu
            Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem
            oder mehreren besonderen Merkmalen identifiziert werden kann, die
            Ausdruck der physischen, physiologischen, genetischen, psychischen,
            wirtschaftlichen, kulturellen oder sozialen Identität dieser
            natürlichen Person sind.
          </li>
          <li>
            <strong>Verantwortlicher:</strong> Als "Verantwortlicher“ wird die
            natürliche oder juristische Person, Behörde, Einrichtung oder andere
            Stelle, die allein oder gemeinsam mit anderen über die Zwecke und
            Mittel der Verarbeitung von personenbezogenen Daten entscheidet,
            bezeichnet.
          </li>
          <li>
            <strong>Verarbeitung:</strong> "Verarbeitung" ist jeder mit oder
            ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede
            solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten.
            Der Begriff reicht weit und umfasst praktisch jeden Umgang mit
            Daten, sei es das Erheben, das Auswerten, das Speichern, das
            Übermitteln oder das Löschen.
          </li>
        </ul>
        <p>
          <a
            href="https://datenschutz-generator.de/?l=de"
            title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
            Schwenke
          </a>
        </p>
      </div>
    </div>
  );
};
