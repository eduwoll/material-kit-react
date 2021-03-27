import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

const states = [
  {
    value: 'ac',
    label: 'Acre'
  },
  {
    value: 'al',
    label: 'Alagoas'
  },
  {
    value: 'ap',
    label: 'Amapá'
  },
  {
    value: 'am',
    label: 'Amazonas'
  },
  {
    value: 'ba',
    label: 'Bahia'
  },
  {
    value: 'ce',
    label: 'Ceará'
  },
  {
    value: 'df',
    label: 'Distrito Federal'
  },
  {
    value: 'es',
    label: 'Espírito Santo'
  },
  {
    value: 'go',
    label: 'Goiás'
  },
  {
    value: 'ma',
    label: 'Maranhão'
  },
  {
    value: 'mt',
    label: 'Mato Grosso'
  },
  {
    value: 'ms',
    label: 'Mato Grosso do Sul'
  },
  {
    value: 'mg',
    label: 'Minas Gerais'
  },
  {
    value: 'pa',
    label: 'Pará'
  },
  {
    value: 'pb',
    label: 'Paraíba'
  },
  {
    value: 'pr',
    label: 'Paraná'
  },
  {
    value: 'pe',
    label: 'Pernambuco'
  },
  {
    value: 'pi',
    label: 'Piauí'
  },
  {
    value: 'rj',
    label: 'Rio de Janeiro'
  },
  {
    value: 'rn',
    label: 'Rio Grande do Norte'
  },
  {
    value: 'rs',
    label: 'Rio Grande do Sul'
  },
  {
    value: 'ro',
    label: 'Rondônia'
  },
  {
    value: 'rr',
    label: 'Roraima'
  },
  {
    value: 'sc',
    label: 'Santa Catarina'
  },
  {
    value: 'sp',
    label: 'São Paulo'
  },
  {
    value: 'se',
    label: 'Sergipe'
  },
  {
    value: 'to',
    label: 'Tocantins'
  }
];

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Eduardo',
    lastName: 'Woll',
    email: 'eduardo.woll@rede.ulbra.br',
    phone: '',
    state: 'rs',
    country: 'Brasil'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader="Editar suas informações" title="Perfil" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Insira seu nome"
                label="Nome"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Sobrenome"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Telefone"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="País"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Estado"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button color="primary" variant="contained">
            Salvar
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
