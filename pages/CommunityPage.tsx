import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageSquare, Trophy, Calendar, ArrowRight } from 'lucide-react';
import { COMMUNITY_MEMBERS, COMMUNITY_EVENTS, LEADERBOARD_DATA } from '../constants';
import Button from '../components/Button';

const CommunityPage: React.FC = () => {
  const topLeaderboard = LEADERBOARD_DATA.slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 border-b-4 border-black pb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-pink-300 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
              <Users size={32} />
            </div>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">COMMUNITY</h1>
          </div>
          <p className="text-xl font-medium text-neutral-600 max-w-2xl">
            Connect with fellow AI designers. Share, learn, and create together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Discord CTA */}
            <div className="bg-[#5865F2] text-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_#000]">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-black mb-2">JOIN OUR DISCORD</h2>
                  <p className="text-white/80 mb-4">
                    5,000+ members discussing AI tools, sharing prompts, and collaborating on projects.
                  </p>
                  <Button className="!bg-white !text-[#5865F2] !border-white hover:!bg-neutral-200">
                    JOIN SERVER
                  </Button>
                </div>
                <MessageSquare size={80} className="opacity-50" />
              </div>
            </div>

            {/* Featured Members */}
            <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="text-2xl font-black mb-6">FEATURED MEMBERS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {COMMUNITY_MEMBERS.map((member) => (
                  <Link
                    key={member.id}
                    to={`/member/${member.id}`}
                    className="text-center group"
                  >
                    <div className={`${member.color} w-20 h-20 mx-auto border-2 border-black flex items-center justify-center text-2xl font-black mb-2 group-hover:shadow-[4px_4px_0px_0px_#000] group-hover:-translate-y-1 transition-all`}>
                      {member.avatar}
                    </div>
                    <h4 className="font-bold group-hover:underline">{member.name}</h4>
                    <p className="text-sm text-neutral-500">{member.role}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-yellow-300 border-2 border-black p-8 shadow-[4px_4px_0px_0px_#000]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black flex items-center gap-2">
                  <Trophy /> WEEKLY LEADERBOARD
                </h3>
                <Link
                  to="/leaderboard"
                  className="font-bold flex items-center gap-1 hover:underline"
                >
                  View All <ArrowRight size={16} />
                </Link>
              </div>
              <div className="space-y-4">
                {topLeaderboard.map((user) => (
                  <div key={user.rank} className="flex items-center gap-4 bg-white/50 p-3 border-2 border-black hover:bg-white transition-colors">
                    <span className="text-2xl font-black w-8">{user.rank}</span>
                    <div className={`w-10 h-10 ${user.color} border-2 border-black flex items-center justify-center font-black`}>
                      {user.avatar}
                    </div>
                    <span className="flex-1 font-bold">{user.username}</span>
                    <span className="font-mono">{user.points} pts</span>
                  </div>
                ))}
              </div>
              <Link
                to="/leaderboard"
                className="block mt-4 text-center py-3 bg-black text-white font-bold hover:bg-neutral-800 transition-colors"
              >
                SEE FULL LEADERBOARD
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                <Calendar /> UPCOMING EVENTS
              </h3>
              <div className="space-y-4">
                {COMMUNITY_EVENTS.slice(0, 3).map((event) => (
                  <Link
                    key={event.id}
                    to={`/event/${event.id}`}
                    className="block border-b-2 border-black pb-4 last:border-b-0 last:pb-0 hover:bg-neutral-50 -mx-2 px-2 py-1 transition-colors group"
                  >
                    <h4 className="font-bold group-hover:underline">{event.title}</h4>
                    <p className="text-sm text-neutral-500">{event.date} • {event.time}</p>
                  </Link>
                ))}
              </div>
              <Link
                to="/event/weekly-prompt-battle"
                className="block mt-4 text-center py-2 border-2 border-black font-bold hover:bg-lime-300 transition-colors"
              >
                VIEW ALL EVENTS
              </Link>
            </div>

            {/* Stats */}
            <div className="bg-black text-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_#444]">
              <h3 className="text-xl font-black mb-4">COMMUNITY STATS</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Members</span>
                  <span className="font-bold text-lime-400">5,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Posts Today</span>
                  <span className="font-bold text-lime-400">142</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Active Now</span>
                  <span className="font-bold text-lime-400">89</span>
                </div>
              </div>
            </div>

            {/* Newsletter Mini */}
            <div className="bg-lime-300 border-2 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="text-xl font-black mb-2">STAY UPDATED</h3>
              <p className="text-sm mb-4">Get weekly community highlights in your inbox.</p>
              <Button variant="secondary" className="w-full !border-black !text-black hover:!bg-black hover:!text-white">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
