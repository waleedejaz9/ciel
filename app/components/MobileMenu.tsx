import {
    Menu,
    MenuButton,
    MenuList,
    Portal,
    MenuItem,
    useBoolean
} from '@chakra-ui/react'
import { PhoneIcon, RepeatIcon, AddIcon, EditIcon, WarningIcon, HamburgerIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import menuItems from './NavBar/menuitems.json'
import Image from 'next/image';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    DrawerBody,
    DrawerHeader,
    useDisclosure,
    DrawerFooter
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import { logo } from '../../global';

function MobileMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [flag, setFlag] = useBoolean(false);
    return (
        <>
            <Button className='w-28 text-white' leftIcon={<HamburgerIcon />} colorScheme='white' onClick={onOpen}>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent className='bg-footerBg'>
                    <div className='flex justify-center mt-20'>
                        <Image src={logo} alt='logo' width={100} height={100} />
                    </div>
                    <h3 className='text-white text-center font-Rubik text-2xl mt-7 tracking-normal font-bold'>
                        SERVING HUMANITY WITH TECHNOLOGY
                    </h3>

                    <div className='flex justify-center'>
                        <Menu >
                            <MenuButton className='text-white hover:underline font-salsa mt-20'>
                                Company
                            </MenuButton>
                            <MenuList className='bg-white w-full rounded-lg border-black p-10 flex justify-center'>
                                <div className="flex flex-col">
                                    <Link href={"/about-us"}>
                                        <MenuItem className='font-bold '>
                                            About us
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/careers"}>
                                        <MenuItem className='font-bold '>
                                            Career
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/partners"}>
                                        <MenuItem className='font-bold '>
                                            Partners
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/technology-stack"}>
                                        <MenuItem className='font-bold '>
                                            Technology Stack
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/blogs"}>
                                        <MenuItem className='font-bold '>
                                            Blogs
                                        </MenuItem>
                                    </Link>
                                </div>
                            </MenuList>
                        </Menu>
                        {/* <Button onClick={onClose}>
                            Company
                        </Button>
                        <Drawer 
                            
                            >
                            <DrawerOverlay>
                                <DrawerContent className='bg-footerBg'>
                                    <p>
                                        technology
                                    </p>
                                    <div className='gap-x-28 flex flex-row justify-evenly mt-20 '>
                        <DrawerCloseButton className='text-white border rounded-full p-2' />
                    </div>
                                </DrawerContent>
                            </DrawerOverlay>
                        </Drawer> */}

                    </div>
                    <div className='flex justify-center'>
                        <Menu >
                            <MenuButton className='text-white hover:underline font-salsa mt-20'>
                                Services
                            </MenuButton>
                            <MenuList className='bg-white w-full rounded-lg border-black p-10 flex justify-center'>
                                <div className="flex flex-col">
                                    <Link href={"/game-development"}>
                                        <MenuItem className='font-bold '>
                                            Game Development
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/mobile-apps"}>
                                        <MenuItem className='font-bold '>
                                            Mobile Apps
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/ui-ux-design"}>
                                        <MenuItem className='font-bold '>
                                            UI/UX Design
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/web-development"}>
                                        <MenuItem className='font-bold '>
                                            Web Development
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/blockchain"}>

                                        <MenuItem className='font-bold '>
                                            Blockchain
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/metaverse"}>
                                        <MenuItem className='font-bold '>
                                            MetaVerse
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/ar-vr"}>
                                        <MenuItem className='font-bold '>
                                            AR/VR
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/cloud"}>
                                        <MenuItem className='font-bold '>
                                            Cloud
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/devops"}>
                                        <MenuItem className='font-bold '>
                                            DevOps
                                        </MenuItem>
                                    </Link>

                                </div>
                            </MenuList>
                        </Menu>

                    </div>
                    <div className='flex justify-center'>
                        <Menu >
                            <MenuButton className='text-white hover:underline font-salsa mt-20'>
                                Portfolio
                            </MenuButton>
                            <MenuList className='bg-white w-full rounded-lg border-black p-10 flex justify-center'>
                                <div className="flex flex-col">
                                    <Link href={"web-development"}>
                                        <MenuItem className='font-bold '>
                                            Web Development
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/game-development"}>
                                        <MenuItem className='font-bold '>
                                            Game Development
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/mobile-apps"}>
                                        <MenuItem className='font-bold '>
                                            Mobile Apps
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/metaverse"}>
                                        <MenuItem className='font-bold '>
                                            Metaverse
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/blockchain"}>
                                        <MenuItem className='font-bold '>
                                            BlockChain
                                        </MenuItem>
                                    </Link>
                                    <Link href={"/ui-ux-design"}>
                                        <MenuItem className='font-bold '>
                                            UI/UX Design
                                        </MenuItem>
                                    </Link>
                                </div>
                            </MenuList>
                        </Menu>

                    </div>
                    <div className='flex justify-center'>
                        <Menu >
                            <Link href="/how-it-works">
                                <MenuButton className='text-white hover:underline font-salsa mt-20'>
                                    How it works
                                </MenuButton>
                            </Link>

                        </Menu>

                    </div>
                    <div className='gap-x-28 flex flex-row justify-evenly mt-20 '>
                        <DrawerCloseButton className='text-white border rounded-full p-2' />
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default MobileMenu;