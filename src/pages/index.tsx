import Head from "next/head";
import { GetServerSideProps, GetStaticProps } from "next/types";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "../components/Footer";
import { Container, ListResult, ListItemsResult, DrawTeams, FormList, TextAreaList, ParamsContainer, ParamsNumberPlayers } from "../styles/home";

export default function Home() {
  const [result, setResult] = useState<string[][]>([]) 
  const [nameList, setNameList] = useState<string>() 
  const [numberPlayers, setNumberPlayers] = useState(5) 
  
  const notifyError = () => toast.error('Digite o nome dos jogadores!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
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
    <>
    <Head>
      <title>Sorteio de Times</title>
    </Head>
    <Container>
      <img src="/logo.png" alt="Logo Sorteio de Times" />
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
          <ParamsNumberPlayers>
            <label htmlFor="players-number">Jogadores por time:</label>
            <select 
              id='players-number' 
              value={numberPlayers} 
              onChange={(e => setNumberPlayers(e.target.value as unknown as number))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </ParamsNumberPlayers>

          <button onClick={drawTeams}>Sortear</button>
        </ParamsContainer>
      </DrawTeams>

      <ListResult>
        {result.map((team, index) => {
          return (
            <ListItemsResult key={index}>
            {`Time ${index + 1 }`}
            <br/>
            <br/>
            {team.join(', ')}
          </ListItemsResult>
          )
        })}
      </ListResult>
    </Container>

    <Footer />
    </>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {}
  }
}