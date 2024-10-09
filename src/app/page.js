import useState from "react";
import {
  Box,
  List,
  ListItem,
  Container,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const navWidhth = 240;
const navItems = ["Home", "About", "Booking", "Delivery"];

function drawerApp() {
  const { window } = props;
  const [isMobile, setIsMobile] = useState(false);
}

const drawer = (
  <Box sx={{ bgcolor: "#cdf5f5", height: "100vh", padding: 10 }}>
    <Typography variant="h5" sx={{ color: "black" }}>
      FreshThreads
    </Typography>
    <Divider />
    <List>
      {navItems.map(
        (
          item //the arrows are used to write js functions
        ) => (
          <ListItem key={item}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
  </Box>
);
//function that 
function handleDrawerApp() {
  setIsMobile((prevState) => !prevState);
}
export default function Home() {
  return <Container maxWidth="xl"></Container>;
}
