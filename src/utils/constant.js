export const buttonsData = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Sports' },
    { id: 3, name: 'Music' },
    { id: 4, name: 'Computer Science' },
    { id: 5, name: 'Web Development' },
    { id: 6, name: 'AI' },
    { id: 7, name: 'Machine Learning' },
    { id: 8, name: 'Space' }
]; export const YTapi = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=" + import.meta.env.VITE_APP_YT_API

export const searchQueryAPI = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='
export const searchDataAPI = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&key=' + import.meta.env.VITE_APP_YT_API + '&q='
export const commentsData = [
    {
        name: 'Youtube',
        text: 'This is youtube comments',
        reply: []
    },
    {
        name: 'Youtube',
        text: 'This is youtube comments',
        reply: [
            {
                name: 'Youtube',
                text: 'This is youtube comments',
                reply: [
                    {
                        name: 'Youtube',
                        text: 'This is youtube comments',
                        reply: [
                            {
                                name: 'Youtube',
                                text: 'This is youtube comments',
                                reply: []

                            }
                        ]
                    },
                    {
                        name: 'Youtube',
                        text: 'This is youtube comments',
                        reply: [
                            {
                                name: 'Youtube',
                                text: 'This is youtube comments',
                                reply: []

                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Youtube',
        text: 'This is youtube comments',
        reply: [
            {
                name: 'Youtube',
                text: 'This is youtube comments',
                reply: [
                    {
                        name: 'Youtube',
                        text: 'This is youtube comments',
                        reply: [
                            {
                                name: 'Youtube',
                                text: 'This is youtube comments',
                                reply: []

                            }
                        ]
                    }, {
                        name: 'Youtube',
                        text: 'This is youtube comments',
                        reply: [
                            {
                                name: 'Youtube',
                                text: 'This is youtube comments',
                                reply: []

                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Youtube',
        text: 'This is youtube comments',
        reply: [
            {
                name: 'Youtube',
                text: 'This is youtube comments',
                reply: [
                    {
                        name: 'Youtube',
                        text: 'This is youtube comments',
                        reply: [
                            {
                                name: 'Youtube',
                                text: 'This is youtube comments',
                                reply: []

                            }
                        ]
                    }, {
                        name: 'Youtube',
                        text: 'This is youtube comments',
                        reply: [
                            {
                                name: 'Youtube',
                                text: 'This is youtube comments',
                                reply: []

                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Youtube',
        text: 'This is youtube comments',
        reply: [
            {
                name: 'Youtube',
                text: 'This is youtube comments',
                reply: [
                    {
                        name: 'Youtube',
                        text: 'This is youtube comments',
                        reply: [
                            {
                                name: 'Youtube',
                                text: 'This is youtube comments',
                                reply: []

                            }
                        ]
                    }
                ]
            }
        ]
    }
]