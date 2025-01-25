import React, { useState } from 'react'

const PricingTable = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleText = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <div>
            <section id="pricing">
                <div className="margin-left-right-card3">
                    <h2 style={{ textAlign: "center", marginBottom: "40px", marginTop: "50px" }} className="heading2">Wähle dein passendes
                        Paket</h2>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ borderTopLeftRadius: "0px" }}> </th>
                                    <th>Corporate<br /><span className="price">€ 49,90</span><br /><span className="monthly">im
                                        Monat*</span>
                                    </th>
                                    <th>Newcomer<br /><span className="price">€ 89,80</span><br /><span className="monthly">im
                                        Monat*</span></th>
                                    <th style={{ borderTopLeftRadius: "0px" }} className="pro-highlight">Established<br /><span
                                        className="price pro-price">€ 169,80</span><br /><span className="monthly">im
                                            Monat*</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="expandable-row">
                                    <td onClick={() => toggleText(0)}>Anzahl Pages <i className={`fa-solid fa-chevron-down light-green transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : ""}`}></i>

                                        {openIndex === 0 && (
                                            <p className="font-sm text-xs mt-2 ">Die Anzahl der Seiten, die deine Website haben wird.
                                                Natürlich
                                                hast du die
                                                Möglichkeit bei Bedarf
                                                die Seitenanzahl zu erhöhen.</p>
                                        )}
                                    </td>
                                    <td>6</td>
                                    <td>8</td>
                                    <td>12</td>
                                </tr>
                                <tr className="expandable-row">
                                    <td onClick={() => toggleText(1)}>Professionelles Webdesign <i className={`fa-solid fa-chevron-down light-green transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : ""}`}></i>
                                        {openIndex === 1 && (
                                            <p className="font-sm text-xs mt-2">Wir nehmen uns Zeit, das Design deiner Website sorgfälltig
                                                auszuarbeiten - natürlich zu 100% nach deinen Wünschen!</p>
                                        )}
                                    </td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                </tr>
                                <tr className="expandable-row">
                                    <td onClick={() => toggleText(2)}>Responsives Design <i className={`fa-solid fa-chevron-down light-green transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : ""}`}></i>
                                        {openIndex === 2 && (
                                            <p className="font-sm text-xs mt-2">Das Responsive Design sorgt dafür, dass deine Website immer
                                                perfekt aussieht - ganz egal auf welchem Gerät.</p>
                                        )}
                                    </td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                </tr>
                                <tr className="expandable-row">
                                    <td onClick={() => toggleText(3)}>SSL-Zertifikat <i className={`fa-solid fa-chevron-down light-green transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : ""}`}></i>
                                        {openIndex === 3 && (
                                            <p className="font-sm text-xs mt-2">Unsere Websites beinhalten immer ein SSL-Zertifikat, welches
                                                sicherstellt, dass die kommunikation zwischen dem Kunden und der Website stets
                                                sicher
                                                ist.</p>
                                        )}
                                    </td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                </tr>
                                <tr className="expandable-row">
                                    <td onClick={() => toggleText(4)}>Performance Reports <i className={`fa-solid fa-chevron-down light-green transition-transform duration-300 ${openIndex === 4 ? "rotate-180" : ""}`}></i>
                                        {openIndex === 4 && (
                                            <p className="font-sm text-xs mt-2">Du erhälst von uns monatlich einen Report, der festhält, wie
                                                deine Website performt.</p>
                                        )}
                                    </td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                </tr>
                                <tr className="expandable-row">
                                    <td onClick={() => toggleText(5)}>SEO optimierte Inhalte <i className={`fa-solid fa-chevron-down light-green transition-transform duration-300 ${openIndex === 5 ? "rotate-180" : ""}`}></i>
                                        {openIndex === 5 && (
                                            <p className="font-sm text-xs mt-2">Deine Inhalte wie Texte werden von vornherein so konzipiert,
                                                dass sie für Suchmaschinen wie Google interessanter sind. Dadurch ranken Sie
                                                automatisch
                                                besser.</p>
                                        )}
                                    </td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                </tr>
                                <tr className="expandable-row">
                                    <td onClick={() => toggleText(6)}>24/7 Support <i className={`fa-solid fa-chevron-down light-green transition-transform duration-300 ${openIndex === 6 ? "rotate-180" : ""}`}></i>
                                        {openIndex === 6 && (
                                            <p className="font-sm text-xs mt-2">Es gibt einen Notfall und du brauchst technische
                                                Unterstützung
                                                bei Ihrer Website? Kein Problem wir sind für dich da!</p>
                                        )}
                                    </td>
                                    <td className="checkbox"><i className="fa-regular fa-x"></i></td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                </tr>
                                <tr className="expandable-row">
                                    <td onClick={() => toggleText(7)}>White-Hat-SEO <i className={`fa-solid fa-chevron-down light-green transition-transform duration-300 ${openIndex === 7 ? "rotate-180" : ""}`}></i>
                                        {openIndex === 7 && (
                                            <p className="font-sm text-xs mt-2">Die ultimative SEO-Strategie, die den Traffic deiner Website
                                                kontinuierlich steigern wird. Sehr zeitintenisv, doch die Ergebnisse lassen sich
                                                sehen.
                                            </p>
                                        )}
                                    </td>
                                    <td className="checkbox"><i className="fa-regular fa-x"></i></td>
                                    <td className="checkbox"><i className="fa-regular fa-x"></i></td>
                                    <td className="checkbox"><i className="fa-solid fa-check check-hero-card-icon"></i></td>
                                </tr>
                                <tr className="expandable-row">
                                    <td onClick={() => toggleText(8)}>E-Commerce Upgrade <i className={`fa-solid fa-chevron-down light-green transition-transform duration-300 ${openIndex === 8 ? "rotate-180" : ""}`}></i>
                                        {openIndex === 8 && (
                                            <p className="font-sm text-xs mt-2">Verkaufe online ganz bequem über deinen eigenen Onlineshop!
                                            </p>
                                        )}
                                    </td>
                                    <td className="table-price">ab € 89,80 im Monat</td>
                                    <td className="table-price">ab € 89,80 im Monat</td>
                                    <td className="table-price">ab € 89,80 im Monat</td>
                                </tr>
                                <tr className="expandable-row">
                                    <td onClick={() => toggleText(9)} style={{ borderTopLeftRadius: "0px" }}>CO2 neutrales Hosting <i className={`fa-solid fa-chevron-down light-green transition-transform duration-300 ${openIndex === 9 ? "rotate-180" : ""}`}></i>
                                        {openIndex === 9 && (
                                            <p className="font-sm text-xs mt-2">Wir bieten dir die Möglichkeit deinen Impact auf die Umwelt
                                                zu
                                                verringern.</p>
                                        )}
                                    </td>
                                    <td className="table-price">ab € 4,90 im Monat</td>
                                    <td className="table-price">ab € 4,90 im Monat</td>
                                    <td style={{ borderTopRightRadius: "0px" }} className="table-price">ab € 4,90 im Monat</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default PricingTable
