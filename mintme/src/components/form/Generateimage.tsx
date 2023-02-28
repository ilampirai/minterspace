import toast from "react-hot-toast";
import { useState, useEffect } from 'react';
import {   Flex, Stack, StackProps  ,Box,
  Image,
  VStack,
  Button,
  Center,
  Progress,
  Spinner,
  Text ,
  Input,
  Spacer,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText


} from "@chakra-ui/react"
 
 
import Masonry from "react-masonry-css"
import axios from "axios";
 
 

export const Generateimage = (props: StackProps) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(0);
  const [prompt, setPrompt] = useState('sunny beach sunset');
  const [steps, setSteps] = useState(15);
  const [imageurl, setImage] = useState("");


      useEffect(() => {
       // fetchData();
        return () => {
          setState({}); // This worked for me
        };
      
       }, []);


    async function fetchData(e) {
      
      e.preventDefault();
      setImage(''); 
      setLoading(1); 
      console.log('fetchdata');

      var data = JSON.stringify({
        "prompt": prompt,
        "steps": steps
      });

      var config = {
        method: 'post',
        url: 'https://208b-165-227-105-53.ngrok.io/sdapi/v1/txt2img',
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
        setLoading(0);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(0);
      });  
      
       


    }

     
  
  return (
    <Stack spacing={3}>
    

     {/* Template:{ JSON.stringify(imageurl) } */}
 
     
     
   
      <Stack spacing={4}>
      <FormControl>
        <FormLabel>Prompt</FormLabel>
          <Input   placeholder="prompt" bg='blackAlpha.500'  type="text" value={prompt}  onChange={e => setPrompt(e.target.value)}/>
          <FormHelperText>Please follow steps to generate image.</FormHelperText>
      </FormControl>  
             
        {!loading && <Button   onClick={e => fetchData(e)}  alignSelf="center"  justifySelf="center"  colorScheme='blue'   size="sm" type="submit"  >  Generate New Image</Button> }

        {loading==1 && <Button  isLoading    loadingText='Generating'  colorScheme='blue'  variant='outline'   >  Submit  </Button> }

              
        </Stack>  

        {imageurl && <Box boxSize='sm'>  <Image  src={imageurl}   alt="generated image"   w="100%"  maxH={"300px"}   objectFit="contain"  rounded="sm"    /> </Box>  }

        
     
    </Stack>
  )
}
