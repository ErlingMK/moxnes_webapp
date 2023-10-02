import Image from "next/image";
import frontPagePhoto from "./front_page_photo.jpg"

export default function Home() {
    return (
        <div className={"relative"}>
            <Image src={frontPagePhoto} alt={"Picture of old couple"}/>
            <div className={"bg-black/50 md:bg-black/30 border-1 absolute top-14 mx-5 p-5 w-3/4"}>
                <p className={"text-white text-left "}>Hvordan vil du ha det i fremtiden? Hvem vil du at skal
                    opptre på dine vegne og ivareta dine økonomiske og personlige forhold?</p>
                <br/>
                <p className={"text-white text-left "}>Som et alternativ vergemålsordningen, kan du opprette en
                    fremtidsfullmakt. Denne vil legge til rette for utøvelse av selvbestemmelse, rett over eget
                    privatliv for fremtidige situasjoner der man ikke lenger er i stand til å treffe beslutninger.</p>
            </div>
        </div>
    )
}
