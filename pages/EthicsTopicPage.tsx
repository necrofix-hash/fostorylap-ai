import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Scale, AlertTriangle, DollarSign, Leaf, FileText, Gavel, CheckSquare, Flag, ExternalLink, ChevronRight } from 'lucide-react';
import { ETHICS_DATA } from '../constants';
import Button from '../components/Button';

const iconMap = {
  copyright: Scale,
  deepfake: AlertTriangle,
  compensation: DollarSign,
  environment: Leaf,
  framework: FileText,
  legal: Gavel,
  checklist: CheckSquare,
  report: Flag,
};

const EthicsTopicPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const topic = useMemo(() => {
    return ETHICS_DATA.find(t => t.id === id);
  }, [id]);

  const relatedTopics = useMemo(() => {
    if (!topic) return [];
    return ETHICS_DATA
      .filter(t => t.id !== id && t.category === topic.category)
      .slice(0, 3);
  }, [id, topic]);

  const otherCategory = useMemo(() => {
    if (!topic) return [];
    const otherCat = topic.category === 'topic' ? 'resource' : 'topic';
    return ETHICS_DATA
      .filter(t => t.category === otherCat)
      .slice(0, 2);
  }, [topic]);

  if (!topic) {
    return (
      <div className="min-h-screen bg-neutral-100 py-20 px-4 flex items-center justify-center">
        <div className="text-center p-12 border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000]">
          <div className="text-6xl mb-4">404</div>
          <h1 className="text-3xl font-black mb-4">TOPIC NOT FOUND</h1>
          <p className="text-neutral-600 mb-6">The ethics topic you're looking for doesn't exist.</p>
          <Link to="/ethics">
            <Button variant="primary">BACK TO ETHICS</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[topic.icon] || Scale;

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <div className={`${topic.bgColor} border-b-4 border-black`}>
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Back Button */}
          <Link
            to="/ethics"
            className="inline-flex items-center gap-2 font-bold mb-6 hover:underline group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO ETHICS
          </Link>

          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000]">
              <IconComponent size={48} />
            </div>
            <div>
              <span className="px-3 py-1 bg-black text-white text-sm font-bold inline-block mb-3">
                {topic.category === 'topic' ? 'HOT TOPIC' : 'RESOURCE'}
              </span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                {topic.title}
              </h1>
              <p className="text-lg font-medium max-w-2xl">
                {topic.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Content Sections */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000]">
              {topic.content.map((section, index) => (
                <div
                  key={index}
                  className={`p-6 ${index !== topic.content.length - 1 ? 'border-b-2 border-black' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${topic.bgColor} border-2 border-black flex items-center justify-center font-black flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-3">{section.section}</h3>
                      <p className="text-neutral-700 leading-relaxed whitespace-pre-line">{section.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Related Links */}
            {topic.relatedLinks.length > 0 && (
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
                <h3 className="text-xl font-black mb-4">EXTERNAL RESOURCES</h3>
                <div className="space-y-3">
                  {topic.relatedLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex items-center gap-3 p-3 border-2 border-black hover:bg-lime-300 transition-colors group"
                    >
                      <ExternalLink size={18} />
                      <span className="font-bold group-hover:underline">{link.title}</span>
                      <ChevronRight size={18} className="ml-auto group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Points */}
            <div className={`${topic.bgColor} border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]`}>
              <h3 className="font-black text-lg mb-4 border-b-2 border-black pb-2">KEY TAKEAWAYS</h3>
              <ul className="space-y-3">
                {topic.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-black text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Topics */}
            {relatedTopics.length > 0 && (
              <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
                <h3 className="font-black text-lg mb-4 border-b-2 border-black pb-2">
                  RELATED {topic.category === 'topic' ? 'TOPICS' : 'RESOURCES'}
                </h3>
                <ul className="space-y-3">
                  {relatedTopics.map((related) => {
                    const RelatedIcon = iconMap[related.icon] || Scale;
                    return (
                      <li key={related.id}>
                        <Link
                          to={`/ethics/${related.id}`}
                          className="flex items-center gap-3 p-2 hover:bg-neutral-100 transition-colors group"
                        >
                          <RelatedIcon size={18} />
                          <span className="font-bold group-hover:underline">{related.shortTitle}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Other Category */}
            {otherCategory.length > 0 && (
              <div className="bg-black text-white border-4 border-black p-6">
                <h3 className="font-black text-lg mb-4 border-b-2 border-white pb-2">
                  {topic.category === 'topic' ? 'RESOURCES' : 'HOT TOPICS'}
                </h3>
                <ul className="space-y-3">
                  {otherCategory.map((item) => {
                    const ItemIcon = iconMap[item.icon] || Scale;
                    return (
                      <li key={item.id}>
                        <Link
                          to={`/ethics/${item.id}`}
                          className="flex items-center gap-3 p-2 hover:bg-white/10 transition-colors group"
                        >
                          <ItemIcon size={18} className="text-lime-400" />
                          <span className="font-bold group-hover:text-lime-400">{item.shortTitle}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Browse All */}
        <div className="mt-12 text-center">
          <Link
            to="/ethics"
            className="inline-flex items-center gap-2 px-8 py-4 border-4 border-black font-bold text-lg hover:bg-orange-300 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all"
          >
            <Scale size={24} />
            BACK TO ETHICS HUB
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EthicsTopicPage;
