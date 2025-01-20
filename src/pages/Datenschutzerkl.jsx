import React from 'react'

const Datenschutzerkl = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 text-gray-800">
            <h1 className="text-3xl font-bold mb-12 text-center">Datenschutzerklärung</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">1. Verantwortlicher</h2>
                <p><strong>Verantwortliche Stelle im Sinne der Datenschutzgesetze:</strong></p>
                <p>Christoph Müller e.U.<br />Maltheserstraße 3, 9556 Liebenfels, Austria</p>
                <p>Email: <a href="mailto:christophmueller15.05@gmx.at" className="text-blue-600">christophmueller15.05@gmx.at</a></p>
                <p>Telefon: +43 676 8980 8762</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">2. Allgemeines zur Datenverarbeitung</h2>
                <p>
                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und halten uns an die geltenden Datenschutzgesetze,
                    insbesondere die Datenschutz-Grundverordnung (DSGVO). Diese Datenschutzerklärung informiert Sie darüber,
                    welche Informationen wir sammeln, wie wir diese verwenden und welche Rechte Sie hinsichtlich Ihrer Daten haben.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">3. Datenverarbeitung auf unserer Website</h2>
                <h3 className="text-xl font-semibold mt-4">3.1. Log-Daten</h3>
                <p>
                    Bei jedem Zugriff auf unsere Website werden automatisch Informationen durch den Webserver protokolliert. Dazu gehören:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>IP-Adresse des zugreifenden Rechners</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Name und URL der abgerufenen Datei</li>
                    <li>Website, von der aus der Zugriff erfolgt</li>
                    <li>Verwendeter Browser und ggf. das Betriebssystem</li>
                </ul>
                <p className="mt-2">
                    Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs der Seite und zur Verbesserung
                    unseres Angebots ausgewertet und erlauben uns keinen Rückschluss auf Ihre Person.
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-semibold">3.2. Cookies und Consent-Management</h3>
                <p>
                    Unsere Website verwendet Cookies. Diese ermöglichen eine Analyse der Nutzung der Website. Beim ersten Besuch
                    werden Sie über Cookies informiert und können Ihre Einwilligung erteilen. Diese können Sie jederzeit widerrufen.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">4. Verwendung von Google Analytics</h2>
                <h3 className="text-xl font-semibold mt-4">4.1. Umfang der Verarbeitung</h3>
                <p>
                    Wir nutzen Google Analytics zur Analyse der Nutzung unserer Website. Die Daten werden in der Regel an einen Google-Server in den USA übertragen.
                </p>

                <h3 className="text-xl font-semibold mt-4">4.2. IP-Anonymisierung</h3>
                <p>
                    Ihre IP-Adresse wird anonymisiert, bevor sie an Google übertragen wird.
                </p>

                <h3 className="text-xl font-semibold mt-4">4.3. Zweck der Verarbeitung</h3>
                <p>
                    Google Analytics hilft uns, die Nutzung unserer Website zu analysieren und unser Angebot zu verbessern.
                </p>

                <h3 className="text-xl font-semibold mt-4">4.4. Rechtsgrundlage</h3>
                <p>
                    Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>

                <h3 className="text-xl font-semibold mt-4">4.5. Widerspruch gegen die Datenerfassung</h3>
                <p>
                    Sie können die Erfassung durch Google Analytics verhindern, indem Sie ein Opt-Out-Cookie setzen oder ein Browser-Plugin nutzen.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">5. Ihre Rechte</h2>
                <p>
                    Sie haben das Recht, Auskunft über Ihre gespeicherten Daten zu erhalten und diese berichtigen oder löschen zu lassen.
                    Wenden Sie sich dazu an unseren Datenschutzbeauftragten.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">6. Änderungen an dieser Datenschutzerklärung</h2>
                <p>
                    Wir behalten uns vor, diese Erklärung zu aktualisieren, um sie an rechtliche Anforderungen oder Änderungen unserer Leistungen anzupassen.
                </p>
            </section>
        </div>
    )
}

export default Datenschutzerkl
