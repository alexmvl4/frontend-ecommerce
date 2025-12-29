"use client"

import { useGetFeaturedProduts } from "@/api/useGetFeaturedProduts"
import { ResponseType } from "@/types/response"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"

const FeatureProducts = () => {
    const { loading, result }: ResponseType = useGetFeaturedProduts()
    console.log(result)
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4"> 
        {
            loading && (
                <p>cargando</p>
            )
        }
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default FeatureProducts