import { Container, List, ListItem, ListItemText, Card } from "@mui/material";

export default function Home() {
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Card
        sx={{
          minWidth: 200,
          maxHeight: 500,
          height: "100%",
          overflow: "hidden",
        }}
      >
        <List sx={{ overflowY: "auto", height: "100%" }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Item ${index + 1}`}
                secondary="Secondary text"
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </Container>
  );
}
