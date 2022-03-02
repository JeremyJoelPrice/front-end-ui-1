import { useContext, useEffect, useState } from "react";
import {
  HeaderPanel,
  HeaderText,
  LargeImage,
  Text,
} from "../../Components/Styled Components";
import { getFactCard, getFactPhoto } from "../../api";

const FactCard = () => {
  const [cardFact, setCardFact] = useState([]);

  useEffect(() => {
    getCardFact(userId).then((card) => {
      setCardFact(card);
    });
  }, []);

  return (
    <HeaderPanel>
      <HeaderText>{factCard.bird_name}</HeaderText>
      <LargeImage source={getFactPhoto} />
      <Text>{factCard.fact}</Text>
    </HeaderPanel>
  );
};

export default FactCard;
