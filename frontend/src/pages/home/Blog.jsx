// NPM Packages
import React from "react";
// Project files
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
// Project styiling from material ui
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import "fontsource-roboto";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "TalkBench",
  description:
    "Thinking of career switching? Wondering if a new job in IT field is just what you need? Then TalkBench is for you!",
  image:
    "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  imgText: "main image description",
};

const featuredPosts = [
  {
    title: "Career Change Tips: Engage in Online Communities",
    date: "April 17",
    description:
      " Not just to network with the hopes of applying for a particular role, but also just general people who I thought might be willing to chat, share their experience, and give me any advice or tips on breaking into a particular industry...",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--GFwSgNIx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/fbpw79qekpfnhuji73me.jpg",
    imageText: "Image Text",
    url:
      "https://dev.to/ruannawrites/career-change-tips-part-3-engage-in-online-communities-2j6o",
  },
  {
    title: "Switching Careers into IT: A How-To Guide",
    date: "April 18",
    description:
      "Switching to a career in IT is within your reach, even if it may seem daunting. Anyone with the desire to get an IT job can find one that suits their unique skills, talents and interests. There's a good chance that many of the soft skills...",
    image:
      "https://www.comptia.org/images/default-source/Pioneer-Article-Images/HowGetIntoIT.jpg",
    imageText: "Image Text",
    url: "https://www.comptia.org/career-change/switching-career-path/how-to",
  },
];



export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header title="Blog" sections={sections} /> */}
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <div className="AvatarWrap">
            <Typography variant="h5" align="center" color="primary">
              Or inspire yourself with a few useful links for career shifters:
            </Typography>
          </div>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}></Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
