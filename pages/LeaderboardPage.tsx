import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Flame, Award, TrendingUp } from 'lucide-react';
import { LEADERBOARD_DATA } from '../constants';

const LeaderboardPage: React.FC = () => {
  const top3 = LEADERBOARD_DATA.slice(0, 3);
  const rest = LEADERBOARD_DATA.slice(3);

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <div className="bg-yellow-300 border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Link
            to="/community"
            className="inline-flex items-center gap-2 font-bold mb-6 hover:underline group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO COMMUNITY
          </Link>

          <div className="flex items-center gap-4">
            <div className="p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000]">
              <Trophy size={48} />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
                LEADERBOARD
              </h1>
              <p className="text-lg font-medium">Weekly Prompt Battle Rankings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Top 3 Podium */}
        <div className="mb-12">
          <h2 className="text-2xl font-black mb-6 text-center">TOP PERFORMERS</h2>
          <div className="flex flex-col md:flex-row items-end justify-center gap-4">
            {/* 2nd Place */}
            <div className="order-2 md:order-1 w-full md:w-48">
              <div className="bg-gray-300 border-4 border-black p-4 text-center">
                <div className="w-20 h-20 mx-auto bg-white border-4 border-black flex items-center justify-center text-3xl font-black mb-2">
                  {top3[1].avatar}
                </div>
                <h3 className="font-black text-lg truncate">{top3[1].username}</h3>
                <p className="text-2xl font-black">{top3[1].points} pts</p>
                <div className="mt-2 text-4xl">🥈</div>
              </div>
              <div className="h-24 bg-gray-400 border-4 border-t-0 border-black flex items-center justify-center">
                <span className="text-6xl font-black text-white/50">2</span>
              </div>
            </div>

            {/* 1st Place */}
            <div className="order-1 md:order-2 w-full md:w-56">
              <div className="bg-yellow-400 border-4 border-black p-4 text-center shadow-[4px_4px_0px_0px_#000]">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-black flex items-center justify-center text-4xl font-black mb-2">
                  {top3[0].avatar}
                </div>
                <h3 className="font-black text-xl truncate">{top3[0].username}</h3>
                <p className="text-3xl font-black">{top3[0].points} pts</p>
                <div className="mt-2 text-5xl">👑</div>
              </div>
              <div className="h-32 bg-yellow-500 border-4 border-t-0 border-black flex items-center justify-center">
                <span className="text-7xl font-black text-white/50">1</span>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="order-3 w-full md:w-48">
              <div className="bg-orange-400 border-4 border-black p-4 text-center">
                <div className="w-20 h-20 mx-auto bg-white border-4 border-black flex items-center justify-center text-3xl font-black mb-2">
                  {top3[2].avatar}
                </div>
                <h3 className="font-black text-lg truncate">{top3[2].username}</h3>
                <p className="text-2xl font-black">{top3[2].points} pts</p>
                <div className="mt-2 text-4xl">🥉</div>
              </div>
              <div className="h-16 bg-orange-500 border-4 border-t-0 border-black flex items-center justify-center">
                <span className="text-5xl font-black text-white/50">3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Rankings */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000]">
          <div className="p-4 border-b-4 border-black bg-neutral-100">
            <h2 className="text-xl font-black">FULL RANKINGS</h2>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 p-4 border-b-2 border-black bg-neutral-50 font-black text-sm">
            <div className="col-span-1">RANK</div>
            <div className="col-span-5">PLAYER</div>
            <div className="col-span-2 text-center">POINTS</div>
            <div className="col-span-2 text-center">WINS</div>
            <div className="col-span-2 text-center">STREAK</div>
          </div>

          {/* Rows */}
          {LEADERBOARD_DATA.map((entry, index) => (
            <div
              key={entry.rank}
              className={`grid grid-cols-12 gap-2 p-4 items-center ${
                index !== LEADERBOARD_DATA.length - 1 ? 'border-b-2 border-black' : ''
              } ${entry.rank <= 3 ? 'bg-yellow-50' : ''} hover:bg-neutral-50 transition-colors`}
            >
              <div className="col-span-1">
                <span className={`inline-flex items-center justify-center w-8 h-8 font-black ${
                  entry.rank === 1 ? 'bg-yellow-400' :
                  entry.rank === 2 ? 'bg-gray-300' :
                  entry.rank === 3 ? 'bg-orange-400' : 'bg-neutral-200'
                } border-2 border-black`}>
                  {entry.rank}
                </span>
              </div>
              <div className="col-span-5 flex items-center gap-3">
                <div className={`w-10 h-10 ${entry.color} border-2 border-black flex items-center justify-center font-black`}>
                  {entry.avatar}
                </div>
                <span className="font-bold truncate">{entry.username}</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-black text-lg">{entry.points}</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="inline-flex items-center gap-1">
                  <Award size={16} className="text-yellow-500" />
                  {entry.wins}
                </span>
              </div>
              <div className="col-span-2 text-center">
                {entry.streak > 0 ? (
                  <span className="inline-flex items-center gap-1 text-orange-500 font-bold">
                    <Flame size={16} />
                    {entry.streak}
                  </span>
                ) : (
                  <span className="text-neutral-400">-</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-lime-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
            <Trophy size={32} className="mb-2" />
            <h3 className="text-3xl font-black">{LEADERBOARD_DATA.reduce((sum, e) => sum + e.wins, 0)}</h3>
            <p className="font-bold">Total Battles This Week</p>
          </div>
          <div className="bg-purple-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
            <TrendingUp size={32} className="mb-2" />
            <h3 className="text-3xl font-black">{LEADERBOARD_DATA.reduce((sum, e) => sum + e.points, 0).toLocaleString()}</h3>
            <p className="font-bold">Total Points Earned</p>
          </div>
          <div className="bg-orange-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
            <Flame size={32} className="mb-2" />
            <h3 className="text-3xl font-black">{Math.max(...LEADERBOARD_DATA.map(e => e.streak))}</h3>
            <p className="font-bold">Highest Win Streak</p>
          </div>
        </div>

        {/* How to Participate */}
        <div className="mt-12 bg-white border-4 border-black p-8 shadow-[4px_4px_0px_0px_#000]">
          <h2 className="text-2xl font-black mb-4">HOW TO CLIMB THE RANKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-yellow-300 border-4 border-black flex items-center justify-center text-2xl font-black mb-3">1</div>
              <h4 className="font-black mb-2">JOIN BATTLES</h4>
              <p className="text-sm text-neutral-600">Participate in weekly prompt battles every Friday at 8PM EST</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-yellow-300 border-4 border-black flex items-center justify-center text-2xl font-black mb-3">2</div>
              <h4 className="font-black mb-2">CREATE & SUBMIT</h4>
              <p className="text-sm text-neutral-600">Use your AI tools to create the best image matching the theme</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-yellow-300 border-4 border-black flex items-center justify-center text-2xl font-black mb-3">3</div>
              <h4 className="font-black mb-2">EARN POINTS</h4>
              <p className="text-sm text-neutral-600">Get votes from the community and climb the leaderboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
