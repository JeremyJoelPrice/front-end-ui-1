import { v4 as uuid } from "uuid";
import { HeaderPanel, HeaderText } from "../../Components/Styled Components";
import FactCardThumbnail from "./FactCardThumbnail";
import { useEffect } from "react";
import { getFactCards } from "../../api";

const factCards = [
	{
		bird_name: "ABBOTTS BABBLER",
		fact: 'Abbott\'s babbler was described by the English zoologist Edward Blyth in 1845 and given the binomial name Malacocincla abbotti. The genus name Malacocincla combines the Ancient Greek malakos meaning "soft" with modern Latin cinclus, meaning "thrush"; referring to the birds\' full and drooping plumage. The specific name abbotti was chosen by Blyth to honour the specimen collector, Lieutenant Colonel J. R. Abbott (1811–1888), who served in British India as Assistant Commissioner of the Arakan from 1837 to 1845. Blyth erected the new genus Malacocincla for this species, but subsequent workers placed the species in Turdinus and Trichastoma. A revision reinstated its placement in Malacocincla in 1985. A 2001 study confirmed the cohesiveness of the Trichastoma group but a 2012 study shows that M. abbotti and M. sepiaria are in a clade along with Napothera, while M. cinereiceps and M. malaccensis fall into a different clade along with the genus Trichastoma and several species of Pellorneum. An isolated population occurs in the Visakhapatnam Ghats, well separated from the nearest main distribution along the Himalayas and was named after Indian ornithologist K.S.R. Krishna Raju by Dillon Ripley and Bruce Beehler in 1985. The nominate population is from southern Myanmar and extends to southern Tenasserim and northwestern Malaya including the Langkawi Islands. Several other populations of this widespread species have been named as subspecies and not all are recognized. The population in the eastern Himalayas from eastern Nepal to Sikkim and Assam was named as amabile, but is now considered within the nominate subspecies. Others include altera (central Laos and Annam), williamsoni (eastern Thailand and northwestern Cambodia), obscurior (coastal southeastern Thailand), olivaceum (Peninsular Thailand and Malaya), sirense (Borneo, Pulau Mata Siri), and baweanum (Bawean Island).',
		image_url: "ABBOTTS BABBLER/ABBOTTS BABBLER-2.jpg"
	},
	{
		bird_name: "ABBOTTS BABBLER",
		fact: "The adult Abbott's babbler is a nondescript, brown, short-tailed babbler that moves about in the low vegetation often near streams and in the vicinity of tree ferns and tangled vegetation. The throat is gray-white while the center of the belly is white, and the flanks are olive. The undertail coverts are rusty-colored. The sexes are alike. It has a short tail and heavy bill; it is drab olive-brown with bright rusty lower flanks and vent, a grayish-white throat and breast, and variable pale gray supercilium and lores. Juvenile birds have dark rufescent-brown crowns and upperparts. The calls are distinctive. The subspecies M. a. krishnarajui of the Eastern Ghats has a darker russet tail and rump than the Himalayan nominate subspecies. Specimens measure 12–13 cm (4.7–5.1 in) in length, with a head of 39–44 mm (1.5–1.7 in), and a tail of 55–61 mm (2.2–2.4 in).",
		image_url: "ABBOTTS BABBLER/ABBOTTS BABBLER-3.jpg"
	},
	{
		bird_name: "ABBOTTS BABBLER",
		fact: "In South Asia, Abbott's babbler is resident from Nepal to Arunachal Pradesh and the Assam Valley in India, south throughout the South Assam hills, including Meghalaya and south through the Lushai Hills. It is also resident in east and south Bangladesh (around Jessore and Khulna), and the Eastern Ghats in northeast Andhra Pradesh and Odisha. It occurs up to 600 m (2,000 ft), 275 m (902 ft) in Nepal. It is widely distributed across Southeast Asia.",
		image_url: "ABBOTTS BABBLER/ABBOTTS BABBLER-4.jpg"
	}
];

const OneBird = () => {


	return (
		<>
			<HeaderPanel>
				<HeaderText>One Bird</HeaderText>
			</HeaderPanel>
			{factCards.map((factCard) => (
				<FactCardThumbnail key={uuid()} factCard={factCard} />
			))}
		</>
	);
};

export default OneBird;
