const items = [
  'uPVC Windows & Doors',
  'Composite Front Doors',
  'Glass Balustrades',
  'Roof Lanterns',
  'Double & Triple Glazing',
  'Fire Doors',
  'Bi-Fold Doors',
  'Emergency Glazing',
  'Locksmith Services',
  'Shop Fronts',
  'Glass Restoration',
  'Stained Glass',
  'Conservatories & Orangeries',
  'Secondary Glazing',
  'Window Shutters',
  'Sash Windows',
  'Patio Doors',
  'Stable Doors',
  'Door Canopies',
  'Glass Shower Screens',
  'Glass Splashbacks',
  'Leadwork',
  'Misted Unit Replacement',
  'Draught Proofing',
  'Window Film & Tinting',
  'Porch Installation',
  'Cat & Dog Flaps',
  'UPVC Spraying',
  'Loft & Roof Windows',
  'Mirrors',
  'Glass Polishing',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="bg-yellow-400 py-3.5 overflow-hidden">
      <div className="flex gap-0 animate-marquee whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-0">
            <span className="font-outfit font-semibold text-sm text-black uppercase tracking-wider">
              {item}
            </span>
            <span className="text-yellow-600 text-xs select-none">&#9679;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
