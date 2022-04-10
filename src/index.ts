import cors from 'cors';
import express from 'express';
import routes from './routes';
import { Request, Response } from 'express'
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(8080);



// const lista = require("./assets/lista.json");
app.get('/', (req: Request, res: Response) => {
  res.json("TESTE")
});

  // let teams: Team[] = [];

  // const listaDireita: string[] = suffle(lista.direita);
  // const listaEsquerda: string[] = suffle(lista.esquerda);

  // for (let i = 0; i < listaDireita.length; i++) {
  //   const team: Team = {
  //     playerA: {
  //       name: listaDireita[i]
  //     },
  //     playerB: {
  //       name: listaEsquerda[i]
  //     }
  //   }

  //   teams.push(team);
  // }

  // console.log(teams)


  // res.send(suffle(suffle(sortGroupsOneLeg(teams))));
// });




// function suffle(array: any[]): any[] {
//   let currentIndex = array.length;
//   let randomIndex;

//   while (currentIndex != 0) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }

// function sortGroupsOneLeg(teams: Team[]) : Match[] {
//   let matches: Match[] = [];
//   let currentIndex = 0;

//   while (currentIndex < teams.length) {
//     teams.forEach((team: Team, index: number) => {
//       if (currentIndex > index) {
//         matches.push({
//           teamA: team,
//           teamB: teams[currentIndex]
//         })
//       }
//     });

//     currentIndex++;
//   }

//   return matches;
// }


//   // return table;
