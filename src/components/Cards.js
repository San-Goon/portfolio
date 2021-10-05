import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

import GitHubIcon from "@material-ui/icons/GitHub";
import OndemandVideoRoundedIcon from "@material-ui/icons/OndemandVideoRounded";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontWeight: 600,
    padding: theme.spacing(2),
    whiteSpace: "pre-wrap",
  },
  cover: {
    width: "100%",
    height: "",
    backgroundSize: "cover !important",
  },
  title: {
    paddingTop: theme.spacing(2),
    fontWeight: 600,
  },
  description: {
    padding: theme.spacing(2),
  },
  stack: {
    width: "100%",
    bottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    right: 0,
  },
  chip: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  boxstyle: {
    overflow: "hidden",
    width: "370px",
    margin: "auto",
    marginBottom: "16px",
    backgroundColor: "white",
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [value, setValue] = useState("recents");

  const handleChange = (event) => {
    setValue(event.target.innerText);
  };

  return (
    <div>
      <div className="card-container ">
        <div className="left"></div>
        <div className="right"></div>
        <div className="card">
          <div className="front">
            <div
              className="cover"
              style={{ background: `url("/${props.img}") center` }}
            ></div>
            <Typography variant="h4" align="center" className={classes.title}>
              {props.name}
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle}
            >
              {props.subtitle}
            </Typography>
            <Typography variant="body2" className={classes.description}>
              {props.description}
            </Typography>
            <Box className={classes.stack}>
              <Typography variant="body1" display="block">
                #기술스택{" "}
              </Typography>
              <Box justifyContent="space-between" display="block">
                {props.stacks &&
                  props.stacks.map((item) => (
                    <Chip
                      key={item}
                      className={classes.chip}
                      avatar={<Avatar src={`${item}.png`} />}
                      label={item}
                      clickable
                      color="primary"
                    />
                  ))}
              </Box>
            </Box>
          </div>
        </div>
      </div>
      <div>
        <Box
          onMouseLeave={() => setValue("")}
          textAlign="center"
          className={classes.boxstyle}
          borderRadius={16}
          boxShadow={4}
        >
          <BottomNavigation value={value}>
            <BottomNavigationAction
              onMouseEnter={handleChange}
              label="Demo"
              value="Demo"
              href={props.deployed_url}
              target="_blank"
              rel="noopener noreferrer"
              icon={<OndemandVideoRoundedIcon />}
            />
            <BottomNavigationAction
              onMouseEnter={handleChange}
              label="Github"
              value="Github"
              href={props.github_url}
              target="_blank"
              rel="noopener noreferrer"
              icon={<GitHubIcon />}
            />
          </BottomNavigation>
        </Box>
      </div>
    </div>
  );
}
