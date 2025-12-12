"use client"

import { useGetFeaturedProduts } from "@/api/useGetFeaturedProduts"

const FeatureProducts = () => {
    const { loading, result } = useGetFeaturedProduts()
    console.log(result)
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
        </div>
    )
}

export default FeatureProducts