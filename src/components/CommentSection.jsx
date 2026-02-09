const CommentSection = () => (
  <div className="mt-16 border-t pt-10">
    <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-6">Komentar</h2>
    <div className="bg-white p-6 rounded-xl flex gap-4">
      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      <div className="flex-1">
        <textarea 
          placeholder="Apa yang ingin anda tanyakan?" 
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          rows="3"
        ></textarea>
        <button className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">Kirim</button>
      </div>
    </div>
  </div>
);

export default CommentSection;