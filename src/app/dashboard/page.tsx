import { Container, Grid, List, ListItem, ListItemText } from "@mui/material";

export default function Home() {
  return (
    <Container component="main">
      <Grid container justifyContent="center">
        <Grid item xs="auto">
          <List>
            {Array.from({ length: 10 }).map((_, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`Item ${index + 1}`}
                  secondary="Secondary text"
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}
