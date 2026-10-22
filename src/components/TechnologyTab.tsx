import Card from './Card';
import { Icons } from './Icons';

export default function TechnologyTab() {
  return (
    <div className="space-y-6">
      {/* N1 Implant */}
      <Card title="The N1 Implant ('The Link')" icon={<Icons.Technology size={24} />}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-accent-blue)] mb-2">
              Specifications
            </h4>
            <ul className="space-y-1 text-sm text-[var(--color-ink-light)]">
              <li>• Coin-sized device (~23mm diameter)</li>
              <li>• Implanted flush with the skull</li>
              <li>• Wireless charging via external device</li>
              <li>• Bluetooth Low Energy connectivity</li>
              <li>• Custom-designed ASIC chip</li>
              <li>• Hermetically sealed titanium casing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-accent-blue)] mb-2">
              Neural Threads
            </h4>
            <ul className="space-y-1 text-sm text-[var(--color-ink-light)]">
              <li>• 64 flexible polymer threads</li>
              <li>• ~1,024 electrodes total</li>
              <li>• Thinner than a human hair</li>
              <li>• Can record from 1,000+ neurons</li>
              <li>• Inserted by the R1 surgical robot</li>
              <li>• Designed to minimize tissue damage</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* R1 Robot */}
      <Card title="The R1 Surgical Robot" icon={<Icons.Technology size={24} />}>
        <p className="mb-4">
          Neuralink developed a custom surgical robot (R1) to precisely insert the neural threads 
          into the brain. The robot is designed to:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-blue)]">•</span>
            <span>Avoid blood vessels during insertion (reducing bleeding risk)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-blue)]">•</span>
            <span>Insert threads at precise depths and angles</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-blue)]">•</span>
            <span>Minimize brain motion during the procedure</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-blue)]">•</span>
            <span>Automate a procedure that would be extremely difficult for human surgeons</span>
          </li>
        </ul>
      </Card>

      {/* Speech Decoding Pipeline */}
      <Card title="Speech Decoding Pipeline" icon={<Icons.Brain size={24} />}>
        <div className="dossier-card dossier-card--compact dossier-card--no-hover">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 border-2 border-[var(--color-ink)] flex items-center justify-center text-mono font-bold">
                01
              </div>
              <div>
                <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)]">
                  Neural Signal Acquisition
                </h4>
                <p className="text-xs text-[var(--color-ink-muted)]">N1 implant records electrical activity from neurons in the speech cortex at high sampling rates</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 border-2 border-[var(--color-ink)] flex items-center justify-center text-mono font-bold">
                02
              </div>
              <div>
                <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)]">
                  Signal Processing
                </h4>
                <p className="text-xs text-[var(--color-ink-muted)]">Raw neural signals are filtered, amplified, and converted to digital data transmitted wirelessly</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 border-2 border-[var(--color-ink)] flex items-center justify-center text-mono font-bold">
                03
              </div>
              <div>
                <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)]">
                  AI Decoding
                </h4>
                <p className="text-xs text-[var(--color-ink-muted)]">Machine learning models (trained on the individual's neural patterns) decode imagined speech into text/phonemes</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 border-2 border-[var(--color-ink)] flex items-center justify-center text-mono font-bold">
                04
              </div>
              <div>
                <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)]">
                  Voice Synthesis
                </h4>
                <p className="text-xs text-[var(--color-ink-muted)]">AI synthesizes the decoded text into speech using a voice model trained on the patient's pre-illness voice</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 border-2 border-[var(--color-ink)] flex items-center justify-center text-mono font-bold">
                05
              </div>
              <div>
                <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)]">
                  Output
                </h4>
                <p className="text-xs text-[var(--color-ink-muted)]">Patient's synthesized voice is played through speakers—enabling real-time communication through thought alone</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Performance Metrics */}
      <Card title="Current Performance" icon={<Icons.Overview size={24} />}>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="dossier-card dossier-card--compact dossier-card--no-hover">
            <div className="text-[2rem] font-bold text-[var(--color-accent-blue)] mb-1">11.32</div>
            <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.05em]">Bits per second (record)</div>
            <div className="text-xs text-[var(--color-ink-muted)] mt-1">Typing via thought</div>
          </div>
          <div className="dossier-card dossier-card--compact dossier-card--no-hover">
            <div className="text-[2rem] font-bold text-[var(--color-accent-blue)] mb-1">1,024+</div>
            <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.05em]">Electrodes</div>
            <div className="text-xs text-[var(--color-ink-muted)] mt-1">Recording channels</div>
          </div>
          <div className="dossier-card dossier-card--compact dossier-card--no-hover">
            <div className="text-[2rem] font-bold text-[var(--color-accent-blue)] mb-1">50,000+</div>
            <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.05em]">Hours of data</div>
            <div className="text-xs text-[var(--color-ink-muted)] mt-1">Used for AI training</div>
          </div>
        </div>
      </Card>

      {/* Roadmap */}
      <Card title="Future Roadmap (Per Neuralink)" icon={<Icons.ArrowRight size={24} />}>
        <div className="dossier-card dossier-card--compact dossier-card--no-hover">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-[var(--color-ink)]">
                <th className="py-2 text-left text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">Year</th>
                <th className="py-2 text-left text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">Milestone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-ink)]/20">
              <tr>
                <td className="py-2 text-[var(--color-accent-blue)] font-mono">2025</td>
                <td className="py-2 text-[var(--color-ink-light)]">Direct "intent language" decoding from speech cortex</td>
              </tr>
              <tr>
                <td className="py-2 text-[var(--color-accent-blue)] font-mono">2026</td>
                <td className="py-2 text-[var(--color-ink-light)]">Triple the number of neural channels; mass production begins</td>
              </tr>
              <tr>
                <td className="py-2 text-[var(--color-accent-blue)] font-mono">Future</td>
                <td className="py-2 text-[var(--color-ink-light)]">Blindsight (vision restoration), hearing restoration, full BCI</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
