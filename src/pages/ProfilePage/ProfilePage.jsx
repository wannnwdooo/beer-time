import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Container, Tab } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { fetchData } from "../../API/requestsFirebase";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ProfilePageWrapper } from "./ProfilePageStyles";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { email, id } = useSelector((state) => state.user);
  const ava = useSelector((state) => state.user.avatar);
  const usernameValue = useSelector((state) => state.user.username);
  const firstnameValue = useSelector((state) => state.user.firstname);
  const lastnameValue = useSelector((state) => state.user.lastname);
  const countryValue = useSelector((state) => state.user.country);
  const preferencesValue = useSelector((state) => state.user.preferences);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (id !== undefined) {
      fetchData(id, dispatch);
    }
  }, []);

  return (
    <ProfilePageWrapper>
      <Container maxWidth="xs">
        <Box sx={{ paddingTop: 10 }}>
          <TabContext value={value}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider", color: "#351b7e" }}
            >
              <TabList
                onChange={handleChange}
                variant="fullWidth"
                centered
                aria-label="lab API tabs example"
                textColor="inherit"
                indicatorColor="secondary"
              >
                <Tab label="Avatar" value="1" />
                <Tab label="Desc" value="2" />
                <Tab label="Pref" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Avatar
                alt={email}
                src={ava}
                sx={{
                  minWidth: 250,
                  minHeight: 250,
                  margin: "0 auto",
                  border: "#351b7e solid",
                }}
              />
            </TabPanel>
            <TabPanel value="2">
              <Typography
                color="#351b7e"
                sx={{ fontSize: 32 }}
                variant="h5"
                component="span"
                gutterBottom
              >
                Name: {firstnameValue} {lastnameValue}
              </Typography>

              <Typography
                color="#351b7e"
                sx={{ fontSize: 24 }}
                variant="h5"
                component="div"
                gutterBottom
              >
                Username: {usernameValue}
              </Typography>
              <Typography
                color="#351b7e"
                variant="h6"
                component="div"
                gutterBottom
              >
                Country: {countryValue}
              </Typography>
            </TabPanel>
            <TabPanel value="3">
              <Typography
                color="#351b7e"
                variant="h6"
                component="div"
                gutterBottom
              >
                Beer preferences: {preferencesValue}
              </Typography>
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </ProfilePageWrapper>
  );
};

export default ProfilePage;
