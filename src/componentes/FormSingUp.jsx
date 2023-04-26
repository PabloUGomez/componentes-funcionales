import { useState } from 'react';
import { 
    TextField,
    Switch,
    Button,
    FormGroup,
    FormControlLabel
} from '@mui/material';

function FormSingUp(props) {

    const {handleSubmit} = props;
    const [name,setName] = useState('');
    const [apellido,setApellido] = useState('');
    const [email,setEmail] = useState('');
    const [promocion,setPromocion] = useState(true);
    const [notificacion,setNotificacion] = useState(false);

    const [errors,setErrors] = useState({
        name: {
            error: false,
            messase: "Deben ser al menos 3 caracteres"
        }
    })
    
    function validarNombre(nombre){
        if (nombre.length >= 3) {
            return {name: {
                error: false,
                messase: ""
            }}
        }else{
            return {name: {
                error: true,
                messase: "Deben ser al menos 3 caracteres"
            }}
        }
    }

    return <form 
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmit({
                    name,
                    apellido,
                    email,
                    promocion,
                    notificacion
                })
            }}>
        <TextField 
            id='name' 
            label="Nombre" 
            variant="outlined"
            fullWidth
            required
            margin='normal'
            onChange={(e) => {
                setName(e.target.value);
            }}
            error = {errors.name.error}
            helperText= {errors.name.error ? errors.name.messase : ""}
            onBlur={(e) => {
                setErrors(
                    validarNombre(e.target.value)
                )
            }}
        />
        <TextField 
            id='apellido' 
            label="Apellido" 
            variant="outlined"
            fullWidth
            required
            margin='normal'
            onChange={(e) => {
                setApellido(e.target.value);
            }}
        />
        <TextField 
            id='email' 
            label="Email" 
            type='email'
            variant="outlined"
            fullWidth
            required
            margin='normal'
            onChange={(e) => {
                setEmail(e.target.value);
            }}
        />
        <FormGroup>
            <FormControlLabel 
                control={
                    <Switch 
                        checked={promocion}
                        onChange={(e) => {
                            setPromocion(e.target.checked);
                        }}
                    />
                } 
                label="Promociones"
            />
            <FormControlLabel 
                control={
                    <Switch 
                        checked={notificacion}
                        onChange={(e) => {
                            setNotificacion(e.target.checked);
                        }}
                    />
                } 
                label="Notificaciones"
            />
        </FormGroup>
        <Button variant='contained' type="submit"> Registrarse</Button>
    </form>;
}

export default FormSingUp;