import { Grid, Stack, TextField, Button } from '@mui/material';
import { Formik } from 'formik';
import { useNavigate } from 'react-router';
import WelcomeBanner from 'sections/dashboard/WelcomeBanner';
import { post } from 'utils/axios';

const VideoForm = () => {
  const navigate = useNavigate();

  return (
    <Grid container rowSpacing={4.5} columnSpacing={3}>
      <Grid item xs={12}>
        <WelcomeBanner />
      </Grid>

      <Grid item xs={12}>
        <Formik
          initialValues={{
            link: ''
          }}
          onSubmit={async (values, _) => {
            try {
              const params = { url: values.link };
              await post(['/api/videos', params]);
              navigate('/');
            } catch (error) {
              console.error('Error: ', error);
            }
          }}
        >
          {(props) => (
            <form noValidate onSubmit={props.handleSubmit}>
              <Stack spacing={1}>
                <TextField
                  type="link"
                  fullWidth
                  value={props.values.link}
                  name="link"
                  onChange={props.handleChange}
                  id="link"
                  placeholder="Youtube link"
                />
                <Button variant="contained" type="submit" sx={{ width: 75 }}>
                  Submit
                </Button>
              </Stack>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default VideoForm;
