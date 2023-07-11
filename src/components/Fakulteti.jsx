import React from 'react';
const fakulteti = [
    {
      id: 1,
      naziv: 'Univerzitet u Beogradu',
      lokacija: 'Beograd',
      opis: 'Univerzitet u Beogradu je najstariji i najveći univerzitet u Srbiji. Nudi širok spektar studijskih programa u različitim oblastima.',
    },
    {
      id: 2,
      naziv: 'Univerzitet u Novom Sadu',
      lokacija: 'Novi Sad',
      opis: 'Univerzitet u Novom Sadu je drugi po veličini univerzitet u Srbiji. Poznat je po kvalitetnom nastavnom osoblju i raznovrsnim studijskim programima.',
    },
    {
      id: 3,
      naziv: 'Univerzitet u Nišu',
      lokacija: 'Niš',
      opis: 'Univerzitet u Nišu je univerzitet sa sedištem u Nišu, Srbija. Nudi studijske programe iz različitih oblasti, a posebno je poznat po tehničkim fakultetima.',
    },
    {
      id: 4,
      naziv: 'Univerzitet u Kragujevcu',
      lokacija: 'Kragujevac',
      opis: 'Univerzitet u Kragujevcu je državni univerzitet smešten u Kragujevcu, Srbija. Sa više od 100 godina tradicije, nudi različite studijske programe.',
    },
    {
      id: 5,
      naziv: 'Univerzitet umetnosti u Beogradu',
      lokacija: 'Beograd',
      opis: 'Univerzitet umetnosti u Beogradu je specijalizovana visokoškolska ustanova koja nudi studijske programe iz oblasti umetnosti, dizajna, muzike, pozorišta i filmova.',
    },
  ];
  
const Fakulteti = () => {
  return (
    <div>
      <h1>Fakulteti</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Naziv</th>
            <th>Lokacija</th>
            <th>Opis</th>
          </tr>
        </thead>
        <tbody>
          {fakulteti.map((fakultet) => (
            <tr key={fakultet.id}>
              <td>{fakultet.id}</td>
              <td>{fakultet.naziv}</td>
              <td>{fakultet.lokacija}</td>
              <td>{fakultet.opis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fakulteti;
