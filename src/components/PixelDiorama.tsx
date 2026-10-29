import { PixelIcon } from './PixelIcon'

/**
 * Original illustrated Jiangpu campus scene.
 * The architecture is a stylised campus composition, not a replica of a real landmark.
 */
export function PixelDiorama() {
  return (
    <figure className="relative mx-auto w-full max-w-[560px]">
      <div className="rotate-[0.4deg] border-[4px] border-wood-deep bg-wood p-[7px] shadow-[7px_8px_0_0_rgba(70,50,36,0.28)]">
        <div className="absolute -left-2 top-4 z-10 h-5 w-2 bg-wood-deep" aria-hidden="true" />
        <div className="absolute -right-2 top-4 z-10 h-5 w-2 bg-wood-deep" aria-hidden="true" />
        <div className="relative overflow-hidden border-[3px] border-wood-deep/80 bg-[#edf0da]">
          <svg
            viewBox="0 0 560 340"
            className="block h-auto w-full"
            shapeRendering="crispEdges"
            role="img"
            aria-label="像素风江浦校园插画：林荫道尽头的校园建筑前，两位同学在木制告示板旁停留。"
          >
            <rect width="560" height="196" fill="#edf0da" />
            <rect y="46" width="560" height="76" fill="#e7edd4" />
            <rect y="116" width="560" height="80" fill="#dce8cb" />

            {/* sun + clouds */}
            <rect x="443" y="22" width="22" height="6" fill="#e8b44c" />
            <rect x="436" y="28" width="36" height="14" fill="#e8b44c" />
            <rect x="443" y="42" width="22" height="6" fill="#e8b44c" />
            <rect x="431" y="33" width="5" height="5" fill="#f1c96b" />
            <rect x="472" y="33" width="5" height="5" fill="#f1c96b" />
            <rect x="56" y="48" width="42" height="8" fill="#f8f3df" />
            <rect x="44" y="56" width="18" height="8" fill="#f8f3df" />
            <rect x="94" y="56" width="20" height="8" fill="#f8f3df" />
            <rect x="68" y="40" width="20" height="8" fill="#f8f3df" />
            <rect x="232" y="68" width="28" height="6" fill="#f6f0db" />
            <rect x="224" y="74" width="13" height="6" fill="#f6f0db" />
            <rect x="253" y="74" width="14" height="6" fill="#f6f0db" />
            <rect x="521" y="88" width="24" height="6" fill="#f3efd8" />
            <rect x="515" y="94" width="11" height="5" fill="#f3efd8" />
            <rect x="540" y="94" width="12" height="5" fill="#f3efd8" />

            {/* birds */}
            <rect x="303" y="33" width="2" height="2" fill="#53644d" />
            <rect x="307" y="31" width="2" height="2" fill="#53644d" />
            <rect x="319" y="48" width="2" height="2" fill="#53644d" />
            <rect x="323" y="46" width="2" height="2" fill="#53644d" />

            {/* distant hills and tree line */}
            <rect y="150" width="560" height="48" fill="#b8cc9e" />
            <rect x="0" y="140" width="92" height="14" fill="#c0d2a7" />
            <rect x="88" y="144" width="63" height="12" fill="#bdd0a4" />
            <rect x="428" y="138" width="132" height="16" fill="#c0d2a7" />
            <rect x="153" y="153" width="48" height="10" fill="#a9c18f" />
            <rect x="226" y="147" width="37" height="10" fill="#a9c18f" />
            <rect x="364" y="150" width="43" height="10" fill="#a9c18f" />

            {/* background trees */}
            <rect x="0" y="109" width="42" height="48" fill="#628556" />
            <rect x="24" y="96" width="35" height="35" fill="#6f9162" />
            <rect x="54" y="111" width="22" height="32" fill="#587b51" />
            <rect x="525" y="108" width="35" height="52" fill="#587b51" />
            <rect x="509" y="124" width="26" height="36" fill="#628556" />
            <rect x="543" y="123" width="17" height="37" fill="#6f9162" />
            <rect x="498" y="142" width="23" height="30" fill="#4e7448" />
            <rect x="520" y="154" width="12" height="23" fill="#4e7448" />

            {/* campus building */}
            <rect x="278" y="106" width="105" height="8" fill="#4f6f51" />
            <rect x="420" y="106" width="105" height="8" fill="#4f6f51" />
            <rect x="352" y="80" width="94" height="10" fill="#4f6f51" />
            <rect x="368" y="37" width="62" height="7" fill="#4f6f51" />
            <rect x="378" y="31" width="42" height="6" fill="#587b51" />

            <rect x="286" y="114" width="86" height="82" fill="#f0e2c3" />
            <rect x="428" y="114" width="94" height="82" fill="#f0e2c3" />
            <rect x="360" y="90" width="78" height="106" fill="#f5e8ce" />
            <rect x="374" y="44" width="50" height="53" fill="#f5e8ce" />

            <rect x="286" y="188" width="86" height="8" fill="#d7c5a2" />
            <rect x="428" y="188" width="94" height="8" fill="#d7c5a2" />
            <rect x="360" y="188" width="78" height="8" fill="#e2d0ad" />
            <rect x="374" y="90" width="6" height="98" fill="#e2d0ad" />
            <rect x="424" y="90" width="6" height="98" fill="#e2d0ad" />

            {/* clock tower + NJTech pennant */}
            <rect x="399" y="12" width="2" height="20" fill="#5b3e2b" />
            <path d="M401 14H414L410 17.5L414 21H401Z" fill="#0093dd" />
            <rect x="386" y="50" width="26" height="26" fill="#5b3e2b" />
            <rect x="388" y="52" width="22" height="22" fill="#fff7e4" />
            <rect x="398" y="55" width="2" height="8" fill="#244b37" />
            <rect x="398" y="61" width="6" height="2" fill="#244b37" />
            <rect x="396" y="52" width="2" height="2" fill="#d8a84e" />
            <rect x="404" y="70" width="2" height="2" fill="#d8a84e" />

            {/* windows */}
            <rect x="296" y="126" width="13" height="18" fill="#5e8172" />
            <rect x="316" y="126" width="13" height="18" fill="#5e8172" />
            <rect x="336" y="126" width="13" height="18" fill="#5e8172" />
            <rect x="296" y="154" width="13" height="18" fill="#5e8172" />
            <rect x="316" y="154" width="13" height="18" fill="#5e8172" />
            <rect x="336" y="154" width="13" height="18" fill="#5e8172" />
            <rect x="440" y="126" width="13" height="18" fill="#5e8172" />
            <rect x="460" y="126" width="13" height="18" fill="#5e8172" />
            <rect x="480" y="126" width="13" height="18" fill="#5e8172" />
            <rect x="440" y="154" width="13" height="18" fill="#5e8172" />
            <rect x="460" y="154" width="13" height="18" fill="#5e8172" />
            <rect x="480" y="154" width="13" height="18" fill="#5e8172" />
            <rect x="370" y="100" width="15" height="22" fill="#6d9082" />
            <rect x="393" y="100" width="15" height="22" fill="#6d9082" />
            <rect x="300" y="130" width="5" height="3" fill="#a8d5e2" />
            <rect x="320" y="130" width="5" height="3" fill="#a8d5e2" />
            <rect x="340" y="130" width="5" height="3" fill="#a8d5e2" />
            <rect x="444" y="130" width="5" height="3" fill="#a8d5e2" />
            <rect x="464" y="130" width="5" height="3" fill="#a8d5e2" />
            <rect x="484" y="130" width="5" height="3" fill="#a8d5e2" />
            <rect x="298" y="132" width="1" height="10" fill="#d6e3ca" />
            <rect x="318" y="132" width="1" height="10" fill="#d6e3ca" />
            <rect x="338" y="132" width="1" height="10" fill="#d6e3ca" />
            <rect x="442" y="132" width="1" height="10" fill="#d6e3ca" />
            <rect x="462" y="132" width="1" height="10" fill="#d6e3ca" />
            <rect x="482" y="132" width="1" height="10" fill="#d6e3ca" />

            {/* entrance and steps */}
            <rect x="374" y="145" width="50" height="7" fill="#0079a8" />
            <rect x="382" y="148" width="34" height="2" fill="#c8eef8" />
            <rect x="379" y="156" width="40" height="32" fill="#5b3e2b" />
            <rect x="387" y="156" width="24" height="32" fill="#6b4a33" />
            <rect x="397" y="158" width="2" height="30" fill="#4c3427" />
            <rect x="382" y="163" width="6" height="15" fill="#467064" />
            <rect x="410" y="163" width="6" height="15" fill="#467064" />
            <rect x="368" y="194" width="82" height="5" fill="#d9c49c" />
            <rect x="360" y="199" width="98" height="5" fill="#cdb78f" />
            <rect x="350" y="204" width="118" height="5" fill="#c2ab83" />

            {/* campus grounds and path */}
            <rect y="196" width="560" height="144" fill="#82a46b" />
            <rect y="196" width="560" height="5" fill="#6f915b" />
            <path d="M338 196H390L500 340H248Z" fill="#e3cfa6" />
            <path d="M348 196H382L476 340H278Z" fill="#ecdab6" />
            <path d="M338 196L335 214L310 236L303 264L284 298L248 340H278L293 305L310 271L318 241L342 214Z" fill="#d8c097" />
            <path d="M390 196L397 220L421 249L430 278L463 318L500 340H474L450 314L430 282L415 251L384 216Z" fill="#d8c097" />
            <rect x="330" y="220" width="33" height="3" fill="#d5be94" />
            <rect x="354" y="239" width="48" height="3" fill="#d5be94" />
            <rect x="340" y="258" width="68" height="3" fill="#d5be94" />
            <rect x="327" y="282" width="90" height="3" fill="#d5be94" />
            <rect x="306" y="309" width="120" height="3" fill="#d5be94" />
            <rect x="324" y="216" width="7" height="3" fill="#c7ad80" />
            <rect x="399" y="243" width="8" height="3" fill="#c7ad80" />
            <rect x="372" y="301" width="9" height="3" fill="#c7ad80" />
            <rect x="255" y="330" width="8" height="3" fill="#c7ad80" />
            <rect x="296" y="323" width="6" height="2" fill="#cdb88e" />
            <rect x="450" y="327" width="8" height="3" fill="#cdb88e" />

            {/* lawn details */}
            <rect x="17" y="232" width="14" height="4" fill="#6e9159" />
            <rect x="86" y="278" width="43" height="4" fill="#779968" />
            <rect x="470" y="292" width="50" height="4" fill="#779968" />
            <rect x="214" y="318" width="28" height="4" fill="#779968" />
            <rect x="171" y="221" width="26" height="4" fill="#779968" />
            <rect x="524" y="245" width="20" height="4" fill="#779968" />

            {/* flower beds */}
            <rect x="38" y="289" width="3" height="14" fill="#56784a" />
            <rect x="33" y="284" width="9" height="5" fill="#e8b44c" />
            <rect x="44" y="280" width="5" height="4" fill="#d86b50" />
            <rect x="48" y="290" width="3" height="11" fill="#56784a" />
            <rect x="51" y="285" width="7" height="5" fill="#f5e6b8" />
            <rect x="207" y="291" width="3" height="12" fill="#56784a" />
            <rect x="202" y="286" width="8" height="4" fill="#d86b50" />
            <rect x="213" y="282" width="4" height="4" fill="#f5e6b8" />
            <rect x="520" y="308" width="3" height="12" fill="#56784a" />
            <rect x="516" y="303" width="8" height="5" fill="#f5e6b8" />
            <rect x="529" y="298" width="4" height="4" fill="#e8b44c" />

            {/* tree shade */}
            <rect x="32" y="298" width="70" height="7" fill="#738f60" opacity="0.5" />
            <rect x="116" y="303" width="186" height="7" fill="#738f60" opacity="0.45" />

            {/* foreground noticeboard */}
            <rect x="121" y="152" width="178" height="8" fill="#4c3427" />
            <rect x="115" y="158" width="187" height="105" fill="#5b3e2b" />
            <rect x="123" y="166" width="171" height="89" fill="#976741" />
            <rect x="130" y="173" width="157" height="75" fill="#f8eed6" />
            <rect x="130" y="173" width="157" height="4" fill="#ead7b4" />
            <rect x="143" y="253" width="11" height="67" fill="#5b3e2b" />
            <rect x="251" y="253" width="11" height="67" fill="#5b3e2b" />
            <rect x="133" y="314" width="30" height="7" fill="#4c3427" />
            <rect x="242" y="314" width="30" height="7" fill="#4c3427" />

            {/* notes pinned to the board */}
            <rect x="138" y="183" width="61" height="41" fill="#fff8e7" />
            <rect x="138" y="183" width="61" height="3" fill="#e7d4ab" />
            <rect x="147" y="192" width="35" height="3" fill="#d6a84e" />
            <rect x="147" y="200" width="44" height="2" fill="#9aa480" />
            <rect x="147" y="205" width="39" height="2" fill="#b7bfa2" />
            <rect x="147" y="211" width="29" height="2" fill="#b7bfa2" />
            <rect x="147" y="217" width="23" height="4" fill="#d8e2c5" />
            <rect x="155" y="180" width="7" height="7" fill="#0093dd" />
            <rect x="157" y="182" width="3" height="3" fill="#c8eef8" />

            <rect x="204" y="178" width="69" height="36" fill="#dfe8ca" />
            <rect x="211" y="186" width="43" height="3" fill="#57774c" />
            <rect x="211" y="193" width="52" height="2" fill="#8aa078" />
            <rect x="211" y="199" width="39" height="2" fill="#a7b794" />
            <rect x="211" y="205" width="24" height="5" fill="#f5e6b8" />
            <rect x="232" y="175" width="6" height="6" fill="#d9a84f" />

            <rect x="144" y="230" width="86" height="12" fill="#f5e6b8" />
            <rect x="151" y="234" width="48" height="2" fill="#9b7b42" />
            <rect x="151" y="238" width="35" height="2" fill="#c5ad77" />
            <rect x="218" y="227" width="6" height="6" fill="#5d8353" />

            <rect x="245" y="218" width="30" height="26" fill="#d7ebf4" />
            <rect x="251" y="223" width="17" height="2" fill="#00638b" />
            <rect x="251" y="228" width="13" height="2" fill="#4a9dbe" />
            <rect x="251" y="233" width="16" height="2" fill="#4a9dbe" />
            <rect x="264" y="215" width="4" height="4" fill="#0093dd" />

            {/* small directional sign */}
            <rect x="510" y="194" width="5" height="119" fill="#6b4a33" />
            <rect x="484" y="188" width="60" height="17" fill="#006f9e" />
            <rect x="487" y="191" width="54" height="11" fill="#0079a8" />
            <text x="491" y="200" fontFamily="Silkscreen, monospace" fontSize="8" fill="#eaf8fc" letterSpacing="0.8">
              NJTech
            </text>
            <rect x="494" y="209" width="47" height="15" fill="#fff7e4" />
            <rect x="496" y="211" width="43" height="11" fill="#f7ecd8" />
            <text x="503" y="220" fontFamily="Silkscreen, monospace" fontSize="7" fill="#00638b" letterSpacing="0.7">
              1902
            </text>

            {/* lamppost */}
            <rect x="465" y="194" width="4" height="118" fill="#455d4e" />
            <rect x="460" y="308" width="15" height="5" fill="#3c5144" />
            <rect x="455" y="181" width="25" height="14" fill="#4c5f4e" />
            <rect x="459" y="184" width="17" height="9" fill="#f0c35b" />
            <rect x="461" y="186" width="13" height="5" fill="#f8dc8b" />
            <rect x="463" y="177" width="9" height="4" fill="#4c5f4e" />

            {/* students */}
            <g transform="translate(397 245)">
              <rect x="2" y="0" width="8" height="3" fill="#4a3b2e" />
              <rect x="1" y="3" width="10" height="6" fill="#e7bd93" />
              <rect x="4" y="4" width="2" height="2" fill="#e7bd93" />
              <rect x="0" y="9" width="12" height="12" fill="#c86a4c" />
              <rect x="2" y="11" width="2" height="8" fill="#d8896b" />
              <rect x="1" y="21" width="4" height="10" fill="#405447" />
              <rect x="7" y="21" width="4" height="10" fill="#405447" />
              <rect x="1" y="30" width="5" height="3" fill="#5b3e2b" />
              <rect x="6" y="30" width="5" height="3" fill="#5b3e2b" />
              <rect x="12" y="11" width="6" height="9" fill="#006f9e" />
              <rect x="14" y="13" width="2" height="5" fill="#4a9dbe" />
              <rect x="-2" y="34" width="17" height="4" fill="#6d8d5d" opacity="0.75" />
            </g>

            <g transform="translate(303 270)">
              <rect x="0" y="0" width="7" height="3" fill="#5d4b35" />
              <rect x="1" y="3" width="6" height="5" fill="#e7bd93" />
              <rect x="2" y="8" width="5" height="9" fill="#d9a84f" />
              <rect x="1" y="9" width="2" height="7" fill="#e3bf75" />
              <rect x="2" y="17" width="2" height="8" fill="#405447" />
              <rect x="5" y="17" width="2" height="8" fill="#405447" />
              <rect x="1" y="24" width="4" height="2" fill="#5b3e2b" />
              <rect x="5" y="24" width="4" height="2" fill="#5b3e2b" />
              <rect x="6" y="9" width="4" height="8" fill="#6f9162" />
              <rect x="-2" y="27" width="13" height="4" fill="#6d8d5d" opacity="0.75" />
            </g>

            {/* bench + book left on the path */}
            <rect x="335" y="293" width="37" height="4" fill="#6b4a33" />
            <rect x="338" y="297" width="4" height="11" fill="#5b3e2b" />
            <rect x="365" y="297" width="4" height="11" fill="#5b3e2b" />
            <rect x="347" y="286" width="12" height="7" fill="#f5e6b8" />
            <rect x="349" y="288" width="8" height="1" fill="#b89a62" />

            {/* cat / little campus life */}
            <rect x="281" y="303" width="19" height="8" fill="#d79a5a" />
            <rect x="295" y="297" width="9" height="13" fill="#e0a565" />
            <rect x="295" y="294" width="3" height="4" fill="#d79a5a" />
            <rect x="301" y="294" width="3" height="4" fill="#d79a5a" />
            <rect x="297" y="301" width="1" height="2" fill="#3c4033" />
            <rect x="301" y="301" width="1" height="2" fill="#3c4033" />
            <rect x="273" y="307" width="9" height="3" fill="#c6874b" />
            <rect x="272" y="304" width="3" height="4" fill="#c6874b" />

            <rect x="358" y="232" width="3" height="3" fill="#fff3cf" />
            <rect x="225" y="246" width="2" height="2" fill="#f2cf75" />
            <rect x="529" y="170" width="2" height="2" fill="#f2cf75" />
          </svg>
        </div>
      </div>

      <figcaption className="absolute -bottom-4 left-8 flex rotate-[-1.2deg] items-center gap-1.5 border-2 border-wood-deep bg-paper px-3 py-1.5 font-display text-xs text-wood-deep shadow-[2px_2px_0_0_#5b3e2b]">
        <span className="h-1.5 w-1.5 bg-njtech" aria-hidden="true" />
        江浦校园 · 林荫道
      </figcaption>
    </figure>
  )
}

/**
 * A separate, compact scene composed for narrow screens.
 * It keeps the campus context without squeezing the desktop illustration into the hero.
 */
export function MobileCampusStrip({ openCount }: { openCount: number }) {
  return (
    <a
      href="#notice-board"
      className="group mt-4 block lg:hidden"
      aria-label={`江浦校园插画，${openCount} 件小事在等搭把手，去告示墙逛逛`}
    >
      <div className="relative mx-auto max-w-[560px] border-2 border-wood-deep bg-wood p-[5px] shadow-[4px_4px_0_0_rgba(70,50,36,0.2)] transition-transform group-hover:-translate-y-0.5">
        <div className="relative overflow-hidden border-2 border-wood-deep/70 bg-[#eaf0db]">
          <svg
            viewBox="0 0 400 100"
            className="block h-auto w-full"
            shapeRendering="crispEdges"
            aria-hidden="true"
          >
            <rect width="400" height="100" fill="#edf0da" />
            <rect y="31" width="400" height="37" fill="#e1ebcf" />
            <rect x="324" y="10" width="15" height="5" fill="#e8b44c" />
            <rect x="317" y="15" width="29" height="11" fill="#e8b44c" />
            <rect x="324" y="26" width="15" height="4" fill="#e8b44c" />
            <rect x="44" y="17" width="30" height="5" fill="#f8f3df" />
            <rect x="37" y="22" width="12" height="5" fill="#f8f3df" />
            <rect x="74" y="22" width="14" height="5" fill="#f8f3df" />
            <rect x="220" y="25" width="22" height="4" fill="#f6f0db" />
            <rect x="214" y="29" width="10" height="4" fill="#f6f0db" />

            <rect y="57" width="400" height="43" fill="#82a46b" />
            <rect y="57" width="400" height="3" fill="#6f915b" />
            <rect y="51" width="400" height="6" fill="#b8cc9e" />

            {/* campus building */}
            <rect x="267" y="30" width="111" height="7" fill="#4f6f51" />
            <rect x="273" y="37" width="97" height="27" fill="#f0e2c3" />
            <rect x="296" y="16" width="45" height="6" fill="#4f6f51" />
            <rect x="303" y="22" width="31" height="15" fill="#f5e8ce" />
            <rect x="311" y="8" width="2" height="14" fill="#5b3e2b" />
            <path d="M313 10H326L322 13.5L326 17H313Z" fill="#0093dd" />
            <rect x="309" y="27" width="6" height="9" fill="#6d9082" />
            <rect x="322" y="27" width="6" height="9" fill="#6d9082" />
            <rect x="286" y="43" width="10" height="12" fill="#5e8172" />
            <rect x="304" y="43" width="10" height="12" fill="#5e8172" />
            <rect x="329" y="43" width="10" height="12" fill="#5e8172" />
            <rect x="347" y="43" width="10" height="12" fill="#5e8172" />
            <rect x="281" y="62" width="84" height="4" fill="#d9c49c" />
            <rect x="286" y="38" width="10" height="23" fill="#6b4a33" />
            <rect x="315" y="38" width="7" height="4" fill="#0079a8" />
            <rect x="340" y="38" width="10" height="23" fill="#6b4a33" />

            {/* tree + path + ground */}
            <rect x="14" y="40" width="24" height="40" fill="#587d4e" />
            <rect x="2" y="51" width="31" height="29" fill="#4e7448" />
            <rect x="25" y="29" width="33" height="29" fill="#6e9660" />
            <rect x="9" y="31" width="17" height="21" fill="#7fa06c" />
            <rect x="35" y="53" width="10" height="34" fill="#74513a" />
            <path d="M197 57H237L286 100H154Z" fill="#e6d2aa" />
            <path d="M204 57H230L270 100H168Z" fill="#ecdab6" />
            <rect x="182" y="71" width="53" height="2" fill="#d5be94" />
            <rect x="177" y="84" width="67" height="2" fill="#d5be94" />
            <rect x="167" y="94" width="83" height="2" fill="#d5be94" />
            <rect x="101" y="77" width="44" height="3" fill="#779968" />
            <rect x="292" y="82" width="56" height="3" fill="#779968" />

            {/* campus noticeboard */}
            <rect x="66" y="30" width="80" height="5" fill="#4c3427" />
            <rect x="62" y="35" width="88" height="44" fill="#5b3e2b" />
            <rect x="67" y="40" width="78" height="34" fill="#976741" />
            <rect x="72" y="45" width="68" height="24" fill="#f8eed6" />
            <rect x="78" y="71" width="7" height="22" fill="#5b3e2b" />
            <rect x="128" y="71" width="7" height="22" fill="#5b3e2b" />
            <rect x="73" y="91" width="17" height="4" fill="#4c3427" />
            <rect x="123" y="91" width="17" height="4" fill="#4c3427" />
            <rect x="77" y="50" width="27" height="15" fill="#fff8e7" />
            <rect x="83" y="54" width="15" height="2" fill="#d6a84e" />
            <rect x="83" y="58" width="17" height="1" fill="#a9bd8c" />
            <rect x="88" y="47" width="4" height="4" fill="#0093dd" />
            <rect x="109" y="49" width="25" height="13" fill="#dfe8ca" />
            <rect x="113" y="53" width="16" height="2" fill="#57774c" />
            <rect x="113" y="57" width="12" height="1" fill="#8aa078" />
            <rect x="81" y="63" width="31" height="4" fill="#f5e6b8" />
            <rect x="113" y="63" width="19" height="4" fill="#f5e6b8" />

            {/* sign + lamp */}
            <rect x="151" y="55" width="4" height="41" fill="#6b4a33" />
            <rect x="139" y="52" width="28" height="10" fill="#0079a8" />
            <rect x="142" y="54" width="22" height="6" fill="#006f9e" />
            <rect x="242" y="49" width="3" height="49" fill="#455d4e" />
            <rect x="235" y="43" width="17" height="9" fill="#4c5f4e" />
            <rect x="238" y="45" width="11" height="5" fill="#f0c35b" />

            {/* two tiny students */}
            <g transform="translate(196 70)">
              <rect x="0" y="0" width="5" height="2" fill="#4a3b2e" />
              <rect x="0" y="2" width="5" height="4" fill="#e7bd93" />
              <rect x="0" y="6" width="6" height="8" fill="#c86a4c" />
              <rect x="0" y="14" width="2" height="7" fill="#405447" />
              <rect x="4" y="14" width="2" height="7" fill="#405447" />
              <rect x="6" y="7" width="4" height="6" fill="#006f9e" />
              <rect x="-2" y="21" width="10" height="3" fill="#6d8d5d" opacity="0.7" />
            </g>
            <g transform="translate(221 78)">
              <rect x="0" y="0" width="5" height="2" fill="#5d4b35" />
              <rect x="0" y="2" width="5" height="4" fill="#e7bd93" />
              <rect x="0" y="6" width="6" height="7" fill="#d9a84f" />
              <rect x="0" y="13" width="2" height="6" fill="#405447" />
              <rect x="4" y="13" width="2" height="6" fill="#405447" />
              <rect x="-2" y="19" width="10" height="3" fill="#6d8d5d" opacity="0.7" />
            </g>

            {/* small campus markers */}
            <rect x="357" y="74" width="2" height="13" fill="#56784a" />
            <rect x="353" y="70" width="7" height="4" fill="#f5e6b8" />
            <rect x="284" y="92" width="2" height="7" fill="#56784a" />
            <rect x="280" y="89" width="6" height="3" fill="#e8b44c" />
          </svg>

          <span className="absolute left-2 top-2 inline-flex items-center gap-1.5 border border-wood-deep/20 bg-paper/92 px-1.5 py-0.5 text-[9px] font-bold leading-none text-pine shadow-[1px_1px_0_0_rgba(91,62,43,0.18)]">
            <span className="h-1.5 w-1.5 bg-njtech" aria-hidden="true" />
            {openCount} 件小事等搭把手
          </span>
          <span
            className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center border border-wood-deep/35 bg-paper text-pine shadow-[1px_1px_0_0_rgba(91,62,43,0.22)]"
            aria-hidden="true"
          >
            <PixelIcon name="arrow" size={11} className="rotate-90" />
          </span>
        </div>
      </div>
    </a>
  )
}
