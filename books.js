const books = [
  {
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    pdf: "https://www.suneo.mx/literatura/subidas/Miguel%20de%20Cervantes%20El%20Ingenioso%20Hidalgo%20Don%20Quijote%20de%20la%20Mancha.pdf",
    audio: "N/A"
  },
  {
    title: "La Odisea",
    author: "Homero",
    pdf: "https://drive.google.com/file/d/0B5Fl4bz-O9bgNzdmZjRlNTEtYmU3MS00NGUzLTg1NDctZjBkOTlkYzFhNmM5/view?resourcekey=0--onU7DXNz_vSy-uZ3-V5PQ",
    audio: "https://librivox.org/the-odyssey-by-homer/"
  },
  {
    title: "Este dolor no es mio",
    author: "Mark Wolynn",
    pdf: "https://drive.google.com/uc?export=download&id=1kbEsXomGLvtdD28MFL4MkWa4OYcoNA4g",
    audio: "N/A"
  },
  {
    title: "Agua y Jabon",
    author: "Marta D. Riezu",
    pdf: "https://drive.google.com/file/d/17lyEaU5XdbTZjC9pDrkmOKKo0A6ONaRz/view?usp=drive_link"
  },
  {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    pdf: "https://drive.google.com/file/d/1_D7jANQuhwbr9KdSFwh0Yy7d_IwljXbL/preview"
  },
  {
    title: "Ahora te Toca ser Feliz",
    author: "Curro Carnete",
    pdf: "https://drive.google.com/file/d/1ZokRqEu6hZYFcnAX4F9CocCeAB1bGV03/view?usp=drive_link"
  },
  {
    title: "Si lo Crees, lo Creas",
    author: "Brian Tracy",
    pdf: "https://drive.google.com/file/d/1CDhe5bKGI3fMcdTj95qJHZRNmqrZOSwU/view?usp=drive_link"
  },
  {
    title: "Donde tus sueños te lleven",
    author: "Javier Iriondo Narvaiza",
    pdf: "https://drive.google.com/file/d/1rIzVaRSa8mdwon-MTfhjEc9-7LQrrAWS/view?usp=drive_link"
  },
  {
    title: "El monje que vendio su ferrari",
    author: "Sharma, Robin S.",
    pdf: "https://drive.google.com/file/d/1mGXHH_EpvhEmUcryeCxHo45ePlaNDcKN/view?usp=drive_link"
  },
  {
    title: "El peligro de estar cuerda",
    author: "Rosa Montero",
    pdf: "https://drive.google.com/file/d/1vBVtQuBI5MoPIquekR3Vo4qSqmOWIlFG/view?usp=drive_link"
  },
  {
    title: "El poder de confiaar en ti",
    author: "Curro Carrete",
    pdf: "https://drive.google.com/file/d/1Y9baljg4RNrJ-tPk09pxWvZd2eUbm_JE/view?usp=drive_link"
  },
  {
    title: "El poder de las palabras",
    author: "Mariano Sigman",
    pdf: "https://drive.google.com/file/d/1oOtG_eEVcDGJhR4GuYI5DIPlc5g9aUa1/view?usp=drive_link"
  },
  {
    title: "Respira",
    author: "James nestor",
    pdf: "https://drive.google.com/file/d/14aJYsgAvQypqOoiZkzzKDLllh2HToT8m/view?usp=drive_link"
  },
  {
    title: "La vida te esta espeando",
    author: "Javier Iriondo",
    pdf: "https://drive.google.com/file/d/1KU9CLty_DClSQAi--1zgpkOGeHc9BLNS/view?usp=drive_link"
  },
  {
    title: "Limpieza, orden y felicidad",
    author: "Bego la Ordenatriz",
    pdf: "https://drive.google.com/file/d/1DDG5P9S4rT4ZYOOSDmBvbNgwHXPQYC1p/view?usp=drive_link"
  },
  {
    tittle: "Lo bueno de tener un mal dia",
    author: "Anabel Gonzales",
    pdf: "https://drive.google.com/file/d/1rosMOgVQe3qd1SWI9qrkj9XDF7GB_I4P/view?usp=drive_link"
  },
  {
    title: "Como hacer que te pasen cosas buenas",
    author: "Marian Rojas",
    pdf: "https://drive.google.com/file/d/1r5RgwcFYDzuYnOdphX-NqOJ32FiM6orA/view?usp=drive_link"
  },
  {
    title: "Encuentra tu persona vitamina",
    author: "Marian rojas",
    pdf: "https://drive.google.com/file/d/1oI3r-4oPAQnIkBmKwa6XUxlUOMNqmkCF/view?usp=drive_link"
  },
  {
    title: "(AUDIO-LIBRO) Sapiens. De animales a dioses",
    author: "Yuval Noah",
    audio: "https://drive.google.com/file/d/1BdJqXE5K-5UbWjluhZY1ouLO9D9KSATW/view?usp=drive_link"
  },
  {
    title: "(AUDIO-LIBRO) Habitos Atomicos",
    author: "James Clear",
    audio: "https://drive.google.com/file/d/1NjkiCMBRjyQEsd2E5ml0hgO2wpK4-D1w/view?usp=drive_link"
  },
  {
    title: "(AUDIO-LIBRO) El sutil arte de que te importe un carajo",
    author: "Mark Manson",
    audio: "https://drive.google.com/file/d/17-FXxmwHOt2A9O2wAKNdg4P91zcA7pcr/view?usp=drive_link"
  },
  {
    title: "(AUDIO-LIBRO) El alquimista",
    author: "Paulo Coelho",
    audio: "https://drive.google.com/file/d/1SSzRXyPq9Y7fsUYT7P6gWxRmaBPNrNvC/view?usp=drive_link"
  },
  {
    title: "(AUDIO-LIBRO) Piense y hagase rico",
    author: "Napoleon Hill",
    audio: "https://drive.google.com/file/d/1DPqNIv_r099l22KaO-ycdlBhRDE7Zzgj/view?usp=drive_link"
  },
  {
    title: "(AUDIO-LIBRO) Tus zonas erroneas",
    author: "Wayne",
    audio: "https://drive.google.com/file/d/1ntvaNgwQxuktBROnxjqyS8BboM4zkCXY/view?usp=drive_link"
  },
  {
    title: "(AUDIO-LIBRO) El club de las 5 de la mañana",
    author: "Robin Sharma",
    audio: "https://drive.google.com/file/d/19-1DyUITpcJ5vyHzRd7iNiipG14U2ybj/view?usp=drive_link"
  },
  {
    title:  "(AUDIO-LIBRO) El hombre en busca del sentido",
    author: "Viktor Frank",
    audio: "https://drive.google.com/file/d/1rvLLq_koPzOqFU7N3FFyR_MLbh8vFIrc/view?usp=drive_link"
  },
  {
    title: "(AUDIO-LIBRO) Pequeño cerdo capitalista",
    author: "Sofia Maciasl",
    audio: "https://drive.google.com/file/d/13-AbYb5boLXPKeP2onMM0DCI1OrtCx50/view?usp=drive_link"
  },
  {
    title: "(AUDIO-LIBRO) Como ganar amigos e influir",
    author: "Dale Carnegie",
    audio: "https://drive.google.com/file/d/1hP9UPdqi-mTtns0bgCl_97X1kuhcjecY/view?usp=drive_link"
  }
  ];
