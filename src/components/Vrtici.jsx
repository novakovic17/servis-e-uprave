import React from 'react';

const vrtici = [
    {
      id: 1,
      ime: 'Vrtić Bajka',
      adresa: 'Ulica 123, Beograd',
      opis: 'Vrtić Bajka pruža kvalitetan program za decu uzrasta od 2 do 5 godina. Fokusiramo se na razvoj kreativnosti, socijalnih veština i motorike.',
    },
    {
      id: 2,
      ime: 'Vrtić Sunce',
      adresa: 'Neka ulica 456, Beograd',
      opis: 'Vrtić Sunce nudi obrazovne aktivnosti za decu uzrasta od 3 do 6 godina. Naš tim stručnjaka pruža podršku u razvoju emocionalne inteligencije i kognitivnih veština.',
    },
    {
      id: 3,
      ime: 'Vrtić Zvezdica',
      adresa: 'Prozorska ulica 789, Beograd',
      opis: 'Vrtić Zvezdica je specijalizovan za rad sa decom sa posebnim potrebama. Pružamo individualizovan pristup i podršku u razvoju svakog deteta.',
    },
    {
      id: 4,
      ime: 'Vrtić Vesela Panda',
      adresa: 'Srećna ulica 10, Beograd',
      opis: 'Vrtić Vesela Panda pruža veselo okruženje i edukativne aktivnosti za decu uzrasta od 2 do 4 godine. Naš tim vaspitača prati svaki korak u njihovom razvoju.',
    },
    {
      id: 5,
      ime: 'Vrtić Maštarija',
      adresa: 'Sanjarska ulica 15, Beograd',
      opis: 'Vrtić Maštarija podstiče maštovitu igru i kreativnost kod dece uzrasta od 3 do 5 godina. Naš prostor je opremljen raznovrsnim igračkama i materijalima.',
    },
  ];
  

const Vrtici = () => {
  return (
    <div>
      <h2>Vrtići u Beogradu</h2>
      <table>
        <thead>
          <tr>
            <th>Ime</th>
            <th>Adresa</th>
            <th>Opis</th>
          </tr>
        </thead>
        <tbody>
          {vrtici.map((vrtic) => (
            <tr key={vrtic.id}>
              <td>{vrtic.ime}</td>
              <td>{vrtic.adresa}</td>
              <td>{vrtic.opis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vrtici;
