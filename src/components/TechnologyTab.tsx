import Card from './Card';

export default function TechnologyTab() {
  return (
    <div className="space-y-6">
      {/* N1 Implant */}
      <Card title="The N1 Implant ('The Link')" icon="🔬">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-blue-400 text-sm mb-2">Specifications</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• Coin-sized device (~23mm diameter)</li>
              <li>• Implanted flush with the skull</li>
              <li>• Wireless charging via external device</li>
              <li>• Bluetooth Low Energy connectivity</li>
              <li>• Custom-designed ASIC chip</li>
              <li>• Hermetically sealed titanium casing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-purple-400 text-sm mb-2">Neural Threads</h4>
            <ul className="space-y-1 text-sm text-gray-400">
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
      <Card title="The R1 Surgical Robot" icon="🤖">
        <p className="mb-4">
          Neuralink developed a custom surgical robot (R1) to precisely insert the neural threads 
          into the brain. The robot is designed to:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Avoid blood vessels during insertion (reducing bleeding risk)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Insert threads at precise depths and angles</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Minimize brain motion during the procedure</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Automate a procedure that would be extremely difficult for human surgeons</span>
          </li>
        </ul>
      </Card>

      {/* Speech Decoding Pipeline */}
      <Card title="Speech Decoding Pipeline" icon="🗣️">
        <div className="bg-gradient-to-r from-purple-500/5 to-blue-500/5 border border-purple-500/20 rounded-lg p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">1</div>
              <div>
                <h4 className="font-bold text-white text-sm">Neural Signal Acquisition</h4>
                <p className="text-xs text-gray-400">N1 implant records electrical activity from neurons in the speech cortex at high sampling rates</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">2</div>
              <div>
                <h4 className="font-bold text-white text-sm">Signal Processing</h4>
                <p className="text-xs text-gray-400">Raw neural signals are filtered, amplified, and converted to digital data transmitted wirelessly</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">3</div>
              <div>
                <h4 className="font-bold text-white text-sm">AI Decoding</h4>
                <p className="text-xs text-gray-400">Machine learning models (trained on the individual's neural patterns) decode imagined speech into text/phonemes</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">4</div>
              <div>
                <h4 className="font-bold text-white text-sm">Voice Synthesis</h4>
                <p className="text-xs text-gray-400">AI synthesizes the decoded text into speech using a voice model trained on the patient's pre-illness voice</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">5</div>
              <div>
                <h4 className="font-bold text-white text-sm">Output</h4>
                <p className="text-xs text-gray-400">Patient's synthesized voice is played through speakers—enabling real-time communication through thought alone</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Performance Metrics */}
      <Card title="Current Performance" icon="📊">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">11.32</div>
            <div className="text-xs text-gray-400">Bits per second (record)</div>
            <div className="text-xs text-gray-500 mt-1">Typing via thought</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">1,024+</div>
            <div className="text-xs text-gray-400">Electrodes</div>
            <div className="text-xs text-gray-500 mt-1">Recording channels</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">50,000+</div>
            <div className="text-xs text-gray-400">Hours of data</div>
            <div className="text-xs text-gray-500 mt-1">Used for AI training</div>
          </div>
        </div>
      </Card>

      {/* Roadmap */}
      <Card title="Future Roadmap (Per Neuralink)" icon="🚀">
        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 text-left text-gray-400 font-medium">Year</th>
                <th className="py-2 text-left text-gray-400 font-medium">Milestone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              <tr>
                <td className="py-2 text-blue-400 font-mono">2025</td>
                <td className="py-2 text-gray-400">Direct "intent language" decoding from speech cortex</td>
              </tr>
              <tr>
                <td className="py-2 text-blue-400 font-mono">2026</td>
                <td className="py-2 text-gray-400">Triple the number of neural channels; mass production begins</td>
              </tr>
              <tr>
                <td className="py-2 text-blue-400 font-mono">Future</td>
                <td className="py-2 text-gray-400">Blindsight (vision restoration), hearing restoration, full BCI</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
