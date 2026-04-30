const ReviewsCards = ({ review }) => {
  // Star rating render korar logic
  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + (rating % 1 !== 0 ? "½" : "");
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col justify-between hover:shadow-md transition-all duration-300">
      <div>
        {/* Dynamic Rating Stars */}
        <div className="flex text-yellow-400 mb-5 text-lg">
          {renderStars(review?.ratings || 5)}
        </div>

        {/* Dynamic Review Text */}
        <p className="text-gray-600 italic mb-8 leading-relaxed">
          "{review?.review || "No review comment provided."}"
        </p>
      </div>

      {/* User Profile Section */}
      <div className="flex items-center gap-4">
        {/* User Image from Data */}
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#B4E34C]/30">
          {review?.user_photoURL ? (
            <img
              src={review.user_photoURL}
              alt={review.userName}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#E8F0FE] flex items-center justify-center font-bold text-[#03464D]">
              {review?.userName?.[0] || "U"}
            </div>
          )}
        </div>

        <div>
          <h4 className="font-bold text-gray-900 leading-tight">
            {review?.userName || "Anonymous User"}
          </h4>
          <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest mt-1">
            Date:{" "}
            {review?.date
              ? new Date(review.date).toLocaleDateString()
              : "Recent"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCards;
