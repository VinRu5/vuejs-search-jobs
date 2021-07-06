Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            jobs: [
                {
                    id: 1,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'NTT Data',
                    position: 'Web Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/28/2021',
                    logo: 'logo.jpg',
                    city: 'Cosenza',
                    contract: 'Full Time'
                },
                {
                    id: 3,
                    company: 'Fiat',
                    position: 'Operaio',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '6/04/2021',
                    logo: 'logo.jpg',
                    city: 'Milano',
                    contract: 'Part Time'
                },
                {
                    id: 4,
                    company: 'Vobis',
                    position: 'Sistemista',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/16/2021',
                    logo: 'logo.jpg',
                    city: 'Rimini',
                    contract: 'Part Time'
                },
                {
                    id: 5,
                    company: 'WebHeart',
                    position: 'Full-stack Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/20/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 6,
                    company: 'Sirio',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Full Time'
                }
            ],
            starred: [1, 2, 3],
            applied: [4, 5]

        },
        methods: {
            starredPost: function(job) {
                return this.starred.includes(job.id);
            },
            
            addStarred: function(job) {
                this.starred.push(job.id);
            },

            applaiedPost: function (job) {
                return this.applied.includes(job.id);
            },

            addApplaied: function(job) {
                this.applied.push(job.id);
            }
        }

    }
)