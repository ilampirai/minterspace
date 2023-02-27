import toast from "react-hot-toast";
import { useState, useEffect } from 'react';
import {   Flex, Stack, StackProps  ,Box,
  Image,
  VStack,
  Button,
  Center,
  Progress,
  Spinner,
  CenterProps } from "@chakra-ui/react"
import Masonry from "react-masonry-css"
import axios from "axios";

 

export const Generateimage = (props: StackProps) => {
  const [state, setState] = useState({});
  const [totalcount, setCount] = useState(2);
  const [prompt, setPrompt] = useState('sunny beach sunset');
  const [steps, setSteps] = useState(4);
  const [imageurl, setImage] = useState("");


      useEffect(() => {
       // fetchData();
        return () => {
          setState({}); // This worked for me
        };
      
       }, []);


    async function fetchData(e) {
      setImage('asdfasdfasd');
      e.preventDefault();

      var data = JSON.stringify({
        "prompt": prompt,
        "steps": steps
      });

      var config = {
        method: 'post',
        url: 'http://127.0.0.1:7861/sdapi/v1/txt2img',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
       // console.log(JSON.stringify(response.data));

        var res=JSON.parse(JSON.stringify(response.data));  console.log("res",res.images[0]);
        setImage("data:image/jpeg;base64,"+res.images[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
      



    }

    async function getData(e) {
      e.preventDefault();
      //setImage('asdfasdfasd');
      setImage('');
      var number= Math.floor(Math.random() * 10);
      var sampleurl="https://source.unsplash.com/random/200x200?sig="+number;

      setImage(sampleurl);



    }
  
  return (
    <Masonry
    breakpointCols={{
      default: 1,
      1100: 3,
      700: 2,
      500: 1,
    }}
    className="masonry-grid"
    columnClassName="masonry-grid_column"
  >{/* Template:{ JSON.stringify(imageurl) } */}

      

       <form onSubmit={fetchData}>
        <div className="input-field"> 
         <input  placeholder="prompt"   type="text" value={prompt}  onChange={e => setPrompt(e.target.value)}/>
        </div>
        <br/> 
        <div className="input-field"> 
         <input  placeholder="steps"   type="number" value={steps}  onChange={e => setSteps(e.target.value)} />
        </div>
        <br/> 
        <Button   alignSelf="center"
          justifySelf="center"
          variant="secondaryBold"
          mt="2"
          size="sm" type="submit"  >  Generate New Image</Button>
      </form>

      <br/><br/>
       prompt:{prompt}<br/>
       steps:{steps}<br/>

        {imageurl && <Center
                    
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bgColor="rgba(0,0,0,0.4)"
                    flexDirection="column"
                    color="white"
                    gap="0.4rem"
                  >


          <Image
                  src={imageurl}
                  alt="generated image"
                  w="100%"
                  maxH={"300px"}
                  objectFit="contain"
                  rounded="sm"
                />

           
           
        </Center>}

        
    </Masonry>
  )
}
