import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Typography } from '@material-ui/core';
import { Box, Button, Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {
    
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>('')
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate('/login')
        }
    }, [userResult])

    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(event.target.value)
    }

    function updatedModel(event: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    async function confirmar(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            try {
                await cadastroUsuario(`usuarios/cadastrar`, user, setUserResult);
                toast.success('Usuário cadastrado com sucesso. Efetue o login para acessar', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined
                });
            } catch (error) {
                toast.error('Falha ao cadastrar o usuário. Por favor, confira os campos', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined
                });
            }
        } else {
            toast.error('Senhas divergentes, ou menores que 8 caracteres. Por favor, verifique os campos', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
        }
    }
    
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' >
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form onSubmit={confirmar}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>

                            <TextField value={user.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />

                            <TextField value={user.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />

                            <TextField value={user.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                            <TextField value={confirmarSenha} onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                                    <Button type='submit' variant='contained' className='cadastrar' >
                                        Cadastrar
                                    </Button>

                            </Box>
                        </form>
                    </Box>
                </Grid>
        </Grid>
    )
}

export default CadastroUsuario;