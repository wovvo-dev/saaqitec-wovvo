'use client'
import React, { useState, useRef, useEffect } from 'react'

const PressPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const suggestionBoxRef = useRef<HTMLDivElement | null>(null)

  const pressData = [
    {
      id: 1,
      image: "/press-images/press01.png",
      heading: "Wovvo: The UGC Job Finding Tool That Actually Works (2025)",
      description:
        "I've been watching the UGC space evolve, and honestly, finding good gigs has become a full-time job itself. Between refreshing X every hour, scrolling...",
      url: "https://genxugcchadandjenny.com/blog/wovvo-the-ugc-job-finding-tool-not-a-platform",
    },
  ]

  const filteredData = pressData.filter((item) =>
    item.heading.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const suggestionList = pressData.filter(
    (item) =>
      searchTerm &&
      item.heading.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion)
    setShowSuggestions(false)
  }

  const shareUrl = (platform: string, url: string) => {
    let shareLink = "#"
    if (platform === "whatsapp") {
      shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`
    } else if (platform === "twitter") {
      shareLink = `https://twitter.com/share?url=${encodeURIComponent(url)}`
    } else if (platform === "facebook") {
      shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    }
    window.open(shareLink, "_blank")
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionBoxRef.current &&
        !suggestionBoxRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <main className="relative bg-white pt-24 pb-16">
      {/* Hero Banner */}
      <div className="aboutbanner flex-col bg-[url(/banner.jpg)] min-h-[350px] bg-cover bg-center flex justify-center items-center">
        <h2 className="text-[52px] font-bold text-center text-white">
          Press Releases
        </h2>

        {/* Search Bar */}
        <div
          ref={suggestionBoxRef}
          className="searchbar w-[90%] max-w-[600px] relative mt-6"
        >
          <input
            className="placeholder-black bg-white w-full h-[50px] outline-none border-none px-[50px] text-black text-base font-light rounded-lg"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setShowSuggestions(true)
            }}
          />
          <img
            className="absolute top-1/2 left-0 translate-x-[22px] -translate-y-1/2 w-[20px]"
            src="/search.svg"
            alt="search-icon"
          />
          <button
            className="absolute right-0 top-1/2 -translate-x-[10px] -translate-y-1/2 bg-[#ee2720] text-white text-base px-[25px] pt-[8px] pb-[11px] leading-none rounded-[5px]"
            onClick={() => setShowSuggestions(false)}
          >
            Search
          </button>

          {/* Suggestion Dropdown */}
          {showSuggestions && suggestionList.length > 0 && (
            <ul className="absolute z-10 bg-white w-full border border-gray-200 rounded-md mt-1 max-h-[200px] overflow-y-auto shadow-lg">
              {suggestionList.map((item) => (
                <li
                  key={item.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black text-sm"
                  onClick={() => handleSuggestionClick(item.heading)}
                >
                  {item.heading}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Articles Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[50px] md:py-[100px] mb-[-50px]">
        <h2 className="text-[30px] md:text-[40px] font-bold text-center">
          Our Latest: <span className="gradient-text">Articles</span>
        </h2>

        <div className="press-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-[30px]">
          {filteredData.length === 0 ? (
            <p className="text-center text-gray-500 col-span-3">
              No articles found.
            </p>
          ) : (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-4 relative overflow-hidden"
              >
                <img
                  className="w-full rounded-lg"
                  src={item.image}
                  alt={item.heading}
                />
                <h3 className="text-black font-semibold text-[20px]">
                  {item.heading}
                </h3>
                <p className="text-black text-[15px]">{item.description}</p>

                <div className="share-wrapper flex justify-between items-end relative">
                  <a
                    href={item.url}
                    target="_blank"
                    className="flex items-center gap-2 bg-[#ee2720] px-4 py-2 rounded-md text-white font-medium text-sm hover:bg-red-600 transition"
                  >
                    Read More{" "}
                    <img className="w-4 relative top-[2px]" src="/arrow.png" alt="arrow" />
                  </a>

                  <div className="relative">
                    <div className="share-wrapper-inner group absolute right-0 bottom-0 h-[21px] w-[70px] hover:h-[120px] transition-all duration-300 ease-in-out cursor-pointer">
                      <div className="share-btn absolute bottom-0 flex items-center gap-1 text-[14px] font-normal text-gray-800">
                        <img
                          src="/sahare-icon.svg"
                          className="w-4"
                          alt="share"
                        />{" "}
                        SHARE
                      </div>
                      <div className="social-share-icon opacity-0 group-hover:opacity-100 absolute top-0 left-1/2 -translate-x-1/2 transition-opacity duration-300">
                        <ul className="flex flex-col gap-1 items-center">
                          <li>
                            <button
                              onClick={() => shareUrl("whatsapp", item.url)}
                            >
                              <img
                                className="w-6"
                                src="/whatsapp.png"
                                alt="whatsapp"
                              />
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => shareUrl("twitter", item.url)}
                            >
                              <img
                                className="w-6"
                                src="/twitter.png"
                                alt="twitter"
                              />
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => shareUrl("facebook", item.url)}
                            >
                              <img
                                className="w-6"
                                src="/facebook.png"
                                alt="facebook"
                              />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  )
}

export default PressPage