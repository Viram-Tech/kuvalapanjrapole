// Traditional Gujarati masthead — the sanctuary's poster header, set as real
// text. Invocations → sangh & panjrapole name → trust registration → appeal.
// Content is intentionally fixed Gujarati (a devotional masthead), not localised.
export default function Masthead() {
  return (
    <div className="font-guj mx-auto max-w-3xl text-center text-ink">
      {/* Invocations */}
      <p className="text-sm text-ink-2 sm:text-base">।। શ્રી જીરાવલા પાર્શ્વનાથાય નમઃ ।।</p>
      <p className="mt-1 text-sm text-ink-2 sm:text-base">
        ।। પૂજ્યપાદ આચાર્યદેવશ્રી વિજય સુરેન્દ્ર-રામ સૂરીશ્વરજી સદ્ ગુરુભ્યો નમઃ ।।
      </p>

      {/* Sangh + panjrapole name */}
      <h2 className="mt-6 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
        શ્રી કુવાળા શ્વેતાંબર મૂર્તિપૂજક જૈન સંઘ
      </h2>
      <p className="mt-1 text-sm tracking-[0.2em] text-ink-2">સંચાલિત</p>
      <h3 className="mt-1 text-3xl font-bold leading-tight tracking-tight text-maroon sm:text-4xl md:text-5xl">
        શ્રી ખોડાઢોર પાંજરાપોળ-કુવાળા
      </h3>

      {/* Registration + contact */}
      <div className="mx-auto mt-5 max-w-2xl space-y-1 text-xs text-ink-2 sm:text-sm">
        <p>ટ્રસ્ટ રજી. નં. : ઈ-૭૫૬ / બનાસકાંઠા, મુ. પો. કુવાળા &nbsp;·&nbsp; 80G(5)/113/07/08</p>
        <p>મુ.પો. કુવાળા, તા. ભાભર, જિલ્લા બનાસકાંઠા, ગુજરાત-૩૮૫૩૨૦</p>
        <p>ફોન નં. : ૯૯૭૯૭ ૮૭૨૬૨</p>
      </div>

      {/* Appeal */}
      <div className="mx-auto mt-6 h-px w-16 bg-maroon/40" />
      <p className="mt-6 text-lg leading-relaxed text-ink sm:text-xl md:text-2xl">
        મુંગા અબોલ પ્રાણીઓની વહારે થવા તેમની
        <br />
        અંતરની આરૂઝ સાંભળવા...
        <br />
        તેમની આંતરડી ઠારવા
        <br />
        <span className="text-maroon">નમ્ર નિવેદન...</span>
      </p>
    </div>
  )
}
