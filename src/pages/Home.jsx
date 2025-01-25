import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// images 

import BrandingIcon from "../assets/BrandingIcon.png"
import Close from "../assets/close.png"
import Contact from "../assets/contact.png"
import Cookie from "../assets/Cookie.png"
import CuteCat from "../assets/CuteCat.png"
import EcoIcon from "../assets/EcoIcon.png"
import Favicon from "../assets/Favicon.png"
import Men from "../assets/Men.png"
import Menu from "../assets/Menu.png"
import SmallWebsite from "../assets/SmallWebsite.png"
import SocialMedia from "../assets/SocialMediaIcon.png"
import SuccessIcon from "../assets/SuccessIcon.png"
import Sustainable from "../assets/SustainableEarth.png"
import Webaffinity from "../assets/Webaffinity.png"
import WomanThinking from "../assets/womanthinking.png"
import Women from "../assets/Women.png"
import WwwIcon from "../assets/WwwIcon.png"
import WwwIcon2 from "../assets/WwwIcon2.png"

// Components 
import FixedContact from '../components/FixedContact.jsx'
import Navbar from '../components/Navbar.jsx'
import PricingTable from "../components/PricingTable.jsx"
import ContactButton from '../components/ContactButton.jsx'


const Home = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleText = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <div className='md:mt-[120px] mt-[80px]'>

            <FixedContact />

            <Navbar />

            <section id="hero">

                {/* <!-- ####Hero Card#### --> */}

                <div className="margin-left-right-card">
                    <div className="card-hero-container">
                        <div className="left-part-card">
                            <div className="flex flex-row items-center">
                                <h1 className="hero-heading leading-none mb-2 ml-3">All Inklusive Website</h1>
                                <img alt="Icon showing 'www' and a Globe" className=" w-[100px] h-[100px]"
                                    src={WwwIcon} />
                                <img alt="A roundish green circle saying 'ECO'" className="w-[50px] h-[50px] ml-2 mr-4"
                                    src={EcoIcon} />
                            </div>

                            <p className="subtitle-hero-card mt-0">Wir entwickeln und designen deine professionelle Website für dich!
                            </p>

                            <div className="alignment-right-flex-box mb-2">
                                <div className="circle-icon">
                                    <i className="fa-solid fa-check check-hero-card-icon"></i>
                                </div>
                                <p className="hero-check-text">Individuelles Webdesign und Branding</p>
                            </div>

                            <div className="alignment-right-flex-box mb-2">
                                <div className="circle-icon">
                                    <i className="fa-solid fa-check check-hero-card-icon"></i>
                                </div>
                                <p className="hero-check-text">Betreuung inkl. Pflege & Optimierung</p>
                            </div>

                            <div className="alignment-right-flex-box">
                                <div className="circle-icon">
                                    <i className="fa-solid fa-check check-hero-card-icon"></i>
                                </div>
                                <p className="hero-check-text">Ab € 49,80 im Monat</p>
                            </div>
                            <Link to={"/kontakt"}>

                                <button className="btn-hero-card" href="">
                                    Jetzt anfragen!
                                </button>


                            </Link>
                        </div>

                        <div className="right-part-card">
                            <img src={Webaffinity} className="logo-hero-card" alt="Webaffinity Logo" />
                            <div className="hero-card-circle">
                            </div>
                            <img className="person-hero-card"
                                src={Men} alt="Atractive Men looking at you" />
                            <img src={SmallWebsite} className="screen-img" alt="Small Screen with a Website" />
                        </div>
                    </div>
                </div>

                {/* <!-- ####Facts#### --> */}
                <div className="margin-left-right-card">
                    <div className="conatiner-facts-hero">

                        <div className="fact-hero">
                            <div className="fact-icon-circle">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <p className="fact-hero-text">Responsives Design</p>
                        </div>

                        <div className="fact-hero">
                            <div className="fact-icon-circle">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <p className="fact-hero-text">24/7 Support</p>
                        </div>

                        <div className="fact-hero">
                            <div className="fact-icon-circle">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <p className="fact-hero-text">SEO-Optimiert</p>
                        </div>

                        <div className="fact-hero">
                            <div className="fact-icon-circle">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <p className="fact-hero-text">Hohe Sicherheit</p>
                        </div>

                    </div>
                </div>

                {/* <!-- ####Quote#### --> */}
                <h2 style={{ textAlign: "center" }} className="heading2">Deine Website, dein Aushängeschild!</h2>

                <div className="margin-left-right-card">
                    <div className="quote-card-container">
                        <div className="quote-card-left">
                            <div className="quote-left-circle">
                            </div>
                            <img className="women-quote-card" src={Women} alt="Confident Women looking at you" />

                        </div>
                        <div className="quote-card-right">
                            <p className="quote-card-text">
                                Ein unattraktives Schaufenster lockt keine Kunden an – genauso wie eine Website, die schwer zu
                                navigieren ist. Ist sie nicht ansprechend, verlassen Besucher sie im Handumdrehen. Wir gestalten
                                deine Website so, dass sie Nutzer fesselt und bei Google gut sichtbar ist.
                            </p>
                            <p className="text-inhaber">Thomas Müller</p>
                            <p className="quote-card-text">Gründer von Webaffinity e.U.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- ####Facts-Quote#### --> */}
                <div className="margin-left-right-card">
                    <div className="conatiner-facts-quote">

                        <div className="fact-quote">
                            <div className="fact-icon-circle-quote green">
                                <i className="fa-solid fa-caret-up"></i>
                            </div>
                            <p className="fact-quote-text">Mehr Besucher</p>
                        </div>

                        <div className="fact-quote">
                            <div className="fact-icon-circle-quote red">
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                            <p className="fact-quote-text">Weniger Absprünge</p>
                        </div>

                        <div className="fact-quote">
                            <div className="fact-icon-circle-quote green">
                                <i className="fa-solid fa-caret-up"></i>
                            </div>
                            <p className="fact-quote-text">Mehr Reichweite</p>
                        </div>

                        <div className="fact-quote">
                            <div className="fact-icon-circle-quote red">
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                            <p className="fact-quote-text">Weniger Grenzen</p>
                        </div>

                    </div>
                </div>
            </section >


            <section id="benifits hidden">
                <div className="margin-left-right-card">
                    <div className="container-benifits">
                        <div className="left-container-benifits">

                            <h2 className='text-3xl leading-none mb-4 mr-2'>Erhöhe deine Erfolgschancen, potenzielle Kund:innen von dir zu überzeugen</h2>
                            <p className='mr-2 mb-4 md:mb-0'>Bei deiner All Inclusive Website kannst du Inhalt, Design & Co. mitgestalten. Außerdem prüfen und
                                servicieren fachlich geschulte Mitarbeiter:innen deine Website nach Online-Stellung regelmäßig,
                                damit deine Online-Präsentation auf aktuellsten Stand bleibt.</p>

                            <Link to={"/kontakt"}>

                                <button className="btn-benifits-card btn-contact" href="">
                                    Jetzt anfragen!
                                </button>

                            </Link>

                            <div className="items-benifits">
                                <i className="fa-solid fa-check check-benifits-btn"></i>
                                <p className="btn-subtitle mb-4">unverbindlich und kostenlos</p>
                            </div>
                        </div>
                        <div className="right-container-benifits">
                            <img className="benifits-img"
                                src={CuteCat} />
                            <ol>
                                <li>
                                    <h4>1. Mehr Vertrauen</h4>
                                    <hr className="hr-benifits" />
                                    <p className="li-text">durch eine professionell gestaltete Website</p>
                                </li>
                                <li>
                                    <h4>2. Längere Verweildauer</h4>
                                    <hr className="hr-benifits" />
                                    <p className="li-text">durch benutzerfreundliches Design</p>
                                </li>
                                <li>
                                    <h4>3. Mehr Sichtbarkeit</h4>
                                    <hr className="hr-benifits" />
                                    <p className="li-text">durch bessere Google-Platzierung</p>
                                </li>
                                <li>
                                    <h4>4. Höhere Conversion-Rate</h4>
                                    <hr className="hr-benifits" />
                                    <p className="li-text">durch optimierte mobile Darstellung</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <h2 id="leistungen" className="heading2 mb-10 mt-20" style={{ textAlign: "center" }}>Was wir für dich tun:</h2>
                    <div className="leistungen-container">
                        <div className="leistung-row">
                            <div className="leistung-container yellow-container">
                                <img className="leistung-icon2" src={WwwIcon} alt="A Icon with WWW" />
                                <h4 className='text-2xl mb-2 font-medium'>Deine Website</h4>
                                <p>Wir gestalten und Entwickeln deine neue Website. Außerdem hast du die Möglichkeit sie auf
                                    einen Online-Shop auszuweiten.</p>
                            </div>
                            <div className="leistung-container">
                                <img className="leistung-icon2" src={BrandingIcon} alt="Icon about Branding" />
                                <h4 className='text-2xl mb-2 font-medium'>Branding</h4>
                                <p>Wir analysieren das Auftreten deiner Marke und setzten es online genau so um, wie du es dir
                                    wünschst.</p>
                            </div>
                        </div>

                        <div className="leistung-row">
                            <div className="leistung-container">
                                <img className="leistung-icon2" src={SocialMedia} alt="Icon about Social Media" />
                                <h4 className='text-2xl mb-2 font-medium'>Content-Creation</h4>
                                <p>Wir unterstützen dich dabei deine Inhalte wie Logos, Bilder, Texte ect. zu
                                    erstellen und für
                                    das Web
                                    vorzubereiten.</p>
                            </div>
                            <div className="leistung-container">
                                <img className="leistung-icon2" src={SuccessIcon} alt="Icon about Success" />
                                <h4 className='text-2xl mb-2 font-medium'>Erfolgsmessung</h4>
                                <p>Wir werden den Erfolg deiner Website beziffern und dir Tool in die Hand geben, mit denen du
                                    diesen selbst überwachen kannst.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ####Facts-Quote#### --> */}
                    <div className="margin-left-right-card">
                        <div className="conatiner-facts-quote">

                            <div className="fact-quote">
                                <div className="icon-circle-hash">
                                    #
                                </div>
                                <p className="fact-quote-text">TRANSPARENT</p>
                            </div>

                            <div className="fact-quote">
                                <div className="icon-circle-hash">
                                    #
                                </div>
                                <p className="fact-quote-text">SERIÖS</p>
                            </div>

                            <div className="fact-quote">
                                <div className="icon-circle-hash">
                                    #
                                </div>
                                <p className="fact-quote-text">DEIN PARTNER IM WEB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PricingTable></PricingTable>

            <div className="margin-left-right-card">
                <div className="indiv-container">
                    <div className="circle-indiv"></div>
                    <div className="indiv-left">
                        <p className="light-text">Nichts für dich dabei?</p>
                        <h4 className="indiv-text">Gerne erstellen wir dir ein <br />individuelles Angebot</h4>
                    </div>
                    <div className="indiv-right flex items-center">

                        <Link to={"/kontakt"}>

                            <button className="md:px-16 px-2 py-4 bg-black text-white rounded-lg border-[2px] border-black hover:bg-transparent hover:text-black transition">
                                Angebot einholen
                            </button>

                        </Link>
                    </div>
                </div>
            </div>

            <h2 style={{ textAlign: "center", marginBottom: "40px" }} className='heading2'>In 5 Schritten zu deiner Website</h2>
            <div className="margin-left-right-card2">
                <div className="steps-container">
                    <div className="steps-left-cont">

                    </div>
                    <div className="steps-right-cont">
                        <div className="steps-items">
                            <div className="step-circle"><span className="number-step">1.</span></div><span
                                className="step-name animated-underline" onClick={() => toggleText(0)}>Ziele</span><i className={`fa-solid fa-chevron-down step-arrow transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : ""}`}></i>
                        </div>
                        {openIndex === 0 && (
                            <span className="step-descr">Wir besprechen deine individuellen Anforderungen und Wünsche.</span>
                        )}

                        <div className="steps-items">
                            <div className="step-circle"><span className="number-step">2.</span></div><span
                                className="step-name animated-underline" onClick={() => toggleText(1)}>Entwicklung</span><i className={`fa-solid fa-chevron-down step-arrow transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : ""}`}></i>
                        </div>
                        {openIndex === 1 && (
                            <span className="step-descr">Wir designen dein Projekt und setzen es in Kombination mit der
                                Funktionalität um.</span>
                        )}

                        <div className="steps-items">
                            <div className="step-circle"><span className="number-step">3.</span></div><span
                                className="step-name animated-underline" onClick={() => toggleText(2)}>Feedback</span><i className={`fa-solid fa-chevron-down step-arrow transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : ""}`}></i>
                        </div>
                        {openIndex === 2 && (
                            <span className="step-descr">Gemeinsam schauen wir uns deine Seite an und arbeiten dein Feedback
                                ggf. ein.</span>
                        )}
                        <div className="steps-items">
                            <div className="step-circle"><span className="number-step">4.</span></div><span
                                className="step-name animated-underline" onClick={() => toggleText(3)}>Launch</span><i className={`fa-solid fa-chevron-down step-arrow transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : ""}`}></i>
                        </div>
                        {openIndex === 3 && (
                            <span className="step-descr">Sobald wir dein endgültiges “JA” haben, stellen wir deine Seite ins
                                Web.</span>
                        )}
                        <div className="steps-items">
                            <div className="step-circle"><span className="number-step">5.</span></div><span
                                className="step-name animated-underline" onClick={() => toggleText(4)}>Erfolg</span><i className={`fa-solid fa-chevron-down step-arrow transition-transform duration-300 ${openIndex === 4 ? "rotate-180" : ""}`}></i>
                        </div>
                        {openIndex === 4 && (
                            <span className="step-descr">Jetzt ist es zeit in deinen Statistiken, den Erfolg deiner Website zu
                                beobachten.</span>
                        )}
                    </div>
                </div>
            </div>


            <div className="margin-left-right-card">
                <h2 style={{ textAlign: "center", marginLeft: "40px", marginRight: "40px", marginTop: "60px" }} className='heading2'>Wir legen Wert auf
                    Umweltschutz</h2>
                <div className="eco-container">
                    <div className="eco-left-container">
                        <h4 className="eco-heading mb-2">Deshalb haben alle Kunden die Möglichkeit, Ihre Website CO2 neutral zu hosten!
                        </h4>
                        <p className="eco-text">Server und Rechenzentren verbrauchen erhebliche Mengen an Strom, um Websites rund um
                            die Uhr
                            verfügbar zu halten. CO2-neutrales Hosting reduziert den ökologischen Fußabdruck und unterstützt den
                            Umweltschutz durch erneuerbare Energien und Kompensationsmaßnahmen.</p>
                    </div>
                    <div className="eco-right-container">
                        <img className="eco-img" src={Sustainable} alt="Healthy Earth" />
                    </div>
                </div>
            </div>


            {/* <!-- <h2 style="text-align:center;margin: 40px; margin-top:60px">FAQ</h2>
                        <div className="margin-left-right-card">
                            <div className="faq-container">
                                <div className="faq-item">
                                    <button className="faq-question">Frage 1: Was ist ein WW2-Helm?</button>
                                    <div className="faq-answer">
                                        <p>Dies ist die Antwort auf Frage 1. Hier steht der obligatorische Text.</p>
                                    </div>
                                </div>

                                <div className="faq-item">
                                    <button className="faq-question">Frage 2: Wie alt ist der Helm?</button>
                                    <div className="faq-answer">
                                        <p>Dies ist die Antwort auf Frage 2. Hier steht der obligatorische Text.</p>
                                    </div>
                                </div>

                                <div className="faq-item">
                                    <button className="faq-question">Frage 3: Aus welchem Material besteht der Helm?</button>
                                    <div className="faq-answer">
                                        <p>Dies ist die Antwort auf Frage 3. Hier steht der obligatorische Text.</p>
                                    </div>
                                </div>

                                <div className="faq-item">
                                    <button className="faq-question">Frage 4: Gibt es verschiedene Helmtypen?</button>
                                    <div className="faq-answer">
                                        <p>Dies ist die Antwort auf Frage 4. Hier steht der obligatorische Text.</p>
                                    </div>
                                </div>

                                <div className="faq-item">
                                    <button className="faq-question">Frage 5: Woher stammt dieser Helm?</button>
                                    <div className="faq-answer">
                                        <p>Dies ist die Antwort auf Frage 5. Hier steht der obligatorische Text.</p>
                                    </div>
                                </div>
                            </div>
                        </div> --> */}

            <div className="m-8 px-4 sm:px-[5ve] md:px-[7vw] lg:px-[9vw]">
                <div className="">
                    <h2 className='text-2xl font-medium mb-2'>Noch Fragen?</h2>
                    <p className='mb-2'>Wir stehen dir kostenlos und unverbindlich zu Fragen rund ums Web, <br /> oder zu unseren Services gerne zur
                        Verfügung!</p>
                    <Link to={"/kontakt"}>
                        <button className="btn-benifits-card btn-contact">Kontakt</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}


export default Home
