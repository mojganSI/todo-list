let lists = [
  {
    id: 'de2d8f8d-9245-491b-a775-c58eaeb0db30',
    name: 'To do today',
    taskCount: function () {
      return this.tasks.length;
    },
    tasks: [
      {
        id: 'de2d8f8d-9245-491b-a775-c58eaeb0db41',
        name: 'Créer un repository sur github',
        done: false,
        dueDate: 'aujourd’hui',
        steps: '1 sur 2',
        description: '',
      },
      {
        id: 'de2d8f8d-9245-491b-a775-c58eaeb0db42',
        name: 'Créer un repository sur github',
        done: true,
        dueDate: '',
        steps: '',
        description: '',
      },
      {
        id: 'de2d8f8d-9245-491b-a775-c58eaeb0db43',
        name: 'Créer un repository sur github',
        done: false,
        dueDate: '',
        steps: '',
        description: '',
      },
      {
        id: 'de2d8f8d-9245-491b-a775-c58eaeb0db44',
        name: 'Créer un repository sur github',
        done: true,
        dueDate: '',
        steps: '',
        description: '',
      },
    ],
  },
  {
    id: 'de2d8f8d-9245-491b-a775-c58eaeb0db20',
    name: 'Projet tutoré',
    taskCount: function () {
      return this.tasks.length;
    },
    tasks: [],
  },
];

export const fetchData = () => {
  return lists;
};
