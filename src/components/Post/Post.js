import React from 'react'
import NewsTitle from './NewsTitle';
import NewsThumbnail from './NewsThumbnail';
export const Post = () => {
  return (
    <div>
        <div className="flex md:flex-row flex-col justify-around">
                <div className="max-w-[400px] mx-4">
                    <p className="text-2xl font-bold mb-4">Adani Group shares face carnage on Dalal Street; flagship Adani Enterprises crashes 26%</p>
                    <div className="w-full">
                        <img width="450px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWk1PZ3UX8I9arjg6LkN9pGzpvHN4lK5lwQ&usqp=CAU" alt="" />
                    </div>
                    <p className="mt-4">Adani Enterprises, the flagship firm of the Adani Group, plunged over 26 per cent, triggering panic on Dalal Street just a day after the company’s Rs 20,000 crore FPO sailed through successfully.</p>

                    <p className="font-bold mt-4 text-xl">Asia Cup row: Pakistan wants its ODI World Cup matches too taken out of India</p>
                    <div className="md:flex mt-4" >
                        <img width="200px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAcjbuGwM0Ff8M6T5K23hbgjuKNXCHHbKNA&usqp=CAU" alt=""/>
                        <p className="md:ml-4">A final decision on Asia Cup venue will be taken in March when Asian Cricket Council reconvenes in Dubai</p>
                    </div>
                </div>
                <div>
                    <NewsThumbnail />
                    <NewsThumbnail />
                    <NewsThumbnail />
                    <NewsThumbnail />
                    <NewsThumbnail />
                    <NewsThumbnail />
                    <NewsThumbnail />
                    <NewsThumbnail />
                </div>
                <div className="px-4">
                    <NewsTitle />
                    <NewsTitle />
                    <NewsTitle />
                    <NewsTitle />
                    <NewsTitle />
                    <NewsTitle />
                    <NewsTitle />
                    <NewsTitle />
                </div>
                <div className="md:h-[600px] md:flex-col md:flex md:w-[300px] h-[300px] mt-4">
                    <div className="bg-gray-800 text-white h-1/2">Current Schemes</div>
                    <div className="bg-orange-500 text-white h-1/2">Add</div>
                </div>
            </div>

            <div className="bg-orange-500 mt-6 h-32 mx-4 text-white text-4xl text-center mb-12"> Add </div>
    </div>
  )
}
