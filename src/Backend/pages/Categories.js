import React from "react";
import { Box, Card, CardHeader, Avatar, IconButton, Grid2 } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const categories = [
  { id: 1, letter: "A", name: "Category A", price: "1500 DH" },
  { id: 2, letter: "B", name: "Category B", price: "1800 DH" },
  { id: 3, letter: "C", name: "Category C", price: "2000 DH" },
  { id: 4, letter: "D", name: "Category D", price: "2200 DH" },
  { id: 5, letter: "E", name: "Category E", price: "2200 DH" },
];

const CategoryList = () => {
  return (
    <Box sx={{ flexGrow: 7, padding: 4 }}>
        <h2 className="h2-categories">Categories</h2>
      <Grid2 container spacing={2} justifyContent="center">
        {categories.map((category) => (
          <Grid2 sx={{ width: "100%" }} key={category.id}>
            <Card sx={{ width: "100%" }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe">{category.letter}</Avatar>}
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={category.name}
                subheader={`Prix: ${category.price}`}
              />
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default CategoryList;
