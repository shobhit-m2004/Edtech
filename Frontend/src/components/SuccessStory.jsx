import React from "react";
import SuccessCard from "./ui/SuccessCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

const SuccessStory = () => {
  const { feedbacks } = useContext(AppContext);

  return (
    <Carousel
      className="w-full  mx-auto"
      plugins={[
        Autoplay({
          delay: 4000, // moves every 2 sec
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent className="flex justify-center">
        {feedbacks?.map((item, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <SuccessCard key={index} item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SuccessStory;
