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
                    logo: 'brand-logo.jpg',
                    city: 'Roma',
                    contract: 'Full Time',
                    active: false
                },
                {
                    id: 2,
                    company: 'NT Data',
                    position: 'Web Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/28/2021',
                    logo: 'N-logo.jpg',
                    city: 'Cosenza',
                    contract: 'Full Time',
                    active: false
                },
                {
                    id: 3,
                    company: 'Fiat',
                    position: 'Operaio',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '6/04/2021',
                    logo: 'Logo-Fiat-2006.jpg',
                    city: 'Milano',
                    contract: 'Part Time',
                    active: false
                },
                {
                    id: 4,
                    company: 'Vobis',
                    position: 'Sistemista',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/16/2021',
                    logo: 'vobislogo.webp',
                    city: 'Rimini',
                    contract: 'Part Time',
                    active: false
                },
                {
                    id: 5,
                    company: 'WebHeart',
                    position: 'Full-stack Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/20/2021',
                    logo: 'heart-logo.png',
                    city: 'Roma',
                    contract: 'Full Time',
                    active: false
                },
                {
                    id: 6,
                    company: 'Sirio',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'siriologo.png',
                    city: 'Roma',
                    contract: 'Full Time',
                    active: false
                }
            ],
            starred: [1, 2, 3],
            applied: [4, 5],
            selectedFilter: 'all',
            optionsFilter: [
                {
                    text: 'Tutti',
                    value: 'all'
                },
                {
                    text: 'I miei Preferiti',
                    value: 'preferences'
                },
                {
                    text: 'Le mie Candidature',
                    value: 'applied'
                },
                {
                    text: 'Full Time',
                    value: 'Full Time'
                },
                {
                    text: 'Part Time',
                    value: 'Part Time'
                }
            ],
            view: true

        },
        methods: {
            urlImg: function(job) {
                return './img/' + job.logo;
            },

            starredPost: function(job) {
                return this.starred.includes(job.id);
            },
            
            addStarred: function(job) {
                this.starred.push(job.id);
            },

            deleteStarred: function(job) {
                if (this.starredPost(job)) {
                    let indexStarred = this.starred.indexOf(job.id);
                    
                    this.starred.splice(indexStarred, 1);
                }
            },

            applaiedPost: function (job) {
                return this.applied.includes(job.id);
            },

            addApplaied: function(job, index) {
                this.applied.push(job.id);

                this.modalTime(index);
            },

            modalTime: function(index) {
                setTimeout(() => {
                    this.jobs[index].active = !this.jobs[index].active;

                    setTimeout(() => {
                        this.jobs[index].active = !this.jobs[index].active;
                    }, 1000);
                    
                }, 1000);
            },

            viewFilter: function(index) {

                if (this.selectedFilter === this.optionsFilter[0].value) {
                    return true;
                };

                if (this.selectedFilter === this.optionsFilter[1].value) {
                 
                    if (this.starred.includes(this.jobs[index].id)) {
                        return true;
                    }
                };

                if (this.selectedFilter === this.optionsFilter[2].value) {

                    if (this.applied.includes(this.jobs[index].id)) {
                        return true;
                    }
                };

                if (this.selectedFilter === this.jobs[index].contract) {
                    return true;
                };

                return false;
            },
        }

    }
)