const usuarios = [
    {
      nome: 'Melba',
      sobrenome: 'Stein',
      idade: 15,
      temAnimalEstimacao: false,
    },
    {
      nome: 'Donovan',
      sobrenome: 'Barrera',
      idade: 18,
      temAnimalEstimacao: false,
    },
    {
      nome: 'Gross',
      sobrenome: 'Maldonado',
      idade: 25,
      temAnimalEstimacao: true,
    },
    {
      nome: 'Massey',
      sobrenome: 'Waller',
      idade: 16,
      temAnimalEstimacao: true,
    },
    {
      nome: 'Harris',
      sobrenome: 'Bowers',
      idade: 22,
      temAnimalEstimacao: true,
    },
    {
      nome: 'Roberson',
      sobrenome: 'Hancock',
      idade: 30,
      temAnimalEstimacao: false,
    },
  ];
  
  function maior18() {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].idade >= 18) {
            console.log(usuarios[i])
        }
    }
}
  maior18()