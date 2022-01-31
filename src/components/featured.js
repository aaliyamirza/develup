import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function Featured() {
  return (
      <div className='feature'>
      <Typography varient="h2" sx={{ color: "black", fontSize: "30px"  }}>Featured in the Press</Typography>
    <div className='logoipsum'>
      <Stack direction="row" spacing={10}>
      <Typography varient="h3" sx={{ color: "#6b6b6b", fontSize: "25px"  }}>logoipsum</Typography>
        <Typography varient="h3" sx={{ color: "#6b6b6b", fontSize: "25px" }}>logoipsum</Typography>
        <Typography varient="h3" sx={{ color: "#6b6b6b", fontSize: "25px" }}>logoipsum</Typography>
        <Typography varient="h3" sx={{ color: "#6b6b6b", fontSize: "25px" }}>logoipsum</Typography>
        <Typography varient="h3" sx={{ color: "#6b6b6b", fontSize: "25px" }}>logoipsum</Typography>
        <Typography varient="h3" sx={{ color: "#6b6b6b", fontSize: "25px" }}>logoipsum</Typography>
      </Stack>
    </div>
    <div className='end-text'>
        <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsum quae in. Illum repellendus veritatis ipsa assumenda in laudantium quo exercitationem minima autem repellat voluptatibus est sunt cupiditate tenetur eligendi neque eos dolores totam voluptatum ducimus explicabo, nobis doloribus provident. Asperiores voluptas iste cupiditate cum itaque placeat, ad doloribus, accusantium magnam aspernatur id aperiam nam minima nisi commodi eligendi eaque numquam sit fugit reiciendis rerum iusto mollitia hic! Ullam, possimus?</Typography>
        <br />
        <br />
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugiat enim labore recusandae aperiam aut sed inventore, illum ducimus sunt repellat necessitatibus minus sint consequuntur, debitis libero, eligendi numquam. Dicta dignissimos doloribus assumenda reprehenderit fugit expedita sit distinctio molestias nobis, animi nisi tempore ratione quos. Accusantium voluptatem optio sit reiciendis magni quas harum iure, repellat velit ipsa, reprehenderit ad consequatur debitis autem expedita error voluptas magnam ratione minima nostrum enim!</Typography>
    </div>
    </div>
  );
}