import { useState } from 'react';
import { type MetaFunction } from 'react-router';
import { CalendarFoldIcon, ClockIcon, CroissantIcon, FlagIcon, Ruler } from 'lucide-react';
import Counter from '~/lib/components/legacy/Counter';
import Faq2026 from './2026/Faq2026';
import Route2026 from './2026/Route2026';

export const meta: MetaFunction = () => [
  { title: 'Seattle Eggnog Leg Jog 2026' },
  { name: 'description', content: 'Start the holiday season off on the right foot' }
];

const eventDate = new Date('November 8, 2026 10:00 AM PST');

const registrationUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSdxQ6iu3-Znd-qpkJYdvSb96l8JyS9ukZB7EdQ6yTwb6n3SXg/viewform';

const TABS = ['overview', 'route', 'faq'] as const;
type Tab = (typeof TABS)[number];
const TAB_LABELS: Record<Tab, string> = {
  overview: 'Overview',
  route: 'Route',
  faq: 'FAQ'
};

export default function Eggnog2026() {
  const [tab, setTab] = useState<Tab>('overview');

  return (
    <>
      <div className="bg-holiday-green/90 shadow-lg backdrop-blur-sm">
        <Counter judgementDate={eventDate.getTime()} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-1 lg:grid-cols-4">
        {[
          { icon: <CalendarFoldIcon />, label: 'Date', value: 'November 8, 2026' },
          { icon: <ClockIcon />, label: 'Time', value: '10:00 AM PST' },
          { icon: <FlagIcon />, label: 'Location', value: 'Lower Woodland Park Shelter 7' },
          { icon: <Ruler />, label: 'Distance', value: '10K' }
        ].map(({ icon, label, value }) => (
          <div
            key={label}
            className="glass-strong mx-5 my-1 rounded-2xl border border-black/10 p-3 shadow-md md:m-5"
          >
            <div className="flex items-center gap-2">
              {icon}
              <span className="font-bold">{label}</span>
            </div>
            <div className="mt-2">{value}</div>
          </div>
        ))}
      </div>

      <div className="glass-strong mx-5 my-1 max-w-full rounded-2xl border border-black/10 p-3 shadow-md md:m-5">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <CroissantIcon />
          <span className="font-bold">Holiday Cheer Stations</span>
        </div>
        <div className="mt-2">4</div>
      </div>

      <div className="glass-strong m-3 min-h-[30vh] rounded-2xl border border-black/10 p-3 shadow-md">
        {/* Mobile: select dropdown */}
        <div className="mb-4 sm:hidden">
          <select
            className="bg-surface/80 text-md w-full rounded-lg border p-4 font-semibold shadow-md"
            value={tab}
            onChange={(e) => setTab(e.target.value as Tab)}
          >
            {TABS.map((t) => (
              <option key={t} value={t}>
                {TAB_LABELS[t]}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop: tab buttons */}
        <div className="mb-4 hidden gap-6 border-b font-semibold sm:flex">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-2 transition-colors ${tab === t
                ? 'border-red-sauce text-red-sauce border-b-2'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        {tab === 'overview' && (
          <div>
            <h1 className="font-bold">The Eggnog Leg Jog is back!</h1>
            <p className="mt-4">
              The Egg Nog Leg Jog is the world's first race that not only tests your physical
              fitness, but also your capacity to experience holiday joy! Are you training for a
              longer winter race, like the Seattle Marathon or CIM? Are you preparing for a
              cross-country flight to celebrate traditions with family on the east coast? Are you
              gearing up to enjoy numerous Thanksgiving/Christmas/Hanukkah parties, right here in
              Seattle? Nothing is going to prepare you for all of the holiday magic like the Egg Nog
              Leg Jog.
            </p>
            <p className="mt-4">
              This 10K on November 8th will be run by 100+ family, friends, and soon to be friends.
              Bring your best holiday themed costume (ie Santa / Scrooge / Menorah) or favorite
              Christmas sweater and join us at Woodland Park for a festive Leg Jog. We'll run
              through Greenlake and Woodland Park, stopping at four holiday cheer stations along the
              way to consume cookies, egg nog and other classic holiday treats, which will warm your
              body and grow your heart at least three sizes.
            </p>
          </div>
        )}
        {tab === 'route' && <Route2026 />}
        {tab === 'faq' && <Faq2026 />}
      </div>

      <div className="glass-strong m-3 flex flex-col items-center gap-4 rounded-2xl border border-black/10 p-6 shadow-md">
        <h2 className="text-red-sauce text-2xl font-bold">Register Here</h2>
        <a
          href={registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-sauce focus-visible:outline-red-sauce rounded-lg px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Register on Google Forms <span aria-hidden="true">→</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </>
  );
}
