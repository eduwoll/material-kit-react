import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Divider
} from '@material-ui/core';
import GoogleIcon from 'src/icons/Google';
import Logo from 'src/components/Logo';

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Login | Classroom Admin</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          paddingBottom: '50px'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: 'demo@devias.io',
              password: 'Password123'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        p: 3,
                        mb: 3,
                        backgroundColor: 'primary.main',
                        textAlign: 'center'
                      }}
                    >
                      <Logo width="100" />
                      <Box margin="auto 5px">
                        <Typography align="center" color="#fff" gutterBottom variant="logo">
                          Classroom Admin
                        </Typography>
                      </Box>
                    </Box>
                    <Typography align="center" color="textPrimary" variant="h3">
                      Bem-vindo!
                    </Typography>
                    <Typography align="center" color="textPrimary" variant="body1">
                      Entre com a sua conta do Google
                    </Typography>
                  </CardContent>
                  <Box sx={{ flexGrow: 1 }} />
                  <Divider />
                  <Box sx={{ p: 2 }} margin="auto">
                    <Button
                      fullWidth
                      startIcon={<GoogleIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login com o Google
                    </Button>
                  </Box>
                </Card>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
