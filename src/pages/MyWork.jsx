import React from 'react'
import placeholder from '../assets/placeholder.jpg'
import ContactButton from '../components/ContactButton'

const MyWork = () => {
    return (
        <div>
            <div className='flex flex-col md:mt-20 xl:mt-40 sm:grid grid-cols-[1fr_1fr]'>
                <div className="md:hidden sm:block mt-20">
                    <img className="mb-8" src={placeholder} alt="" />
                </div>
                <div>
                    <h1 className="md:text-3xl sm:text-2xl text-xl font-bold md:mb-2 sm:mb-1 ">MEINE ARBEIT</h1>
                    <p className="md:text-3xl sm:text-2xl text-xl italic font-light mb-8">Schnitzen in Ihrem Auftrag</p>
                    <p className="max-w-2xl light-text mb-8">
                        Eine Maske entsteht aus frischen Zirbenholz, welches zugeschnitten, geplant und mit dem Messer bearbeitet wird. Trotz Motorsägen und anderen Werkzeugen dauert die Fertigstellung einer Maske je nach Anforderungen einige Zeit.
                        Die Gesichter können jeden Ausdruck haben, vom Grinsen bis zum ernsten Blick, mit Wunden, Falten oder Narben – Holz ermöglicht fast alles, den Rest übernimmt Modelliermasse. Glasaugen, die wahlweise mit LEDs beleuchtet werden können, und individuell wählbare Tierhornabgüsse aus Katalogen oder Echthorn runden die Masken ab. Nach Bemalung und Feinschliff ist jede Maske ein Unikat.
                    </p>
                </div>
                <div className="hidden md:mt-20 lg:mt-0 md:block pl-10">
                    <img src={placeholder} alt="" />
                </div>

            </div>
            <div>
                <p className='mt-4 mb-4 light-text'>
                    Um von den „grausigen“ Fratzen Abwechslung zu bekommen, werden auch andere Projekte vorwiegend aus Holz umgesetzt. Wie in den Bildern zu erkennen wurden massive Zirbenholzbetten ohne Nägel und Schrauben gefertigt. Die wichtigste Verbindungsmethode zwischen den Brettern und Pfosten ist die Schwalbenschwanzverzahnung und Dübel. Abschließend wurde die gesamte Oberfläche mit einem Naturwachs gestrichen. Im gleichen Stil werden auch andere Möbelstücke gemacht.
                </p>
                <p className='mb-8 light-text'>
                    Mit Präzision und Kreativität entstehen durch Schnitzarbeiten mit der Motorsäge beeindruckende Figuren. Von majestätischen Tieren wie Steinböcken bis hin zu ausdrucksstarken Indianerskulpturen – jede Kreation ist ein Unikat. Die robusten Kunstwerke eignen sich sowohl für den Innen- als auch Außenbereich und verbinden handwerkliches Können mit natürlicher Ästhetik.
                </p>
            </div>
            <div className="flex  space-x-4">
                <ContactButton></ContactButton>
            </div>
        </div>
    )
}

export default MyWork
