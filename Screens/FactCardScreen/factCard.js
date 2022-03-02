import { useContext, useEffect, useState } from "react";
import {
  View,
  HeaderText,
  LargeImage,
  Text,
} from "../../Components/Styled Components";
import { baseURL } from "../../api";
import { getFactCards } from "../../api";
import UserContext from "../../UserContext";

const FactCard = ({ route }) => {
  const bird_name = route.params.bird_name;
  const card_id = route.params.card_id;

  const { userId } = useContext(UserContext);
  const [cardFact, setCardFact] = useState([]);

  useEffect(() => {
    getFactCards(userId).then((cards) => {
      setCardFact(cards[card_id]);
    });
  }, []);

  return (
    <>
      <View>
        <HeaderText>Fact Card</HeaderText>
      </View>
      <HeaderText> {bird_name}</HeaderText>
      <LargeImage source={`${baseURL}/photo/${bird_name}/${card_id}`} />
      <Text>{cardFact.fact}</Text>
    </>
  );
};

export default FactCard;
