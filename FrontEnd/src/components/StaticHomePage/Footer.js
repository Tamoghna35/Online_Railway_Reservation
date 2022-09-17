import React from "react";
import { connect } from "react-redux";

export const Footer = (props) => {
  return (
    <footer>
      <div className="page-wrapper">
        <div id="waterdrop"></div>
        <footer>
          <div className="footer-top">
            <table>
              <tr>
                <td align="center">
                  <p  style={{float: "center"}}>
                    {" "}
                    &nbsp
                    <a href="home.php">Home</a>|
                    <a href="trainschedule.php">Train Schedule</a>|
                    <a href="stays.php">Stays</a>|
                    <a href="historical.php">Attractions</a>|
                    <a href="pnrcheck.php">PNR Enquiry</a>|
                    <a href="Contact us.php">Contact Us</a>
                  </p>
                </td>
                <td>
                  <p>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp © IRBMS</p>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <p>&nbsp &nbsp+91 888-888-8888</p>
                </td>
                <td>
                  <p>
                    <a href="mailto:support@irbms.com">support@irbms.com</a>
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </footer>
      </div>
    </footer>
  );
};