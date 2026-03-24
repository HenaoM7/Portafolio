import type { TechItem } from '@/types'

export const stack: TechItem[] = [
  // Data
  { name: 'Python', iconKey: 'SiPython', group: 'data' },
  { name: 'Pandas', iconKey: 'SiPandas', group: 'data' },
  { name: 'SQL', iconKey: 'SiPostgresql', group: 'data' },
  { name: 'Power BI', iconKey: 'CustomPowerBI', group: 'data' },
  { name: 'Jupyter', iconKey: 'SiJupyter', group: 'data' },
  { name: 'Excel', iconKey: 'CustomExcel', group: 'data' },
  { name: 'Matplotlib', iconKey: 'SiPlotly', group: 'data' },

  // DevOps
  { name: 'Git', iconKey: 'SiGit', group: 'devops' },
  { name: 'GitHub', iconKey: 'SiGithub', group: 'devops' },
  { name: 'Azure DevOps', iconKey: 'CustomAzureDevOps', group: 'devops' },
  { name: 'VS Code', iconKey: 'SiVscodium', group: 'devops' },

  // QA
  { name: 'Selenium', iconKey: 'SiSelenium', group: 'qa' },
  { name: 'Postman', iconKey: 'SiPostman', group: 'qa' },
  { name: 'Jira', iconKey: 'SiJira', group: 'qa' },
  { name: 'Serenity BDD', iconKey: 'SiTestinglibrary', group: 'qa' },
]
