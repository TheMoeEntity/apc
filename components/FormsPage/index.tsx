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
          <tbody>
            <tr>
              <td>Client Intake Form</td>
              <td>Capture client details for personalized service.</td>
              <td style={{ textDecoration: "underline" }}>Download</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Client Intake Form</td>
              <td>Capture client details for personalized service.</td>
              <td style={{ textDecoration: "underline" }}>Download</td>
            </tr>
          </tbody>
        </table>
        {/* <div className={styles.cards}>
          <div>
            <div>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className={styles.packages}>PACKAGES</div>
            <div>Revocable Living Trust</div>
          </div>
          <div>
            <div>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className={styles.packages}>PACKAGES</div>
            <div>Wills</div>
          </div>
          <div>
            <div>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className={styles.packages}>PACKAGES</div>
            <div>Financial Powers of Attorney</div>
          </div>
          <div>
            <div>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className={styles.packages}>PACKAGES</div>
            <div>Advance Health Care Directives</div>
          </div>
          <div>
            <div>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className={styles.packages}>PACKAGES</div>
            <div>HIPPA Authorizations</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export { FormsPage };
