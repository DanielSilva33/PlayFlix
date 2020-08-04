import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {

    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([  ]);
    const [values, setValues] =  useState(valoresIniciais);
    

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function hendleChange(infosDoEvento) {
        setValue(
          infosDoEvento.target.getAttribute('name'),
          infosDoEvento.target.value
        );
      }

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome} </h1>


            <form onSubmit={function hendleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>


                <FormField
                    label="Nome da categoria: "
                    type="text"
                    name="nome"  
                    value={values.nome}
                    onChange={hendleChange}
                />

                <div>
                    <label>
                    Descrição: 
                    <textarea
                        type="textarea"
                        value={values.descricao}
                        name="descricao"
                        onChange={hendleChange}
                    />
                    </label>
                </div>

                <FormField
                    label="Cor: "
                    type="color"
                    name="cor" 
                    value={values.color}
                    onChange={hendleChange}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>
            
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;