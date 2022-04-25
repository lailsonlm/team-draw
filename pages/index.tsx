import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Container, ListResult, ListItemsResult, Title, DrawTeams, FormList, TextAreaList, DrawButton, InputNumberPlayers, ParamsContainer } from "../styles/home";

export default function Home() {
  // const arrA = ['Lailson', 'Suanderson', 'Nando', 'Rafael', 'Bito', 'Rodrigo', 'Anderson', 'Bruno', 'Sorin', 'Matheus', 'Deda', 'Serginho', 'Arthur', 'Vinicius', 'Dede', 'Joma', 'Hulk', 'Original', 'Diego', 'Edinho', 'Felipe'];
  const [result, setResult] = useState<string[]>([]) 
  const [nameList, setNameList] = useState<string>() 
  const [numberPlayers, setNumberPlayers] = useState(5) 
  
  const notifyError = () => toast.error('Digite o nome dos jogadores', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
    });
  const notifySucess = () => toast.success('Sorteio realizado!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
    });
  
  function shuffleTeam(arr: string[]) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  const arrayListName = nameList?.length ? nameList?.length > 0 && nameList?.split(/\n/) : false
  
  function drawTeams() {
    if(arrayListName) {
      shuffleTeam(arrayListName)
      
      const splitTeams = arrayListName.reduce((acc: any[], item, index) => {
        const team = Math.floor(index / numberPlayers);
        acc[team] = [...acc[team] || [], item];
        return acc;
      }, []) ;

      notifySucess()  
      setResult(splitTeams)
      setNameList('')
    } else {
      notifyError()
    }
  }

  return (
    <Container>
      <Title>Sorteio de Times</Title>
      <ToastContainer />
      <DrawTeams>
        <FormList>
          <TextAreaList 
            autoFocus 
            placeholder='Digite um jogador por linha' 
            value={nameList} 
            onChange={(e => setNameList(e.target.value))}
            required 
          />
        </FormList>
        <ParamsContainer>
          <div>
            <label htmlFor="players-number">Qtd. de jogadores por time</label>
            <InputNumberPlayers 
              type='number' 
              id='players-number' 
              value={numberPlayers} 
              min={1}
              onChange={(e => setNumberPlayers(e.target.value as unknown as number))}
            />
          </div>

          <DrawButton onClick={drawTeams}>Sortear</DrawButton>
        </ParamsContainer>
      </DrawTeams>

      <ListResult>
        {result.map((team, index) => {
          return (
            <ListItemsResult key={index}>
              {`Time ${index + 1}: ${team}`}
            </ListItemsResult>
          )
        })}
      </ListResult>

    </Container>
  )
}


