import Image from "next/image";
import preload from "../../public/images/shutter3_11zon.jpg";

export const useHero = (
  pText: string,
  h2Text: string,
  hero: string,
  caption: string,
  line: string
): JSX.Element => {
  return (
    <div className={hero}>
      <div style={{ display: "none" }}>
        <Image
          src={preload}
          alt="preload"
          quality={100}
          priority={true}
          width={20}
          height={20}
        />
      </div>
      <div className={caption}>
        <div className={line}></div>
        <div>
          <h2>{h2Text}</h2>
        </div>
        <div>
          <p>{pText}</p>
        </div>
      </div>
    </div>
  );
};
