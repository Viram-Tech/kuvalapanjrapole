import { useContent } from '../i18n.jsx'

// Appeal — the sanctuary's authentic Gujarati letter to donors, set as a
// letter-style block. Content is fixed Gujarati (kept site-wide, like the masthead).
export default function Appeal() {
  const { c } = useContent()

  return (
    <section id="appeal" className="bg-paper px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-stretch lg:gap-8">
          {/* Letter */}
          <div className="font-guj rounded-3xl border border-line bg-paper-2 p-8 shadow-sm md:p-10">
            <p className="text-lg font-semibold text-ink">
              ધર્મપ્રેમી, શ્રી .................................... જૈન સંઘ / ટ્રસ્ટીવર્યશ્રીઓ
            </p>
            <p className="mt-3 text-maroon">
              શ્રી કુવાળા જૈન સંઘ સંચાલિત શ્રી ખોડાઢોર પાંજરાપોળ, કુવાળાના જય જિનેન્દ્ર સ્વીકારશોજી.
            </p>

            <div className="mt-6 space-y-4 leading-relaxed text-ink-2">
              <p>
                સવિનય સાથે જણાવવાનું કે ઉત્તર ગુજરાતના બનાસકાંઠા જિલ્લાના ભાભર તાલુકામાં આવેલું કુવાળા ગામ, જે અપ્રતિમ પ્રતિભાશાળી પૂ.આ.ભ.શ્રી સુરેન્દ્રસૂરીશ્વરજી મ.સા.ની જન્મભૂમિ અને પ.પૂ.તપાગચ્છાધિપતિ આ.ભ.શ્રી રામસૂરીશ્વરજી મ.સા. (ડહેલાવાળા)ની મંગલ આશીર્વાદથી પાવન થયેલ છે.
              </p>
              <p>
                અમારી આ પાંજરાપોળ પૂ.આ.ભ.શ્રી સુરેન્દ્રસૂરીશ્વરજી મ.સા.ની પ્રેરણાથી શરૂ કરવામાં આવેલી, જે અત્યારે ૯ વીઘા જેટલી વિશાળ ભૂમિ પર પ.પૂ.આ.ભ.શ્રી સુરેન્દ્રસૂરીશ્વરજી મ.સા. (ડહેલાવાળા)ના દિવ્ય આશીર્વાદથી સંપાદિત ક્ષેત્ર છે. આ પાંજરાપોળમાં ૪૮ શેડ, પાણી પીવાના હવાડા, નીરાણીના ગમાણ, ઘાસનું ગોડાઉન, માંદા ઢોર માટેનો અલગ શેડ, બકરાના શેડ, પાણીની ટાંકી, પાણીના બોર, ટ્રેકટર, પાંચવ તેમજ દવાખાનું, ઓફિસ રૂમ, સ્ટાફ રૂમ, ધાસના વજનનો કાંટો આટલું જ નહિ પરંતુ પારેવાઓ માટેનો ચબુતરો, પક્ષીઘર અને સંપૂર્ણ પાંજરાપોળમાં સી.સી.ટીવી કેમેરા ગોઠવવામાં આવેલ છે.
              </p>
              <p>
                અમારી આ પાંજરાપોળ ઓર્ડર નજુક હોવાથી અમે ઢોર-બકરા-પાડા-ગાય-ભેંસ-રોજ પશુ લુલા-લંગડા-આંધળા નિરાધાર પશુ-પક્ષીઓને કતલખાને જતા બચાવીને આ પાંજરાપોળમાં સમાઈ લેવાય છે. પ્રવાહ નિરંતર વધી રહ્યો છે.
              </p>
              <p className="border-l-2 border-maroon pl-4 font-semibold text-ink/90">
                હાલમાં લગભગ ૧૨૦૦ જેટલા પશુઓ નિભાવાય છે. જે વર્ષે પહોંચી વળવા આપના જેવા ઉદારદિલના મહાનુભાવો-ટ્રસ્ટી વર્ગ-સભ્યોના સહાયતાથી અમારા ભગીરથ કાર્યમાં આપની પ્રેરણાથી અમારો આ જીવદયારૂપી કાર્ય વેગવંતુ બનાવશો.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-maroon-dark"
              >
                {c.nav.donate}
              </a>
            </div>
          </div>

          {/* Images — on large screens they sit at the top and bottom of the
              letter's height, with a decorative divider filling the space between,
              so the second image ends near the Donate button. */}
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:flex lg:h-full lg:flex-col lg:gap-0">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-line">
              <img
                src="/images/joining1.webp"
                alt="Rescue shelter"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Divider — only in the tall gap on large screens */}
            <div className="hidden flex-1 flex-col items-center justify-center py-4 lg:flex" aria-hidden>
              <span className="w-px flex-1 bg-line" />
              <svg viewBox="0 0 24 24" className="my-3 h-4 w-4 text-maroon" fill="currentColor">
                <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6z" />
              </svg>
              <span className="w-px flex-1 bg-line" />
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-line">
              <img
                src="/images/xjoining2.jpg"
                alt="Cattle feeding"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
