import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, CheckCircle, Swords, Image, Wrench, Coffee } from 'lucide-react';
import { COMMUNITY_EVENTS } from '../constants';
import Button from '../components/Button';

const eventTypeConfig = {
  battle: { icon: Swords, color: 'bg-red-300', label: 'COMPETITION' },
  showcase: { icon: Image, color: 'bg-purple-300', label: 'SHOWCASE' },
  workshop: { icon: Wrench, color: 'bg-cyan-300', label: 'WORKSHOP' },
  meetup: { icon: Coffee, color: 'bg-yellow-300', label: 'MEETUP' },
};

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const event = useMemo(() => {
    return COMMUNITY_EVENTS.find(e => e.id === id);
  }, [id]);

  const otherEvents = useMemo(() => {
    return COMMUNITY_EVENTS.filter(e => e.id !== id).slice(0, 3);
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen bg-neutral-100 py-20 px-4 flex items-center justify-center">
        <div className="text-center p-12 border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000]">
          <div className="text-6xl mb-4">404</div>
          <h1 className="text-3xl font-black mb-4">EVENT NOT FOUND</h1>
          <p className="text-neutral-600 mb-6">The event you're looking for doesn't exist.</p>
          <Link to="/community">
            <Button variant="primary">BACK TO COMMUNITY</Button>
          </Link>
        </div>
      </div>
    );
  }

  const config = eventTypeConfig[event.type];
  const IconComponent = config.icon;
  const spotsLeft = event.maxAttendees - event.attendees;
  const percentFull = (event.attendees / event.maxAttendees) * 100;

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <div className={`${config.color} border-b-4 border-black`}>
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Link
            to="/community"
            className="inline-flex items-center gap-2 font-bold mb-6 hover:underline group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO COMMUNITY
          </Link>

          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000]">
              <IconComponent size={48} />
            </div>
            <div>
              <span className="px-3 py-1 bg-black text-white text-sm font-bold inline-block mb-3">
                {config.label}
              </span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-lg font-medium">
                <span className="flex items-center gap-2">
                  <Calendar size={20} /> {event.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={20} /> {event.time}
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
            {/* Description */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
              <h2 className="text-2xl font-black mb-4">ABOUT THIS EVENT</h2>
              <p className="text-lg leading-relaxed text-neutral-700">{event.description}</p>
            </div>

            {/* Topics */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
              <h2 className="text-2xl font-black mb-4">WHAT WE'LL COVER</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {event.topics.map((topic, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className={`w-8 h-8 ${config.color} border-2 border-black flex items-center justify-center font-black`}>
                      {index + 1}
                    </span>
                    <span className="font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className={`${config.color} border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]`}>
              <h2 className="text-2xl font-black mb-4">REQUIREMENTS</h2>
              <ul className="space-y-3">
                {event.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-black text-white border-4 border-black p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black mb-1">READY TO JOIN?</h3>
                  <p className="text-neutral-400">Don't miss out on this event!</p>
                </div>
                <Button className="!bg-lime-400 !text-black !border-lime-400 hover:!bg-lime-300">
                  REGISTER NOW
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Info */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="font-black text-lg mb-4 border-b-2 border-black pb-2">EVENT DETAILS</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar size={20} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Date</span>
                    <span className="text-neutral-600">{event.date}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Time</span>
                    <span className="text-neutral-600">{event.time}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Location</span>
                    <span className="text-neutral-600">{event.location}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users size={20} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Host</span>
                    <span className="text-neutral-600">{event.host}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Attendance */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
              <h3 className="font-black text-lg mb-4 border-b-2 border-black pb-2">ATTENDANCE</h3>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-bold">{event.attendees} registered</span>
                  <span className="text-neutral-600">{event.maxAttendees} max</span>
                </div>
                <div className="h-4 bg-neutral-200 border-2 border-black">
                  <div
                    className={`h-full ${config.color}`}
                    style={{ width: `${percentFull}%` }}
                  />
                </div>
              </div>
              <p className={`font-bold ${spotsLeft < 10 ? 'text-red-600' : 'text-green-600'}`}>
                {spotsLeft} spots remaining
              </p>
            </div>

            {/* Share */}
            <div className={`${config.color} border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]`}>
              <h3 className="font-black text-lg mb-2">SHARE EVENT</h3>
              <p className="text-sm mb-4">Invite your friends to join!</p>
              <Button variant="secondary" className="w-full !border-black">
                COPY LINK
              </Button>
            </div>
          </div>
        </div>

        {/* Other Events */}
        <div className="mt-16">
          <h2 className="text-2xl font-black mb-6">OTHER UPCOMING EVENTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherEvents.map((other) => {
              const otherConfig = eventTypeConfig[other.type];
              return (
                <Link
                  key={other.id}
                  to={`/event/${other.id}`}
                  className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-all"
                >
                  <div className={`${otherConfig.color} p-4 border-b-2 border-black`}>
                    <span className="text-xs font-bold bg-black text-white px-2 py-1">
                      {otherConfig.label}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-black mb-2 line-clamp-2">{other.title}</h4>
                    <p className="text-sm text-neutral-600">{other.date} • {other.time}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
