export default [
  {
    path: '/',
    name: 'session',
    component: require('./components/SessionView'),
  },
  {
    path: '*',
    redirect: '/',
  },
];
