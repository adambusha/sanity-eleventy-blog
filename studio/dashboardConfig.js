export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6029e1efb3c4ac2502075bab',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ucxp39iq',
                  apiId: 'e80b652a-2373-4b0f-8fb0-fce73537cfbe'
                },
                {
                  buildHookId: '6029e1ef661334812ada0961',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-y158o6wh',
                  apiId: 'b54e94ba-bb9c-42ec-8601-6632fa93da2e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adambusha/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-y158o6wh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
