"use client"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/shop" className="block">Tienda</Link>
                <Link href="/offers" className="block">Promociones</Link>
                <Link href="/accessories" className="block">Accesorios</Link>
            </PopoverContent>
        </Popover>
    )
}

export default ItemsMenuMobile