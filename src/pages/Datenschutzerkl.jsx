import React from 'react'

const Datenschutzerkl = () => {
    return (
        <div className="px-4 sm:px-[5ve] md:px-[7vw] lg:px-[9vw] mt-20 pt-5">
            <h1 className="mb-5 md:text-4xl sm:text-3xl text-2xl font-xl md:mb-6 sm:mb-5">Datenschutzerklärung</h1>

            <section className="mb-6">
                <h2 className="text-2xl mb-4">1. Verantwortlicher</h2>
                <p className=' mb-2'>Verantwortliche Stelle im Sinne der Datenschutzgesetze:</p>
                <p className='text-[#565656] '>Thomas Müller, Webaffinity e.U.<br />Maltheserstraße 3, 9556 Liebenfels, Austria</p>
                <p className='text-[#565656] '>Email: <a href="mailto:mueller.thomas@webaffinity.at" className="text-blue-600">mueller.thomas@webaffinity.at</a></p>
                <p className='text-[#565656] mb-4'>Telefon: +43 676 8980 7433</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl  mb-2">2. Allgemeines zur Datenverarbeitung</h2>
                <p className='text-[#565656]'>
                    Wir von Webaffinity nehmen den Schutz Ihrer persönlichen Daten sehr ernst und halten uns an die geltenden Datenschutzgesetze,
                    insbesondere die Datenschutz-Grundverordnung (DSGVO). Diese Datenschutzerklärung informiert Sie darüber,
                    welche Informationen wir sammeln, wie wir diese verwenden und welche Rechte Sie hinsichtlich Ihrer Daten haben.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl  mb-2">3. Datenverarbeitung auf unserer Website</h2>
                <h3 className="text-xl mb-4 mt-4">3.1. Log-Daten</h3>
                <p className='text-[#565656] mb-2'>
                    Bei jedem Zugriff auf unsere Website werden automatisch Informationen durch den Webserver protokolliert. Dazu gehören:
                </p>
                <ul className="list-disc list-inside text-[#565656] ml-4 mb-2 mt-2">
                    <li>IP-Adresse des zugreifenden Rechners</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Name und URL der abgerufenen Datei</li>
                    <li>Website, von der aus der Zugriff erfolgt</li>
                    <li>Verwendeter Browser und ggf. das Betriebssystem</li>
                </ul>
                <p className="mt-2 text-[#565656]">
                    Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs der Seite und zur Verbesserung
                    unseres Angebots ausgewertet und erlauben uns keinen Rückschluss auf Ihre Person.
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-xl mb-4">3.2. Cookies und Consent-Management</h3>
                <p className='text-[#565656]'>
                    Unsere Website verwendet Cookies. Diese ermöglichen eine Analyse der Nutzung der Website. Beim ersten Besuch
                    werden Sie über Cookies informiert und können Ihre Einwilligung erteilen. Diese können Sie jederzeit widerrufen.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl mb-4">4. Verwendung von Google Analytics</h2>
                <h3 className="text-xl mb-4">4.1. Umfang der Verarbeitung</h3>
                <p className='text-[#565656]'>
                    Wir nutzen Google Analytics zur Analyse der Nutzung unserer Website. Die Daten werden in der Regel an einen Google-Server in den USA übertragen.
                </p>

                <h3 className="text-xl mt-4 mb-4">4.2. IP-Anonymisierung</h3>
                <p className='text-[#565656]'>
                    Ihre IP-Adresse wird anonymisiert, bevor sie an Google übertragen wird.
                </p>

                <h3 className="text-xl mt-4 mb-4">4.3. Zweck der Verarbeitung</h3>
                <p className='text-[#565656]'>
                    Google Analytics hilft uns, die Nutzung unserer Website zu analysieren und unser Angebot zu verbessern.
                </p>

                <h3 className="text-xl mb-4 mt-4">4.4. Rechtsgrundlage</h3>
                <p className='text-[#565656]'>
                    Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>

                <h3 className="text-xl mb-4 mt-4">4.5. Widerspruch gegen die Datenerfassung</h3>
                <p className='text-[#565656]'>
                    Sie können die Erfassung durch Google Analytics verhindern, indem Sie ein Opt-Out-Cookie setzen oder ein Browser-Plugin nutzen.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl mb-4">5. Ihre Rechte</h2>
                <p className='text-[#565656]'>
                    Sie haben das Recht, Auskunft über Ihre gespeicherten Daten zu erhalten und diese berichtigen oder löschen zu lassen.
                    Wenden Sie sich dazu an unseren Datenschutzbeauftragten.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl mb-4">6. Änderungen an dieser Datenschutzerklärung</h2>
                <p className='text-[#565656]'>
                    Wir behalten uns vor, diese Erklärung zu aktualisieren, um sie an rechtliche Anforderungen oder Änderungen unserer Leistungen anzupassen.
                </p>
            </section>
        </div>
    )
}

export default Datenschutzerkl
