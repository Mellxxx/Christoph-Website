import React from 'react'
import ContactButton from '../components/ContactButton'

const AboutMe = () => {
    return (
        <div>
            <div className='flex flex-col md:mt-20 xl:mt-40 sm:grid grid-cols-[1fr_1fr]'>
                <div className="md:hidden sm:block mt-20">
                    <img className="mb-8" src="" alt="" />
                </div>
                <div>
                    <h1 className="md:text-3xl sm:text-2xl text-xl font-bold md:mb-2 sm:mb-1 ">ÜBER MICH</h1>
                    <p className="md:text-3xl sm:text-2xl text-xl italic font-light mb-8">Schnitzen mit Leib und Seele</p>
                    <p className="max-w-2xl light-text mb-8">
                        Schon seit meiner Kindheit fasziniert mich Holz als Werkstoff. Aus der Not der Dinge heraus Schaffen auch Bäume selbst eindrucksvolle Werke, wie Brücken zu schaffen. Seither gehört auch Holz zu den wichtigsten Baustoffen in unserer Gesellschaft. Die gesundheitlichen Effekte von reinen Holzprodukten, wie Betten ohne Leim und Metall sind schon breit bekannt. Umso mehr war mir klar, diese positiven Effekte gehören nicht nur für den Dachstuhl oder Möbel ausgenutzt, sondern auch für Kunstobjekte. Schon in jungen Jahren entdeckte ich meine kreative Ader und vereinte diese Gedanken in Schnitzereien. Es gibt doch nichts Schöneres als den Duft einer frisch bearbeiteten Zirbe!                     </p>
                </div>
                <div className="hidden md:mt-20 lg:mt-0 md:block pl-10">
                    <img src="" alt="" />
                </div>
            </div>
            <div>
                <p className='mt-4 mb-8 light-text'>
                    Die Kreativität, die dieses Naturprodukt ermöglicht, inspiriert mich bis heute. Jedes meiner Werke ist ein handgefertigtes Unikat – von detailreichen Figuren und Masken bis hin zu Brunnentrögen und individuellen Betten. Mit Leidenschaft und Präzision bringe ich einzigartige Ideen in Holz zum Leben.
                </p>
            </div>
            <div className="flex  space-x-4">
                <ContactButton></ContactButton>
            </div>
        </div>
    )
}

export default AboutMe
