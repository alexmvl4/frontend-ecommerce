"use client"

import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
    const router = useRouter()

    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-7xl">

            <h1 className="text-3xl" onClick={() => router.push("/")}>Dabel
                <span className="font-bold">Hats</span>
            </h1>

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
                <MenuList></MenuList>
            </div>
            <div className="flex sm:hidden">
                <p>
                    <ItemsMenuMobile />
                </p>
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <ShoppingCart
                    strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push("/cart")} />

                <Heart
                    strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push("/wishlist")} />

                <User
                    strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push("/user")} />

                <ToggleTheme />
            </div>

        </div>
    )
}

export default Navbar;