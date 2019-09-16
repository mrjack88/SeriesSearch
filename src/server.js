import { ServerStyleSheets, ThemeProvider } from "@material-ui/styles"
import express from "express"
import qs from "qs"
import React from "react"
import { renderToString } from "react-dom/server"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom"
import serialize from "serialize-javascript"
import App from "./containers/App"
import configureStore from "./store/configureStore"
import theme from "./theme"

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    const context = {}
    const sheets = new ServerStyleSheets()
    // Read the counter from the request, if provided
    const params = qs.parse(req.query)

    // Compile an initial state
    const preloadedState = { shows: { searchdata: [
      {
        score: 15.186897,
        show: {
          id: 32379,
          url: 'http://www.tvmaze.com/shows/32379/real-money',
          name: 'Real Money',
          type: 'Reality',
          language: 'English',
          genres: [
            'Family'
          ],
          status: 'Running',
          runtime: 60,
          premiered: '2018-04-08',
          officialSite: 'http://www.axs.tv/programs/real-money/',
          schedule: {
            time: '21:30',
            days: [
              'Sunday'
            ]
          },
          rating: {
            average: null
          },
          weight: 26,
          network: {
            id: 170,
            name: 'AXS TV',
            country: {
              name: 'United States',
              code: 'US',
              timezone: 'America/New_York'
            }
          },
          webChannel: null,
          externals: {
            tvrage: null,
            thetvdb: null,
            imdb: 'tt7439980'
          },
          image: null,
          summary: '<p><b>Real Money</b> following the daily lives of multi-platinum rock legend Eddie Money and his family. The series will include candid moments with Money as he deals with the struggles and joys of life at home with his wife, eight pets, and five wild and talented children. The series is as honest and open as it is heartfelt and hilarious, capturing every moment of the family\'s unique dynamic as they live, laugh, bicker, and rock under one roof.</p>',
          updated: 1567500890,
          _links: {
            self: {
              href: 'http://api.tvmaze.com/shows/32379'
            },
            previousepisode: {
              href: 'http://api.tvmaze.com/episodes/1709059'
            }
          }
        }
      },
      {
        score: 13.9991045,
        show: {
          id: 43141,
          url: 'http://www.tvmaze.com/shows/43141/tuff-money',
          name: 'Tuff Money',
          type: 'Scripted',
          language: 'Romanian',
          genres: [
            'Comedy'
          ],
          status: 'Running',
          runtime: null,
          premiered: null,
          officialSite: null,
          schedule: {
            time: '',
            days: []
          },
          rating: {
            average: null
          },
          weight: 0,
          network: null,
          webChannel: {
            id: 57,
            name: 'HBO Go CEE',
            country: null
          },
          externals: {
            tvrage: null,
            thetvdb: null,
            imdb: null
          },
          image: null,
          summary: '<p><b>Tuff Money</b> features two lovable losers joking about committing the "perfect crime." The series revolves around the events that unfold when the joke backfires and the pair is forced to actually commit the robbery, for which they are totally unprepared.</p>',
          updated: 1563992527,
          _links: {
            self: {
              href: 'http://api.tvmaze.com/shows/43141'
            }
          }
        }
      },
      {
        score: 13.803402,
        show: {
          id: 37995,
          url: 'http://www.tvmaze.com/shows/37995/blood-money',
          name: 'Blood Money',
          type: 'Reality',
          language: 'English',
          genres: [],
          status: 'Running',
          runtime: 60,
          premiered: '2018-07-30',
          officialSite: 'https://www.history.com/shows/blood-money',
          schedule: {
            time: '22:00',
            days: [
              'Monday'
            ]
          },
          rating: {
            average: null
          },
          weight: 0,
          network: {
            id: 53,
            name: 'History',
            country: {
              name: 'United States',
              code: 'US',
              timezone: 'America/New_York'
            }
          },
          webChannel: null,
          externals: {
            tvrage: null,
            thetvdb: null,
            imdb: null
          },
          image: {
            medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/162/406817.jpg',
            original: 'http://static.tvmaze.com/uploads/images/original_untouched/162/406817.jpg'
          },
          summary: '<p>America is at a crossroads. This country was built on the backs of industrious men and women who started their own businesses. And while family businesses have moved wealth and the value of hard work from one generation to the next, many fear that millennials of today don\'t have the kind of work ethic that will take their family business through this century.</p><p>Chris Parvin, a family estate planner, has seen it all. So he\'s headed out across this nation to help see if the kids of today have what it takes to take over the family business tomorrow. With money, promotions, and stakes in the company on the line, this is no game. Chris will help these business owners put their children to the test and see if they have what it takes to earn their family\'s Blood Money.</p>',
          updated: 1535727032,
          _links: {
            self: {
              href: 'http://api.tvmaze.com/shows/37995'
            },
            previousepisode: {
              href: 'http://api.tvmaze.com/episodes/1513819'
            }
          }
        }
      },
      {
        score: 13.798044,
        show: {
          id: 27323,
          url: 'http://www.tvmaze.com/shows/27323/money',
          name: 'Money',
          type: 'Documentary',
          language: 'English',
          genres: [],
          status: 'Ended',
          runtime: 60,
          premiered: '2011-11-29',
          officialSite: 'http://www.bbc.co.uk/programmes/b0183s0w',
          schedule: {
            time: '21:00',
            days: [
              'Tuesday'
            ]
          },
          rating: {
            average: null
          },
          weight: 0,
          network: {
            id: 37,
            name: 'BBC Two',
            country: {
              name: 'United Kingdom',
              code: 'GB',
              timezone: 'Europe/London'
            }
          },
          webChannel: null,
          externals: {
            tvrage: null,
            thetvdb: 254191,
            imdb: null
          },
          image: null,
          summary: '<p>The series takes a look at how money helps to make the world go around and how it affects different parts of everyday life.</p>',
          updated: 1505710807,
          _links: {
            self: {
              href: 'http://api.tvmaze.com/shows/27323'
            },
            previousepisode: {
              href: 'http://api.tvmaze.com/episodes/1147209'
            }
          }
        }
      },
      {
        score: 13.798044,
        show: {
          id: 32014,
          url: 'http://www.tvmaze.com/shows/32014/money',
          name: 'Money',
          type: 'Scripted',
          language: 'English',
          genres: [
            'Drama',
            'Thriller'
          ],
          status: 'Ended',
          runtime: 60,
          premiered: '2010-05-23',
          officialSite: 'http://www.bbc.co.uk/programmes/b00shgb3',
          schedule: {
            time: '21:00',
            days: [
              'Sunday'
            ]
          },
          rating: {
            average: null
          },
          weight: 0,
          network: {
            id: 37,
            name: 'BBC Two',
            country: {
              name: 'United Kingdom',
              code: 'GB',
              timezone: 'Europe/London'
            }
          },
          webChannel: null,
          externals: {
            tvrage: null,
            thetvdb: 164961,
            imdb: 'tt1560581'
          },
          image: {
            medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/128/320148.jpg',
            original: 'http://static.tvmaze.com/uploads/images/original_untouched/128/320148.jpg'
          },
          summary: '<p>Adaptation of Martin Amis\'s cult \'80s novel about a dysfunctional director who goes to America to make his debut movie but ends up speeding towards self-destruction.</p>',
          updated: 1505731984,
          _links: {
            self: {
              href: 'http://api.tvmaze.com/shows/32014'
            },
            previousepisode: {
              href: 'http://api.tvmaze.com/episodes/1306435'
            }
          }
        }
      },
      {
        score: 12.649326,
        show: {
          id: 42730,
          url: 'http://www.tvmaze.com/shows/42730/money-school',
          name: 'Money School',
          type: 'Documentary',
          language: 'English',
          genres: [],
          status: 'In Development',
          runtime: null,
          premiered: null,
          officialSite: null,
          schedule: {
            time: '',
            days: []
          },
          rating: {
            average: null
          },
          weight: 0,
          network: {
            id: 313,
            name: 'LifeStyle',
            country: {
              name: 'Australia',
              code: 'AU',
              timezone: 'Australia/Sydney'
            }
          },
          webChannel: null,
          externals: {
            tvrage: null,
            thetvdb: null,
            imdb: null
          },
          image: null,
          summary: '<p><b>Money School</b> follows behind the scenes as Scott Pape launches a financial revolution that he hopes will change the nation – starting with kids in school. Scott has created a brand-new money education program for primary and secondary schools, based on his best-selling books, which he hopes to eventually roll out to every school in Australia – beginning with a number of pilot schools this year.</p>',
          updated: 1561364278,
          _links: {
            self: {
              href: 'http://api.tvmaze.com/shows/42730'
            }
          }
        }
      },
      {
        score: 12.001496,
        show: {
          id: 34584,
          url: 'http://www.tvmaze.com/shows/34584/dirty-money',
          name: 'Dirty Money',
          type: 'Documentary',
          language: 'English',
          genres: [
            'Crime'
          ],
          status: 'Ended',
          runtime: 60,
          premiered: '2018-01-26',
          officialSite: 'https://www.netflix.com/title/80118100',
          schedule: {
            time: '',
            days: [
              'Friday'
            ]
          },
          rating: {
            average: 7.5
          },
          weight: 53,
          network: null,
          webChannel: {
            id: 1,
            name: 'Netflix',
            country: null
          },
          externals: {
            tvrage: null,
            thetvdb: 339925,
            imdb: 'tt7421262'
          },
          image: {
            medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/143/359352.jpg',
            original: 'http://static.tvmaze.com/uploads/images/original_untouched/143/359352.jpg'
          },
          summary: '<p><b>Dirty Money</b> is a thrilling investigative series, which provides an up-close and personal view into untold stories of scandal and corruption in the world of business. Using first-hand accounts from perpetrators and their victims, combined with rarely-seen video footage, this addictive series keeps viewers on the edge of their seats.</p>',
          updated: 1561897093,
          _links: {
            self: {
              href: 'http://api.tvmaze.com/shows/34584'
            },
            previousepisode: {
              href: 'http://api.tvmaze.com/episodes/1397980'
            }
          }
        }
      },
      {
        score: 11.889116,
        show: {
          id: 33275,
          url: 'http://www.tvmaze.com/shows/33275/money-flower',
          name: 'Money Flower',
          type: 'Scripted',
          language: 'Korean',
          genres: [
            'Drama',
            'Romance',
            'Legal'
          ],
          status: 'Ended',
          runtime: 65,
          premiered: '2017-11-11',
          officialSite: 'http://www.imbc.com/broad/tv/drama/moneyflower/',
          schedule: {
            time: '20:45',
            days: [
              'Saturday'
            ]
          },
          rating: {
            average: null
          },
          weight: 24,
          network: {
            id: 166,
            name: 'MBC',
            country: {
              name: 'Korea, Republic of',
              code: 'KR',
              timezone: 'Asia/Seoul'
            }
          },
          webChannel: null,
          externals: {
            tvrage: null,
            thetvdb: 337470,
            imdb: 'tt7521802'
          },
          image: {
            medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/134/336231.jpg',
            original: 'http://static.tvmaze.com/uploads/images/original_untouched/134/336231.jpg'
          },
          summary: '<p>Kang Pil Joo grew up at an orphanage, but he now works as a managing director of a legal team at a corporation. He is acknowledged for his intelligence and his exemplary job performance. Some of those that work around him are jealous of him. Meanwhile, Na Mo Hyun is an environmental activist and a science teacher at a middle school. She is a good listener and laughs a lot. She dreams of a love driven by fate.</p>',
          updated: 1517684996,
          _links: {
            self: {
              href: 'http://api.tvmaze.com/shows/33275'
            },
            previousepisode: {
              href: 'http://api.tvmaze.com/episodes/1377583'
            }
          }
        }
      },
      {
        score: 11.602416,
        show: {
          id: 861,
          url: 'http://www.tvmaze.com/shows/861/dirty-sexy-money',
          name: 'Dirty Sexy Money',
          type: 'Scripted',
          language: 'English',
          genres: [
            'Drama'
          ],
          status: 'Ended',
          runtime: 60,
          premiered: '2007-09-26',
          officialSite: null,
          schedule: {
            time: '22:00',
            days: [
              'Wednesday'
            ]
          },
          rating: {
            average: 7
          },
          weight: 71,
          network: {
            id: 3,
            name: 'ABC',
            country: {
              name: 'United States',
              code: 'US',
              timezone: 'America/New_York'
            }
          },
          webChannel: null,
          externals: {
            tvrage: 15717,
            thetvdb: 80593,
            imdb: 'tt0960136'
          },
          image: {
            medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/6/15900.jpg',
            original: 'http://static.tvmaze.com/uploads/images/original_untouched/6/15900.jpg'
          },
          summary: '<p>The absurdly wealthy Darlings of New York City continues to mix with the wrong people and become embroiled in untenable situations. Fortunately for the preeminent family, idealistic lawyer Nick George is there to take care of their legal needs -- which often run into shady territory.</p>',
          updated: 1553177465,
          _links: {
            self: {
              href: 'http://api.tvmaze.com/shows/861'
            },
            previousepisode: {
              href: 'http://api.tvmaze.com/episodes/80195'
            }
          }
        }
      },
      {
        score: 11.079394,
        show: {
          id: 23530,
          url: 'http://www.tvmaze.com/shows/23530/save-money-good-health',
          name: 'Save Money: Good Health',
          type: 'Variety',
          language: 'English',
          genres: [],
          status: 'Running',
          runtime: 30,
          premiered: '2017-01-05',
          officialSite: null,
          schedule: {
            time: '19:30',
            days: [
              'Tuesday'
            ]
          },
          rating: {
            average: null
          },
          weight: 77,
          network: {
            id: 35,
            name: 'ITV',
            country: {
              name: 'United Kingdom',
              code: 'GB',
              timezone: 'Europe/London'
            }
          },
          webChannel: null,
          externals: {
            tvrage: null,
            thetvdb: null,
            imdb: null
          },
          image: {
            medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/207/518483.jpg',
            original: 'http://static.tvmaze.com/uploads/images/original_untouched/207/518483.jpg'
          },
          summary: '<p>Sian Williams and Ranj Singh kick off new series The Money Saving Good Health Show, which aims to help people stay healthy while also saving money.</p>',
          updated: 1567611393,
          _links: {
            self: {
              href: 'http://api.tvmaze.com/shows/23530'
            },
            previousepisode: {
              href: 'http://api.tvmaze.com/episodes/1709848'
            },
            nextepisode: {
              href: 'http://api.tvmaze.com/episodes/1709849'
            }
          }
        }
      }
    ], error: {}, isFetchingData: false } }

    // Create a new Redux store instance
    const store = configureStore(preloadedState)

    const markup = renderToString(
      sheets.collect(
        <Provider store={store}>
          <StaticRouter context={context} location={req.url}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </StaticRouter>
        </Provider>
      )
    )
    const css = sheets.toString()

    // Grab the initial state from our Redux store
    const finalState = store.getState()
    res.status(200).send(`
<!doctype html>
<html lang="">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta charSet='utf-8' />
  <title>Series Search</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500">
  ${
    assets.client.css
      ? `<link rel="stylesheet" href="${assets.client.css}">`
      : ""
  }
  ${css ? `<style id='jss-ssr'>${css}</style>` : ""}
    ${
      process.env.NODE_ENV === "production"
        ? `<script src="${assets.client.js}" defer></script>`
        : `<script src="${assets.client.js}" defer crossorigin></script>`
    }
</head>
<body>
  <div id="root">${markup}</div>
  <script>
    window.__PRELOADED_STATE__ = ${serialize(finalState)}
  </script>
</body>
</html>`)
  })

export default server
