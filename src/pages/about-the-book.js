import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/JamesWBosleybook.png'
import Book2 from '../../static/books/Brad-2.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'brady-herren',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="About the Book | Brady Herren" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `My Favorite First Book`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: 'sailor-sermon',
                                content:
                                    `
                                    <p>
                                    Each new page starts a new subject with an entirely different animal and a mostly true story line. I have also included many 
                                    colorful illustrations that give the reader a preconditioned (subliminal) idea of the story line, thus helping the reader to 
                                    grasp and assimilate within their attention span and hopefully retain the information they are being exposed to.
                                    </p>
                                    `,
                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/my-favorite-first-book-brad-m-herren/1122373946?ean=9781504920483',
                                    amazon: 'https://www.amazon.com/Favorite-First-Book-Brad-Herren-ebook/dp/B092MB3D1S/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1620660853&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Favorite-First-Book-Brad-Herren/dp/1648953646/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1620660853&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/my-favorite-first-book-brad-m-herren/1122373946?ean=9781504920476',
                                    booksamillion: 'https://www.booksamillion.com/p/My-Favorite-First-Book/Brad-M-Herren/9781648953644?id=8158356429268',
                                }
                            }}
                        />

                        <BookInfo
                            data={{
                                title: `My Favorite Second Book`,
                                spanFirst: `Teenage Years`,
                                imgSrc: Book2,
                                id: 'sailor-sermon',
                                content:
                                    `
                                    <p>
                                    This is a sequel of My Favorite First Book. It is a collection of poems and stories that are based on real-life events that the author encountered 
                                    while growing up. Remember that old adage that says, "If a tree falls in the forest and no one is there, does it still make a sound?" It mimics how 
                                    the contributions of a struggling artist go unheard of until they surface long after his demise. Thanks to a conscientiously persistent publisher, 
                                    eighty years of wisdom-motivated writings now have a chance to be in the hands of receptive readers. Inspired by the author's mother, who really loves 
                                    reading books, these heartwarming stories about nature, life in the countryside, and animals will definitely give you nostalgic feeling.
                                    </p>
                                    `,
                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/my-favorite-second-book-brady-m-herren/1140523346?ean=9781648956416',
                                    amazon: 'https://www.amazon.com/My-Favorite-Second-Book-Teenage-ebook/dp/B09LTL1RB5/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1636992677&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/My-Favorite-Second-Book-Teenage/dp/1648956408/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1636992677&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/my-favorite-second-book-brady-m-herren/1140523346?ean=9781648956409',
                                    booksamillion: 'https://www.booksamillion.com/p/My-Favorite-Second-Book/Brady-M-Herren/9781648956409?id=8158356429268',
                                }
                            }}
                        />

                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;