 function SubmitButton({ isLoading ,btnText="Register" }) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full py-2.5 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
    >
      {isLoading ? `${btnText}...` : btnText}
    </button>
  );
}
export default SubmitButton