import styles from "./index.module.css";
import "react-slideshow-image/dist/styles.css";
import { useHero } from "../../helpers/hooks/useHero";

const FormsPage = () => {
  return (
    <div className={styles.contact}>
      {useHero("", "Forms", styles.hero, styles.caption, styles.line)}
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
            <tr>
              <td>Client Intake Form</td>
              <td>Capture client details for personalized service.</td>
              <td style={{ textDecoration: "underline" }}>
                <a href="./files/client-intake-form.docx" target="_blank">
                  Download
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { FormsPage };
