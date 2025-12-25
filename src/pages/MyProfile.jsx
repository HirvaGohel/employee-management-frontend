export default function ProfileCard() {
  return (
    <div className="bg-white rounded-xl shadow p-5"
    style={{ height: "500px" }}>
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/80"
          className="rounded-full"
        />
        <div>
          <h3 className="font-bold text-lg">Stephan Peralt</h3>
          <p className="text-sm text-gray-500">
            Senior Product Designer
          </p>
        </div>
      </div>

      <div className="mt-4 text-sm space-y-2">
        <p><strong>Email:</strong> steperd124@example.com</p>
        <p><strong>Phone:</strong> +1 324 3453 545</p>
        <p><strong>Joined:</strong> 15 Jan 2024</p>
      </div>
    </div>
  );
}