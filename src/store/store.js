import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        teams: [{
                id: 0,
                country: 'France',
                img: 'http://img.fifa.com/mm/photo/tournament/competition/02/91/31/21/2913121_xbig-lnd.jpg',
                flag: 'franc',
                coach: 'Didier Deschamps',
                continent: 'Europe',
                players: [{
                        name: 'player 1',
                        position: 'position'
                    },
                    {
                        name: 'player 2',
                        position: 'position'
                    },
                    {
                        name: 'player 3',
                        position: 'position'
                    },
                    {
                        name: 'player 4',
                        position: 'position'
                    },
                    {
                        name: 'player 5',
                        position: 'position'
                    },
                    {
                        name: 'player 6',
                        position: 'position'
                    }, {
                        name: 'player 6',
                        position: 'position'
                    },
                    {
                        name: 'player 8',
                        position: 'position'
                    }
                ]
            },
            {
                id: 1,
                country: 'Belgium',
                img: 'http://www.sudinfo.be/sites/default/files/dpistyles_v2/ena_sp_16_9_illustration_principale/2017/09/03/node_10926/35498/public/2017/09/03/B9713064692Z.1_20170903223542_000+GIR9N88RJ.2-0.jpg?itok=rzfuwecK',
                flag: 'belgi',
                coach: 'Robetro Martinez',
                continent: 'Europe',
                players: [{
                        name: 'player 1',
                        position: 'position'
                    },
                    {
                        name: 'player 2',
                        position: 'position'
                    },
                    {
                        name: 'player 3',
                        position: 'position'
                    },
                    {
                        name: 'player 4',
                        position: 'position'
                    },
                    {
                        name: 'player 5',
                        position: 'position'
                    },
                    {
                        name: 'player 6',
                        position: 'position'
                    }, {
                        name: 'player 6',
                        position: 'position'
                    },
                    {
                        name: 'player 8',
                        position: 'position'
                    }
                ]
            },
            {
                id: 2,
                country: 'England',
                img: 'https://img.fifa.com/mm/photo/tournament/competition/02/91/05/73/2910573_large-lnd.jpg',
                flag: 'uk-ge',
                coach: 'Garet Southgate',
                continent: 'Europe',
                players: [{
                        name: 'player 1',
                        position: 'position'
                    },
                    {
                        name: 'player 2',
                        position: 'position'
                    },
                    {
                        name: 'player 3',
                        position: 'position'
                    },
                    {
                        name: 'player 4',
                        position: 'position'
                    },
                    {
                        name: 'player 5',
                        position: 'position'
                    },
                    {
                        name: 'player 6',
                        position: 'position'
                    }, {
                        name: 'player 6',
                        position: 'position'
                    },
                    {
                        name: 'player 8',
                        position: 'position'
                    }
                ]
            },
            {
                id: 3,
                country: 'Croatia',
                img: 'https://images.beinsports.com/nBEutup4RnW-MlPPvhaV7fb_5dU=/full-fit-in/1000x0/1831873-Croatia-national-team.jpg',
                flag: 'croat',
                coach: 'Zlatko Dalic',
                continent: 'Europe',
                players: [{
                        name: 'player 1',
                        position: 'position'
                    },
                    {
                        name: 'player 2',
                        position: 'position'
                    },
                    {
                        name: 'player 3',
                        position: 'position'
                    },
                    {
                        name: 'player 4',
                        position: 'position'
                    },
                    {
                        name: 'player 5',
                        position: 'position'
                    },
                    {
                        name: 'player 6',
                        position: 'position'
                    }, {
                        name: 'player 6',
                        position: 'position'
                    },
                    {
                        name: 'player 8',
                        position: 'position'
                    }
                ]
            }
        ]
    },
    actions: {

    },
    mutations: {

    },
    getters: {
        getTeamById: (state) => (id) => {
            return state.teams.find(team => team.id.toString() === id)
        },
        getTeams: (state) => state.teams
    }
})
export default store