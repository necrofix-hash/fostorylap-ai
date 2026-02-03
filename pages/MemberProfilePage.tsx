import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Award, Calendar, ExternalLink, Star, Trophy } from 'lucide-react';
import { COMMUNITY_MEMBERS } from '../constants';
import Button from '../components/Button';

const MemberProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const member = useMemo(() => {
    return COMMUNITY_MEMBERS.find(m => m.id === id);
  }, [id]);

  const otherMembers = useMemo(() => {
    return COMMUNITY_MEMBERS.filter(m => m.id !== id).slice(0, 3);
  }, [id]);

  if (!member) {
    return (
      <div className="min-h-screen bg-neutral-100 py-20 px-4 flex items-center justify-center">
        <div className="text-center p-12 border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000]">
          <div className="text-6xl mb-4">404</div>
          <h1 className="text-3xl font-black mb-4">MEMBER NOT FOUND</h1>
          <p className="text-neutral-600 mb-6">The member profile you're looking for doesn't exist.</p>
          <Link to="/community">
            <Button variant="primary">BACK TO COMMUNITY</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <div className={`${member.color} border-b-4 border-black`}>
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Link
            to="/community"
            className="inline-flex items-center gap-2 font-bold mb-6 hover:underline group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO COMMUNITY
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-center text-5xl font-black">
              {member.avatar}
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-2">
                {member.name}
              </h1>
              <p className="text-xl font-bold mb-3">{member.role}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="px-3 py-1 bg-white border-2 border-black text-sm font-bold flex items-center gap-1">
                  <Calendar size={14} /> Joined {member.joinedDate}
                </span>
                <span className="px-3 py-1 bg-white border-2 border-black text-sm font-bold flex items-center gap-1">
                  <Trophy size={14} /> {member.points.toLocaleString()} pts
                </span>
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
            {/* Bio */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
              <h2 className="text-2xl font-black mb-4">ABOUT</h2>
              <p className="text-lg leading-relaxed text-neutral-700">{member.bio}</p>
            </div>

            {/* Recent Work */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
              <h2 className="text-2xl font-black mb-4">RECENT WORK</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {member.recentWork.map((work, index) => (
                  <div key={index} className="border-2 border-black overflow-hidden group">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={work.imageUrl}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 bg-neutral-100 border-t-2 border-black">
                      <h4 className="font-bold truncate">{work.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div className="bg-yellow-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
              <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Award size={28} /> BADGES
              </h2>
              <div className="flex flex-wrap gap-3">
                {member.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white border-2 border-black font-bold shadow-[2px_2px_0px_0px_#000]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="font-black text-lg mb-4 border-b-2 border-black pb-2">SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 ${member.color} border-2 border-black text-sm font-bold`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="font-black text-lg mb-4 border-b-2 border-black pb-2">CONNECT</h3>
              <div className="space-y-2">
                {member.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center gap-3 p-2 hover:bg-neutral-100 transition-colors group"
                  >
                    <ExternalLink size={18} />
                    <span className="font-bold group-hover:underline">{link.platform}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-black text-white border-4 border-black p-6">
              <h3 className="font-black text-lg mb-4 border-b-2 border-white pb-2">STATS</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Total Points</span>
                  <span className="font-bold text-lime-400">{member.points.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Badges Earned</span>
                  <span className="font-bold text-lime-400">{member.badges.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Member Since</span>
                  <span className="font-bold text-lime-400">{member.joinedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Members */}
        <div className="mt-16">
          <h2 className="text-2xl font-black mb-6">OTHER MEMBERS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {otherMembers.map((other) => (
              <Link
                key={other.id}
                to={`/member/${other.id}`}
                className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-all text-center"
              >
                <div className={`${other.color} w-16 h-16 mx-auto border-2 border-black flex items-center justify-center text-2xl font-black mb-2`}>
                  {other.avatar}
                </div>
                <h4 className="font-black">{other.name}</h4>
                <p className="text-sm text-neutral-500">{other.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfilePage;
