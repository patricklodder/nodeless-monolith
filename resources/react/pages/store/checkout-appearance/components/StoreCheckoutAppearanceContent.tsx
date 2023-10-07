import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Button,
  Paper,
  Grid,
  Divider,
  InputBase,
  InputLabel,
  FormControl,
} from "@mui/material";
import { StoreContext } from "../../../../contexts/store/StoreContext";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../../hooks/useFetch";
import { message } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { SecondaryContainedButton } from "../../../components/custom-components/Button";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { alpha, styled } from "@mui/material/styles";
import { ChromePicker } from "react-color";

const Item = styled(Paper)(() => ({
  backgroundColor: "#F7F7F7",
  padding: "30px",
  borderRadius: "8px",
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
    marginBottom: "10px",
    fontWeight: "600",
    fontSize: "16px",
    color: "#9CA3AF",
  },
  "& .MuiInputBase-input": {
    borderRadius: "6px",
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid #D1D5DB;",
    fontSize: "14px",
    padding: "10px 15px",
    marginTop: "10px",
    color: "#4B5563",
    height: "20px",
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: "#FF956B",
    },
  },
}));

const StoreCheckoutAppearanceContent = () => {
  const [isEditable, setIsEditable] = React.useState(false);
  const { storeId } = useParams<{ storeId: string }>();

  const { store } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const [storeData, setStoreData] = React.useState({
    bg_color: "",
    text_color: "",
    highlight_color: "",
  });

  const [currentSelection, setCurrentSelection] = React.useState("bg_color");

  React.useEffect(() => {
    setStoreData({
      bg_color: store?.settings?.bg_color || "",
      text_color: store?.settings?.text_color || "",
      highlight_color: store?.settings?.highlight_color || "",
    });
  }, [store]);

  const updateStoreCheckoutSettings = async (payload) => {
    const response = await useFetch("/stores/" + storeId, payload, "PUT");

    return response;
  };

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setCurrentSelection(event.target.name);
    setStoreData({
      ...storeData,
      [event.target.name]: event.target.value,
    });
  };

  const { mutateAsync, isLoading } = useMutation(updateStoreCheckoutSettings, {
    onSuccess: () => {
      queryClient.invalidateQueries(["stores"]);
      message.success("Settings saved successfully");
    },
    onError: (error: any) => {
      message.error(
        error?.response?.data?.message || "Error updating settings"
      );
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mutateAsync({
      ...store,
      settings: {
        text_color: storeData.text_color,
        highlight_color: storeData.highlight_color,
        bg_color: storeData.bg_color,
      },
    });
  };

  return (
    <Box sx={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2} sx={styles.settingsLabel}>
          <Typography sx={styles.headerText}>Settings</Typography>
        </Grid>

        <Grid item xs={12} md={10}>
          <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
            <Item elevation={0} sx={{ position: "relative" }}>
              <Typography sx={styles.smallScreenHeaderText}>
                Settings
              </Typography>

              <IconButton
                sx={styles.editIcon}
                size="small"
                onClick={() => setIsEditable(true)}
              >
                <DriveFileRenameOutlineIcon fontSize="small" />
              </IconButton>

              {isEditable && (
                <Box sx={styles.colorPicker}>
                  <ChromePicker
                    color={
                      currentSelection == "bg_color"
                        ? storeData?.bg_color
                        : currentSelection == "text_color"
                        ? storeData?.text_color
                        : storeData?.highlight_color
                    }
                    onChangeComplete={(color) => {
                      setStoreData({
                        ...storeData,
                        [currentSelection]: color.hex,
                      });
                    }}
                  />
                </Box>
              )}

              <Box>
                {isEditable ? (
                  <Stack direction="row">
                    <Box sx={styles.formItem}>
                      <FormControl variant="standard">
                        <InputLabel
                          shrink
                          //@ts-ignore
                          color="gray"
                          sx={styles.textFieldLabel}
                        >
                          Background Color
                        </InputLabel>

                        <BootstrapInput
                          name="bg_color"
                          autoFocus
                          required
                          fullWidth
                          size="small"
                          type="text"
                          onChange={handleChange}
                          value={storeData?.bg_color}
                        />
                      </FormControl>
                    </Box>

                    <Box
                      onClick={() => setCurrentSelection("bg_color")}
                      role="button"
                      sx={{
                        ...styles.colorContainer,
                        background: storeData.bg_color,
                      }}
                    />
                  </Stack>
                ) : (
                  <>
                    <Typography sx={styles.label}>Background Color</Typography>
                    <Stack direction="row">
                      <Typography sx={styles.value}>
                        {storeData?.bg_color}
                      </Typography>
                      <Box
                        sx={{
                          height: "22px",
                          width: "22px",
                          background: storeData.bg_color,
                          marginLeft: "10px",
                        }}
                      />
                    </Stack>
                  </>
                )}

                <Divider
                  sx={{ ...styles.divider, width: isEditable ? "40%" : "100%" }}
                />
              </Box>

              <Box>
                {isEditable ? (
                  <Stack direction="row">
                    <Box sx={styles.formItem}>
                      <FormControl variant="standard">
                        <InputLabel
                          shrink
                          //@ts-ignore
                          color="gray"
                          sx={styles.textFieldLabel}
                        >
                          Text Color
                        </InputLabel>

                        <BootstrapInput
                          name="text_color"
                          required
                          fullWidth
                          size="small"
                          type="text"
                          onChange={handleChange}
                          value={storeData.text_color}
                        />
                      </FormControl>
                    </Box>

                    <Box
                      onClick={() => setCurrentSelection("text_color")}
                      role="button"
                      sx={{
                        ...styles.colorContainer,
                        background: storeData.text_color,
                      }}
                    />
                  </Stack>
                ) : (
                  <>
                    <Typography sx={styles.label}>Text Color</Typography>
                    <Stack direction="row">
                      <Typography sx={styles.value}>
                        {storeData?.text_color}
                      </Typography>
                      <Box
                        sx={{
                          height: "22px",
                          width: "22px",
                          background: storeData.text_color,
                          marginLeft: "10px",
                        }}
                      />
                    </Stack>
                  </>
                )}

                <Divider
                  sx={{ ...styles.divider, width: isEditable ? "40%" : "100%" }}
                />
              </Box>

              <Box>
                {isEditable ? (
                  <Stack direction="row">
                    <Box sx={styles.formItem}>
                      <FormControl variant="standard">
                        <InputLabel
                          shrink
                          //@ts-ignore
                          color="gray"
                          sx={styles.textFieldLabel}
                        >
                          Highlight Color
                        </InputLabel>

                        <BootstrapInput
                          name="highlight_color"
                          required
                          fullWidth
                          size="small"
                          type="text"
                          onChange={handleChange}
                          value={storeData.highlight_color}
                        />
                      </FormControl>
                    </Box>

                    <Box
                      onClick={() => setCurrentSelection("highlight_color")}
                      role="button"
                      sx={{
                        ...styles.colorContainer,
                        background: storeData.highlight_color,
                      }}
                    />
                  </Stack>
                ) : (
                  <>
                    <Typography sx={styles.label}>Highlight Color</Typography>
                    <Stack direction="row">
                      <Typography sx={styles.value}>
                        {storeData?.highlight_color}
                      </Typography>
                      <Box
                        sx={{
                          height: "22px",
                          width: "22px",
                          background: storeData.highlight_color,
                          marginLeft: "10px",
                        }}
                      />
                    </Stack>
                  </>
                )}

                <Divider
                  sx={{ ...styles.divider, width: isEditable ? "40%" : "100%" }}
                />
              </Box>

              <Box sx={styles.footer}>
                {isEditable && (
                  <Button
                    sx={styles.cancelButton}
                    onClick={() => setIsEditable(false)}
                  >
                    Cancel
                  </Button>
                )}

                <Box
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },
                  }}
                >
                  <SecondaryContainedButton
                    text="Save"
                    styles={
                      isEditable ? styles.saveButton : styles.disabledSaveButton
                    }
                    disabled={isLoading}
                    type="submit"
                  />
                </Box>
              </Box>
            </Item>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  colorPicker: {
    position: "absolute",
    right: 150,
    top: 70,
  },
  colorContainer: {
    cursor: "pointer",
    height: "35px",
    width: "35px",
    marginTop: "35px",
    marginLeft: "20px",
    borderRadius: "5px",
  },
  settingsLabel: {
    display: {
      xs: "none",
      md: "block",
    },
  },
  deleteButton: {
    color: "#E02424",
    textTransform: "none",
    textDecoration: "underline",
  },
  formItem: {
    marginBottom: "10px",
  },
  textFieldLabel: {
    marginBottom: "10px",
    fontWeight: "600",
    fontSize: "16px",
    color: "#9CA3AF",
  },
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "right",
    marginTop: "30px",
  },
  divider: {
    margin: "20px 20px 20px 0",
  },
  label: {
    color: "#9CA3AF",
    marginBottom: "15px",
    fontSize: "14px",
    fontWeight: "600",
  },
  value: {
    color: "#FF7847",
    marginBottom: "15px",
    fontSize: "146x",
    fontWeight: "600",
    marginLeft: "10px",
  },
  container: {
    marginTop: "40px",
  },
  headerText: {
    color: "#6B7280",
    fontSize: {
      xs: "16px",
      md: "16px",
    },
    fontWeight: "600",
    lineHeight: "100%",
    marginTop: "20px",
    marginLeft: "10px",
    marginBottom: "300px",
  },
  smallScreenHeaderText: {
    color: "#F04200",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "100%",
    marginTop: "10px",
    marginBottom: "30px",
    display: {
      md: "none",
    },
  },
  saveButton: {
    width: "120px",
    height: "42px",
  },
  disabledSaveButton: {
    width: "120px",
    height: "42px",
    background: "#D1D5DB",
    cursor: "not-allowed",
    "&:hover": {
      background: "#D1D5DB",
    },
    display: {
      xs: "none",
      md: "flex",
    },
  },
  editIcon: {
    position: "absolute",
    right: 30,
    top: 20,
    background: "#FFECE3",
    color: "#FF5A1F",
    "&:hover": {
      background: "#FFECE3",
      color: "#FF5A1F",
    },
    display: {
      xs: "none",
      md: "block",
    },
    padding: "2px 5px",
  },
  cancelButton: {
    borderRadius: "6px",
    color: "#4B5563",
    textTransform: "none",
    fontSize: "13px",
    fontWeight: "600",
    border: "1px solid #9CA3AF",
    height: "42px",
    width: "120px",
    marginRight: "20px",
    "&:hover": {
      color: "#4B5563",
      border: "1px solid #4B5563",
      background: "#D1D5DB",
    },
  },
};

export default StoreCheckoutAppearanceContent;
