import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const FATAL_FLAWS = [
  {id:"01",title:"Grid scarcity is the ultimate arbiter of asset value.",description:"Transmission access is no longer a technical footnote; it is a binary risk. Projects are competing not on underlying yield, but on grid-readiness timing, unassailable documentation, and the sponsor's ability to secure allocation before capacity is depleted."},
  {id:"02",title:"The private PPA illusion masks deep credit risk.",description:"The explosion of private offtake and wheeling structures has created a pipeline of unbankable projects. A signed PPA is meaningless if the underlying municipal wheeling framework is flawed, or if the corporate offtaker's credit cannot survive a 20-year stress test."},
  {id:"03",title:"Stale assumptions destroy financial models.",description:"Projects developed under 2022 assumptions are failing in 2025. The mismatch between fixed-tariff expectations and the reality of global supply chain inflation, rising EPC costs, and shifting grid code compliance is rendering legacy financial models obsolete."},
  {id:"04",title:"Regulatory transition threatens execution timelines.",description:"The unbundling of Eskom and the operationalization of the NTCSA changes the rules of engagement. Projects navigating this transition face unprecedented queue risk, shifting institutional interfaces, and policy drift that can stall financial close indefinitely."}
];

const SERVICES = [
  {id:"01",title:"Grid Access & Transmission Readiness Review",description:"A focused assessment of whether a project’s transmission access assumptions, connection pathway, grid-code readiness, and sequencing logic are credible in the current South African market.",buyers:"Developers, storage/hybrid sponsors, corporate buyers, investors, legal advisors."},
  {id:"02",title:"Project Readiness & Bankability Audit",description:"A rapid but structured assessment of whether a project is genuinely ready across the dimensions most likely to affect financing, transmission competitiveness, and delivery.",buyers:"Developers, sponsors, preferred bidders, corporate buyers, strategic investors."},
  {id:"03",title:"Market & Offtake Risk Review",description:"An assessment of whether a project’s offtake and market assumptions remain robust in South Africa’s changing electricity market structure.",buyers:"Corporate buyers, developers, storage and hybrid sponsors, investors."},
  {id:"04",title:"Lender / DFI Diligence Readiness Sprint",description:"A focused review of the issues most likely to arise in lender and DFI due diligence before formal diligence begins.",buyers:"Sponsors approaching lenders, projects targeting DFI-linked capital, preferred bidders."},
  {id:"05",title:"Community, Land & Transition Risk Diagnostic",description:"A practical assessment of whether land control, stakeholder legitimacy, community dynamics, and transition-related social sensitivities are robust enough to support financing and execution.",buyers:"Developers, investors, DFIs / lenders indirectly via sponsor prep, corporate buyers."},
  {id:"06",title:"Distressed Project Diagnostic",description:"A focused diagnosis for projects that are delayed, stuck, repeatedly failing to close, or losing competitiveness because assumptions have not kept pace with market reality.",buyers:"Sponsors, project owners, rescue investors, shareholders in troubled projects."},
  {id:"07",title:"Independent Investment Risk Review",description:"A senior-led challenge mandate for investors and lenders evaluating a project or transaction before commitment.",buyers:"Investors, local infrastructure capital, lenders, strategic acquirers."}
];

const AUDIENCE = [
  {title:"Capital Allocators (Lenders & Funds)",description:"Selective mandates for project screening, pre-IC independent review, and transaction-specific challenge.",questions:["Is this asset genuinely bankable under current market conditions?","What is mispriced in the sponsor's financial model?","Where is the hidden execution risk that will stall financial close?","Are you evaluating an African power transaction outside South Africa? Our partners have governed, operated, and assessed power assets across 13 African markets, including direct IPP governance in East Africa and active advisory in West and Central Africa."]},
  {title:"Project Sponsors & Developers",description:"Mid-tier IPPs, storage developers, and private-market sponsors competing for scarce grid opportunities.",questions:["Will we secure grid access before our development capital burns out?","What specific assumptions will lenders challenge?","Are we wasting resources on a structurally flawed position?"]},
  {title:"Corporate Energy Buyers",description:"Mines, industrial users, and high-load data centers considering private power or complex wheeling structures.",questions:["Is this developer actually capable of delivering the promised power?","Is the underlying municipal wheeling framework robust?","What credit and operational risks are being hidden behind commercial enthusiasm?"]},
  {title:"Legal & Transaction Advisors",description:"We act as a specialist commercial overlay where broader advisory teams need a practical challenge layer.",questions:["Grid access readiness and queue positioning","Bankability of the specific offtake structure","Market-structure assumptions and NTCSA transition risk"]}
];

const TEAM = [
  {
    name: "Gionata Visconti",
    role: "Senior Partner",
    description: "Accountable for the operational performance of a 1,500MW+ African power portfolio across 6 countries as Chief Operating Officer of Globeleq, including generation, construction oversight, O&M governance, and asset performance under DFI shareholder standards. Prior operational leadership at ContourGlobal (VP and COO Africa) and industrial power roles at Wärtsilä and Caterpillar.",
    atPowerwealth: "Leads verdicts on grid readiness, EPC and construction reality, and operational assumption testing. Brings the perspective of someone who has managed what happens after financial close and knows which pre-close assumptions survive execution and which do not.",
    disclosure: "Recused from mandates where Globeleq is a principal, counterparty, or subject.",
    image: "/Gionata.png", 
    imageClass: "object-[center_10%] scale-[0.85] contrast-[1.05] group-hover:contrast-100", 
    containerClass: "bg-white"
  },
  {
    name: "Dr. Zablon Okwoku Musumba",
    role: "Senior Partner",
    description: "Two decades governing the financial performance of project-financed power assets in East Africa, including as CFO and subsequently CEO of Rabai Power (90MW thermal IPP, 20-year PPA with Kenya Power, sponsors BWSC and Aldwych International) and CFO of Tsavo Power (74.5MW, shareholders including CDC Group and IFC). Directly accountable to lenders, shareholders, and regulators for covenant compliance, capital allocation, and commercial viability.",
    atPowerwealth: "Leads verdicts on tariff bankability, financial model integrity, lender behaviour, and covenant structure. Brings the perspective of someone who has sat on the borrower side of a project finance structure and knows what lenders actually test, what they miss, and what kills a deal in credit committee.",
    image: "/Zablon.png", 
    imageClass: "object-[center_10%] scale-[0.85] contrast-[1.15] brightness-[1.05] [image-rendering:-webkit-optimize-contrast] group-hover:contrast-100 group-hover:brightness-100", 
    containerClass: "bg-white"
  },
  {
    name: "Lucky Khumalo",
    role: "Partner",
    description: "Saved a Mpumalanga developer R36 million by advising against a land purchase after the Eskom GCCA report revealed the nearest feasible grid connection was 25km from the proposed site. Secured a 30-year communal land lease for 900 hectares in Limpopo's Sekhukhune district for a 430MW solar development, building a Community Shareholding Equity Model that achieved unanimous local support against competing developers. Estimated socio-economic impact: R800 million+ over the project lifetime.",
    atPowerwealth: "Leads verdicts on development-stage fragility, community and land durability, and the commercial judgment required before capital is committed to early-stage positions. Brings the perspective of someone who has told a developer not to buy the land and been proven right by the grid data.",
    image: "/Lucky.png", 
    imageClass: "object-[center_10%] scale-[0.85] contrast-[1.15] brightness-[1.05] [image-rendering:-webkit-optimize-contrast] group-hover:contrast-100 group-hover:brightness-100", 
    containerClass: "bg-white"
  },
  {
    name: "Nyasha Horonga",
    role: "Associate Partner",
    description: "Over a decade delivering grid-connected wind, solar, and storage projects for leading South African IPPs. The technical conscience on large-scale projects, reviewing grid-connection designs, shaping EPC contracts, liaising with Eskom, and overseeing grid-code compliance testing through commissioning. Quality assurance on 275MW of BW3 REIPPPP wind capacity (Loeriesfontein 2 and Khobab), delivered on schedule and on budget. MSc (PV microgrid storage dynamics), MBA, PMP.",
    atPowerwealth: "Leads the technical layer of every verdict, testing whether grid assumptions, EPC specifications, and construction sequencing are credible against the current South African market. Brings the perspective of someone who has been on site during wind farm construction and knows where the gap between financial model assumptions and physical delivery reality actually sits.",
    image: "/Nyasha.png", 
    imageClass: "object-[center_10%] scale-[0.85] contrast-[1.15] brightness-[1.05] [image-rendering:-webkit-optimize-contrast] group-hover:contrast-100 group-hover:brightness-100", 
    containerClass: "bg-white"
  },
  {
    name: "Dr. Yaeesh Yasseen",
    role: "ESG Governance Advisor",
    description: "Tests the gap between what a project's ESG documentation claims and what actually exists. Head of Division, Accounting, University of the Witwatersrand. Former SAIPA Board Member (2016–2018). Published researcher on governance, assurance, and disclosure integrity.",
    atPowerwealth: "Assesses whether ESG and governance structures, such as community trusts, BEE vehicles, sustainability commitments, and disclosure frameworks, represent genuine institutional capability or formal compliance that will not survive operational, regulatory, or lender scrutiny.",
    image: "/Yaeesh.png", 
    imageClass: "object-[center_10%] scale-[0.85] contrast-[1.15] brightness-[1.05] [image-rendering:-webkit-optimize-contrast] group-hover:contrast-100 group-hover:brightness-100", 
    containerClass: "bg-white"
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-12 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" 
            alt="Renewable Energy Wind Turbines" 
            className="w-full h-full object-cover grayscale opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-9"
            >
              <h1 className="text-5xl md:text-[5.5rem] font-serif text-white leading-[1.05] tracking-tight mb-8">
                We identify the fatal flaws in power transactions before capital is committed.
              </h1>
              <div className="w-16 h-1 bg-brand-cyan mb-8"></div>
              
              <div className="text-xl md:text-[1.35rem] text-slate-300 font-light leading-[1.6] mb-12 max-w-4xl space-y-6">
                <p>
                  Your deal has technical reviewers, financial advisors, model auditors, and lawyers. Each is competent within their scope. Each is hired by a party that needs the deal to proceed.
                </p>
                <p className="text-white font-normal">
                  Nobody is hired to answer the question that determines whether you should commit: does this project actually hold together; or will you discover the gap after the capital is locked in?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#context" className="inline-flex items-center justify-center bg-white text-brand-navy px-8 py-4 text-[11px] font-mono font-bold uppercase tracking-[0.2em] hover:bg-brand-cyan hover:text-white transition-colors group">
                  The Market Reality
                  <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#how-we-work" className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-[11px] font-mono font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors">
                  Explore Capabilities
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Context Page */}
      <section id="context" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Macro Context</p>
              <h2 className="text-4xl md:text-[3.25rem] font-serif text-brand-navy mb-8 leading-[1.1] tracking-tight">
                Why traditional IPP diligence is no longer sufficient.
              </h2>
              <div className="w-16 h-1 bg-brand-cyan mb-8"></div>
              <p className="text-xl md:text-[1.35rem] text-slate-800 font-medium leading-[1.6] mb-8">
                A serious South African advisory offer cannot be built around static, textbook diligence. The market has fundamentally fractured.
              </p>
              <p className="text-lg text-slate-700 leading-[1.6] mb-10">
                What constituted a "bankable" project in 2021 is uninvestable today. The rapid exhaustion of the grid, the restructuring of the state utility, and the explosion of unregulated private offtake have changed the definition of project readiness. Capital is no longer just evaluating yield; it is evaluating the brutal probability of execution.
              </p>
              <div className="border-l-4 border-brand-cyan pl-8 py-6 mt-12 bg-slate-50">
                <p className="text-2xl md:text-[2rem] font-serif italic text-brand-navy leading-[1.3]">
                  "We are not a full-service engineering house or a generic ESG consultant. We are a specialist advisory platform focused entirely on the commercial consequences of project assumptions in a constrained market."
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative h-[600px] w-full bg-slate-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Utility-scale solar farm in arid landscape" 
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-black/5 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Page */}
      <section id="what-kills-deals" className="py-24 bg-brand-light border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 w-full">
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">What Kills Deals</p>
            <h2 className="text-4xl md:text-[3.25rem] font-serif text-brand-navy mb-8 leading-[1.1] tracking-tight md:whitespace-nowrap">
              The risks that actually prevent financial close.
            </h2>
            <p className="text-xl md:text-[1.35rem] text-slate-700 leading-[1.6] max-w-4xl font-light">
              Theoretical risk registers do not prevent financial close. We focus exclusively on the specific, systemic failures currently stalling capital deployment in South Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {FATAL_FLAWS.map((flaw, idx) => (
              <motion.div 
                key={flaw.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="border-t-2 border-brand-navy pt-8">
                  <span className="block text-6xl md:text-[5rem] font-serif font-light text-slate-200 mb-6 leading-none tracking-tighter">{flaw.id}.</span>
                  <h3 className="text-2xl md:text-[2rem] font-serif text-brand-navy mb-4 leading-snug">{flaw.title}</h3>
                  <p className="text-lg text-slate-700 leading-[1.6]">
                    {flaw.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="h-[50vh] min-h-[400px] w-full relative">
        <img 
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop" 
          alt="Renewable Energy Infrastructure" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-navy/40 mix-blend-multiply"></div>
      </section>

      {/* Approach Page */}
      <section id="how-we-work" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Methodology */}
            <div className="lg:col-span-6">
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">How We Work</p>
              <h2 className="text-4xl md:text-[3.25rem] font-serif text-brand-navy mb-8 leading-[1.1] tracking-tight">
                How Powerwealth thinks
              </h2>
              <p className="text-xl md:text-[1.35rem] text-slate-700 leading-[1.6] mb-12 font-light">
                Every mandate starts with three practical questions. These are commercial questions, not philosophical ones.
              </p>
              
              <div className="space-y-12">
                <div className="border-l-2 border-brand-cyan pl-6">
                  <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-3 leading-snug">What breaks first?</h3>
                  <p className="text-lg text-slate-700 leading-[1.6]">
                    Standard risk registers document the obvious. We locate the weakest link the project has started to tolerate simply because momentum is pushing toward close.
                  </p>
                </div>
                <div className="border-l-2 border-brand-cyan pl-6">
                  <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-3 leading-snug">What risk is mispriced?</h3>
                  <p className="text-lg text-slate-700 leading-[1.6]">
                    Where do the financial model's assumptions diverge from the brutal reality of the South African grid, market structure, and institutional capacity?
                  </p>
                </div>
                <div className="border-l-2 border-brand-cyan pl-6">
                  <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-3 leading-snug">What assumption is false but untested?</h3>
                  <p className="text-lg text-slate-700 leading-[1.6]">
                    What has become background consensus simply because the project team, advisors, and counterparties are now operating inside the same echo chamber?
                  </p>
                </div>
              </div>
            </div>

            {/* Differentiation */}
            <div className="lg:col-span-6 lg:pl-12 lg:border-l border-slate-200">
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Differentiation</p>
              <h2 className="text-4xl md:text-[3.25rem] font-serif text-brand-navy mb-8 leading-[1.1] tracking-tight">
                What makes Powerwealth different
              </h2>
              
              <div className="space-y-10 mt-12">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif text-brand-navy mb-3 leading-snug">Senior-led execution</h3>
                  <p className="text-lg text-slate-700 leading-[1.6]">
                    Clients engage us for judgment. Our work is not delegated to a junior bench and polished at the end.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif text-brand-navy mb-3 leading-snug">South Africa-current market lens</h3>
                  <p className="text-lg text-slate-700 leading-[1.6]">
                    We assess projects in the context of the market as it is now, not as it was two years ago.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif text-brand-navy mb-3 leading-snug">Fast, fixed-scope assignments</h3>
                  <p className="text-lg text-slate-700 leading-[1.6]">
                    We operate on the timeline of live transactions. Our work is rapid, definitive, and built to drive an immediate decision.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif text-brand-navy mb-3 leading-snug">Cross-functional challenge</h3>
                  <p className="text-lg text-slate-700 leading-[1.6]">
                    We focus on the interfaces where projects usually fail: grid and finance, market structure and revenue certainty, land and social durability, ESG and institutional capability, schedule and execution, governance and lender behavior.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif text-brand-navy mb-3 leading-snug">Independence discipline</h3>
                  <p className="text-lg text-slate-700 leading-[1.6]">
                    We maintain conflict controls and do not advise both sponsor and capital on the same transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Page */}
      <section id="services" className="relative py-24 bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2070&auto=format&fit=crop" 
            alt="Wind Turbines" 
            className="w-full h-full object-cover grayscale opacity-10 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 max-w-4xl">
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-cyan mb-6">Capabilities</p>
            <h2 className="text-4xl md:text-[3.25rem] font-serif mb-8 leading-[1.1] tracking-tight">
              What Powerwealth does
            </h2>
            <p className="text-xl md:text-[1.35rem] text-slate-300 leading-[1.6] font-light">
              We answer a single, brutal question at the point it still matters: Is this project actually ready, financeable, and robust under current South African market conditions?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 border-t border-white/20 pt-16">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col h-full"
              >
                <span className="text-2xl font-serif text-brand-cyan mb-4">{service.id}.</span>
                <h3 className="text-xl md:text-2xl font-serif mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-base leading-[1.6] mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-white/10 mt-auto">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-2">Best Buyers</p>
                  <p className="text-[13px] font-mono text-slate-300 leading-[1.6]">{service.buyers}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Page */}
      <section id="who-we-serve" className="py-24 bg-brand-light border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 mb-20 items-center">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Who We Serve</p>
              <h2 className="text-4xl md:text-[3.25rem] font-serif text-brand-navy mb-8 leading-[1.1] tracking-tight">
                Who Powerwealth works with
              </h2>
              <p className="text-xl md:text-[1.35rem] text-slate-700 leading-[1.6] font-light">
                We are brought in when a client needs a blunt, senior-led view on what is most likely to destroy capital or stall a project.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-[300px] w-full bg-slate-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Diverse South African corporate boardroom" 
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 border-t border-slate-300 pt-16">
            {AUDIENCE.map((aud, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col h-full"
              >
                <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-4 leading-snug">{aud.title}</h3>
                <p className="text-lg text-slate-700 mb-10 leading-[1.6]">{aud.description}</p>
                <div className="p-8 bg-slate-50 border border-slate-100 mt-auto">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-6">The core questions we answer</p>
                  <ul className="space-y-4">
                    {aud.questions.map((q, qIdx) => (
                      <li key={qIdx} className="flex items-start gap-4">
                        <span className="text-brand-cyan font-serif text-xl leading-none mt-[-2px]">―</span>
                        <span className="text-base text-slate-800 font-medium leading-[1.6]">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Page */}
      <section id="team" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 max-w-4xl">
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Team</p>
            <h2 className="text-4xl md:text-[3.25rem] font-serif text-brand-navy mb-8 leading-[1.1] tracking-tight">
              The people who deliver the verdict.
            </h2>
            <p className="text-xl md:text-[1.35rem] text-slate-700 leading-[1.6] mb-6 font-light">
              The partner you speak to is the partner who does the analysis and writes the verdict.
            </p>
            <p className="text-lg text-slate-600 leading-[1.6] max-w-3xl">
              Powerwealth is recently established. We have not yet completed engagements under our own name. The methodology demonstrated on this site draws on the direct operating, financing, and development experience of the partners documented below. We disclose this because a firm that asks you to trust its judgment on your transaction should first demonstrate that it can be trusted to tell you the truth about itself.
            </p>
            <p className="text-lg text-slate-600 leading-[1.6] max-w-3xl mt-6">
              The experience below spans 13 African markets, two decades of IPP financial governance, and direct accountability for over 4GW of power assets across the continent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 border-t border-slate-300 pt-16">
            {TEAM.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                <div className={`w-full aspect-[4/5] overflow-hidden mb-6 relative ${member.containerClass || 'bg-slate-100'}`}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ${member.imageClass || ''}`}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-2 leading-snug">{member.name}</h3>
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-slate-500 mb-4">{member.role}</p>
                <div className="w-8 h-px bg-brand-cyan mb-6"></div>
                <div className="space-y-6">
                  <p className="text-base text-slate-700 leading-[1.6]">
                    {member.description}
                  </p>
                  <div className="bg-slate-50 p-6 border-l-2 border-brand-cyan">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-navy mb-3">At Powerwealth</p>
                    <p className="text-base text-slate-800 leading-[1.6] italic">
                      {member.atPowerwealth}
                    </p>
                  </div>
                  {member.disclosure && (
                    <p className="text-[11px] font-mono text-slate-400 italic mt-4 leading-[1.6]">
                      Disclosure: {member.disclosure}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Page */}
      <section id="contact" className="relative py-24 bg-brand-light overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Office" 
            className="w-full h-full object-cover grayscale opacity-5 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Contact</p>
                <h2 className="text-3xl md:text-[2.5rem] font-serif text-brand-navy mb-6 leading-[1.1] tracking-tight">
                  Most assignments begin with a focused scoping discussion.
                </h2>
                <p className="text-lg text-slate-700 leading-[1.6] mb-8">
                  We then agree the decision to be supported, the exact scope, required documents, timing, and output format. Our work is typically fixed fee, fixed duration, and designed for direct use by management, lenders, investors, or boards.
                </p>
                <div className="border-l-4 border-brand-cyan pl-6 py-2 mb-12">
                  <p className="text-xl md:text-2xl font-serif italic text-brand-navy leading-[1.4]">
                    "Our mandate is the definitive commercial judgment required to deploy or withhold capital."
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 md:p-10 border border-slate-200 shadow-sm mt-8">
                <div className="flex items-start justify-between border-b border-slate-100 pb-8 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-2 leading-snug">Lucky Khumalo</h3>
                    <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan">Partner</p>
                  </div>
                  <a href="https://www.linkedin.com/company/powerwealth-advisory/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-cyan transition-colors" aria-label="Connect on LinkedIn">
                    <Linkedin size={24} />
                  </a>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">Direct Line</p>
                    <a href="tel:+27827950704" className="text-lg text-slate-800 hover:text-brand-cyan transition-colors font-medium tracking-wide">+27 82 795 0704</a>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">Private Email</p>
                    <a href="mailto:lucky.khumalo@powerwealth.co.za" className="block text-lg text-slate-800 hover:text-brand-cyan transition-colors font-medium break-words">
                      lucky.khumalo@powerwealth.co.za
                    </a>
                  </div>
                  <div className="pt-2">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">Primary Markets</p>
                    <p className="text-lg text-slate-800 font-medium">South Africa and Sub-Saharan Africa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
