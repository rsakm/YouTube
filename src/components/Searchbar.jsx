// export const Searchbar = () => {
//   return (
//     <div className="w-2/4">
//       <form>
//         <div className="w-96 flex items-center text-gray-900 border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2 bg-slate-950">
//           {/* Search Input */}
//           <input
//             id="default-search"
//             type="text"
//             placeholder="Search..."
//             className="w-full bg-transparent text-white border-none outline-none"
//           />

//           {/* Search Icon */}
//           <svg
//             className="w-4 h-4 text-white ml-2"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 20 20"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//             />
//           </svg>
//         </div>
//       </form>
//     </div>
//   );
// };




export const Searchbar = () => {
  return (
    <div className="w-full flex justify-center">
      <form className="flex items-center w-[600px]">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 px-4 rounded-l-3xl bg-[#37373700] text-white placeholder-gray-400 text-sm outline-none border border-gray-600 focus:border-white"
        />
        <button
          type="submit"
          className="h-10 w-14 bg-[#aaa2a2] hover:bg-[#333] border border-l-0 border-gray-600 rounded-r-3xl flex items-center justify-center"
        >
          {/* Pure SVG for search icon */}
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1016.65 16.65z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};
