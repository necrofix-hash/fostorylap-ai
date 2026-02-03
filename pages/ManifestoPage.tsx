import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Eye, Heart, Shield } from 'lucide-react';

const ManifestoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative border-b-4 border-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-4xl mx-auto px-4 py-20 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-bold mb-8 text-lime-400 hover:underline group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
            OUR
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-400">
              MANIFESTO
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            We stand at the frontier of synthetic creativity. This is what we believe.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Core Beliefs */}
        <div className="space-y-16">
          {/* Belief 1 */}
          <div className="border-l-4 border-lime-400 pl-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-lime-400 text-black">
                <Zap size={24} />
              </div>
              <h2 className="text-3xl font-black">01. EMBRACE THE SYNTHETIC</h2>
            </div>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              We believe AI is not replacing human creativity—it's amplifying it. The synthetic and the organic
              are not opposites; they are collaborators in a new creative paradigm.
            </p>
            <p className="text-neutral-400">
              Every tool humanity has ever created has been an extension of our capabilities. AI is the most
              powerful extension yet. We embrace it not as a threat, but as an opportunity to explore
              territories of imagination previously unreachable.
            </p>
          </div>

          {/* Belief 2 */}
          <div className="border-l-4 border-purple-400 pl-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-400 text-black">
                <Eye size={24} />
              </div>
              <h2 className="text-3xl font-black">02. TRANSPARENCY IS NON-NEGOTIABLE</h2>
            </div>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              We believe in radical honesty about AI-generated content. Deception undermines trust and
              diminishes the value of both human and machine creativity.
            </p>
            <p className="text-neutral-400">
              When we create with AI, we say so. When we modify with AI, we disclose it. This isn't a burden—
              it's a badge of honor. We're pioneers of a new form of creation, and we're proud of it.
            </p>
          </div>

          {/* Belief 3 */}
          <div className="border-l-4 border-cyan-400 pl-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-cyan-400 text-black">
                <Heart size={24} />
              </div>
              <h2 className="text-3xl font-black">03. HONOR THOSE WHO CAME BEFORE</h2>
            </div>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              Every AI model is built on the work of countless human creators. We acknowledge this debt
              and advocate for fair compensation and recognition of original artists.
            </p>
            <p className="text-neutral-400">
              The future of AI creativity must include the voices of those whose work made it possible.
              We push for ethical training practices, fair licensing, and sustainable models that benefit
              all creators in the ecosystem.
            </p>
          </div>

          {/* Belief 4 */}
          <div className="border-l-4 border-orange-400 pl-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-orange-400 text-black">
                <Shield size={24} />
              </div>
              <h2 className="text-3xl font-black">04. WIELD POWER RESPONSIBLY</h2>
            </div>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              The ability to generate photorealistic imagery and convincing media is unprecedented power.
              We commit to using this power to create, not to deceive or harm.
            </p>
            <p className="text-neutral-400">
              We refuse to create non-consensual content. We refuse to spread misinformation. We refuse
              to use AI as a weapon against individuals or communities. The power to create comes with
              the responsibility to protect.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 p-8 border-4 border-lime-400 bg-lime-400/10">
          <h3 className="text-2xl font-black mb-4">JOIN THE MOVEMENT</h3>
          <p className="text-neutral-300 mb-6">
            We're building a community of creators who share these values. Whether you're an artist,
            developer, researcher, or curious explorer—there's a place for you here.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/community"
              className="px-6 py-3 bg-lime-400 text-black font-bold hover:bg-lime-300 transition-colors"
            >
              JOIN COMMUNITY
            </Link>
            <Link
              to="/ethics"
              className="px-6 py-3 border-2 border-white font-bold hover:bg-white hover:text-black transition-colors"
            >
              READ ETHICS GUIDE
            </Link>
          </div>
        </div>

        {/* Signature */}
        <div className="mt-16 text-center">
          <p className="text-neutral-500 font-mono text-sm">
            — THE FOSTORYLAP.AI TEAM
          </p>
          <p className="text-neutral-600 font-mono text-xs mt-2">
            DRAFTED IN THE VOID, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManifestoPage;
