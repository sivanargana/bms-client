import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react"
import { NavLink } from "react-router"
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
function Home() {
  const client = useApolloClient();
  const [movies, setMovies] = useState<any>([])
  useEffect(() => {
    client.query({
      query: gql`
      query {
        movies{ 
          id,
          name,
          slug,
          thumbnail
          genre
        }
      }	
    `,
    }).then((result) => setMovies(result.data.movies));
  }, [])
  return (
    <>
      <div className="py-[10px] bg-gray-200">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          spaceBetween={10}
          slidesPerView={"auto"}
          centeredSlides={true}
          initialSlide={1}
          loop={true}
        >
          <SwiperSlide className="!w-auto"><img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1744877848242_revplaycard1240x300.jpg" className="w-[1240px] rounded-lg" /></SwiperSlide>
          <SwiperSlide className="!w-auto"><img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1751871230107_karatekiddesktop.jpg" className="w-[1240px] rounded-lg" /></SwiperSlide>
          <SwiperSlide className="!w-auto"><img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1744877848242_revplaycard1240x300.jpg" className="w-[1240px] rounded-lg" /></SwiperSlide>
          <SwiperSlide className="!w-auto"><img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1751871230107_karatekiddesktop.jpg" className="w-[1240px] rounded-lg" /></SwiperSlide>
        </Swiper>
      </div>
      <div className="container max-w-[1170px] mx-auto py-[20px]">
        <h2 className="text-[24px] font-bold mb-[10px]">Recommended Movies</h2>
        <ul className="grid grid-cols-5 gap-[32px]">
          {
            movies.map((item: any, i: any) => <li key={i} >
              <NavLink to={`movie/${item.slug}`} >
                <img src={`${import.meta.env.VITE_ASSETS_URL}${item.thumbnail}`} className="aspect-[2/3] object-cover rounded-lg w-full" />
                <div className="text-[18px] font-medium mt-[8px]">{item.name}</div>
                <div className="text-[16px] text-gray-400">{item.genre}</div>
              </NavLink>
            </li>)
          }
        </ul>
      </div>
    </>
  )
}
export default Home
