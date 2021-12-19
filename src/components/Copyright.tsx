import { Link, Typography } from "@material-ui/core";

export const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://google.com">
          Smlr 
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }