"use client"; 
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Img } from "@/utils/data/personal-img";
import useMediaQuery from '@mui/material/useMediaQuery'; 
import Image from "next/image";

 

const Images = () => {
    
const isSmallScreen = useMediaQuery('(max-width:600px)');
const isMediumScreen = useMediaQuery('(max-width:960px)');
const isLargeScreen = useMediaQuery('(max-width:1200px)');
 // Determine the number of columns based on screen size
 const getColumns = () => {
    if (isSmallScreen) return 2;
    if (isMediumScreen) return 3;
    if (isLargeScreen) return 4;
    return 5; // Default for larger screens
  };

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
        width: '100%', // Full width for responsiveness
        maxWidth: 1200, // Limit the max width
        height: 550,
        overflowY: 'scroll',
        overflowX: 'hidden', // Hide the horizontal scrollbar
        scrollbarWidth: 'none', // For Firefox
        '&::-webkit-scrollbar': {
          display: 'none', // For Chrome, Safari, and Opera
        },
        scrollBehavior: 'smooth', // Smooth scrolling
        margin: '0 auto', // Center the container
      }}
    >
      <ImageList variant="masonry" cols={getColumns()} gap={8}>
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
