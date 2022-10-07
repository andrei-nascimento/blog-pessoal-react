import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import './ListaTema.css';

function ListaTema() {
    //trazer a função de navegação interna
    let navigate = useNavigate();

    // estado para gerenciar os temas que virão do backend
    const [temas, setTemas] = useState<Tema[]>([])

    // trazer o token do navegador para dentro do blog
    const [token, setToken] = useLocalStorage('token');

    //verificar se a pessoa tem token, se não tiver, mandar pra login
    useEffect(() => {
        if(token === '') {
            alert('Você não possui acesso, faça login para continuar')
            navigate('/login')
        }
    }, [token])

    //função que realmente vai até o backend para buscar os temas
    async function getTemas() {
        await busca('/temas', setTemas, {
            headers: {'Authorization': token}
        })
    }

    //função para disparar a busca de temas assim que a tela for carregada
    useEffect(() => {
        getTemas()
    }, [temas.length])

    return (
        <>
            {/* mapeamento do array de temas, para recriar a estrutura inteira para cada tema existente */}
            {temas.map(tema => (
                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Tema</Typography>
                            <Typography variant="h5" component="h2">{tema.descricao}</Typography>
                        </CardContent>

                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5} >
                                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary">atualizar</Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size='small'
                                            color="secondary">deletar</Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            ))}
        </>
    );
}

export default ListaTema;