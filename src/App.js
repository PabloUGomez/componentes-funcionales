import './App.css';
import FormSingUp from './componentes/FormSingUp';
import { Container,Typography } from '@mui/material';

function App() {

  const handleSubmit = (valores) => {
    console.log(valores);
  }

  return (
    <>
      <Container component="section" maxWidth="sm">
        <Typography variant='h3' align='center'>Formulario registro</Typography>
        <FormSingUp handleSubmit={handleSubmit}/>
      </Container>
    </>
  );
}

export default App;
