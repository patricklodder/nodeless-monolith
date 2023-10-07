import React from "react";
import { Box, Typography, Divider, Tooltip, IconButton } from "@mui/material";
import { LinkButton } from "../../components/custom-components/Button";
import { copyToClipboard } from "../../../utils/Utils";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CheckoutContext } from "../../../contexts/CheckoutContext";

const CheckoutLightning = () => {
  const { checkout } = React.useContext(CheckoutContext);

  return (
    <Box sx={styles.content}>
      <div>
        <a href={checkout?.lightning_link}>
          <img
            src={checkout?.lightning_qr_code}
            width={250}
            height={250}
            alt="Lightning QR Code"
            className="mx-auto"
          />
        </a>
      </div>

      <LinkButton
        styles={styles.openWithWalletButton}
        text="Open With Wallet"
        link={checkout?.lightning_link}
      />

      <Box sx={styles.inputBox}>
        <Typography sx={styles.amountBox}>
          {checkout?.store_invoice.lightning_invoice.payment_request}
        </Typography>

        <Typography
          sx={{ fontSize: "30px", marginTop: "-15px", marginLeft: "5px" }}
        >
          {" "}
          ...
        </Typography>

        <Box sx={{ display: "flex", marginLeft: "10px" }}>
          <Box>
            <Divider orientation="vertical" />
          </Box>

          <Tooltip title="Copy to clip board">
            <IconButton
              sx={styles.copy}
              onClick={() =>
                copyToClipboard(
                  checkout?.store_invoice.lightning_invoice.payment_request,
                  "Invoice copied to clipboard"
                )
              }
            >
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  inputBox: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #9CA3AF",
    borderRadius: "6px",
    alignItems: "center",
    margin: "0 auto",
    height: "45px",
    padding: "10px 20px",
    width: {
      xs: "100%",
      sm: "80%",
      md: "450px",
    },
    overflow: "hidden",
  },
  copy: {
    marginLeft: "10px",
  },
  amountBox: {
    color: "#454545",
    fontSize: "14px",
    fontWeight: "600",
    width: "80%",
    height: "100%",
    margin: "auto 0",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "1",
    lineClamp: 1,
  },
  content: {
    marginTop: "20px",
    textAlign: "center",
    justifyContent: "center",
    paddingBottom: "10px",
  },
  openWithWalletButton: {
    width: "180px",
    margin: "10px 0 30px 0",
    height: "50px",
    fontSize: "13px",
  },
};

export default CheckoutLightning;
