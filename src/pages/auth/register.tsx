// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from 'sections/auth/AuthWrapper';
import FirebaseRegister from 'sections/auth/auth-forms/AuthRegister';

// ================================|| REGISTER ||================================ //

const Register = () => {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Sign up</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <FirebaseRegister />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Register;
