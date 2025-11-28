const schedule = [
  {
  day: 'Monday',
  classes: [
    { time: '5:00 AM - 5:50 AM', name: 'CARDIO X' },
    { time: '7:00 AM - 7:50 AM', name: 'CARDIO X' },
    { time: '3:30 PM - 4:15 PM', name: 'TOTAL STRENGTH TEENS' }
  ]
},
{
  day: 'Tuesday',
  classes: [
    { time: '5:00 AM - 5:50 AM', name: 'STRENGTH BUILDER' },
    { time: '7:00 AM - 7:50 AM', name: 'STRENGTH BUILDER' },
    { time: '5:15 PM - 6:30 PM', name: 'ULTRA PLEX' }
  ]
},
{
  day: 'Wednesday',
  classes: [
    { time: '5:00 AM - 5:50 AM', name: 'METCON AIRXPRESS' },
    { time: '7:00 AM - 7:50 AM', name: 'METCON AIRXPRESS' },
    { time: '3:30 PM - 4:15 PM', name: 'METCON TEENS' }
  ]
},
{
  day: 'Thursday',
  classes: [
    { time: '5:00 AM - 5:50 AM', name: 'FORGE' },
    { time: '7:00 AM - 7:50 AM', name: 'FORGE' },
    { time: '5:15 PM - 6:30 PM', name: 'ULTRA PLEX' }
  ]
},
{
  day: 'Friday',
  classes: [
    { time: '5:00 AM - 5:50 AM', name: 'T.G.I.F' },
    { time: '7:00 AM - 7:50 AM', name: 'T.G.I.F' }
  ]
},
{
  day: 'Saturday',
  classes: [
    { time: '6:00 AM - 6:45 AM', name: 'BAR-MANA' },
    { time: '6:45 AM - 7:30 AM', name: 'STRETCH / BREATHWORK / ICE BATH' },
    { time: '7:30 AM - 8:30 AM', name: 'ULTRA PLEX' }
  ]
}
];

export default function Timetable() {
  return (
    <section id="timetable" className="py-20 px-6 bg-gradient-to-b from-[#4A5568] via-[#E5E7EB] to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center text-[#D6A7A3] mb-4 tracking-wide">
          Weekly Timetable
        </h2>
        <p className="text-center text-white mb-12 max-w-2xl mx-auto">
          Join us for classes designed to energise, heal, and transform. Book your spot today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((day, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#D6A7A3]/50 transition-all shadow-md"
            >
              <h3 className="text-2xl font-medium text-[#0B1120] mb-6 text-center">
                {day.day}
              </h3>
              <div className="space-y-4">
                {day.classes.map((classItem, classIndex) => (
                  <div
                    key={classIndex}
                    className="bg-gray-50 rounded-xl p-4 hover:scale-105 transition-transform border border-gray-100"
                  >
                    <p className="text-[#6E7680] text-sm font-medium mb-1">
                      {classItem.time}
                    </p>
                    <p className="text-[#0B1120] font-medium mb-1">
                      {classItem.name}
                    </p>
                    <p className="text-[#6E7680] text-xs">
                      {classItem.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-[#D6A7A3] text-[#0B1120] px-10 py-4 rounded-full font-medium text-lg hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 transition-all tracking-wide"
          >
            Book Your Class
          </a>
        </div>
      </div>
    </section>
  );
}
