import { useRouter } from "next/navigation"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

const CarouselTextBanner = () => {
    const router = useRouter()

    return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
                plugins={[
                    Autoplay({ delay: 2000 }),
                ]}
            >
                <CarouselContent>
                    {
                        dataCarouselTop.map(({ id, title, link, description }) => (
                            <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                                <div>
                                    <Card className="shadow-none border-none bg-transparent">
                                        <CardContent className="flex flex-col justify-center p-2 items-center ">
                                            <p className="sm:text-lg text-wrap. dark:text-secondary">{title}</p>
                                            <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default CarouselTextBanner

export const dataCarouselTop = [
    {
        id: 1,
        title: "Welcome to our store!",
        description: "Discover amazing products",
        link: "/",
    },
    {
        id: 2,
        title: "Special Offers",
        description: "Check out our latest deals",
        link: "/",
    },
    {
        id: 3,
        title: "New Arrivals",
        description: "Fresh products just for you",
        link: "/",
    },
]
