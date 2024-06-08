import { Box, Breadcrumbs, Chip, Link } from "@mui/material";

export function Header() {
  return (
    <Box component="header">
      <Breadcrumbs>
        <Link href="/">
          <Chip label="Home" />
        </Link>
      </Breadcrumbs>
    </Box>
  );
}
