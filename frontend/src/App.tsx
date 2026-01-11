import React, { useState, useEffect } from 'react'

const App: React.FC = () => {
  const [marketCap, setMarketCap] = useState(142500000)
  const [holders, setHolders] = useState(72412)

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketCap(prev => prev + (Math.random() - 0.45) * 500)
      setHolders(prev => prev + (Math.random() > 0.9 ? 1 : 0))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#030712]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2"></div>

      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-10 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass py-3 px-6 rounded-full border-white/5">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="USOR" className="w-8 h-8 object-contain" />
            <div className="flex flex-col">
              <span className="font-black text-sm tracking-tighter leading-none">USOR TECH</span>
              <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-gold/60">Sovereign Energy Reserve</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-widest text-white/40">
            <a href="#pulse" className="hover:text-gold transition-colors">Strategic Pulse</a>
            <a href="#acquisition" className="hover:text-gold transition-colors">Acquisition Protocol</a>
            <a href="#terminal" className="hover:text-gold transition-colors">Terminal</a>
            <button className="gold-btn">Log In</button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-32">
        {/* Dynamic Hero Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="data-badge inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse mr-2"></span>
              Strategic Digital Reserve Active
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
              Energy <span className="gold-gradient italic">Sovereignty</span> <br/> On-Chain.
            </h1>
            <p className="text-lg text-white/40 leading-relaxed max-w-lg border-l-2 border-gold/20 pl-6">
              USOR is the hyper-scale digital oil reserve index protocol. Bridging traditional energy infrastructure with institutional-grade blockchain telemetry.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="gold-btn py-4 px-10 text-xs">Execute Acquisition</button>
              <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-white/30">
                <span>Network: Solana</span>
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                <span>Latency: Sub-Second</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img src="/assets/hero.png" alt="USOR Control" className="rounded-3xl border border-white/10 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex justify-between items-end">
                   <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Index Health</div>
                      <div className="text-2xl font-black">STABLE [0.42]</div>
                   </div>
                   <div className="text-right">
                      <div className="text-[10px] font-black uppercase tracking-widest text-gold/50 mb-1">Pulse Depth</div>
                      <div className="text-sm font-bold">1.2M BBL EQUIV.</div>
                   </div>
                </div>
            </div>
          </div>
        </section>

        {/* Live Metrics Grid */}
        <section id="pulse" className="space-y-12">
          <div className="flex items-center gap-6">
             <h2 className="text-3xl font-black uppercase tracking-tighter">Strategic Pulse Telemetry</h2>
             <div className="flex-1 h-px bg-white/5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <MetricCard title="Market Strength" value={`$${(marketCap / 1000000).toFixed(2)}M`} sub="Hyper-Scale Index" trend="+1.2%" />
             <MetricCard title="Reserve Liquidity" value="$1.24M" sub="Verified 1:1" trend="Stable" />
             <MetricCard title="Protocol Holders" value={holders.toLocaleString()} sub="Growth Vector" trend="+41" />
             <MetricCard title="Treasury Depth" value="13.4%" sub="Global Allocation" trend="Optimal" />
          </div>
        </section>

        {/* Acquisition Protocol */}
        <section id="acquisition" className="grid lg:grid-cols-3 gap-12 items-start">
           <div className="space-y-8 sticky top-32">
              <h2 className="text-4xl font-black leading-none uppercase tracking-tighter">Acquisition <br/>Protocol</h2>
              <p className="text-white/30 leading-loose text-sm italic">
                 Standardized multi-step logic for integrating institutional liquidity into the on-chain energy reserve.
              </p>
              <div className="p-6 glass rounded-2xl border-gold/10">
                 <div className="text-[10px] font-black uppercase tracking-widest text-gold mb-2">Contract Address [SOL]</div>
                 <div className="bg-black/40 p-3 rounded-lg font-mono text-xs text-white/40 truncate select-all">
                    USoRyaQjch6E18nCdDvWoRgTo6osQs9MUd8JXEsspWR
                 </div>
              </div>
           </div>
           <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {[
                { step: "L-01", title: "Terminal Sync", desc: "Initialize secure handshake with the decentralized energy grid via your Web3 provider." },
                { step: "L-02", title: "Liquidity Provision", desc: "Ensure sufficient SOL reserves are available to facilitate the protocol swap." },
                { step: "L-03", title: "Index Exchange", desc: "Execute the USOR swap through verified institutional aggregators (Jupiter)." },
                { step: "L-04", title: "Allocation Verification", desc: "Confirm your digital derrick position on the live telemetry pulse." }
              ].map((item, idx) => (
                <div key={idx} className="section-card group">
                   <div className="text-5xl font-black text-white/5 mb-6 group-hover:text-gold/5 transition-colors">{item.step}</div>
                   <h3 className="text-sm font-black uppercase tracking-widest mb-3">{item.title}</h3>
                   <p className="text-xs text-white/30 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Swap Terminal Overlay */}
        <section id="terminal" className="relative h-[600px] rounded-3xl overflow-hidden glass border-white/5">
           <div className="absolute inset-0 bg-gold/5 blur-3xl opacity-20"></div>
           <div className="absolute inset-0 p-12 lg:p-20 flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <div className="space-y-10 lg:w-1/2">
                 <h2 className="text-5xl font-black leading-tight tracking-tighter">Institutional <br/>Swap Terminal</h2>
                 <p className="text-white/40 leading-relaxed text-sm max-w-sm">
                    Access the sub-second execution engine for USOR digital reserve swaps. Powered by Jupiter Aggregator for pathing optimization.
                 </p>
                 <div className="flex gap-10">
                    <div className="space-y-1">
                       <div className="text-[9px] font-black uppercase tracking-widest text-white/20">Security Protocol</div>
                       <div className="text-xs font-bold text-white/60">AES-256 / SHA-3</div>
                    </div>
                    <div className="space-y-1">
                       <div className="text-[9px] font-black uppercase tracking-widest text-white/20">Execution</div>
                       <div className="text-xs font-bold text-white/60">Parallelized VM</div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 w-full max-w-md bg-black/40 border border-white/5 p-8 rounded-3xl backdrop-blur-2xl shadow-2xl">
                 <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gold">Module: Swap Engine</span>
                    <span className="text-[10px] font-bold text-white/20">Slippage: Auto</span>
                 </div>
                 <div className="space-y-4">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 transition-all hover:bg-white/10 group">
                       <div className="text-[10px] font-black text-white/20 uppercase mb-3">Provision</div>
                       <div className="flex justify-between items-center">
                          <input type="text" placeholder="0.00" className="bg-transparent text-3xl font-black outline-none w-1/2" />
                          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full font-black text-xs">SOL</div>
                       </div>
                    </div>
                    <div className="flex justify-center -my-6 relative z-10">
                       <div className="w-12 h-12 rounded-full border border-white/10 bg-black flex items-center justify-center font-black text-2xl hover:rotate-180 transition-transform duration-500 cursor-pointer shadow-lg text-gold">↓</div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 transition-all hover:bg-white/10 group">
                       <div className="text-[10px] font-black text-white/20 uppercase mb-3">Acquire</div>
                       <div className="flex justify-between items-center">
                          <input type="text" placeholder="0.00" className="bg-transparent text-3xl font-black outline-none w-1/2" />
                          <div className="flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full font-black text-xs text-gold">USOR</div>
                       </div>
                    </div>
                    <button className="gold-btn w-full py-5 rounded-2xl mt-6">Confirm Index Acquisition</button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="border-t border-white/5 pt-24 pb-12 px-10 bg-black/40 backdrop-blur-3xl mt-32">
         <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-20 pb-20">
               <div className="col-span-2 space-y-8">
                  <div className="flex items-center gap-3">
                     <img src="/assets/logo.png" alt="USOR" className="w-10 h-10 grayscale opacity-40 shrink-0" />
                     <span className="font-black text-white/20 uppercase tracking-tighter text-xl">USOR TECH</span>
                  </div>
                  <p className="text-xs text-white/20 leading-loose uppercase tracking-widest font-black max-w-sm">
                     The official digital pulse monitoring system for the United States Oil Reserve on-chain index. 
                     Engineered for institutional energy transparency.
                  </p>
               </div>
               <div className="space-y-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Protocol</h4>
                  <ul className="text-xs font-black text-white/40 space-y-4 uppercase tracking-tighter">
                     <li><a href="#" className="hover:text-gold transition-colors">Strategic Paper</a></li>
                     <li><a href="#" className="hover:text-gold transition-colors">Index Data</a></li>
                     <li><a href="#" className="hover:text-gold transition-colors">Safety Modules</a></li>
                  </ul>
               </div>
               <div className="space-y-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Intelligence</h4>
                  <ul className="text-xs font-black text-white/40 space-y-4 uppercase tracking-tighter">
                     <li><a href="#" className="hover:text-gold transition-colors">X Terminal</a></li>
                     <li><a href="#" className="hover:text-gold transition-colors">Direct Comms</a></li>
                     <li><a href="#" className="hover:text-gold transition-colors">Protocol Status</a></li>
                  </ul>
               </div>
            </div>
            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
               <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/10 italic text-center md:text-left leading-relaxed max-w-2xl">
                  DISCLAIMER: USOR ($USOR) IS A CONCEPTUAL DIGITAL INDEX PROJECT FOR ENTERTAINMENT PURPOSES. NO OFFICIAL AFFILIATION WITH US GOVERNMENT OR ENTITIES. HIGH-VOLATILITY ASSET RISK.
               </p>
               <div className="text-[10px] font-black text-white/10 uppercase tracking-[0.3em] shrink-0">© 2026 USOR TECH • PULSE V0.4.2</div>
            </div>
         </div>
      </footer>
    </div>
  )
}

const MetricCard = ({ title, value, sub, trend }: any) => (
  <div className="section-card border-b-2 border-b-transparent hover:border-b-gold/50">
     <div className="flex justify-between items-start mb-6">
        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">{title}</div>
        <div className="text-[9px] font-black text-gold bg-gold/5 px-2 py-0.5 rounded-full">{trend}</div>
     </div>
     <div className="text-3xl font-black tracking-tighter mb-2">{value}</div>
     <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{sub}</div>
     <div className="absolute top-0 right-0 p-1 opacity-10 group-hover:opacity-100 transition-opacity">
        <div className="w-1 h-1 bg-gold rounded-full"></div>
     </div>
  </div>
)

export default App
