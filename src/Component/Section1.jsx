import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Framer Motion for animations
import { motion } from 'framer-motion';

const Section1 = () => {
  const games = [
    {
      id: '677bcfae094293b77b099867',
      image: "https://i.ibb.co.com/58WNtbh/concept-art-futuristic-soldier-adventure-wallpaper.jpg",
      title: "Grand Theft Auto V (GTA V)",
      review: "Grand Theft Auto V (GTA V) is an open-world action-adventure video game...",
      rating: 3,
      publishingYear: "2013",
      genre: "action",
    },
    {
      id: '677bd065094293b77b099868',
      image: "https://i.ibb.co.com/Lrps9YH/apocalyptic-destruction-war-zone-landscap.jpg",
      title: "God of War: Ragnarök",
      review: "Grand Theft Auto V (GTA V) is an open-world action-adventure video game...",
      rating: 2,
      publishingYear: "2019",
      genre: "action",
    },
    {
      id: '677bd0fa094293b77b099869',
      image: "https://i.ibb.co.com/cbSjGdk/medium-shot-soldier-with-weapon.jpg",
      title: "Cyberpunk 2077",
      review: "Grand Theft Auto V (GTA V) is an open-world action-adventure video game...",
      rating: 5,
      publishingYear: "2013",
      genre: "action",
    },
    {
      id: '677bd233094293b77b09986a',
      image: "https://i.ibb.co.com/FmXN6QK/apocalyptic-destruction-war-zone-landscap.jpg",
      title: "Tom Clancy's Rainbow Six Siege",
      review: "Grand Theft Auto V (GTA V) is an open-world action-adventure video game...",
      rating: 1,
      publishingYear: "2017",
      genre: "action",
    },
    {
      id: '677bd45a094293b77b09986c',
      image: "https://i.ibb.co.com/XVPH1hD/cowboy-going-old-western-town.jpg",
      title: "Red Dead Redemption 2",
      review: "This action-adventure game is set in the Wild West and follows Arthur...",
      rating: 5,
      publishingYear: "2002",
      genre: "adventure",
    },
  ];

  return (
    <section className="py-16  bg-black">
      <h2 className="text-4xl font-bold text-center text-[#00ffcc] mb-8">
        𝑻𝒓𝒆𝒏𝒅𝒊𝒏𝒈 𝑮𝒂𝒎𝒆𝒔
      </h2>
      <div className="my-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          navigation
          pagination={{
            clickable: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {games.map((game) => (
            <SwiperSlide key={game.id}>
              <motion.div
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.img
                  src={game.image}
                  alt={`Game: ${game.title}`}
                  className="w-full object-cover rounded-lg shadow-md 
                    h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Section1;
