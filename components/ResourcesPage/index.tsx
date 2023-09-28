import styles from "./index.module.css";
import "react-slideshow-image/dist/styles.css";
import { useHero } from "../../helpers/hooks/useHero";
import { tableAssets } from "../../helpers";

const ResourcesPage = () => {
  return (
    <div className={styles.contact}>
      {useHero("", "Resources", styles.hero, styles.caption, styles.line)}
      <div className={styles.content}>
        <table id="customers">
          <thead>
            <tr>
              <th>Form</th>
              <th>Description</th>
              <th>link</th>
            </tr>
          </thead>
          <tbody>
            {tableAssets.map((x, i) =>
              i == 5 ? (
                <tr key={i}>
                  <td>{x.form}</td>
                  <td>{x.Description}</td>
                  <td style={{ textDecoration: "underline" }}>
                    <a href={`${x.link}`} target="_blank">
                      Visit Link
                    </a>
                  </td>
                </tr>
              ) : (
                <tr key={i}>
                  <td>{x.form}</td>
                  <td>{x.Description}</td>
                  <td style={{ textDecoration: "underline" }}>
                    <a href={`${x.link}`} target="_blank">
                      Download
                    </a>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { ResourcesPage };
