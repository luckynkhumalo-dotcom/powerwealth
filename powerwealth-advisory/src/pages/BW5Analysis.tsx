import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function BW5Analysis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-cyan mb-6">Case Study</p>
          <h1 className="text-4xl md:text-[3.25rem] font-serif text-brand-navy mb-12 leading-[1.1] tracking-tight">
            What the BW5 record demonstrates.
          </h1>
          
          <div className="prose prose-lg max-w-none text-slate-700 space-y-8 font-light leading-[1.6]">
            <p>
              In REIPPPP Bid Window 5, the DMRE announced 25 preferred bidders on 28 October 2021. The Ikamva Consortium received the largest allocation; 12 projects totalling 1,274MW of wind and solar capacity. Guarantees of R254.8 million were posted under the BW5 RFP mechanism of R200,000 per MW.
            </p>
            
            <p className="text-2xl md:text-[1.75rem] font-serif text-brand-navy border-l-4 border-brand-cyan pl-6 py-2 my-12 leading-snug">
              None of the twelve projects reached financial close.
            </p>
            
            <p>
              The IPP Office terminated preferred bidder status and called the bid bond guarantees. The High Court ordered payment of R164.8 million for the six wind projects. The solar guarantees were ruled expired; Implementation Agreements had been signed on the solar projects, causing the original bid bond security to lapse, and the IPP Office could not recover R90 million. The solar projects reached legal close; the wind projects never did. This within-portfolio distinction is consistent with the tariff analysis: the wind tariffs were lower, and the economics were weaker.
            </p>
            
            <p>
              In the same bid window, facing the same commodity shocks, the same Eskom Budget Quote delays, and the same OEM market pressure, EDF Renewables closed all three of its wind projects within fourteen months.
            </p>
            
            <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mt-12 mb-6 leading-snug">
              Three documented differences explain why one closed 3 for 3 and the other closed 0 for 12:
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white p-8 border border-slate-200">
                <h4 className="text-xl md:text-2xl font-serif text-brand-navy mb-3 leading-snug">Tariff discipline.</h4>
                <p className="text-lg text-slate-700 leading-[1.6]">
                  EDF bid approximately 60c/kWh; its CEO described this as "prudent." The BW5 wind weighted average was 49.5c/kWh. Under the REIPPPP's 70% price weighting, winning six wind projects; the largest allocation to any single bidder; implies tariffs well below the average. The gap between those tariffs and EDF's 60c/kWh is where the margin disappeared.
                </p>
              </div>
              
              <div className="bg-white p-8 border border-slate-200">
                <h4 className="text-xl md:text-2xl font-serif text-brand-navy mb-3 leading-snug">Grid readiness.</h4>
                <p className="text-lg text-slate-700 leading-[1.6]">
                  EDF had begun construction of a self-build substation by July 2022; months before financial close. The Ikamva Consortium had no confirmed grid connections on any of its six wind projects at any point during three years of extensions.
                </p>
              </div>
              
              <div className="bg-white p-8 border border-slate-200">
                <h4 className="text-xl md:text-2xl font-serif text-brand-navy mb-3 leading-snug">Development completeness.</h4>
                <p className="text-lg text-slate-700 leading-[1.6]">
                  The majority of BW5 preferred bidders were not shovel-ready at award; with outstanding grid connection confirmations, environmental authorisations, and other permitting. EDF's ability to close within fourteen months implies its projects did not carry the same gaps.
                </p>
              </div>
            </div>
            
            <p className="mt-12">
              <strong className="text-brand-navy">The causal hierarchy:</strong> Tariff set the margin. Development gaps extended the timeline. The commodity shock consumed whatever margin existed. The projects that survived BW5 were not luckier. They were better priced and further developed.
            </p>
            
            <p>
              <strong className="text-brand-navy">The broader consequences:</strong> The developer's parent company reported cumulative losses of approximately EUR 1.2 billion since its acquisition; driven primarily by international asset impairments, with the South African BW5 portfolio adding further losses. Two CEO transitions occurred in a single year during active R164.8 million litigation. 824MW of grid capacity was locked to projects that were never built during South Africa's acute energy crisis; BW6 could not award its intended wind capacity because BW5 grid allocations had not been released.
            </p>
            
            <h2 className="text-3xl md:text-[2.5rem] font-serif text-brand-navy mt-16 mb-8 leading-[1.1] tracking-tight">What this means now.</h2>
            
            <p>
              BW5 is one transaction. But the structural conditions it exposed are not unique to one bid window.
            </p>
            
            <p>
              The BW5 guarantee mechanism; R200,000 per MW; remains the standard in subsequent bid windows. The structural conditions that produced the failure have been partially but not fully addressed. Grid access management processes have been restructured, including the establishment of NTCSA and the introduction of structured queue management frameworks. But transmission capacity has not expanded to match the pipeline. The Electricity Regulation Amendment Act has restructured the counterparty landscape. Updated grid codes have changed EPC compliance costs. The market has more channels, more counterparties, and more regulatory frameworks than BW5 faced.
            </p>
            
            <p className="text-xl md:text-2xl font-serif text-brand-navy border-l-4 border-brand-cyan pl-6 py-2 my-10 leading-[1.4]">
              The compound fragility that BW5 demonstrated does not disappear in a more complex market. It multiplies.
            </p>
            
            <p>
              The question for any current preferred bidder, lender, or guarantee provider is whether their exposure faces similar risk.
            </p>
            
            <p>
              In every transaction that fails, the same question is asked afterward: why did nobody independently test these assumptions before capital was committed? The answer is structural. Every advisor around the table was hired to advance the deal, not to test whether it should advance. Independent commercial assessment exists to close that gap; not as an additional cost, but as a standard component of well-governed capital deployment.
            </p>
            
            <p>
              The structural risks documented here; grid confirmation gaps, tariff-to-cost fragility, development-stage weakness, governance concentration; are not unique to South Africa. They are observable across African power markets wherever capital is committed against project assumptions that have not been independently tested. The methodology applies wherever these risks exist.
            </p>
            
            <p>
              The full analysis includes the complete tariff arithmetic, the three-lens stress test, the EDF comparator in detail, the team credentials, and the specific methodology Powerwealth applies to live transactions.
            </p>
            
            <div className="mt-16 mb-16">
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center bg-brand-navy text-white px-8 py-4 text-[11px] font-mono font-bold uppercase tracking-[0.15em] hover:bg-brand-cyan transition-colors group"
              >
                Download the full BW5 analysis
                <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="pt-8 border-t border-slate-200 text-[11px] font-mono text-slate-500 leading-[1.6]">
              <p className="mb-2 font-bold uppercase tracking-[0.15em] text-slate-400">Sources:</p>
              <p>DMRE BW5 announcement, 28 October 2021. High Court judgment: SAFLII, ZAGPPHC 1042, 10 October 2025. EDF financial close: Engineering News, November 2022 and January 2023. BW5 tariff data: Green Building Africa, 20 May 2022. EDF tariff and "prudent" description: Engineering News, 22 September 2022. Development readiness gaps: Green Building Africa, 26 September 2022. EUR 1.2 billion cumulative losses: Irish Times, 22 November 2025. BW6 wind capacity constraint: DMRE BW6 documentation. BW5 RFP guarantee mechanism: BW5 RFP Part A, Clause 26.2.1.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
