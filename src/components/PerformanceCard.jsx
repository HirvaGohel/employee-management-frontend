export default function PerformanceCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Performance</h3>
        <span className="text-sm text-gray-500">2025</span>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-3xl font-bold">98%</h2>
        <span className="text-green-600 text-sm bg-green-100 px-2 py-1 rounded">
          +12%
        </span>
        <span className="text-gray-500 text-sm">vs last year</span>
      </div>

      {/* Graph placeholder */}
      <div className="h-40 bg-green-100 rounded-lg"></div>
    </div>
  );
}