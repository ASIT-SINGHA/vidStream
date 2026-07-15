export function ApiAlert({ message, type = "error" }) {
  if (!message) return null;

  const bgColor = type === "error" ? "bg-red-50" : "bg-green-50";
  const borderColor = type === "error" ? "border-red-200" : "border-green-200";
  const textColor = type === "error" ? "text-red-700" : "text-green-700";

  return (
    <div className={`mb-6 p-4 border rounded-lg ${bgColor} ${borderColor}`}>
      <p className={`text-sm ${textColor}`}>{message}</p>
    </div>
  );
}
