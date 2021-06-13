import { Quiz } from '../model/Quiz';

export const data = {
  quizzes: [
    {
      id: 1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/4e/Wojewodztwa.svg',
      name: 'Stolice województw',
      questions: [
        {
          id: 1,
          name: 'Stolicą województwa kujawsko-pomorskiego jest?',
          correct: 1,
          options: [
            {
              name: 'Bydgoszcz',
              id: 1,
            },
            {
              name: 'Włocławek',
              id: 2,
            },
            {
              name: 'Grudziądz',
              id: 3,
            },
            {
              name: 'Inowrocław',
              id: 4,
            },
          ],
        },

        {
          id: 2,
          name: 'Stolicą województwa lubuskiego jest?',
          correct: 2,
          options: [
            {
              name: 'Babimost',
              id: 1,
            },
            {
              name: 'Gorzów Wielkopolski',
              id: 2,
            },
            {
              name: 'Kostrzyn nad Odrą',
              id: 3,
            },
            {
              name: 'Krosno Odrzańskie',
              id: 4,
            },
          ],
        },

        {
          id: 3,
          name: 'Stolicą województwa małopolskiego jest?',
          correct: 4,
          options: [
            {
              name: 'Tarnów',
              id: 1,
            },
            {
              name: 'Oświęcim',
              id: 2,
            },
            {
              name: 'Nowy Sącz',
              id: 3,
            },
            {
              name: 'Kraków',
              id: 4,
            },
          ],
        },

        {
          id: 4,
          name: 'Stolicą województwa zachodniopomorskiego jest?',
          correct: 3,
          options: [
            {
              name: 'Świnoujście',
              id: 1,
            },
            {
              name: 'Koszalin',
              id: 2,
            },
            {
              name: 'Szczecin',
              id: 3,
            },
            {
              name: 'Gdańsk',
              id: 4,
            },
          ],
        },
      ],
    },

    {
      id: 2,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg',
      name: 'Wiedza o UE',
      questions: [
        {
          id: 1,
          name: 'Jednym z założycieli UE to',
          correct: 1,
          options: [
            {
              name: 'Holandia',
              id: 1,
            },
            {
              name: 'Wielka brytania',
              id: 2,
            },
            {
              name: 'Portugalia',
              id: 3,
            },
            {
              name: 'Hiszpania',
              id: 4,
            },
          ],
        },

        {
          id: 2,
          name: 'Pierwotna nazwa UE to',
          correct: 2,
          options: [
            {
              name: 'Wspólnota Europejska',
              id: 1,
            },
            {
              name: 'Europejska Wspólnota Węgla i Stali',
              id: 2,
            },
            {
              name: 'Europejska Wspólnota Gospodarcza i Walutowa',
              id: 3,
            },
            {
              name: 'Strefa Schengen',
              id: 4,
            },
          ],
        },

        {
          id: 3,
          name: 'Polska należy do UE od roku',
          correct: 3,
          options: [
            {
              name: '1990',
              id: 1,
            },
            {
              name: '2000',
              id: 2,
            },
            {
              name: '2004',
              id: 3,
            },
            {
              name: '2008',
              id: 4,
            },
          ],
        },

        {
          id: 4,
          name: 'Ile posłów mieści Parlament Europejski?',
          correct: 4,
          options: [
            {
              name: '1024',
              id: 1,
            },
            {
              name: '863',
              id: 2,
            },
            {
              name: '512',
              id: 3,
            },
            {
              name: '705',
              id: 4,
            },
          ],
        },

        {
          id: 5,
          name: 'Co symbolizuje tych 12 złotych gwiazd na błękitnym tle?',
          correct: 2,
          options: [
            {
              name: 'Liczbę krajów, które należały do UE, kiedy projektowano flagę',
              id: 1,
            },
            {
              name: 'Ideały jedności, solidarności i harmonii łączące narody Europy',
              id: 2,
            },
            {
              name: 'Krąg wiedzy i prawdy',
              id: 3,
            },
            {
              name: 'Królewski status krajów należących do UE',
              id: 4,
            },
          ],
        },

        {
          id: 6,
          name: 'Ile języków urzędowych obowiązuje w UE?',
          correct: 3,
          options: [
            {
              name: '32',
              id: 1,
            },
            {
              name: '10',
              id: 2,
            },
            {
              name: '24',
              id: 3,
            },
            {
              name: '52',
              id: 4,
            },
          ],
        },
      ],
    },
  ] as Quiz[],
};
