import React from "react";
import "../styles/footer.css";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import edciclogo from "../assets/edcic.png";
import { FOOTER_LINKS } from "../config/navigation";
import { EMAILS, SITE, SOCIAL_LINKS } from "../config/site";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  const returnToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="footerUp">
        <div className="footerImg">
          <img src={edciclogo} alt="" />
        </div>
        <div className="footerLinks">
          <div className="footerLinksText">Site Map</div>
          <div className="footerLinks_link">
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
              {FOOTER_LINKS.map((link, index) => (
                <Button
                  key={index}
                  color="inherit"
                  component={Link}
                  to={link.url}
                  sx={{
                    textTransform: "none",
                    fontSize: "12px",
                  }}
                  onClick={returnToTop}
                  className="footer__button"
                >
                  {link.text}
                </Button>
              ))}
            </Box>
          </div>
        </div>
        <div className="footerSocials">
          <div className="socialsButtons">
            <Button
              sx={{ color: "black" }}
              component="a"
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </Button>{" "}
            <Button
              sx={{ color: "black" }}
              component="a"
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </Button>{" "}
            <Button
              sx={{ color: "black" }}
              component="a"
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </Button>{" "}
            <Button
              sx={{ color: "black" }}
              component="a"
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
            </Button>
          </div>
          <p className="footerSocialsText">{EMAILS.pr}</p>
        </div>
      </div>
      <div className="footerDown">
        <p className="edcCopyright">{SITE.copyright} </p>
      </div>
    </div>
  );
}

export default Footer;
