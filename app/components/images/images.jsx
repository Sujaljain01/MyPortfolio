import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Img } from "@/utils/data/personal-img";
import Image from "next/image";

const Images = () => {
    return (
        <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <Image
                src="/section.svg"
                alt="Hero"
                width={1572}
                height={795}
                className="absolute top-0 -z-10"
            />
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                        Memories
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>
            <Box
                sx={{
                    width: {
                        xs: '100%', // Full width on extra small screens
                        sm: 600,   // Adjust width for small screens
                        md: 800,   // Adjust width for medium screens
                        lg: 1000   // Adjust width for large screens
                    },
                    height: {
                        xs: 300,   // Adjust height for extra small screens
                        sm: 350,   // Adjust height for small screens
                        md: 400,   // Adjust height for medium screens
                        lg: 450    // Adjust height for large screens
                    },
                    overflowY: 'auto',
                    overflowX: 'hidden', // Hide the horizontal scrollbar
                    scrollbarWidth: 'none', // For Firefox
                    '&::-webkit-scrollbar': {
                        display: 'none', // For Chrome, Safari, and Opera
                    },
                    scrollBehavior: 'smooth', // Smooth scrolling
                }}
            >
                <ImageList 
                    variant="masonry" 
                    cols={{
                        xs: 2,   // 2 columns on extra small screens
                        sm: 3,   // 3 columns on small screens
                        md: 4,   // 4 columns on medium screens
                        lg: 5    // 5 columns on large screens
                    }} 
                    gap={8}
                >
                    {Img.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    );
};

export default Images;
