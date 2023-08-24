export const useHero = (
  pText: string,
  h2Text: string,
  hero: string,
  caption: string,
  line: string
): JSX.Element => {
  return (
    <div className={hero}>
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
