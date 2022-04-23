import { useState } from "react";
import { Container, ListResult, ListItemsResult, Title, DrawTeams, FormList, TextAreaList } from "../styles/home";

export default function Home() {
  // const arrA = ['Lailson', 'Suanderson', 'Nando', 'Rafael', 'Bito', 'Rodrigo', 'Anderson', 'Bruno', 'Sorin', 'Matheus', 'Deda', 'Serginho', 'Arthur', 'Vinicius', 'Dede', 'Joma', 'Hulk', 'Original', 'Diego', 'Edinho', 'Felipe'];
  const [result, setResult] = useState<string[]>([]) 
  const [nameList, setNameList] = useState<string>() 

  function shuffleTeam(arr: string[]) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  const arrayListName = nameList?.split(/\n/)
  function drawTeams() {
    if(arrayListName) {
      shuffleTeam(arrayListName)
      
      const splitTeams = arrayListName.reduce((acc: string[], item, index) => {
        const team = Math.floor(index / 5);
        acc[team] = [...(acc[team] || []), item];
        return acc;
      }, []) ;
  
      setResult(splitTeams)
    } else {
      alert('Digite o nome dos jogadores')
    }
  }

  return (
    <Container>
      <Title>Sorteio de Times</Title>
      <DrawTeams>
        <FormList>
          <TextAreaList 
            autoFocus 
            placeholder='Digite um jogador por linha'
            name="" 
            id="" 
            value={nameList} 
            onChange={(e => setNameList(e.target.value))}
            required 
          />
        </FormList>
        <button onClick={drawTeams}>Sortear</button>
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


