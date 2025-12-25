export default function InfoCard({ title, subtitle, button, bg, darkText }) {
  return (
    <div className={`${bg} rounded-xl p-6 shadow`}>
      <h3 className={`font-semibold text-lg ${darkText ? "text-black" : "text-white"}`}>
        {title}
      </h3>
      <p className={`text-sm mt-1 ${darkText ? "text-black" : "text-white/80"}`}>
        {subtitle}
      </p>

      <button className="mt-4 bg-white text-black px-4 py-1 rounded text-sm font-semibold">
        {button}
      </button>
    </div>
  );
}