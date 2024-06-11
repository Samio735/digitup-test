import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

export default function UsePagination() {
  const { items } = usePagination({
    count: 5,
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <Button
                variant="contained"
                className="mx-4"
                color={selected ? "primary" : "secondary"}
                sx={{
                  boxShadow: "none",
                  textTransform: "none",
                  margin: "0 2px",
                  minWidth: "35px",
                  borderRadius: 2,
                }}
                style={{
                  fontWeight: selected ? "bold" : undefined,
                  width: "20px",
                }}
                {...item}
              >
                <p>{page}</p>
              </Button>
            );
          } else {
            children = (
              <Button
                {...item}
                variant="contained"
                color="secondary"
                sx={{ boxShadow: "none", textTransform: "none" }}
              >
                {type}
              </Button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}
