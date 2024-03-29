// VideoCard
import { Heading, Divider, Card, Image, Stack, Text, CardBody, Grid, GridItem, CardFooter, Flex} from '@chakra-ui/react';
import VideoVotes from './VideoVotes.jsx';
import { useState } from 'react';


const cardsData = [
  // Add card data via API
  {
    id: 0,
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    hasVoted: false, 
    likedVideoId: null,
  },
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    hasVoted: false,
    likedVideoId: null,
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    hasVoted: false,
    likedVideoId: null,
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    hasVoted: false,
    likedVideoId: null,
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    hasVoted: false,
    likedVideoId: null,
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    hasVoted: false,
    likedVideoId: null,
  },
  

];


const VideoCard = () => {
const [blurById, setBlurById] = useState(0);
const [blurValue, setBlurValue] = useState(0);
 
  return (
    <Flex >
    <Grid templateColumns="repeat(3, 1fr)" gap={20}>
      {cardsData.map((card) => (
        <GridItem key={card.id}>
          <Card maxW='sm' border="1px" borderColor="blackAlpha.200" >
            <CardBody>
              {blurById === <Image 
                src={card.imageUrl}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              /> }
              {blurById !== <Image 
                src={card.imageUrl}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                fitler={`blur(${blurValue})px`}
              /> }
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{card.title}</Heading>
                <Text>{card.description}</Text>
                <Text color='blue.600' fontSize='2xl'>
                  {card.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              {/* video component */}
              <VideoVotes videoId={card.id} setBlurById={setBlurById} setBlurValue={setBlurValue}/>
            </CardFooter>
          </Card>
        </GridItem>
      ))}
    </Grid>
    </Flex>
  );
};

export default VideoCard;




