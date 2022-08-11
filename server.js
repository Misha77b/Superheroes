const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();
app.use(cors());
app.use(bodyParser.json());

const teams = [{
  id: 1,
  name: 'Atalanta',
  city: 'Bergamo',
  coachId: 2,
  players: [
    'Ruslan Malinovskiy',
    'Musso Almatov',
    'Sapata Masata'
  ]
},
{
  id: 2,
  name: 'Milan',
  city: 'Milan',
  coachId: 1,
  players: [
    'Paulo Maldini',
    'Andreo Pirlo',
    'Zlatan Ibragimovich'
  ]
}]

const coaches = [
  {
    id: 1,
    name: 'Andriy Shevchenko',
    age: 45,
    nationality: 'Ukrainian'
  },
  {
    id: 2,
    name: 'Vitya Victor',
    age: 78,
    nationality: 'Gondurasian'
  },
  {
    id: 3,
    name: 'Harry Potter',
    age: 11,
    nationality: 'British'
  }
]

app.delete('/team/:id', function (req, res) {
  const id = req.params.id;
  
  const index = teams.findIndex((team) => {
    return team.id === Number(id);
  });
  const teamToRemove = teams[index];
  teams.splice(index, 1);

  setTimeout(() => {
    res.send(teamToRemove);
  }, 3000);
});


app.post('/team', function (req, res) {
  setTimeout(() => {
    res.send(req.body);
  }, 2000);
});

app.get('/team', function (req, res) {
  setTimeout(()=> {
    res.send(teams);
  }, 2000)
  
});

app.get('/coach', function (req, res) {
  setTimeout(()=> {
    res.send(coaches);
  }, 2000)
  
});

app.get('/coach/:id', function (req, res) {
  const coach = coaches.find((coach) => {
    return String(coach.id) === req.params.id
  });

  const team = teams.find((team) => {
    return team.coachId === coach.id
  })

  coach.team = team;

  setTimeout(()=> {
    res.send(coach);
  }, 2000)
  
});

app.patch('/team/:id', function (req, res) {
  const team = req.body;
  const id = req.params.id;

  const oldTeamIndex = teams.findIndex((team) => team.id === Number(id));
  const oldTeam = teams[oldTeamIndex];

  const newTeam = { ...oldTeam, ...team };
  teams[oldTeamIndex] = newTeam;
  setTimeout(() => {
    res.send(newTeam);
  }, 2000);
})

app.listen(3020, function () {
  console.log('Listening on 3020');
});
