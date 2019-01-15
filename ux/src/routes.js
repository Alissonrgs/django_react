

const routes = [
  {
    component: Dashboard,
    icon: 'dashboard',
    name: 'Dashboards',
    path: '/dashboard',
    routes: [
      {
        component: NessusDashboard,
        exact: false,
        icon: 'chart line',
        name: 'Análise Ativa',
        path: '/dashboard/nessus'
      },
      {
        component: VulndbDashboard,
        exact: false,
        icon: 'chart bar',
        name: 'Análise Passiva',
        path: '/dashboard/vulndb'
      }
    ]
  }
]