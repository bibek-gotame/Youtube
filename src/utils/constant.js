export const buttonsData = ['All', 'Sports','Music','Computer Science', ' Web Development', 'A I', 'Machine Learning', 'Space']
export const YTapi = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=" + import.meta.env.VITE_APP_YT_API

export const searchQueryAPI = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='
export const searchDataAPI = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key='+ import.meta.env.VITE_APP_YT_API  + '&q='
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