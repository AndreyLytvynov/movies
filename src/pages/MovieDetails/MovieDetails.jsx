import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetMoviesByIdQuery } from "../../redux/movieApi/movieSlice";

const MovieDetails = () => {
  const { id } = useParams();
  const { data } = useGetMoviesByIdQuery(id);

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      {data && (
        <Box>
          <Button onClick={goBack}>NAZAD</Button>
          <Flex>
            <Image
              src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
              alt={data.original_title}
            />
            <Flex w={600} flexDirection={"column"} p={5}>
              <Heading as="h1" size="md" noOfLines={2}>
                {data.original_title}
              </Heading>
              <Text fontSize="md">Date Release: {data.release_date}</Text>
              <Text fontSize="md">Budget: {data.budget}</Text>
              <Text fontSize="md">
                Countries: {data.production_countries[0]?.name}
              </Text>
              <Flex>
                Genres:
                {data.genres.map((el) => {
                  return (
                    <Text key={el.id} fontSize="md">
                      {el.name},&#xa0;
                    </Text>
                  );
                })}
              </Flex>
              {/* <Text fontSize="md">Countries: {data.genres}</Text> */}
            </Flex>
          </Flex>
          <Text fontSize="md">Date Release: {data.overview}</Text>
        </Box>
      )}
    </>
  );
};

export default MovieDetails;
