import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, BookOpen, Check, ChevronRight, PlayCircle } from 'lucide-react';
import { TUTORIALS_DATA } from '../constants';
import Button from '../components/Button';

const levelColors: Record<string, string> = {
  'BEGINNER': 'bg-lime-300',
  'INTERMEDIATE': 'bg-yellow-300',
  'ADVANCED': 'bg-purple-300',
  'EXPERT': 'bg-orange-300',
};

const TutorialDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const tutorial = useMemo(() => {
    return TUTORIALS_DATA.find(t => t.id === id);
  }, [id]);

  const tutorialIndex = useMemo(() => {
    return TUTORIALS_DATA.findIndex(t => t.id === id);
  }, [id]);

  const relatedTutorials = useMemo(() => {
    if (!tutorial) return [];
    return TUTORIALS_DATA
      .filter(t => t.id !== id && t.level === tutorial.level)
      .slice(0, 2);
  }, [id, tutorial]);

  const nextTutorial = useMemo(() => {
    if (tutorialIndex === -1 || tutorialIndex >= TUTORIALS_DATA.length - 1) return null;
    return TUTORIALS_DATA[tutorialIndex + 1];
  }, [tutorialIndex]);

  const prevTutorial = useMemo(() => {
    if (tutorialIndex <= 0) return null;
    return TUTORIALS_DATA[tutorialIndex - 1];
  }, [tutorialIndex]);

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-neutral-100 py-20 px-4 flex items-center justify-center">
        <div className="text-center p-12 border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000]">
          <div className="text-6xl mb-4">404</div>
          <h1 className="text-3xl font-black mb-4">TUTORIAL NOT FOUND</h1>
          <p className="text-neutral-600 mb-6">The tutorial you're looking for doesn't exist.</p>
          <Link to="/tutorials">
            <Button variant="primary">BROWSE ALL TUTORIALS</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <div className={`${tutorial.bgColor} border-b-4 border-black`}>
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Back Button */}
          <Link
            to="/tutorials"
            className="inline-flex items-center gap-2 font-bold mb-6 hover:underline group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO TUTORIALS
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 bg-black text-white text-sm font-bold`}>
                  {tutorial.level}
                </span>
                <span className="flex items-center gap-1 font-bold">
                  <Clock size={18} />
                  {tutorial.duration}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                {tutorial.title}
              </h1>
              <div className="flex items-center gap-2 text-lg font-medium">
                <User size={20} />
                By {tutorial.author}
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="text-8xl font-black opacity-30">
                {String(tutorialIndex + 1).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
              <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                <span className="bg-cyan-300 px-2 py-1 border-2 border-black">OVERVIEW</span>
              </h2>
              <p className="text-lg leading-relaxed">
                {tutorial.description}
              </p>
            </div>

            {/* Tutorial Content */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000]">
              <div className="p-6 border-b-4 border-black">
                <h2 className="text-2xl font-black flex items-center gap-2">
                  <PlayCircle size={28} />
                  TUTORIAL CONTENT
                </h2>
              </div>
              {tutorial.content.map((section, index) => (
                <div
                  key={index}
                  className={`p-6 ${index !== tutorial.content.length - 1 ? 'border-b-2 border-black' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${tutorial.bgColor} border-2 border-black flex items-center justify-center font-black flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2">{section.section}</h3>
                      <p className="text-neutral-700 leading-relaxed">{section.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4">
              {prevTutorial && (
                <Link
                  to={`/tutorial/${prevTutorial.id}`}
                  className="flex-1 p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-all"
                >
                  <span className="text-sm font-bold text-neutral-500">← PREVIOUS</span>
                  <h4 className="font-black mt-1 line-clamp-1">{prevTutorial.title}</h4>
                </Link>
              )}
              {nextTutorial && (
                <Link
                  to={`/tutorial/${nextTutorial.id}`}
                  className="flex-1 p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-all text-right"
                >
                  <span className="text-sm font-bold text-neutral-500">NEXT →</span>
                  <h4 className="font-black mt-1 line-clamp-1">{nextTutorial.title}</h4>
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Topics */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="font-black text-lg mb-4 border-b-2 border-black pb-2">WHAT YOU'LL LEARN</h3>
              <ul className="space-y-3">
                {tutorial.topics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-lime-300 border-2 border-black flex items-center justify-center flex-shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="font-medium">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="font-black text-lg mb-4 border-b-2 border-black pb-2">REQUIREMENTS</h3>
              <ul className="space-y-3">
                {tutorial.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Level Info */}
            <div className={`${levelColors[tutorial.level]} border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]`}>
              <h3 className="font-black text-lg mb-2">DIFFICULTY</h3>
              <p className="text-3xl font-black">{tutorial.level}</p>
              <p className="text-sm mt-2 font-medium">
                {tutorial.level === 'BEGINNER' && 'Perfect for those just starting out.'}
                {tutorial.level === 'INTERMEDIATE' && 'Some experience recommended.'}
                {tutorial.level === 'ADVANCED' && 'For experienced practitioners.'}
                {tutorial.level === 'EXPERT' && 'Deep technical knowledge required.'}
              </p>
            </div>
          </div>
        </div>

        {/* Related Tutorials */}
        {relatedTutorials.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
              <BookOpen size={24} />
              MORE {tutorial.level} TUTORIALS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedTutorials.map((related) => (
                <Link
                  key={related.id}
                  to={`/tutorial/${related.id}`}
                  className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-all"
                >
                  <div className="flex">
                    <div className={`${related.bgColor} w-24 border-r-2 border-black flex items-center justify-center`}>
                      <span className="text-3xl font-black">
                        {String(TUTORIALS_DATA.findIndex(t => t.id === related.id) + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="p-4 flex-1">
                      <span className="px-2 py-0.5 bg-black text-white text-xs font-bold">
                        {related.level}
                      </span>
                      <h3 className="font-black mt-2 line-clamp-2">{related.title}</h3>
                      <div className="flex items-center gap-2 mt-2 text-sm text-neutral-600">
                        <Clock size={14} />
                        {related.duration}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Browse All */}
        <div className="mt-12 text-center">
          <Link
            to="/tutorials"
            className="inline-flex items-center gap-2 px-8 py-4 border-4 border-black font-bold text-lg hover:bg-purple-300 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all"
          >
            <BookOpen size={24} />
            BROWSE ALL TUTORIALS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorialDetailPage;
