import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Terminal, 
  Check, 
  Copy, 
  Eye, 
  Compass, 
  ShieldCheck, 
  BookOpen, 
  ExternalLink 
} from 'lucide-react';

export default function App() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0F1518] text-[#DCE3E4] font-sans antialiased selection:bg-[#CDA23B] selection:text-[#101719] relative overflow-hidden">
      
      {/* Decorative subtle glow spots */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#4FA89E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#CDA23B]/3 blur-[120px] pointer-events-none" />

      {/* HEADER */}
      <header className="border-b border-white/5 py-5 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CDA23B] shadow-[0_0_10px_rgba(205,162,59,0.5)]"></span>
            <span className="font-serif font-bold text-lg tracking-tight text-slate-100">onboard-map</span>
          </div>
          <div className="flex items-center gap-6 text-xs font-mono">
            <a 
              href="https://github.com/onboard-map" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-slate-100 flex items-center gap-1 transition-colors"
            >
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-600">v1.2.0</span>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#4FA89E]/10 border border-[#4FA89E]/20 text-[10px] font-mono tracking-wider text-[#4FA89E] uppercase rounded-full"
          >
            <span>100% Offline Static Codebase Auditor</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-4xl md:text-6xl font-medium text-slate-100 tracking-tight leading-[1.1]"
          >
            Every codebase has a shortest path in. <br />
            <span className="italic text-[#CDA23B]">onboard-map</span> draws it.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Point a single command at any local TypeScript, React, or Next.js repository. 
            Generate topological reading pathways for fresh hires, and risk hotspots for staff architects.
          </motion.p>

          {/* Quick Start Command Box */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-[#1A2226] border border-white/5 rounded-xl p-3.5 flex items-center justify-between font-mono text-xs md:text-sm">
              <div className="flex items-center gap-2 text-left">
                <span className="text-slate-500 font-bold">$</span>
                <span className="text-slate-200">npx onboard-map --deep</span>
              </div>
              <button
                onClick={() => handleCopy('npx onboard-map --deep')}
                className="text-[#4FA89E] hover:text-[#CDA23B] flex items-center gap-1.5 font-semibold transition-colors bg-[#0F1518]/60 py-1.5 px-3 rounded-lg border border-white/5"
              >
                {copiedText === 'npx onboard-map --deep' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-teal-400" />
                    <span className="text-teal-400 text-[11px]">copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px]">copy</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-[11px] text-slate-500 mt-2.5 font-mono">
              No global installation or auth tokens required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DETAILED FEATURES / THE DUAL LENS */}
      <section className="py-12 border-t border-white/5 bg-[#141B1F]/30 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-[#EFE7D6]">One Scan. Two Lenses.</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              onboard-map parses dependencies completely locally, compiling distinct maps for different roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* LENS 1 */}
            <div className="bg-[#1A2226] border border-teal-900/10 rounded-2xl p-7 space-y-4 hover:border-teal-500/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#4FA89E]/10 flex items-center justify-center text-[#4FA89E]">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase text-[#4FA89E] tracking-wider">Lens A</span>
                <h3 className="font-serif text-xl font-medium text-slate-100">The New Hire Onboarding Pathway</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Skip the overwhelming file trees. Give day-1 engineers a focused, linear reading list to understand how features actually bind together.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 pt-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#4FA89E] font-bold">✓</span>
                  <span><b>Entry Path:</b> Shortest topological route from root main.tsx to the main running viewport.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FA89E] font-bold">✓</span>
                  <span><b>Safe Practice Points:</b> Stable, self-contained files with robust test coverage to assign first.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4FA89E] font-bold">✓</span>
                  <span><b>Knowledge Ownership:</b> Dynamic commit allocation metrics detailing who authored what.</span>
                </li>
              </ul>
            </div>

            {/* LENS 2 */}
            <div className="bg-[#1A2226] border border-amber-900/10 rounded-2xl p-7 space-y-4 hover:border-amber-500/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#CDA23B]/10 flex items-center justify-center text-[#CDA23B]">
                <Eye className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase text-[#CDA23B] tracking-wider">Lens B</span>
                <h3 className="font-serif text-xl font-medium text-slate-100">The Staff Architect Risk Audit</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Audit system health, code quality, and knowledge silos to prevent structural degradation and coupling locks.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 pt-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#CDA23B] font-bold">✓</span>
                  <span><b>Refactoring Hotspots:</b> High-churn, complex modules with zero test coverage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CDA23B] font-bold">✓</span>
                  <span><b>Circular Imports:</b> Real value-level dependency loops while filtering type-only imports.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CDA23B] font-bold">✓</span>
                  <span><b>Boundary Leakages:</b> Shared UI components reaching upwards into domain-specific routes.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* DEEP SCAN CRITERIA */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4">
              <div className="w-8 h-8 rounded-full bg-[#CDA23B]/10 text-[#CDA23B] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-slate-100">Fully Audited Checkpoints</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                onboard-map evaluates 10 core dimensions from repository layouts, code qualities, testing scopes, and environment security rules to ensure reliable outputs.
              </p>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4FA89E]"></span> Project structures (pnpm, Nx, yarn)
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4FA89E]"></span> TypeScript compilation flags
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4FA89E]"></span> Hidden secret/env configuration leakage
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4FA89E]"></span> Historical git-author silos
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-[#1A2226] border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#4FA89E]" /> sample report.md
                </span>
                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              </div>
              <div className="font-mono text-xs text-slate-300 space-y-2 overflow-x-auto">
                <div className="text-slate-500"># onboard-map Codebase Diagnostic</div>
                <div className="text-slate-100 font-bold">Health Score: 88 / 100</div>
                <div className="h-px bg-white/5 my-2"></div>
                <div className="text-[#C1583A] font-semibold">🔴 Critical: circularLoop (Structure)</div>
                <p className="text-slate-400 text-[11px] pl-4">
                  src/hooks/useAuth.ts imports src/utils/api.ts which imports useAuth.ts back again.
                </p>
                <div className="text-[#CDA23B] font-semibold">🟡 Warning: missingEnvExample (Documentation)</div>
                <p className="text-slate-400 text-[11px] pl-4">
                  .env.example file is missing from root layout directory.
                </p>
                <div className="text-[#4FA89E] font-semibold">🟢 Suggestion: enableStrictCheck (TypeScript)</div>
                <p className="text-slate-400 text-[11px] pl-4">
                  Consider turning on "strict": true inside your tsconfig.json compiler parameters.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CLI USAGE COMMANDS */}
      <section className="py-12 border-t border-white/5 bg-[#0C1214] px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-400">
              <BookOpen className="w-3.5 h-3.5 text-[#CDA23B]" /> CLI API Reference
            </div>
            <h2 className="font-serif text-2xl font-medium text-slate-100">Simple Command Options</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Cmd 1 */}
            <div className="bg-[#1A2226] border border-white/5 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-200">Standard Codebase Scan</span>
                <button 
                  onClick={() => handleCopy('npx onboard-map')}
                  className="text-[10px] font-mono text-[#4FA89E] hover:text-[#CDA23B]"
                >
                  {copiedText === 'npx onboard-map' ? 'copied!' : 'copy'}
                </button>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Generates modular imports graphs, calculates stable files, and checks documentation mismatches.
              </p>
              <div className="bg-[#0F1518] p-2.5 rounded font-mono text-xs text-slate-300">
                $ npx onboard-map
              </div>
            </div>

            {/* Cmd 2 */}
            <div className="bg-[#1A2226] border border-white/5 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-200">Deep History &amp; Git Analytics</span>
                <button 
                  onClick={() => handleCopy('npx onboard-map --deep')}
                  className="text-[10px] font-mono text-[#4FA89E] hover:text-[#CDA23B]"
                >
                  {copiedText === 'npx onboard-map --deep' ? 'copied!' : 'copy'}
                </button>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Cross-references active git history to determine developer silos, codebase churn metrics, and risk densities.
              </p>
              <div className="bg-[#0F1518] p-2.5 rounded font-mono text-xs text-slate-300">
                $ npx onboard-map --deep
              </div>
            </div>

            {/* Cmd 3 */}
            <div className="bg-[#1A2226] border border-white/5 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-200">Analyze Custom Directory</span>
                <button 
                  onClick={() => handleCopy('npx onboard-map /path/to/project')}
                  className="text-[10px] font-mono text-[#4FA89E] hover:text-[#CDA23B]"
                >
                  {copiedText === 'npx onboard-map /path/to/project' ? 'copied!' : 'copy'}
                </button>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Audits an external codebase directory completely offline without changing directories.
              </p>
              <div className="bg-[#0F1518] p-2.5 rounded font-mono text-xs text-slate-300">
                $ npx onboard-map /path/to/project
              </div>
            </div>

            {/* Cmd 4 */}
            <div className="bg-[#1A2226] border border-white/5 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-200">Global Installation</span>
                <button 
                  onClick={() => handleCopy('npm install -g onboard-map')}
                  className="text-[10px] font-mono text-[#4FA89E] hover:text-[#CDA23B]"
                >
                  {copiedText === 'npm install -g onboard-map' ? 'copied!' : 'copy'}
                </button>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Installs onboard-map executable globally on your machine to bypass running with npx.
              </p>
              <div className="bg-[#0F1518] p-2.5 rounded font-mono text-xs text-slate-300">
                $ npm install -g onboard-map
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CDA23B]"></span>
            <span className="font-serif font-bold text-sm tracking-wide text-slate-300">onboard-map</span>
          </div>
          <div className="text-xs text-slate-500 font-mono text-center md:text-right">
            <span>Runs locally. Secure static dependency tree tracing.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
