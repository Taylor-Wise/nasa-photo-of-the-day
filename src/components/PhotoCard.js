import React from "react";
import "../App";
import "./PhotoCard.css";
import { CardBody, CardTitle, CardSubtitle
  } from 'reactstrap';
import styled from "styled-components";

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;'
`;

const  PhotoTitle = styled.div`
color: white;
`;

const AstroImg = styled.img`
  border-radius: 10%;
  border: 8px double #0b3d91;
`;

const InfoWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const CardInformation = styled.div`
width: 55%;
text-align: center;
color: white;
`;



const PhotoCard = ({image}) => {
    return(
        <CardWrapper>
        <CardBody>
          <PhotoTitle>{image.title}</PhotoTitle>
          <PhotoTitle>{image.date}</PhotoTitle>
        </CardBody>
        <AstroImg width="55%" src={image.url} alt="Nasa's astronomy photo of the day." />
        <InfoWrapper>
          <CardInformation>{image.explanation}</CardInformation>
        </InfoWrapper>
        </CardWrapper>
    );
};
export default PhotoCard;