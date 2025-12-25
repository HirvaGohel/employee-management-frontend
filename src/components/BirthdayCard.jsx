export default function BirthdayCard() {
  return (
    <div className="bg-gray-900 text-white rounded-xl p-6 shadow flex flex-col items-center text-center">
      <h3 className="font-semibold text-lg mb-4">Team Birthday</h3>

      <img
        src="https://i.pravatar.cc/100"
        alt="user"
        className="w-20 h-20 rounded-full mb-3"
      />

      <h4 className="font-semibold">Andrew Jermia</h4>
      <p className="text-sm text-gray-300 mb-4">iOS Developer</p>

      <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-sm font-semibold">
        Send Wishes
      </button>
    </div>
  );
}