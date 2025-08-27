"use client"
import { useState } from "react";
import Image from "next/image";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

} from '@chakra-ui/react'
import Link from "next/link";
import menuItems from './NavBar/menuitems.json'
import {
    menuDownSvg,
    menuPolygon,
    menu1,
    menu2,
    menu3,
    menu4,
    menuLogo,
    menuRightViewAll
} from '../../global'

const MyMenu = () => {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    const handleMenuClick = (index: number) => {
        setActiveMenu((prevState) => (prevState === index ? null : index));
    };

    return (
        <nav>
            <div className="flex md:flex-row flex-col gap-x-16 mt-2">
                {
                    menuItems.map((item, index) => (
                        <Menu key={index}>
                            {
                                item.subMenuItems.length > 0 ?
                                    <MenuButton key={item.title} onClick={() => handleMenuClick(index)}>
                                        <a className="flex gap-x-3 text-white items-center" href={item.link} >
                                            <p className="font-normal">{item.title}</p>
                                            {item.subMenuItems.length > 0 && <Image alt='menuDownSvg' className="w-3 items-center mt-1" src={menuDownSvg} />}
                                        </a>
                                    </MenuButton>
                                    :
                                    <a className="flex gap-x-3 text-white items-center" key={item.title} href={item.link} onClick={() => handleMenuClick(index)}>
                                        <p className="font-normal">{item.title}</p>
                                        {item.subMenuItems.length > 0 && <Image alt='menuDownSvg' className="w-3 items-center mt-1" src={menuDownSvg} />}
                                    </a>
                            }

                            {item.subMenuItems.length > 0 && (
                                <MenuList style={{ display: activeMenu === index ? "block" : "none" }}>
                                    <div className='ml-5'>
                                        <Image className="w-4 border-primary1" src={menuPolygon} alt="menuPolygon" />
                                    </div>
                                    <div className="bg-white rounded-lg border-primary1 border grid grid-cols-2" >
                                        <div className="mt-2">
                                            <div className='mt-2 ml-9 w-20'>
                                                <Image alt="logo" src={menuLogo}></Image>
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="border-t border-lineColor my-3 w-10/12"></div>
                                            </div>

                                            <div className="ml-9 h-52">
                                                <Link href="/">
                                                <h3 className="mt-3 font-salsa-without-letter-spacing text-menuTitle tracking-wide">{item.title}</h3>
                                                </Link>
                                                <ul className="grid grid-cols-2 gap-4 mt-5 list-disc">
                                                    {item.subMenuItems.map((subItem) => (
                                                        <MenuItem className="list-disc" key={subItem.name}>
                                                            <li className="text-black font-bold text-sm list-disc">
                                                                <Link href={subItem.link}>
                                                                    {subItem.name}
                                                                </Link>
                                                            </li>
                                                        </MenuItem>
                                                    ))}
                                                </ul>

                                            </div>

                                            <div className="flex justify-center mt-7">
                                                <div className="border-t border-lineColor my-5 w-10/12"></div>
                                            </div>
                                            <div className="flex gap-x-3 justify-center -ml-2">
                                                <h3 className="font-salsa-without-letter-spacing text-menuTitle font-normal">BlockChain</h3>
                                                <h3 className="font-salsa-without-letter-spacing text-menuTitle font-normal">MetaVerse</h3>
                                                <h3 className="font-salsa-without-letter-spacing text-menuTitle font-normal">2D/3D Games</h3>
                                            </div>
                                        </div>
                                        <div className="m-2 md:block hidden">
                                            <div
                                                className="pt-4 pl-3 pr-3 pb-3 rounded-lg bg-menuBg bg-cover bg-no-repeat bg-center"
                                            >
                                                <div className="grid grid-cols-2 mt-5">
                                                    <Image className="p-1" alt="logo" src={menu1}></Image>
                                                    <Image className="p-1" alt="logo" src={menu2}></Image>
                                                    <Image className="p-1 mt-2" alt="logo" src={menu3}></Image>
                                                    <Image className="p-1 mt-2" alt="logo" src={menu4}></Image>
                                                </div>
                                                <div className="flex gap-x-3 justify-center mt-9 pb-1 mb-2">
                                                    <p className='text-white hover:text-white-400 font-salsa-without-letter-spacing'>View All</p>
                                                    <Image className='w-3 ml-4 ' alt="rightArrowSvg" src={menuRightViewAll}></Image>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </MenuList>
                            )}
                        </Menu>
                    ))
                }
            </div>
        </nav>
    )
};

export default MyMenu;
